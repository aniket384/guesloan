import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service | Guest Loan",
  description:
    "Terms governing use of the Guest Loan website and short-term salary loans of 1 to 90 days for salaried professionals in Delhi NCR.",
  alternates: { canonical: "https://guest-loan.vercel.app/terms" },
  openGraph: {
    type: "website",
    title: "Terms of Service | Guest Loan",
    description:
      "Terms governing use of the Guest Loan website and short-term salary loans of 1 to 90 days for salaried professionals in Delhi NCR.",
    url: "https://guest-loan.vercel.app/terms",
    locale: "en_IN",
    images: ["https://guest-loan.vercel.app/logo.svg"],
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Guest Loan",
    description:
      "Terms governing use of the Guest Loan website and short-term salary loans of 1 to 90 days for salaried professionals in Delhi NCR.",
    images: ["https://guest-loan.vercel.app/logo.svg"],
  },
  robots: "index, follow",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://guest-loan.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://guest-loan.vercel.app/terms" },
  ],
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Guest Loan
        website and any loan enquiry you submit through it. By using this website or
        submitting an enquiry, you agree to these Terms.
      </p>
      <div className="box amber">
        <p>
          <b>Note for the site owner:</b> these Terms are a professional starting draft and
          must be reviewed and completed by a qualified lawyer before this site goes live.
          Short-tenure lending of 1 to 90 days attracts specific regulatory scrutiny in
          India, so the lending licence details, pricing and APR disclosure, missed-payment
          terms and cooling-off provisions require legal sign-off.
        </p>
      </div>

      <h2>1. About us</h2>
      <p>
        This website is operated by [Legal entity name to be confirmed] (&ldquo;Guest
        Loan&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), having its registered office at
        [Registered office address to be confirmed], New Delhi, India, with Corporate
        Identity Number [CIN to be confirmed].
      </p>
      <p>
        Lending activities are carried out by [name of the RBI-registered NBFC or regulated
        lending partner, with Certificate of Registration number]. Guest Loan does not lend
        in its own name except through this regulated entity.
      </p>

      <h2>2. Eligibility to use this website</h2>
      <ul>
        <li>You are at least 21 years of age and no more than 58 years at loan maturity</li>
        <li>You are a citizen or lawful resident of India</li>
        <li>You reside and work within the Delhi National Capital Region</li>
        <li>
          You are in salaried employment with a net take-home salary of at least
          &#8377;50,000 per month credited to a bank account
        </li>
        <li>You are legally competent to contract under the Indian Contract Act, 1872</li>
      </ul>

      <h2>3. Nature of an enquiry</h2>
      <p>
        Submitting the enquiry form is an expression of interest only. It is{" "}
        <strong>not</strong> a loan application, and creates no obligation on us to offer
        you a loan or on you to accept one.
      </p>
      <p>No loan is sanctioned until:</p>
      <ol>
        <li>You have completed verification and submitted all required documents</li>
        <li>Credit assessment has been completed satisfactorily</li>
        <li>A written sanction letter has been issued to you</li>
        <li>You have accepted the sanction letter and executed the loan agreement</li>
      </ol>

      <h2>4. Information you provide</h2>
      <p>
        You agree that all information you provide is true, accurate, current and complete,
        including your salary date. Providing false, misleading or forged information may
        result in rejection of your application, recall of a sanctioned loan, reporting to
        credit bureaus, and legal action.
      </p>

      <h2>5. Loan terms</h2>
      <ul>
        <li>
          <b>Loan amount:</b> &#8377;10,000 to &#8377;1,20,000
        </li>
        <li>
          <b>Tenure:</b> 1 day to 90 days
        </li>
        <li>
          <b>Repayment date:</b> your next salary credit date, or a date agreed with you
          within the 90-day window
        </li>
        <li>
          <b>Charges:</b> accrue on a daily basis for the actual number of days the loan is
          outstanding, and are set out in rupee terms in your sanction letter
        </li>
        <li>
          <b>Processing fee:</b> a processing fee applies and is disclosed in your sanction
          letter before you sign
        </li>
        <li>
          <b>Taxes:</b> Goods and Services Tax applies on fees and service charges at the
          rate prescribed by law
        </li>
        <li>
          <b>Total amount repayable:</b> stated as a single rupee figure in your sanction
          letter, together with the exact due date
        </li>
        <li>
          <b>Annual Percentage Rate:</b> the APR, inclusive of all charges, is disclosed in
          your sanction letter and Key Fact Statement before you accept the loan
        </li>
      </ul>
      <p>
        The complete and binding terms applicable to your loan will be set out in your
        sanction letter and loan agreement. In the event of any inconsistency between this
        website and your loan agreement, <strong>the loan agreement prevails</strong>.
      </p>

      <h2>6. Disbursal</h2>
      <p>
        Where your application is submitted before the daily cut-off, verification is
        completed and the loan is sanctioned, disbursal is made the same working day.
        Same-day disbursal is subject to cut-off timings, completion of verification,
        banking working days and holidays, and your bank&apos;s own processing. It is a
        service target, <strong>not a guarantee</strong>.
      </p>

      <h2>7. Repayment</h2>
      <p>
        Your repayment is scheduled to fall on your next salary credit date, so the amount
        is due when your salary reaches your account. The exact due date is set out in your
        sanction letter and loan agreement, and is typically collected through an
        electronic mandate registered against your salary account. You must maintain
        sufficient balance on the due date.
      </p>
      <p>
        If a repayment is not made on the due date, the consequences that apply are set out
        in your loan agreement. Missed payments are reported to credit information
        companies and will adversely affect your credit score. If you anticipate
        difficulty, or if your salary date changes, contact our support team before the due
        date so we can discuss options with you.
      </p>

      <h2>8. Early settlement</h2>
      <p>
        You may settle your loan in full at any time before the due date with no early
        closure penalty. You are charged only for the number of days the loan was actually
        outstanding. Please contact customer support for a closure statement before making
        the payment.
      </p>

      <h2>9. Fraud prevention and data access</h2>
      <p>
        Guest Loan will <strong>never</strong> ask you for an advance fee, security
        deposit, OTP, PIN or password in order to process, approve or release a loan. We
        will never request access to your phone&apos;s contacts, call logs, photo gallery
        or files at any stage, including for recovery. This is prohibited under RBI&apos;s
        Digital Lending Guidelines. Report any such request to{" "}
        <a href="mailto:support@guestloan.com">support@guestloan.com</a> immediately.
      </p>

      <h2>10. Use of this website</h2>
      <ul>
        <li>Do not submit enquiries on behalf of another person without their authority</li>
        <li>Do not use automated systems to access, scrape or overload the website</li>
        <li>Do not attempt to gain unauthorised access to any part of the website or its systems</li>
        <li>Do not introduce malicious code or interfere with the website&apos;s operation</li>
      </ul>

      <h2>11. Intellectual property</h2>
      <p>
        All content on this website, including text, design, layout, graphics and the
        Guest Loan name and logo, is owned by or licensed to us and protected by applicable
        intellectual property law.
      </p>

      <h2>12. Disclaimer and limitation of liability</h2>
      <p>
        This website and its content are provided on an &ldquo;as is&rdquo; basis. To the
        maximum extent permitted by law, we are not liable for any indirect, incidental,
        special or consequential loss arising from your use of this website.
      </p>

      <h2>13. Indemnity</h2>
      <p>
        You agree to indemnify and hold us harmless against any claim, loss, damage or
        expense arising from your breach of these Terms or from any false or misleading
        information you provide.
      </p>

      <h2>14. Suspension and termination</h2>
      <p>
        We may suspend or discontinue access to this website, or decline to process any
        enquiry, at our discretion and without prior notice, including where we suspect
        fraud or misuse.
      </p>

      <h2>15. Governing law and jurisdiction</h2>
      <p>
        These Terms are governed by the laws of India. Subject to the loan agreement and
        any applicable arbitration provisions, the courts at New Delhi shall have exclusive
        jurisdiction.
      </p>

      <h2>16. Grievances</h2>
      <p>
        Please follow the process on our <a href="/grievance">Grievance Redressal</a> page.
        We acknowledge complaints within 48 hours and aim to resolve them within 30 days.
      </p>

      <h2>17. Changes to these Terms</h2>
      <p>
        We may amend these Terms at any time. Continued use of the website after an update
        constitutes acceptance of the amended Terms.
      </p>

      <h2>18. Contact</h2>
      <div className="box">
        <p>
          <b>Guest Loan &mdash; Customer Support</b>
          <br />
          Email: <a href="mailto:support@guestloan.com">support@guestloan.com</a>
          <br />
          Phone: +91 11 4000 0000
          <br />
          Address: [Registered office address to be confirmed], New Delhi, India
          <br />
          Hours: Monday to Sunday, 9:00 AM to 8:00 PM
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </LegalShell>
  );
}
