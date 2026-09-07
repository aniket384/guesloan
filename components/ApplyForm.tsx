"use client";

import { FormEvent, useState } from "react";

// Falls back to the site's configured webhook if the env var isn't set, so
// the form works identically out of the box. Override via
// NEXT_PUBLIC_SHEETS_WEBHOOK_URL in .env.local if the Apps Script is ever
// redeployed — see apps-script-setup.gs.
const SHEETS_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbx6eX474pJwEjWNVpm2BcgGlvzEFz9BGs-6gWWUXE44-gjBxdA9rFb4Bldf5fSnTxKmWQ/exec";

type FieldId = "nm" | "mb" | "em" | "ct" | "am" | "sd" | "ad" | "cs";

const CITIES = ["Delhi", "Gurugram", "Noida", "Greater Noida", "Ghaziabad", "Faridabad"];
const AMOUNTS = [
  "\u20b910,000 \u2013 \u20b925,000",
  "\u20b925,000 \u2013 \u20b950,000",
  "\u20b950,000 \u2013 \u20b975,000",
  "\u20b975,000 \u2013 \u20b91,00,000",
  "\u20b91,00,000 \u2013 \u20b91,20,000",
];
const SALARY_DATES = [
  "1st \u2013 5th of the month",
  "6th \u2013 10th of the month",
  "11th \u2013 20th of the month",
  "21st \u2013 end of the month",
];

export default function ApplyForm() {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [amount, setAmount] = useState("");
  const [salaryDate, setSalaryDate] = useState("");
  const [address, setAddress] = useState("");
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Partial<Record<FieldId, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");

  function handleMobileInput(e: React.ChangeEvent<HTMLInputElement>) {
    setMobile(e.target.value.replace(/\D/g, "").slice(0, 10));
  }

  function scrollToField(id: FieldId) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      try {
        (el as HTMLElement).focus({ preventScroll: true });
      } catch {
        // focus can throw on some elements/browsers; safe to ignore
      }
    }
  }

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const nextErrors: Partial<Record<FieldId, string>> = {};
    let first: FieldId | null = null;
    const fail = (id: FieldId, msg: string) => {
      nextErrors[id] = msg;
      first = first || id;
    };

    const nm = fullName.trim();
    if (nm.length < 3) fail("nm", "Please enter your full name");
    else if (!/^[a-zA-Z\s.'-]+$/.test(nm)) fail("nm", "Name can only contain letters");

    const mv = mobile.trim();
    if (!/^[6-9]\d{9}$/.test(mv)) fail("mb", "Enter a valid 10-digit Indian mobile number");

    const em = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) fail("em", "Enter a valid email address");

    if (!city) fail("ct", "Please select your city");
    if (!amount) fail("am", "Please select a loan amount");
    if (!salaryDate) fail("sd", "Please select your salary date");

    const ad = address.trim();
    if (ad.length < 12) fail("ad", "Please enter your complete address");

    if (!consent) fail("cs", "Please accept to continue");

    setErrors(nextErrors);

    if (first) {
      scrollToField(first);
      return;
    }

    const data = {
      fullName: nm,
      mobile: "+91" + mv,
      email: em,
      city,
      amount,
      salaryDate,
      address: ad,
      consent: true,
      source: "guestloan-website",
      submittedAt: new Date().toISOString(),
    };

    setSubmitting(true);

    const finish = () => {
      setReference("GL" + Date.now().toString().slice(-8));
      setSubmitted(true);
    };

    if (SHEETS_WEBHOOK_URL.indexOf("PASTE_YOUR") === -1) {
      // Apps Script Web Apps require mode:'no-cors' with a text/plain body
      // to avoid a CORS preflight, which means the browser can't read
      // whether the request succeeded — so the success screen shows once
      // the request has been sent, the same way a standard lead form
      // submission behaves.
      try {
        await fetch(SHEETS_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(data),
        });
      } catch {
        // ignored — no-cors gives no visibility into success/failure either way
      }
      finish();
    } else {
      console.warn(
        "Guest Loan: SHEETS_WEBHOOK_URL is not configured yet \u2014 this submission was not stored or emailed. See apps-script-setup.gs."
      );
      setTimeout(finish, 700);
    }
  }

  if (submitted) {
    return (
      <div className="ok show" id="ok" role="status">
        <div className="ic">
          <svg viewBox="0 0 24 24">
            <path d="M4 12l6 6L20 6" />
          </svg>
        </div>
        <h3>Application received</h3>
        <p>
          Thank you. Our team will call you on the number you provided to verify
          your details, confirm your salary date and explain the next steps.
        </p>
        <div className="ref">Reference: {reference}</div>
      </div>
    );
  }

  return (
    <form id="lf" noValidate onSubmit={handleSubmit}>
      <div className="fgrid2">
        <div className="fld full">
          <label htmlFor="nm">
            Full name <span className="req">*</span>
          </label>
          <input
            type="text"
            id="nm"
            name="fullName"
            placeholder="As per your PAN card"
            autoComplete="name"
            className={errors.nm ? "bad" : undefined}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <div className={`err${errors.nm ? " show" : ""}`} id="e-nm" role="alert">
            {errors.nm}
          </div>
        </div>

        <div className="fld">
          <label htmlFor="mb">
            Mobile number <span className="req">*</span>
          </label>
          <div className="pfx">
            <span className="p">+91</span>
            <input
              type="tel"
              id="mb"
              name="mobile"
              placeholder="10-digit number"
              inputMode="numeric"
              maxLength={10}
              autoComplete="tel-national"
              className={errors.mb ? "bad" : undefined}
              value={mobile}
              onChange={handleMobileInput}
            />
          </div>
          <div className={`err${errors.mb ? " show" : ""}`} id="e-mb" role="alert">
            {errors.mb}
          </div>
        </div>

        <div className="fld">
          <label htmlFor="em">
            Email address <span className="req">*</span>
          </label>
          <input
            type="email"
            id="em"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            inputMode="email"
            className={errors.em ? "bad" : undefined}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={`err${errors.em ? " show" : ""}`} id="e-em" role="alert">
            {errors.em}
          </div>
        </div>

        <div className="fld">
          <label htmlFor="ct">
            City <span className="req">*</span>
          </label>
          <select
            id="ct"
            name="city"
            className={errors.ct ? "bad" : undefined}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select your city</option>
            {CITIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <div className={`err${errors.ct ? " show" : ""}`} id="e-ct" role="alert">
            {errors.ct}
          </div>
        </div>

        <div className="fld">
          <label htmlFor="am">
            Loan amount required <span className="req">*</span>
          </label>
          <select
            id="am"
            name="amount"
            className={errors.am ? "bad" : undefined}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          >
            <option value="">Select amount</option>
            {AMOUNTS.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
          <div className={`err${errors.am ? " show" : ""}`} id="e-am" role="alert">
            {errors.am}
          </div>
        </div>

        <div className="fld">
          <label htmlFor="sd">
            Your salary date <span className="req">*</span>
          </label>
          <select
            id="sd"
            name="salaryDate"
            className={errors.sd ? "bad" : undefined}
            value={salaryDate}
            onChange={(e) => setSalaryDate(e.target.value)}
          >
            <option value="">Select salary date</option>
            {SALARY_DATES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <div className={`err${errors.sd ? " show" : ""}`} id="e-sd" role="alert">
            {errors.sd}
          </div>
        </div>

        <div className="fld full">
          <label htmlFor="ad">
            Residential address <span className="req">*</span>
          </label>
          <textarea
            id="ad"
            name="address"
            placeholder="House / flat number, street, locality, city, PIN code"
            autoComplete="street-address"
            className={errors.ad ? "bad" : undefined}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className={`err${errors.ad ? " show" : ""}`} id="e-ad" role="alert">
            {errors.ad}
          </div>
        </div>

        <div className="fld full">
          <div className="consent">
            <input
              type="checkbox"
              id="cs"
              name="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <label htmlFor="cs">
              I confirm I am a salaried professional residing in Delhi NCR with a
              net monthly income of at least &#8377;50,000. I consent to Guest
              Loan contacting me by phone, SMS, WhatsApp or email regarding my
              enquiry, and I have read the <a href="/privacy">Privacy Policy</a>{" "}
              and <a href="/terms">Terms of Service</a>.
            </label>
          </div>
          <div className={`err${errors.cs ? " show" : ""}`} id="e-cs" role="alert">
            {errors.cs}
          </div>
        </div>
      </div>

      <div className="fsub">
        <button type="submit" className="btn b1" id="sb" disabled={submitting}>
          {submitting ? "Submitting\u2026" : "Submit my application"}
        </button>
      </div>
      <p className="fnote">
        Submitting this form does not guarantee loan approval and does not
        affect your credit score.
      </p>
    </form>
  );
}
