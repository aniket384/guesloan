import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import ScrollReveal from "@/components/ScrollReveal";
import ApplyForm from "@/components/ApplyForm";
import { ShieldIcon } from "@/components/Logo";
import { CONTACT, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Guest Loan | Salary Loans \u20b910,000\u2013\u20b91,20,000 in Delhi NCR",
  description:
    "Salary loans of \u20b910,000 to \u20b91,20,000 for salaried professionals in Delhi NCR. Repay on your salary date, with same-day disbursal. Apply Fast, Get Faster.",
  alternates: { canonical: "https://guestloan.com/" },
  openGraph: {
    type: "website",
    title: "Guest Loan | Apply Fast, Get Faster \u2014 Same-Day Salary Loans in Delhi NCR",
    description:
      "Short-term salary loans from \u20b910,000 to \u20b91,20,000. Repay on your salary date, with same-day disbursal across Delhi NCR.",
    url: "https://guestloan.com/",
    locale: "en_IN",
    images: [
      {
        url: "https://guestloan.com/og.png",
        width: 1200,
        height: 630,
        alt: "Guest Loan \u2014 salary loans \u20b910,000 to \u20b91,20,000, same-day disbursal across Delhi NCR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guest Loan | Apply Fast, Get Faster",
    description:
      "Short-term salary loans from \u20b910,000 to \u20b91,20,000. Repay on your salary date, with same-day disbursal across Delhi NCR.",
    images: ["https://guestloan.com/og.png"],
  },
  robots: "index, follow",
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Guest Loan",
  slogan: "Apply Fast, Get Faster",
  description:
    "Short-term salary loans from INR 10,000 to INR 1,20,000 with tenure of 1 to 90 days, repayment on your salary date and same-day disbursal for salaried professionals across Delhi NCR.",
  url: "https://guestloan.com/",
  logo: "https://guestloan.com/logo-512.png",
  image: "https://guestloan.com/og.png",
  // Both published lines: general support and the Grievance Officer's direct
  // number. Kept in the same order they appear in the Contact section.
  telephone: [CONTACT.supportPhoneE164, CONTACT.grievancePhoneE164],
  email: CONTACT.supportEmail,
  openingHours: "Mo-Su 09:00-20:00",
  // areaServed carries the Delhi NCR service region; address is the registered
  // office itself, so it takes the actual locality and its state.
  areaServed: SITE.cities.map((name) => ({ "@type": "City", name })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "LoanOrCredit",
      name: "Short-Term Salary Loan",
      description:
        "Short-term loan for salaried professionals in Delhi NCR, repaid in a single settlement aligned to the borrower's salary credit date.",
      amount: { "@type": "MonetaryAmount", currency: "INR", minValue: 10000, maxValue: 120000 },
      loanTerm: { "@type": "QuantitativeValue", minValue: 1, maxValue: 90, unitCode: "DAY" },
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Guest Loan",
  url: "https://guestloan.com/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much can I borrow and for how long?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guest Loan offers short-term loans from \u20b910,000 up to \u20b91,20,000, with a tenure of 1 to 90 days. The exact amount you qualify for depends on your net monthly salary, employment history, existing obligations and the outcome of verification.",
      },
    },
    {
      "@type": "Question",
      name: "When do I have to repay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your repayment date is set to your next salary credit date, so the amount falls due when your salary reaches your account. You tell us your salary date during the verification call, and the exact due date and amount are stated in your sanction letter. Repayment is a single settlement, not a series of EMIs.",
      },
    },
    {
      "@type": "Question",
      name: "What if my salary is delayed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact our support team before the due date. If your employer has shifted your salary cycle or a credit is delayed, tell us as early as possible so we can discuss the options available to you rather than letting a payment fail.",
      },
    },
    {
      "@type": "Question",
      name: "Is disbursal really same-day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Where your application is submitted before the daily cut-off, verification is completed and the loan is sanctioned, the amount is credited the same working day. Timing depends on how quickly you provide documents, on your bank\u2019s processing, and on working days and holidays. It is not guaranteed in every case.",
      },
    },
    {
      "@type": "Question",
      name: "Who is eligible to apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Salaried professionals aged 21 to 58, living and working within Delhi NCR, with a net take-home salary of at least \u20b950,000 credited to a bank account for the last six months. We serve Delhi, Gurugram, Noida, Greater Noida, Ghaziabad and Faridabad.",
      },
    },
    {
      "@type": "Question",
      name: "What will this cost me in total?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your sanction letter and Key Fact Statement set out the total rupee amount repayable, every individual charge, applicable taxes and the Annual Percentage Rate \u2014 all before you accept the loan. You are charged only for the number of days the loan is actually outstanding. Read these documents carefully and ask us about anything that is not clear before you sign.",
      },
    },
    {
      "@type": "Question",
      name: "Can I settle early?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, at any time and with no early closure penalty. You are charged only for the number of days the loan was actually outstanding. Contact customer support for a closure statement before making the payment.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to upload documents on this website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This form collects only your name, mobile number, email, city, loan amount, salary date and address. Documents are collected later through a verified channel after our team contacts you directly. Never share Aadhaar, PAN or bank statements through an unverified link or with anyone contacting you from an unofficial number.",
      },
    },
    {
      "@type": "Question",
      name: "Will applying affect my credit score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Submitting this enquiry form does not affect your credit score. If a formal credit bureau check becomes necessary later in the process, we will tell you before it happens.",
      },
    },
    {
      "@type": "Question",
      name: "How do I raise a complaint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Write to our Grievance Redressal Officer using the details on our Grievance Redressal page. We acknowledge complaints within 48 hours and aim to resolve them within 30 days.",
      },
    },
  ],
};

const checkSvg = (
  <svg viewBox="0 0 24 24">
    <path d="M4 12l6 6L20 6" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to main content
      </a>

      <Topbar />
      <Nav isHome />

      <main id="main">
        <header className="hero">
          <div className="wrap">
            <div className="hgrid">
              <div>
                <div className="badge">
                  <span className="dot"></span>Same-day disbursal &middot; Delhi NCR
                </div>
                <h1>
                  Borrow today. Repay on <span>your salary date</span>.
                </h1>
                <p className="tagline">Apply Fast, Get Faster.</p>
                <p className="hsub">
                  Short-term loans from &#8377;10,000 to &#8377;1,20,000 for salaried
                  professionals across Delhi NCR. Your repayment is timed to land when
                  your salary does.
                </p>
                <div className="hcta">
                  <a className="btn b1" href="#apply">
                    Apply now
                  </a>
                  <a className="btn b2" href="#how">
                    See how it works
                  </a>
                </div>
                <p className="hnote">
                  Takes 2 minutes &middot; Enquiring does not affect your credit score
                </p>
              </div>
              <div className="hcard">
                <div className="t">Loan Snapshot</div>
                <h2>What you can borrow</h2>
                <div className="amt">
                  <div className="r">&#8377;10,000 &ndash; &#8377;1,20,000</div>
                  <div className="l">Loan amount range</div>
                </div>
                <div className="qlist">
                  <div className="qi">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <b>Repay on your salary date</b>
                      <p>One settlement, timed to your salary credit</p>
                    </div>
                  </div>
                  <div className="qi">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <b>Tenure 1 to 90 days</b>
                      <p>Short-term borrowing, nothing long-running</p>
                    </div>
                  </div>
                  <div className="qi">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <b>Same-day disbursal</b>
                      <p>Approved before cut-off, credited the same working day</p>
                    </div>
                  </div>
                  <div className="qi">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <b>Minimum income &#8377;50,000</b>
                      <p>Net monthly take-home salary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="trust">
          <div className="wrap">
            <div className="tg">
              <div className="ti">
                <div className="n">&#8377;10K&ndash;1.2L</div>
                <div className="l">Loan Range</div>
              </div>
              <div className="ti">
                <div className="n">1&ndash;90 Days</div>
                <div className="l">Tenure</div>
              </div>
              <div className="ti">
                <div className="n">Salary Date</div>
                <div className="l">Repayment</div>
              </div>
              <div className="ti">
                <div className="n">Same Day</div>
                <div className="l">Disbursal</div>
              </div>
            </div>
          </div>
        </div>

        <section className="alt">
          <div className="wrap">
            <div className="head ctr reveal">
              <span className="eyebrow">Trust</span>
              <h2>Built the way a lender should be</h2>
              <p className="lede">
                No stock photos, no manufactured urgency &mdash; just what we actually
                do, plainly stated.
              </p>
            </div>
            <div className="seal reveal">
              <div className="seal-art">
                <ShieldIcon />
              </div>
              <div>
                <div className="seal-badges">
                  <div className="seal-badge">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <h3>Same-day disbursal</h3>
                      <p>Approved before cut-off, funded the same working day</p>
                    </div>
                  </div>
                  <div className="seal-badge">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <h3>Repay on your salary date</h3>
                      <p>One settlement, no mid-month due date to track</p>
                    </div>
                  </div>
                  <div className="seal-badge">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <h3>Nothing hidden</h3>
                      <p>Every charge is in your sanction letter before you sign</p>
                    </div>
                  </div>
                  <div className="seal-badge">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <h3>RBI-aligned practices</h3>
                      <p>Read our Fair Practice Code in full, not a summary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how">
          <div className="wrap">
            <div className="head ctr reveal">
              <span className="eyebrow">How it works</span>
              <h2>Apply fast. Get faster.</h2>
              <p className="lede">
                Three steps, no hidden stages. Apply before the daily cut-off and the
                money can reach you the same working day.
              </p>
            </div>
            <div className="g3">
              <div className="card reveal">
                <div className="step-head">
                  <span className="step-art">
                    <svg viewBox="0 0 56 70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <defs>
                        <linearGradient id="i1" x1="0" y1="0" x2="56" y2="70" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#66fcf1" />
                          <stop offset="1" stopColor="#45a29e" />
                        </linearGradient>
                      </defs>
                      <rect x="2" y="2" width="52" height="66" rx="7" fill="none" stroke="url(#i1)" strokeWidth="4" />
                      <line x1="14" y1="20" x2="42" y2="20" stroke="url(#i1)" strokeWidth="4" strokeLinecap="round" />
                      <line x1="14" y1="32" x2="42" y2="32" stroke="url(#i1)" strokeWidth="4" strokeLinecap="round" />
                      <line x1="14" y1="44" x2="30" y2="44" stroke="url(#i1)" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="42" cy="56" r="13" fill="#242e3a" stroke="url(#i1)" strokeWidth="4" />
                      <path d="M36,56 L40,60 L48,51" fill="none" stroke="url(#i1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="stepk">1</div>
                </div>
                <h3>Submit your details</h3>
                <p>
                  Share your name, mobile number, email and address. Two minutes, and
                  it does not affect your credit score.
                </p>
              </div>
              <div className="card reveal">
                <div className="step-head">
                  <span className="step-art">
                    <svg viewBox="0 0 62 66" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <defs>
                        <linearGradient id="i2" x1="0" y1="0" x2="62" y2="66" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#66fcf1" />
                          <stop offset="1" stopColor="#45a29e" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M8,4 C4,4 2,7 3,11 C6,30 22,50 44,54 C48,55 51,53 51,49 L51,38 C51,35 49,33 46,33 L38,31 C36,30 33,31 32,33 L28,39 C20,34 12,26 8,19 L14,15 C16,14 17,11 16,9 L14,1 C13,-1 11,-2 8,-1 Z"
                        transform="translate(2,10)"
                        fill="url(#i2)"
                      />
                      <path d="M40,4 C48,4 55,11 55,19" fill="none" stroke="url(#i2)" strokeWidth="3.5" strokeLinecap="round" />
                      <path d="M40,12 C44,12 48,16 48,20" fill="none" stroke="url(#i2)" strokeWidth="3.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div className="stepk">2</div>
                </div>
                <h3>Verification call</h3>
                <p>
                  Our team calls you back quickly to confirm details, note your salary
                  date, and guide you through submitting documents securely.
                </p>
              </div>
              <div className="card reveal">
                <div className="step-head">
                  <span className="step-art">
                    <svg viewBox="0 0 72 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <defs>
                        <linearGradient id="i3" x1="0" y1="0" x2="70" y2="60" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#66fcf1" />
                          <stop offset="1" stopColor="#45a29e" />
                        </linearGradient>
                      </defs>
                      <rect x="6" y="16" width="60" height="42" rx="8" fill="none" stroke="url(#i3)" strokeWidth="4" />
                      <path d="M6,30 L66,30" stroke="url(#i3)" strokeWidth="4" />
                      <circle cx="53" cy="42" r="6" fill="none" stroke="url(#i3)" strokeWidth="3.5" />
                      <path d="M0,10 L24,0 L18,14 L32,8 L12,24 L18,12 Z" fill="url(#i3)" />
                    </svg>
                  </span>
                  <div className="stepk">3</div>
                </div>
                <h3>Same-day disbursal</h3>
                <p>
                  Once verified and sanctioned, the amount is credited directly to your
                  salary account &mdash; the same working day where cut-off timings
                  allow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="repayment" className="alt">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">Repayment</span>
              <h2>Your due date is your salary date</h2>
              <p className="lede">
                There is no separate EMI schedule to track and no mid-month due date to
                plan around. You repay in a single settlement on the day your salary
                reaches your account.
              </p>
            </div>
            <div className="salary">
              <div className="tline reveal">
                <div className="tstep">
                  <span className="k">1</span>
                  <div>
                    <h3>You tell us your salary date</h3>
                    <p>Confirmed during the verification call and recorded on your file</p>
                  </div>
                </div>
                <div className="tstep">
                  <span className="k">2</span>
                  <div>
                    <h3>We set your due date to match</h3>
                    <p>Your sanction letter states the exact date and the exact amount due</p>
                  </div>
                </div>
                <div className="tstep">
                  <span className="k">3</span>
                  <div>
                    <h3>Salary credited, loan settled</h3>
                    <p>Collected by mandate from your salary account on that date</p>
                  </div>
                </div>
                <div className="tstep">
                  <span className="k">4</span>
                  <div>
                    <h3>Closed, with confirmation in writing</h3>
                    <p>You receive a closure statement and No Objection Certificate</p>
                  </div>
                </div>
              </div>
              <div className="reveal">
                <div className="g2" style={{ marginTop: 0, gridTemplateColumns: "1fr" }}>
                  <div className="row">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <h3>Settle early if you want to</h3>
                      <p>
                        Close your loan any time before the due date, with no early
                        closure penalty. You are charged only for the days the loan was
                        actually outstanding.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <h3>One amount, known in advance</h3>
                      <p>
                        The exact rupee amount due on your salary date is stated in your
                        sanction letter before you sign anything.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <h3>Talk to us before the date</h3>
                      <p>
                        If your salary is delayed or you expect difficulty, contact
                        support ahead of the due date so we can discuss options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="charges">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">Charges</span>
              <h2>What the loan costs</h2>
              <p className="lede">
                Every charge that applies to your loan is set out in rupee terms in
                your sanction letter, and again in the Key Fact Statement, before you
                accept anything.
              </p>
            </div>
            <div className="tbl reveal">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Particular</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Loan amount</td>
                    <td>&#8377;10,000 to &#8377;1,20,000</td>
                  </tr>
                  <tr>
                    <td>Tenure</td>
                    <td>1 day to 90 days</td>
                  </tr>
                  <tr>
                    <td>Repayment date</td>
                    <td>Your next salary credit date, or a date agreed with you within the 90-day window</td>
                  </tr>
                  <tr>
                    <td>Repayment mode</td>
                    <td>Single settlement, collected by electronic mandate from your salary account</td>
                  </tr>
                  <tr>
                    <td>Processing fee</td>
                    <td>A processing fee applies and is disclosed in your sanction letter before you sign</td>
                  </tr>
                  <tr>
                    <td>Taxes</td>
                    <td>Goods and Services Tax applies on fees and service charges at the rate prescribed by law</td>
                  </tr>
                  <tr>
                    <td>Total amount repayable</td>
                    <td>Stated as a single rupee figure in your sanction letter, together with the exact due date, before you accept the loan</td>
                  </tr>
                  <tr>
                    <td>Annual Percentage Rate</td>
                    <td>The APR, inclusive of all charges, is disclosed in your sanction letter and Key Fact Statement before you accept the loan</td>
                  </tr>
                  <tr>
                    <td>Early settlement</td>
                    <td>Permitted at any time with no early closure penalty. You are charged only for the days the loan was actually outstanding.</td>
                  </tr>
                  <tr>
                    <td>Statutory charges</td>
                    <td>Stamp duty and other charges as applicable under state law, borne by the borrower</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="reveal"
              style={{
                marginTop: 24,
                background: "rgba(245,185,66,.06)",
                border: "1px solid rgba(245,185,66,.3)",
                borderLeft: "3px solid var(--amber)",
                borderRadius: "0 var(--r) var(--r) 0",
                padding: "20px 22px",
              }}
            >
              <p style={{ fontWeight: 800, color: "var(--ink)", marginBottom: 8 }}>
                Know your total before you commit
              </p>
              <p style={{ fontSize: ".91rem", color: "#e8c877", margin: 0 }}>
                Before you accept a loan you will receive a written sanction letter and
                Key Fact Statement showing the loan amount, the exact due date on your
                salary cycle, the total rupee amount repayable, every individual
                charge, and the Annual Percentage Rate. Do not sign anything until you
                have read these and are comfortable with the total. If any figure is
                unclear, call us and ask.
              </p>
            </div>
          </div>
        </section>

        <section id="eligibility" className="alt">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">Eligibility</span>
              <h2>Who we lend to</h2>
              <p className="lede">Guest Loan serves salaried professionals living and working within Delhi NCR.</p>
            </div>
            <div className="g2">
              <div className="row reveal">
                <span className="chk">{checkSvg}</span>
                <div>
                  <h3>Age 21 to 58 years</h3>
                  <p>At least 21 at application and no more than 58 at loan maturity</p>
                </div>
              </div>
              <div className="row reveal">
                <span className="chk">{checkSvg}</span>
                <div>
                  <h3>Salaried employment</h3>
                  <p>Currently employed with salary credited to a bank account</p>
                </div>
              </div>
              <div className="row reveal">
                <span className="chk">{checkSvg}</span>
                <div>
                  <h3>Minimum monthly income</h3>
                  <p>Net take-home salary of at least &#8377;50,000 per month</p>
                </div>
              </div>
              <div className="row reveal">
                <span className="chk">{checkSvg}</span>
                <div>
                  <h3>Six months salary history</h3>
                  <p>Consistent salary credits in the same account for the last six months</p>
                </div>
              </div>
              <div className="row reveal">
                <span className="chk">{checkSvg}</span>
                <div>
                  <h3>Delhi NCR resident</h3>
                  <p>Both home and office address within the National Capital Region</p>
                </div>
              </div>
              <div className="row reveal">
                <span className="chk">{checkSvg}</span>
                <div>
                  <h3>Valid identity documents</h3>
                  <p>Aadhaar and PAN, along with proof of current employment</p>
                </div>
              </div>
            </div>
            <p
              style={{
                marginTop: 30,
                fontSize: ".8rem",
                fontWeight: 800,
                letterSpacing: ".13em",
                textTransform: "uppercase",
                color: "var(--gr2)",
              }}
            >
              Cities we serve
            </p>
            <div className="cities">
              <span className="city">Delhi</span>
              <span className="city">Gurugram</span>
              <span className="city">Noida</span>
              <span className="city">Greater Noida</span>
              <span className="city">Ghaziabad</span>
              <span className="city">Faridabad</span>
            </div>
            <div className="skyline-banner reveal">
              <svg
                viewBox="0 0 600 160"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                aria-label="Stylised Delhi NCR skyline"
              >
                <rect width="600" height="160" fill="#171d24" />
                <defs>
                  <linearGradient id="gsk" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#66fcf1" stopOpacity=".9" />
                    <stop offset="1" stopColor="#45a29e" stopOpacity=".55" />
                  </linearGradient>
                  <linearGradient id="gsk2" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#45a29e" stopOpacity=".6" />
                    <stop offset="1" stopColor="#232c37" stopOpacity=".4" />
                  </linearGradient>
                </defs>
                <g fill="url(#gsk2)">
                  <rect x="10" y="70" width="26" height="90" />
                  <rect x="50" y="50" width="20" height="110" />
                  <rect x="480" y="60" width="24" height="100" />
                  <rect x="520" y="40" width="18" height="120" />
                  <rect x="555" y="75" width="30" height="85" />
                </g>
                <g fill="url(#gsk)">
                  <rect x="90" y="90" width="30" height="70" />
                  <rect x="130" y="60" width="22" height="100" />
                  <rect x="160" y="100" width="26" height="60" />
                  <path d="M220,160 L220,70 Q220,50 245,50 Q270,50 270,70 L270,160 L256,160 L256,75 Q256,64 245,64 Q234,64 234,75 L234,160 Z" />
                  <rect x="292" y="80" width="24" height="80" />
                  <rect x="326" y="55" width="20" height="105" />
                  <rect x="356" y="95" width="26" height="65" />
                  <path d="M356,95 Q369,78 382,95 Z" />
                  <rect x="400" y="70" width="22" height="90" />
                  <rect x="432" y="95" width="28" height="65" />
                </g>
                <rect x="0" y="158" width="600" height="2" fill="#45a29e" opacity=".4" />
              </svg>
            </div>
          </div>
        </section>

        <section id="documents">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">Documentation</span>
              <h2>What you&rsquo;ll need at verification</h2>
              <p className="lede">
                You do not need to upload anything now. Keep these ready so
                verification moves fast &mdash; it is what makes same-day disbursal
                possible.
              </p>
            </div>
            <div className="docs">
              <div className="doc reveal">
                <span className="di">
                  <svg viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6M8 13h8M8 17h5" />
                  </svg>
                </span>
                Six months salary slips
              </div>
              <div className="doc reveal">
                <span className="di">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 6h18v12H3z" />
                    <path d="M3 10h18M7 15h4" />
                  </svg>
                </span>
                Six months bank statement
              </div>
              <div className="doc reveal">
                <span className="di">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="9" cy="11" r="2" />
                    <path d="M14 10h4M14 14h4" />
                  </svg>
                </span>
                Aadhaar card
              </div>
              <div className="doc reveal">
                <span className="di">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M7 10h5M7 14h10" />
                  </svg>
                </span>
                PAN card
              </div>
              <div className="doc reveal">
                <span className="di">
                  <svg viewBox="0 0 24 24">
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <circle cx="12" cy="9" r="2.4" />
                    <path d="M8 17c.8-2 7.2-2 8 0" />
                  </svg>
                </span>
                Company ID card
              </div>
              <div className="doc reveal">
                <span className="di">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 5h16v14H4z" />
                    <path d="M4 6l8 6 8-6" />
                  </svg>
                </span>
                Official email ID
              </div>
              <div className="doc reveal">
                <span className="di">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 5h16v14H4z" />
                    <path d="M4 6l8 6 8-6" />
                  </svg>
                </span>
                Personal email ID
              </div>
              <div className="doc reveal">
                <span className="di">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" />
                  </svg>
                </span>
                Home address proof
              </div>
              <div className="doc reveal">
                <span className="di">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 21V6a1 1 0 011-1h9a1 1 0 011 1v15M15 11h4a1 1 0 011 1v9" />
                  </svg>
                </span>
                Office address proof
              </div>
              <div className="doc reveal">
                <span className="di">
                  <svg viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6M9 15l2 2 4-4" />
                  </svg>
                </span>
                Offer or increment letter
              </div>
            </div>
            <div className="alert reveal">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v5M12 16h.01" />
              </svg>
              <div>
                <b>Never share documents through this website.</b> Guest Loan collects
                documents only through a verified channel after our team has contacted
                you directly. Do not send Aadhaar, PAN or bank statements to anyone
                claiming to represent us over social media or unofficial numbers.
              </div>
            </div>
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <div className="head ctr reveal">
              <span className="eyebrow">Why Guest Loan</span>
              <h2>Short-term lending, handled properly</h2>
              <p className="lede">
                We do one thing: fast, small-ticket salary-linked loans for salaried
                professionals in Delhi NCR.
              </p>
            </div>
            <div className="g3">
              <div className="card reveal">
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M13 2L4.5 13H11l-1 9 9-11.5H12.5z" />
                  </svg>
                </div>
                <h3>Same-day disbursal</h3>
                <p>
                  Apply before the daily cut-off, complete verification, and the money
                  can reach your account the same working day.
                </p>
              </div>
              <div className="card reveal">
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="17" rx="2" />
                    <path d="M3 9h18M8 2v4M16 2v4" />
                  </svg>
                </div>
                <h3>Repayment on your salary date</h3>
                <p>
                  No mid-month due date to plan around. One settlement, timed to land
                  when your salary does.
                </p>
              </div>
              <div className="card reveal">
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3>Nothing hidden</h3>
                <p>
                  Every charge is set out in rupee terms in your sanction letter before
                  you sign. We never ask for an advance payment to release a loan.
                </p>
              </div>
              <div className="card reveal">
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <h3>Pay only for days used</h3>
                <p>
                  Settle early and you are charged only for the days the loan was
                  actually outstanding, with no closure penalty.
                </p>
              </div>
              <div className="card reveal">
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <rect x="4" y="10" width="16" height="11" rx="2" />
                    <path d="M8 10V7a4 4 0 018 0v3" />
                  </svg>
                </div>
                <h3>Your data stays protected</h3>
                <p>
                  Information is encrypted in transit, used only to assess your
                  application, and never sold to third parties.
                </p>
              </div>
              <div className="card reveal">
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <circle cx="9" cy="8" r="3.2" />
                    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 11l2 2 4-4" />
                  </svg>
                </div>
                <h3>Open seven days a week</h3>
                <p>
                  Support every day from 9 AM to 8 PM, plus a named grievance officer
                  if anything goes wrong.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal-parent">
          <div className="wrap">
            <div className="head ctr reveal">
              <span className="eyebrow">Sound familiar?</span>
              <h2>Guests bring joy. Sometimes they bring a bigger bill too.</h2>
              <p className="lede">
                Extra meals, an extra night&apos;s stay, travel, gifts &mdash; hosting
                adds up fast. Guest Loan is built for exactly this kind of short-term,
                unplanned expense.
              </p>
            </div>
            <div className="problem-solution reveal">
              <div className="ps-art">
                <svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect width="380" height="320" fill="#171d24" />
                  <defs>
                    <linearGradient id="av" x1="0" y1="0" x2="1" y2="1">
                      <stop stopColor="#45a29e" />
                      <stop offset="1" stopColor="#232c37" />
                    </linearGradient>
                  </defs>
                  <g stroke="#3a4453" strokeWidth="2">
                    <line x1="190" y1="160" x2="95" y2="75" />
                    <line x1="190" y1="160" x2="285" y2="75" />
                    <line x1="190" y1="160" x2="60" y2="175" />
                    <line x1="190" y1="160" x2="320" y2="175" />
                    <line x1="190" y1="160" x2="190" y2="268" />
                  </g>
                  <circle cx="190" cy="160" r="46" fill="url(#av)" />
                  <circle cx="173" cy="152" r="4.5" fill="#0b0c10" />
                  <circle cx="207" cy="152" r="4.5" fill="#0b0c10" />
                  <path d="M163,146 L180,138" stroke="#0b0c10" strokeWidth="3" strokeLinecap="round" />
                  <path d="M217,146 L200,138" stroke="#0b0c10" strokeWidth="3" strokeLinecap="round" />
                  <path d="M172,180 Q190,170 208,180" fill="none" stroke="#0b0c10" strokeWidth="3" strokeLinecap="round" />
                  <path
                    d="M223,128 C227,133 227,140 222,143 C227,141 230,133 226,127 C224,124 222,125 223,128 Z"
                    fill="#66fcf1"
                  />
                  <g transform="translate(30,42)">
                    <rect width="100" height="34" rx="17" fill="#242e3a" stroke="#3a4453" />
                    <circle cx="20" cy="17" r="11" fill="#0e2422" />
                    <path
                      d="M14,10 v6 a3,3 0 006,0 v-6 M17,10 v14 M25,10 v14 M25,10 c3,0 3,4 0,4"
                      stroke="#66fcf1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <text x="38" y="22" fontFamily="Arial" fontSize="14" fontWeight="700" fill="#f2f5f6">
                      Dinner
                    </text>
                  </g>
                  <g transform="translate(222,42)">
                    <rect width="90" height="34" rx="17" fill="#242e3a" stroke="#3a4453" />
                    <circle cx="20" cy="17" r="11" fill="#0e2422" />
                    <path
                      d="M11,21 v-6 a2,2 0 012-2 h14 a2,2 0 012,2 v6 M11,21 h18 M13,15 h4 a2,2 0 012,2 v1"
                      stroke="#66fcf1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <text x="38" y="22" fontFamily="Arial" fontSize="14" fontWeight="700" fill="#f2f5f6">
                      Stay
                    </text>
                  </g>
                  <g transform="translate(0,158)">
                    <rect width="94" height="34" rx="17" fill="#242e3a" stroke="#3a4453" />
                    <circle cx="20" cy="17" r="11" fill="#0e2422" />
                    <path
                      d="M11,19 l1.5,-6 h15 l1.5,6 z M11,19 h18"
                      stroke="#66fcf1"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle cx="14.5" cy="21" r="1.6" fill="#66fcf1" />
                    <circle cx="25.5" cy="21" r="1.6" fill="#66fcf1" />
                    <text x="38" y="22" fontFamily="Arial" fontSize="14" fontWeight="700" fill="#f2f5f6">
                      Travel
                    </text>
                  </g>
                  <g transform="translate(258,158)">
                    <rect width="88" height="34" rx="17" fill="#242e3a" stroke="#3a4453" />
                    <circle cx="20" cy="17" r="11" fill="#0e2422" />
                    <path
                      d="M12,15 h16 v10 h-16 z M20,15 v10 M12,15 c0,-4 8,-4 8,0 c0,-4 8,-4 8,0"
                      stroke="#66fcf1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <text x="38" y="22" fontFamily="Arial" fontSize="14" fontWeight="700" fill="#f2f5f6">
                      Gifts
                    </text>
                  </g>
                  <g transform="translate(138,270)">
                    <rect width="104" height="34" rx="17" fill="#242e3a" stroke="#3a4453" />
                    <circle cx="20" cy="17" r="11" fill="#0e2422" />
                    <circle cx="16" cy="13" r="3.4" fill="none" stroke="#66fcf1" strokeWidth="1.5" />
                    <circle cx="24" cy="13" r="3.4" fill="none" stroke="#66fcf1" strokeWidth="1.5" />
                    <path d="M16,16 v6 M24,16 v6" stroke="#66fcf1" strokeWidth="1.5" />
                    <text x="38" y="22" fontFamily="Arial" fontSize="14" fontWeight="700" fill="#f2f5f6">
                      Party &amp; Fun
                    </text>
                  </g>
                </svg>
              </div>
              <div className="ps-solution">
                <div className="ps-badges">
                  <div className="ps-badge">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <h3>Funds the same working day</h3>
                      <p>Apply before the daily cut-off and complete verification</p>
                    </div>
                  </div>
                  <div className="ps-badge">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <h3>Timed to your salary, not a fixed date</h3>
                      <p>One settlement on the day your salary lands</p>
                    </div>
                  </div>
                  <div className="ps-badge">
                    <span className="chk">{checkSvg}</span>
                    <div>
                      <h3>No surprise charges</h3>
                      <p>Every rupee is in your sanction letter before you sign</p>
                    </div>
                  </div>
                </div>
                <a className="btn b1" href="#apply">
                  Apply now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="apply" className="alt">
          <div className="wrap">
            <div className="head ctr reveal">
              <span className="eyebrow">Apply now</span>
              <h2>Apply in 2 minutes</h2>
              <p className="lede">
                Share a few basic details and our team will call you back. No
                documents are needed at this stage.
              </p>
            </div>
            <div className="fwrap reveal">
              <ApplyForm />
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="wrap">
            <div className="head ctr reveal">
              <span className="eyebrow">FAQ</span>
              <h2>Frequently asked questions</h2>
            </div>
            <div className="faq">
              <details className="fq reveal">
                <summary>How much can I borrow and for how long?</summary>
                <div className="a">
                  Guest Loan offers short-term loans from &#8377;10,000 up to
                  &#8377;1,20,000, with a tenure of 1 to 90 days. The exact amount you
                  qualify for depends on your net monthly salary, employment history,
                  existing obligations and the outcome of verification.
                </div>
              </details>
              <details className="fq reveal">
                <summary>When do I have to repay?</summary>
                <div className="a">
                  Your repayment date is set to your next salary credit date, so the
                  amount falls due when your salary reaches your account. You tell us
                  your salary date during the verification call, and the exact due
                  date and amount are stated in your sanction letter. Repayment is a
                  single settlement, not a series of EMIs.
                </div>
              </details>
              <details className="fq reveal">
                <summary>What if my salary is delayed?</summary>
                <div className="a">
                  Contact our support team before the due date. If your employer has
                  shifted your salary cycle or a credit is delayed, tell us as early as
                  possible so we can discuss the options available to you rather than
                  letting a payment fail.
                </div>
              </details>
              <details className="fq reveal">
                <summary>Is disbursal really same-day?</summary>
                <div className="a">
                  Where your application is submitted before the daily cut-off,
                  verification is completed and the loan is sanctioned, the amount is
                  credited the same working day. Timing depends on how quickly you
                  provide documents, on your bank&rsquo;s processing, and on working
                  days and holidays. It is not guaranteed in every case.
                </div>
              </details>
              <details className="fq reveal">
                <summary>Who is eligible to apply?</summary>
                <div className="a">
                  Salaried professionals aged 21 to 58, living and working within
                  Delhi NCR, with a net take-home salary of at least &#8377;50,000
                  credited to a bank account for the last six months. We serve Delhi,
                  Gurugram, Noida, Greater Noida, Ghaziabad and Faridabad.
                </div>
              </details>
              <details className="fq reveal">
                <summary>What will this cost me in total?</summary>
                <div className="a">
                  Your sanction letter and Key Fact Statement set out the total rupee
                  amount repayable, every individual charge, applicable taxes and the
                  Annual Percentage Rate &mdash; all before you accept the loan. You
                  are charged only for the number of days the loan is actually
                  outstanding. Read these documents carefully and ask us about
                  anything that is not clear before you sign.
                </div>
              </details>
              <details className="fq reveal">
                <summary>Can I settle early?</summary>
                <div className="a">
                  Yes, at any time and with no early closure penalty. You are charged
                  only for the number of days the loan was actually outstanding.
                  Contact customer support for a closure statement before making the
                  payment.
                </div>
              </details>
              <details className="fq reveal">
                <summary>Do I need to upload documents on this website?</summary>
                <div className="a">
                  No. This form collects only your name, mobile number, email, city,
                  loan amount, salary date and address. Documents are collected later
                  through a verified channel after our team contacts you directly.
                  Never share Aadhaar, PAN or bank statements through an unverified
                  link or with anyone contacting you from an unofficial number.
                </div>
              </details>
              <details className="fq reveal">
                <summary>Will applying affect my credit score?</summary>
                <div className="a">
                  Submitting this enquiry form does not affect your credit score. If a
                  formal credit bureau check becomes necessary later in the process, we
                  will tell you before it happens.
                </div>
              </details>
              <details className="fq reveal">
                <summary>How do I raise a complaint?</summary>
                <div className="a">
                  Write to our Grievance Redressal Officer using the details on our{" "}
                  <a href="/grievance" style={{ color: "var(--gr2)", fontWeight: 600 }}>
                    Grievance Redressal
                  </a>{" "}
                  page. We acknowledge complaints within 48 hours and aim to resolve
                  them within 30 days.
                </div>
              </details>
            </div>
          </div>
        </section>

        <section id="contact" className="alt">
          <div className="wrap">
            <div className="head ctr reveal">
              <span className="eyebrow">Contact</span>
              <h2>Talk to our team</h2>
              <p className="lede">Questions before you apply? Reach us on any of the channels below, seven days a week.</p>
            </div>
            <div className="ct3">
              <div className="cc reveal">
                <div className="lbl">Call us</div>
                <p>
                  Customer support
                  <br />
                  <a href={`tel:${CONTACT.supportPhoneE164}`}>{CONTACT.supportPhoneDisplay}</a>
                  <br />
                  <br />
                  Grievance Redressal Officer
                  <br />
                  <a href={`tel:${CONTACT.grievancePhoneE164}`}>
                    {CONTACT.grievancePhoneDisplay}
                  </a>
                  <br />
                  <br />
                  Monday to Sunday
                  <br />
                  9:00 AM &ndash; 8:00 PM
                </p>
              </div>
              <div className="cc reveal">
                <div className="lbl">Email us</div>
                <p>
                  <a href={`mailto:${CONTACT.supportEmail}`}>{CONTACT.supportEmail}</a>
                  <br />
                  We reply within one working day
                </p>
              </div>
              <div className="cc reveal">
                <div className="lbl">Registered office</div>
                <p>
                  Gurugram, India
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer isHome />
      <StickyBar isHome />
      <ScrollReveal />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
