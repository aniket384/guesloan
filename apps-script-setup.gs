/**
 * GUEST LOAN — Enquiry form backend
 * ------------------------------------------------
 * What this does, each time someone submits the form on the website:
 *   1. Appends a new row to a "Leads" sheet in this spreadsheet.
 *   2. Emails the full details to contact@guestloan.com.
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
 *   9. Paste that URL into index.html, replacing the placeholder marked
 *      SHEETS_WEBHOOK_URL near the top of the page's <script> block
 *      (search for "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE"), then
 *      redeploy the site.
 *
 * Every submission after that will land as a new row in the "Leads" tab
 * and as an email to contact@guestloan.com.
 */

var NOTIFY_EMAIL = 'contact@guestloan.com';

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

    MailApp.sendEmail(NOTIFY_EMAIL, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
