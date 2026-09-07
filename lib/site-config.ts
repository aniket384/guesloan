/**
 * Central place for the details that are most likely to change before
 * this site goes to a client: phone numbers, email addresses, and the
 * core product facts repeated across pages. Edit here and it propagates
 * everywhere it's used.
 */

export const CONTACT = {
  // General customer support line — shown in the topbar, nav, footer,
  // Contact section, and the "Customer Support" (Level 1) grievance step.
  supportPhoneE164: "+918570001634",
  supportPhoneDisplay: "+91 85700 01634",
  supportEmail: "support@guestloan.com",

  // Grievance Redressal Officer's direct line — shown on the Privacy
  // Policy's Grievance Officer box and the Grievance page's Level 2 step.
  grievancePhoneE164: "+918570001635",
  grievancePhoneDisplay: "+91 85700 01635",
  grievanceEmail: "contact@guestloan.com",

  hours: "Monday to Sunday, 9:00 AM to 8:00 PM",
  hoursShort: "Mon\u2013Sun, 9 AM \u2013 8 PM",
} as const;

export const SITE = {
  name: "Guest Loan",
  tagline: "Apply Fast, Get Faster",
  url: "https://guest-loan.vercel.app",
  loanMin: "\u20b910,000",
  loanMax: "\u20b91,20,000",
  tenure: "1 to 90 days",
  minIncome: "\u20b950,000",
  cities: ["Delhi", "Gurugram", "Noida", "Greater Noida", "Ghaziabad", "Faridabad"],
} as const;
