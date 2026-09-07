import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { CONTACT } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Guest Loan",
  description:
    "How Guest Loan collects, uses, stores and protects your personal information under the DPDP Act, 2023.",
  alternates: { canonical: "https://guestloan.com/privacy" },
  openGraph: {
    type: "website",
    title: "Privacy Policy | Guest Loan",
    description:
      "How Guest Loan collects, uses, stores and protects your personal information under the DPDP Act, 2023.",
    url: "https://guestloan.com/privacy",
    locale: "en_IN",
    images: [
      {
        url: "https://guestloan.com/og.png",
        width: 1200,
        height: 630,
        alt: "Guest Loan \u2014 Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Guest Loan",
    description:
      "How Guest Loan collects, uses, stores and protects your personal information under the DPDP Act, 2023.",
    images: ["https://guestloan.com/og.png"],
  },
  robots: "index, follow",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://guestloan.com/" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://guestloan.com/privacy" },
  ],
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <p>
        Guest Loan (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to
        protecting the privacy of every person who visits this website or applies for a loan
        through it. This policy explains what information we collect, why we collect it, how
        we use and protect it, and what rights you have over it.
      </p>
      <p>
        This policy is issued in accordance with the Information Technology Act, 2000, the
        Information Technology (Reasonable Security Practices and Procedures and Sensitive
        Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection
        Act, 2023 (&ldquo;DPDP Act&rdquo;).
      </p>
      <div className="box amber">
        <p>
          <b>Note for the site owner:</b> the legal entity name, registered office address,
          Grievance Officer details and data retention periods below must be reviewed and
          completed by your legal counsel before this site goes live. Placeholders are marked
          in square brackets.
        </p>
      </div>

      <h2>1. Information we collect</h2>
      <h3>1.1 Information you give us directly</h3>
      <p>When you complete the enquiry form on this website, we collect:</p>
      <ul>
        <li>Your full name</li>
        <li>Your mobile number</li>
        <li>Your email address</li>
        <li>Your city and residential address</li>
        <li>The loan amount you are seeking</li>
        <li>Your salary date, so we can align your repayment date</li>
        <li>Your consent to be contacted</li>
      </ul>
      <h3>1.2 Information collected during verification</h3>
      <p>
        If your enquiry proceeds, we will collect additional information through a separate,
        verified channel, which may include salary slips, bank statements, Aadhaar, PAN,
        employment proof and address proof.{" "}
        <strong>
          We never collect these documents through this website. We also never access your
          phone&apos;s call logs, contacts, or media files &mdash; this is prohibited under
          RBI&apos;s Digital Lending Guidelines and we do not request or accept such access
          under any circumstance.
        </strong>
      </p>
      <h3>1.3 Information collected automatically</h3>
      <p>
        Our servers and hosting provider may log technical information such as IP address,
        browser type, device type, referring page and time of visit. This is used for
        security, fraud prevention and to understand how the site is used.
      </p>

      <h2>2. Why we collect your information</h2>
      <ul>
        <li>To contact you about your loan enquiry</li>
        <li>To assess your eligibility and creditworthiness</li>
        <li>To verify your identity and prevent fraud</li>
        <li>To process, sanction, disburse and service your loan</li>
        <li>To set your repayment date to align with your salary credit date</li>
        <li>
          To comply with legal, regulatory and statutory obligations, including KYC and
          anti-money-laundering requirements
        </li>
        <li>To respond to your queries and complaints</li>
      </ul>
      <p>
        We do not use your data for any purpose beyond those listed above without obtaining
        your fresh consent.
      </p>

      <h2>3. Consent</h2>
      <p>
        By submitting the enquiry form, you consent to us contacting you by phone, SMS,
        WhatsApp and email regarding your enquiry, and to processing your data for the
        purposes set out in this policy. You may withdraw your consent at any time by writing
        to us at the address in Section 10.
      </p>

      <h2>4. Sharing your information</h2>
      <ul>
        <li>
          <b>Lending partners and regulated financial institutions</b> involved in
          sanctioning or funding your loan
        </li>
        <li>
          <b>Credit information companies</b> (such as CIBIL, Experian, Equifax and CRIF High
          Mark) as required by the Credit Information Companies (Regulation) Act, 2005
        </li>
        <li>
          <b>Verification and KYC service providers</b> engaged to confirm your identity and
          employment
        </li>
        <li>
          <b>Payment and collection service providers</b> to process disbursal and repayment
        </li>
        <li>
          <b>Regulatory, statutory and law enforcement authorities</b> where required by law
        </li>
      </ul>
      <p>
        <strong>
          We do not sell, rent or trade your personal information to third parties for
          marketing purposes.
        </strong>
      </p>

      <h2>5. How we protect your information</h2>
      <p>
        We apply reasonable security practices to protect your data, including encryption of
        data in transit, restricted access on a need-to-know basis, and internal controls
        over who may view application data. No method of transmission over the internet is
        completely secure, and while we take all reasonable steps, we cannot guarantee
        absolute security.
      </p>

      <h2>6. How long we keep your information</h2>
      <p>
        We retain your personal data only for as long as necessary to fulfil the purposes
        described in this policy, or for the period required by applicable law and
        regulatory guidance, whichever is longer. Enquiries that do not result in a loan are
        retained for [retention period to be confirmed] and then deleted or anonymised.
      </p>

      <h2>7. Your rights</h2>
      <p>Under the DPDP Act, 2023, you have the right to:</p>
      <ul>
        <li>Access a summary of the personal data we hold about you and how it is processed</li>
        <li>Request correction of inaccurate or incomplete data</li>
        <li>
          Request erasure of your data where it is no longer required and no legal
          obligation prevents deletion
        </li>
        <li>Withdraw consent previously given</li>
        <li>
          Nominate another person to exercise these rights on your behalf in the event of
          death or incapacity
        </li>
        <li>Register a grievance regarding the handling of your data</li>
      </ul>

      <h2>8. Cookies</h2>
      <p>
        This website uses only essential cookies and local storage required for the site to
        function. We do not currently use advertising or third-party tracking cookies.
      </p>

      <h2>9. Children</h2>
      <p>
        Our services are intended only for individuals aged 21 and above. We do not
        knowingly collect personal data from children.
      </p>

      <h2>10. Contact and grievances</h2>
      <div className="box">
        <p>
          <b>Grievance Redressal Officer</b>
          <br />
          Name: [To be confirmed]
          <br />
          Email: <a href={`mailto:${CONTACT.grievanceEmail}`}>{CONTACT.grievanceEmail}</a>
          <br />
          Phone: <a href={`tel:${CONTACT.grievancePhoneE164}`}>{CONTACT.grievancePhoneDisplay}</a>
          <br />
          Address: Gurugram, India
          <br />
          Hours: {CONTACT.hours}
        </p>
      </div>
      <p>
        We acknowledge every grievance within 48 hours and aim to resolve it within 30 days.
        Full escalation details are on our <a href="/grievance">Grievance Redressal</a> page.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The current version is always published
        on this page with the last updated date shown at the top.
      </p>

      <div className="box amber">
        <p>
          <b>Fraud warning:</b> Guest Loan will never ask for an advance fee, OTP, PIN or
          password to process or release a loan. If anyone contacts you claiming to
          represent Guest Loan and asks for these, do not respond and report it to us
          immediately.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </LegalShell>
  );
}
