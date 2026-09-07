# Guest Loan

Short-term salary loans for salaried professionals in Delhi NCR. This is a
Next.js (App Router, TypeScript) conversion of the original static HTML/CSS
site — same design, same copy, same behavior, rebuilt as a proper Next.js
app. Verified with a real `next build` and live `next start` response
checks before delivery.

## Editing content before you hand this off

**Contact details** (phone numbers, email, hours) live in one place:
`lib/site-config.ts`. Change a number there and it updates everywhere —
topbar, nav, footer, the Contact section, and every legal page. There are
two numbers on purpose: `supportPhoneE164` is the general line shown
everywhere; `grievancePhoneE164` is the Grievance Redressal Officer's
direct line, shown only on the Privacy Policy's Grievance Officer box and
the Grievance page's Level 2 step.

**Everything else** — headlines, FAQ answers, eligibility copy, legal
text — is plain JSX text in each page file (`app/page.tsx` for the
homepage, `app/privacy/page.tsx`, etc.). Edit the text directly; no build
step or CMS involved.

**Still-bracketed placeholders** you'll want to fill in before a client
uses this for real: legal entity name, CIN, registered office address,
NBFC/lending-partner name, and the Grievance Officer's name. Search for
`[` across `app/` to find them all — see `PRODUCTION_CHECKLIST.md` for
the full list and why each one matters.

## Stack

- **Next.js 16** (App Router) + **React** + **TypeScript**
- Plain CSS (`app/globals.css`) — no Tailwind, no CSS-in-JS, matching the
  original site's single stylesheet
- Zero external runtime dependencies beyond `next`/`react`/`react-dom`

## Project structure

```
lib/site-config.ts     Contact details & product facts — edit here first

app/
  layout.tsx            Root layout: <html>/<body>, Google Font loading
  globals.css            All site styles
  page.tsx                Homepage
  icon.svg                Favicon
  privacy/page.tsx         Privacy Policy
  terms/page.tsx           Terms of Service
  fair-practice/page.tsx   Fair Practice Code
  grievance/page.tsx       Grievance Redressal

components/
  Logo.tsx               Shield+GL mark (nav, footer, icon-only variants)
  Nav.tsx                 Top nav + mobile menu (client component)
  Footer.tsx               Shared footer (home vs. legal-page variants)
  StickyBar.tsx             Mobile floating Apply Now / Call Us bar
  Topbar.tsx                 Homepage-only top info strip
  ScrollReveal.tsx           Reveal-on-scroll animation (client component)
  ApplyForm.tsx               The loan enquiry form: validation + webhook
  LegalShell.tsx               Shared chrome for the 4 legal pages

public/
  logo.svg, robots.txt, sitemap.xml, llms.txt   Served as-is at the root
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build     # production build
npm start          # serve the production build
```

## The application form

`components/ApplyForm.tsx` posts every submission to a Google Apps Script
Web App, which appends a row to a Google Sheet and emails
contact@guestloan.com. The webhook URL is baked in as a working default;
override it via `NEXT_PUBLIC_SHEETS_WEBHOOK_URL` in `.env.local` (see
`.env.local.example`) if the Apps Script is ever redeployed.

`apps-script-setup.gs` in the repo root is the Apps Script source — paste
it into a new Google Sheet's Apps Script editor if you need to redeploy.

## Deploying

This is a standard Next.js app — deploy it to Vercel by importing this
repo directly (Vercel auto-detects Next.js, no config needed). This is
separate from the plain-HTML version already live at
`guest-loan.vercel.app`; the two aren't linked, so pushing this repo
won't touch that deployment unless you explicitly point Vercel at it.

## How this was verified

`npm install`, `npm run build` (TypeScript compiled clean, all 7 routes
statically generated), then `npm start` with live `curl` checks
confirming the homepage title, the JSON-LD schema's phone number, and
that each page shows exactly the right phone number(s) — the general
support line everywhere, and the grievance-specific line only on the
Privacy Officer box and Grievance Level 2.
