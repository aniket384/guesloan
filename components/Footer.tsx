import { FooterLogo } from "./Logo";

// The original site's legal-page footer's Product column omits "Eligibility"
// (present only on the homepage footer) — preserved here exactly as-is.
const HOME_PRODUCT_LINKS = [
  { href: "how", label: "How it works" },
  { href: "repayment", label: "Repayment" },
  { href: "charges", label: "Charges" },
  { href: "eligibility", label: "Eligibility" },
  { href: "documents", label: "Documents" },
];

const LEGAL_PRODUCT_LINKS = [
  { href: "how", label: "How it works" },
  { href: "repayment", label: "Repayment" },
  { href: "charges", label: "Charges" },
  { href: "documents", label: "Documents" },
];

export default function Footer({ isHome = false }: { isHome?: boolean }) {
  const productLinks = isHome ? HOME_PRODUCT_LINKS : LEGAL_PRODUCT_LINKS;
  const prefix = isHome ? "" : "/";

  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <FooterLogo />
            <p style={{ maxWidth: "36ch" }}>
              Short-term salary loans for salaried professionals across Delhi NCR.
              {isHome && " Same-day disbursal, repayment on your salary date."}
            </p>
          </div>
          <div>
            <h3>Product</h3>
            <ul>
              {productLinks.map((l) => (
                <li key={l.href}>
                  <a href={`${prefix}#${l.href}`}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/fair-practice">Fair Practice Code</a>
              </li>
              <li>
                <a href="/grievance">Grievance Redressal</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="tel:+911140000000">+91 11 4000 0000</a>
              </li>
              <li>
                <a href="mailto:support@guestloan.com">support@guestloan.com</a>
              </li>
              <li>Mon&ndash;Sun, 9 AM &ndash; 8 PM</li>
              <li>
                <a href={`${prefix}#apply`}>Apply Now</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fbot">
          {isHome && (
            <div className="warn">
              <b>Beware of fraud.</b> Guest Loan will never ask for an advance fee,
              OTP, PIN or password to process or release a loan. Always verify you
              are dealing with an official Guest Loan representative before sharing
              any document.
            </div>
          )}
          {isHome && (
            <p>
              Loans are subject to eligibility, verification, credit assessment and
              approval at the sole discretion of the lender. A processing fee
              applies, and Goods and Services Tax applies on fees and service
              charges at the rate prescribed by law. Charges accrue on a daily
              basis for the actual tenure. All charges, the total amount repayable
              and the Annual Percentage Rate are disclosed in your sanction letter
              and Key Fact Statement before you accept the loan. Same-day disbursal
              is subject to cut-off timings, completed verification and banking
              working days, and is not guaranteed. Please read your sanction
              letter carefully and borrow only what you can repay on your due
              date.
            </p>
          )}
          <p>
            &copy; 2026 Guest Loan. All rights reserved. Serving Delhi, Gurugram,
            Noida, Greater Noida, Ghaziabad and Faridabad.
          </p>
        </div>
      </div>
    </footer>
  );
}
