import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { CONTACT } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Grievance Redressal | Guest Loan",
  description:
    "How to raise a complaint with Guest Loan, our four-level escalation process, and how to escalate to the RBI Ombudsman.",
  alternates: { canonical: "https://guest-loan.vercel.app/grievance" },
  openGraph: {
    type: "website",
    title: "Grievance Redressal | Guest Loan",
    description:
      "How to raise a complaint with Guest Loan, our four-level escalation process, and how to escalate to the RBI Ombudsman.",
    url: "https://guest-loan.vercel.app/grievance",
    locale: "en_IN",
    images: ["https://guest-loan.vercel.app/logo.svg"],
  },
  twitter: {
    card: "summary",
    title: "Grievance Redressal | Guest Loan",
    description:
      "How to raise a complaint with Guest Loan, our four-level escalation process, and how to escalate to the RBI Ombudsman.",
    images: ["https://guest-loan.vercel.app/logo.svg"],
  },
  robots: "index, follow",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://guest-loan.vercel.app/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Grievance Redressal",
      item: "https://guest-loan.vercel.app/grievance",
    },
  ],
};

export default function GrievancePage() {
  return (
    <LegalShell title="Grievance Redressal">
      <p>
        If something has gone wrong, we want to know. This page explains exactly how to
        raise a complaint, who handles it, how long we take, and what to do if you are not
        satisfied with our response.
      </p>
      <div className="box amber">
        <p>
          <b>Note for the site owner:</b> the Grievance Redressal Officer&rsquo;s name and
          the Nodal Officer details must be filled in before this site goes live. A named
          officer with working contact details is a regulatory requirement, not optional.
        </p>
      </div>

      <h2>Our commitment</h2>
      <ul>
        <li>
          We acknowledge every complaint within <strong>48 hours</strong>
        </li>
        <li>
          We aim to resolve every complaint within <strong>30 days</strong>
        </li>
        <li>We tell you the outcome in writing, with reasons</li>
        <li>We never penalise a borrower for raising a complaint</li>
      </ul>

      <h2>How to escalate</h2>
      <p>Please follow these levels in order. Most issues are resolved at Level 1.</p>

      <div className="lvl">
        <span className="tag">Level 1</span>
        <h3>Customer Support</h3>
        <p>
          Start here for any question or complaint about your enquiry, application, loan
          account, due date or charges.
        </p>
        <p>
          <b>Email:</b> <a href={`mailto:${CONTACT.supportEmail}`}>{CONTACT.supportEmail}</a>
          <br />
          <b>Phone:</b> <a href={`tel:${CONTACT.supportPhoneE164}`}>{CONTACT.supportPhoneDisplay}</a>
          <br />
          <b>Hours:</b> {CONTACT.hours}
        </p>
        <p className="meta">Acknowledgement within 48 hours &middot; Resolution target: 15 working days</p>
      </div>

      <div className="lvl">
        <span className="tag">Level 2</span>
        <h3>Grievance Redressal Officer</h3>
        <p>
          If you have not received a response within 15 working days, or you are not
          satisfied with the resolution at Level 1, escalate here with your complaint
          reference number.
        </p>
        <p>
          <b>Name:</b> [Grievance Redressal Officer name to be confirmed]
          <br />
          <b>Email:</b> <a href={`mailto:${CONTACT.grievanceEmail}`}>{CONTACT.grievanceEmail}</a>
          <br />
          <b>Phone:</b>{" "}
          <a href={`tel:${CONTACT.grievancePhoneE164}`}>{CONTACT.grievancePhoneDisplay}</a>
          <br />
          <b>Address:</b> [Registered office address to be confirmed], New Delhi, India
        </p>
        <p className="meta">
          Acknowledgement within 48 hours &middot; Resolution target: 30 days from first
          complaint
        </p>
      </div>

      <div className="lvl">
        <span className="tag">Level 3</span>
        <h3>Nodal Officer of the lending entity</h3>
        <p>
          If your complaint remains unresolved, escalate to the Nodal Officer of the
          regulated lending entity that sanctioned your loan.
        </p>
        <p>
          <b>Name:</b> [Nodal Officer name to be confirmed]
          <br />
          <b>Entity:</b> [RBI-registered NBFC / lending partner name and CoR number to be
          confirmed]
          <br />
          <b>Email:</b> [To be confirmed]
        </p>
        <p className="meta">Resolution target: 30 days from escalation</p>
      </div>

      <div className="lvl">
        <span className="tag">Level 4</span>
        <h3>RBI Ombudsman</h3>
        <p>
          If your complaint is not resolved within 30 days, or you are dissatisfied with
          the final response, you may approach the Reserve Bank of India Ombudsman under
          the Reserve Bank &ndash; Integrated Ombudsman Scheme, 2021.
        </p>
        <p>
          <b>Online:</b>{" "}
          <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer">
            cms.rbi.org.in
          </a>
          <br />
          <b>Toll-free:</b> 14448
          <br />
          <b>Email:</b> CRPC@rbi.org.in
          <br />
          <b>Post:</b> Centralised Receipt and Processing Centre, Reserve Bank of India,
          4th Floor, Sector 17, Chandigarh &ndash; 160017
        </p>
        <p className="meta">Free of cost &middot; No fee is ever charged for filing a complaint with the Ombudsman</p>
      </div>

      <h2>What to include in your complaint</h2>
      <ul>
        <li>Your full name and registered mobile number</li>
        <li>Your loan account or application reference number, if you have one</li>
        <li>A clear description of the issue and when it occurred</li>
        <li>Any previous complaint reference number, if escalating</li>
        <li>Copies of any relevant documents or communications</li>
      </ul>

      <h2>Complaints about recovery conduct or data access</h2>
      <p>
        We take conduct complaints extremely seriously. If any person representing Guest
        Loan has behaved in a manner contrary to our{" "}
        <a href="/fair-practice">Fair Practice Code</a> &mdash; including calling outside
        8:00 AM to 7:00 PM, using abusive or threatening language, contacting your employer
        or family to pressure you, requesting access to your contacts or call logs, or
        demanding an advance payment &mdash; report it immediately to{" "}
        <a href={`mailto:${CONTACT.grievanceEmail}`}>{CONTACT.grievanceEmail}</a>. Such
        complaints are investigated on priority.
      </p>

      <div className="box amber">
        <p>
          <b>Fraud warning:</b> Guest Loan will never ask for an advance fee, security
          deposit, OTP, PIN or password to process or release a loan, and will never
          request access to your contacts, call logs, or media files. If anyone demands
          these, do not comply and report it to us at once.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </LegalShell>
  );
}
