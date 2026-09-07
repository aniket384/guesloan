import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { CONTACT } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Fair Practice Code | Guest Loan",
  description:
    "Guest Loan's Fair Practice Code covering transparent pricing, responsible short-term lending and ethical recovery practices.",
  alternates: { canonical: "https://guestloan.com/fair-practice" },
  openGraph: {
    type: "website",
    title: "Fair Practice Code | Guest Loan",
    description:
      "Guest Loan's Fair Practice Code covering transparent pricing, responsible short-term lending and ethical recovery practices.",
    url: "https://guestloan.com/fair-practice",
    locale: "en_IN",
    images: [
      {
        url: "https://guestloan.com/og.png",
        width: 1200,
        height: 630,
        alt: "Guest Loan \u2014 Fair Practice Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fair Practice Code | Guest Loan",
    description:
      "Guest Loan's Fair Practice Code covering transparent pricing, responsible short-term lending and ethical recovery practices.",
    images: ["https://guestloan.com/og.png"],
  },
  robots: "index, follow",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://guestloan.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Fair Practice Code",
      item: "https://guestloan.com/fair-practice",
    },
  ],
};

export default function FairPracticePage() {
  return (
    <LegalShell title="Fair Practice Code">
      <p>
        This Fair Practice Code sets out the standards Guest Loan holds itself to in
        dealing with borrowers. It is framed in line with the Reserve Bank of
        India&rsquo;s Fair Practices Code guidelines and Digital Lending Guidelines.
      </p>
      <div className="box amber">
        <p>
          <b>Note for the site owner:</b> this Code must be formally adopted by your board
          or governing body and aligned with the Fair Practice Code of your RBI-registered
          lending entity before publication.
        </p>
      </div>

      <h2>1. Our commitments to you</h2>
      <ul>
        <li>Deal with you fairly, honestly and without discrimination</li>
        <li>Communicate in clear language you can understand</li>
        <li>Disclose all terms, charges and taxes before you commit to anything</li>
        <li>Never impose a charge that has not been disclosed to you in writing</li>
        <li>Respect your privacy and protect your personal information</li>
        <li>Treat you with dignity and courtesy at every stage, including during recovery</li>
      </ul>

      <h2>2. Non-discrimination</h2>
      <p>
        We do not discriminate on the basis of caste, religion, gender, marital status,
        disability, sexual orientation or place of origin. Lending decisions are based
        solely on eligibility criteria, creditworthiness and repayment capacity.
      </p>

      <h2>3. Applications and their processing</h2>
      <ul>
        <li>All communications are in English or a language the borrower understands</li>
        <li>
          Application forms disclose all information material to the borrower&rsquo;s
          decision, including fees, taxes and charges
        </li>
        <li>
          We acknowledge receipt of every application and indicate the expected timeline
          for a decision
        </li>
        <li>If an application is rejected, we convey this to the borrower</li>
      </ul>

      <h2>4. Appraisal and sanction terms</h2>
      <p>Before disbursal, every borrower receives a written sanction letter setting out:</p>
      <ul>
        <li>The sanctioned loan amount and the exact tenure in days</li>
        <li>
          All charges, in rupee terms, and that they are calculated daily on the actual
          outstanding period
        </li>
        <li>The Annual Percentage Rate inclusive of all charges and taxes</li>
        <li>The processing fee, taxes and any other charges in rupee terms</li>
        <li>
          The total amount repayable and the exact due date, aligned to your salary
          credit date
        </li>
        <li>Early settlement terms</li>
        <li>
          The cooling-off period, during which the borrower may exit the loan by repaying
          the principal and proportionate charges without penalty
        </li>
      </ul>

      <h2>5. Transparent pricing</h2>
      <ul>
        <li>
          Charges accrue daily on the actual outstanding period and are communicated in
          rupee terms
        </li>
        <li>
          Goods and Services Tax is applied on fees and service charges at the rate
          prescribed by law, and is shown separately in rupee terms
        </li>
        <li>
          We disclose the Annual Percentage Rate openly in the sanction letter and Key
          Fact Statement, inclusive of all charges
        </li>
        <li>We do not levy charges on charges, or apply charges retrospectively</li>
        <li>
          Any charge arising from a missed payment is reasonable, proportionate,
          disclosed in advance, and never capitalised into the principal
        </li>
      </ul>

      <h2>6. Changes to terms and conditions</h2>
      <p>
        We give notice of any change in charges or other terms. Changes are applied
        prospectively only.
      </p>

      <h2>7. Responsible lending</h2>
      <p>
        We assess repayment capacity before sanctioning any loan and do not lend amounts
        we assess the borrower cannot reasonably repay on their salary date. We do not
        roll over or refinance a loan in a way that traps a borrower in repeated
        short-term borrowing.
      </p>

      <h2>8. Data access and recovery practices</h2>
      <p>We commit that our staff and any authorised recovery agent will:</p>
      <ul>
        <li>Contact borrowers only between 8:00 AM and 7:00 PM</li>
        <li>Identify themselves and provide authorisation on request</li>
        <li>Never use threats, intimidation, abusive language or physical force</li>
        <li>
          Never contact the borrower&rsquo;s employer, relatives or contacts to shame or
          pressure the borrower
        </li>
        <li>
          Never access, request, or attempt to access the borrower&rsquo;s phone
          contacts, call logs, photo gallery or files, at onboarding or at any later
          stage, in line with RBI&apos;s Digital Lending Guidelines
        </li>
        <li>Respect the borrower&rsquo;s privacy and dignity at all times</li>
      </ul>
      <p>
        Report any conduct contrary to this Code through our{" "}
        <a href="/grievance">Grievance Redressal</a> process.
      </p>

      <h2>9. Loan closure</h2>
      <p>
        On full repayment of all dues, we issue a No Objection Certificate and loan
        closure statement, and release any securities held, within 30 days.
      </p>

      <h2>10. Digital lending safeguards</h2>
      <ul>
        <li>
          All disbursals and repayments flow directly between the borrower&rsquo;s bank
          account and the regulated lending entity, with no pass-through to any third
          party
        </li>
        <li>We collect only the minimum data needed to assess and service the loan</li>
        <li>
          We do not access borrower phone contacts, call logs, media files or location
          without explicit, purpose-specific, one-time consent limited to onboarding
        </li>
        <li>
          Borrowers may withdraw consent and request deletion of data, subject to legal
          retention requirements
        </li>
        <li>A Key Fact Statement is provided before the loan agreement is executed</li>
      </ul>

      <h2>11. Confidentiality</h2>
      <p>
        Borrower information is treated as confidential and is not disclosed to any third
        party except as required by law, by regulators, to credit information companies,
        or with the borrower&rsquo;s explicit consent.
      </p>

      <h2>12. Grievance redressal</h2>
      <p>
        We maintain a formal grievance mechanism with a named officer and defined
        turnaround times. Full details are on our{" "}
        <a href="/grievance">Grievance Redressal</a> page.
      </p>

      <h2>13. Review of this Code</h2>
      <p>
        This Code is reviewed at least annually and updated to reflect changes in
        regulation and in our practices.
      </p>

      <div className="box">
        <p>
          <b>Questions about this Code?</b>
          <br />
          Email: <a href={`mailto:${CONTACT.supportEmail}`}>{CONTACT.supportEmail}</a>
          <br />
          Phone: <a href={`tel:${CONTACT.supportPhoneE164}`}>{CONTACT.supportPhoneDisplay}</a>
          <br />
          Hours: {CONTACT.hours}
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </LegalShell>
  );
}
