# Pre-launch checklist

Tracked here rather than in the site itself — a live lending site
shouldn't publicly list its own unresolved compliance gaps. Nothing below
is resolved just by being written down; these are still open items to
close before real applications go through this site.

## Regulatory blockers — must be resolved before accepting real applications

- **Interest rate / fee / APR disclosure.** No rate, fee percentage, or
  APR figure is published anywhere on the site. RBI's Digital Lending
  Guidelines require this to be disclosed upfront — this is a hard
  requirement, not optional, before the site can accept real applications.
- **Missed-payment terms.** No charge for a missed or failed payment is
  currently shown. If your product levies one, publish it. If not, say so
  expressly in the loan agreement.
- **Lending licence.** Add the RBI-registered NBFC name and Certificate of
  Registration number, or name the regulated lending partner, in
  `app/terms/page.tsx` and `app/grievance/page.tsx`.
- **Short-tenure compliance.** 1–90 day lending falls under the Digital
  Lending Guidelines. Confirm with counsel that disclosure, the Key Fact
  Statement, and the cooling-off period all meet requirements.

## Identity placeholders — currently bracketed `[to be confirmed]` text

- Legal entity name, CIN, and registered office address
  (`app/terms/page.tsx`, `app/privacy/page.tsx`, homepage Contact section)
- Grievance Redressal Officer name and Nodal Officer details
  (`app/grievance/page.tsx`)
- Data retention period for enquiries that don't convert
  (`app/privacy/page.tsx`, Section 6)

## Contact details

Both phone numbers and both emails in `lib/site-config.ts` are real and
live — general support and the Grievance Officer's direct line are
already distinct, correctly wired throughout the site.

## Operational confirmations

- **Salary-date mandate:** confirm your mandate system can actually align
  collection to variable salary dates as advertised.
- **Same-day disbursal cut-off:** confirm and publish the actual
  operational cut-off time so the claim on the site is accurate.

## Content

- **Testimonials:** removed from the site entirely (they were placeholder
  quotes attributed to fictional people, not real customers). Add a
  section back with real, consented reviews once you have them.

## Already resolved

- Form storage: submissions post to a Google Sheet and email
  `contact@guestloan.com` automatically.
- Contact phone numbers and emails: both real, both live, correctly split
  between general support and the Grievance Officer.
- Fraud-prevention language, data-access commitments, and the four-level
  grievance escalation path are all in place and accurate.
