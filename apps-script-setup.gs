/**
 * GUEST LOAN — Enquiry form backend
 * ------------------------------------------------
 * What this does, each time someone submits the form on the website:
 *   1. Appends a new row to a "Leads" sheet in this spreadsheet.
 *   2. Optionally emails the full details to NOTIFY_EMAIL below. That is
 *      empty by default, so no email is sent until you set an address.
 *
 * SETUP (one time, about 5 minutes):
 *   1. Go to https://sheets.google.com and create a new blank spreadsheet.
 *      Name it something like "Guest Loan Enquiries".
 *   2. In the sheet, go to Extensions > Apps Script.
 *   3. Delete any starter code in the editor, and paste this whole file in its place.
 *   4. Click Deploy > New deployment.
 *   5. Click the gear icon next to "Select type" and choose "Web app".
 *   6. Set "Execute as" to "Me". Set "Who has access" to "Anyone".
 *   7. Click Deploy. The first time, Google will ask you to authorize the
 *      script to access your Sheets and send email — this is expected,
 *      since the script is running under your own account. Click through
 *      "Advanced" > "Go to (project name)" if you see an "unverified app"
 *      warning; that warning appears for all personal Apps Script projects.
 *   8. Copy the "Web app" URL shown after deployment (it ends in /exec).
 *   9. Put that URL into the site as NEXT_PUBLIC_SHEETS_WEBHOOK_URL in
 *      .env.local (see .env.local.example), and update the hardcoded
 *      fallback at the top of components/ApplyForm.tsx to match. Both
 *      need to agree, or the form posts to the retired endpoint whenever
 *      the env var is unset. Then redeploy the site.
 *
 * CHANGING THIS FILE LATER:
 *   This file is only a reference copy kept in the repo — editing it does
 *   nothing on its own. The running code lives in the Apps Script editor,
 *   so paste the new version in there and redeploy.
 *   To keep the same /exec URL, use Deploy > Manage deployments > (pencil
 *   icon) > Version: New version > Deploy. Choosing "New deployment"
 *   instead mints a *new* URL, which then has to be updated in both places
 *   listed in step 9.
 *
 * Every submission lands as a new row in the "Leads" tab. A notification
 * email is sent only if NOTIFY_EMAIL below is set to an address.
 */

// Address that receives a notification for each new enquiry.
// Leave this as '' to turn notification emails off entirely — leads still
// land in the "Leads" sheet either way, so nothing is lost by disabling it.
// Do not point this at a personal Gmail account: the script runs as whoever
// deployed it, so a personal address ends up both sending and receiving every
// lead, and the send counts against that account's 100/day MailApp quota.
var NOTIFY_EMAIL = '';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Leads');
    if (!sheet) {
      sheet = ss.insertSheet('Leads');
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Full Name', 'Mobile', 'Email', 'City',
        'Loan Amount', 'Salary Date', 'Address', 'Consent', 'Source'
      ]);
      sheet.getRange(1, 1, 1, 10).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      data.fullName || '',
      data.mobile || '',
      data.email || '',
      data.city || '',
      data.amount || '',
      data.salaryDate || '',
      data.address || '',
      data.consent ? 'Yes' : 'No',
      data.source || ''
    ]);

    var subject = 'New Guest Loan enquiry — ' + (data.fullName || 'Unknown');
    var body =
      'A new loan enquiry was submitted on the Guest Loan website.\n\n' +
      'Name: ' + (data.fullName || '-') + '\n' +
      'Mobile: ' + (data.mobile || '-') + '\n' +
      'Email: ' + (data.email || '-') + '\n' +
      'City: ' + (data.city || '-') + '\n' +
      'Loan amount requested: ' + (data.amount || '-') + '\n' +
      'Salary date: ' + (data.salaryDate || '-') + '\n' +
      'Address: ' + (data.address || '-') + '\n' +
      'Consent given: ' + (data.consent ? 'Yes' : 'No') + '\n' +
      'Submitted at: ' + new Date().toString() + '\n\n' +
      'This lead has also been added to the "Leads" tab of the spreadsheet.';

    // The row above is already committed, so a mail failure must not fail the
    // whole request. MailApp is capped at 100 emails/day on consumer accounts;
    // without this guard, hitting that quota would throw, land in the catch
    // below, and tell the applicant their submission failed even though the
    // lead was saved — prompting duplicate submissions or a lost enquiry.
    if (NOTIFY_EMAIL) {
      try {
        MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
      } catch (mailErr) {
        console.error('Lead saved, notification email failed: ' + mailErr);
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
