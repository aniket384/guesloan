# Pre-launch checklist

This used to be a visible dashed box in the site's footer. It's been moved
here — a live lending site shouldn't publicly list its own unresolved
compliance gaps, and this is genuinely better tracked as a private
engineering doc anyway. Nothing below has been resolved just by moving it;
these are still real, open items.

## Regulatory blockers — must be resolved before accepting real applications

- **Interest rate / fee / APR disclosure.** The site does not display a
  rate, fee percentage, or APR figure anywhere. RBI's Digital Lending
  Guidelines require this to be disclosed upfront. A published rate
  schedule is a hard requirement before this site can accept real
  applications — this is not optional, and the site should not go live
  without it.
- **Missed-payment terms.** No charge for a missed or failed payment is
  currently shown. If your product levies one, it must be published and
  disclosed. If it does not, say so expressly in the loan agreement.
- **Lending licence.** Add the RBI-registered NBFC name and Certificate of
  Registration number, or name the regulated lending partner, across
  terms.html-equivalent content (`app/terms/page.tsx`) and the Grievance
  page.
- **Short-tenure compliance.** 1–90 day lending falls squarely under the
  Digital Lending Guidelines. Confirm with counsel that your disclosure,
  Key Fact Statement, and cooling-off period meet the requirements.

## Identity placeholders — currently bracketed `[to be confirmed]` text on the live site

- Legal entity name, CIN, and registered office address
  (`app/terms/page.tsx`, `app/privacy/page.tsx`, homepage Contact section)
- Grievance Redressal Officer name and direct phone line
  (`app/grievance/page.tsx`)
- Nodal Officer name and entity details (`app/grievance/page.tsx`)
- Data retention period for enquiries that don't convert
  (`app/privacy/page.tsx`, Section 6)

## Contact details

- Phone number is still the placeholder `+91 11 4000 0000` everywhere
  (topbar, nav, footer, contact section, all legal pages). Replace with a
  live, monitored number before launch.
- Emails are real and live: `support@guestloan.com` (general),
  `contact@guestloan.com` (Grievance Officer contact).

## Operational confirmations

- **Salary-date mandate:** confirm your mandate system can actually align
  collection to variable salary dates as advertised.
- **Same-day disbursal cut-off:** confirm and publish the actual
  operational cut-off time so the claim on the site is accurate rather
  than aspirational.

## Content

- **Testimonials:** the previous "What our borrowers say" section (three
  quotes attributed to "Rahul S.", "Priya K.", "Amit M.") has been removed
  from the site entirely, along with the matching avatar initials in the
  Trust section — those were placeholder content, not real customers, and
  publishing them as if genuine would be misleading. Add the section back
  with real, consented reviews once you have them; there's no rush to
  replace it with anything in the meantime.

## Already resolved

- Form storage: submissions post to a Google Sheet and email
  `contact@guestloan.com` automatically (`components/ApplyForm.tsx` +
  `apps-script-setup.gs`).
- Contact emails: `support@guestloan.com` and `contact@guestloan.com` are
  both real and wired throughout.
- Fraud-prevention language, data-access commitments, and the four-level
  grievance escalation path are all in place and accurate.
