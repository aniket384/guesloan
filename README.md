# Guest Loan

Short-term salary loans for salaried professionals in Delhi NCR. This is a
Next.js (App Router, TypeScript) conversion of the original static HTML/CSS
site — same design, same copy, same behavior, rebuilt as a proper Next.js
app. Verified with a real `next build` and a live `next start` response
check before delivery (see "How this was verified" below).

## Stack

- **Next.js 16** (App Router) + **React** + **TypeScript**
- Plain CSS (`app/globals.css`) — no Tailwind, no CSS-in-JS, matching the
  original site's single stylesheet
- Zero external runtime dependencies beyond `next`/`react`/`react-dom`

## Project structure

```
app/
  layout.tsx          Root layout: <html>/<body>, Google Font loading
  globals.css          All site styles (merged from the original style.css
                        plus the homepage's inline hero styles)
  page.tsx              Homepage
  icon.svg              Favicon (Next.js file-based favicon convention)
  privacy/page.tsx       Privacy Policy
  terms/page.tsx         Terms of Service
  fair-practice/page.tsx Fair Practice Code
  grievance/page.tsx     Grievance Redressal

components/
  Logo.tsx              Shield+GL mark (nav, footer, and icon-only variants)
  Nav.tsx                Top nav + mobile menu (client component)
  Footer.tsx             Shared footer (home vs. legal-page variants)
  StickyBar.tsx          Mobile floating Apply Now / Call Us bar
  Topbar.tsx             Homepage-only top info strip
  ScrollReveal.tsx        Reveal-on-scroll animation (client component)
  ApplyForm.tsx           The loan enquiry form: validation + Sheets webhook
  LegalShell.tsx          Shared chrome for the 4 legal pages

public/
  logo.svg, robots.txt, sitemap.xml, llms.txt   Served as-is at the root
```

Nav, Footer, and StickyBar each take an `isHome` prop because the original
site's homepage and legal pages genuinely differ in small ways (the
homepage nav has 6 links vs. 4 on legal pages; the legal-page footer's
Product column is missing "Eligibility"; the homepage footer has an extra
fraud-warning block the legal pages don't). Those differences are
preserved exactly, not smoothed over.

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
it into a new Google Sheet's Apps Script editor if you need to redeploy
(steps are in the file's comments).

## Deploying

This is a standard Next.js app — deploy it to Vercel by importing this
repo directly (Vercel auto-detects Next.js, no config needed). Do not use
the old `deploy_to_vercel` static-file flow that shipped the plain HTML
version; that project and this one are separate deployments.

## How this was verified

Before delivery: `npm install`, `npm run build` (TypeScript compiled
clean, all 7 routes statically generated), then `npm start` with live
`curl` checks confirming the homepage title, all 3 JSON-LD blocks
(FinancialService, WebSite, FAQPage), every form field ID, the RBI
Ombudsman external link, canonical/OG tags on a legal page, and that
`robots.txt` / `sitemap.xml` / `llms.txt` / the favicon all serve
correctly from `public/`.

## Known gaps (unchanged from the original site)

These are business/legal facts, not code — see `PRODUCTION_CHECKLIST.md`
for the full list. In short: no published interest rate/APR yet (required
before real applications), legal entity name/CIN/registered office are
still placeholders, and the Grievance Officer isn't named yet.
