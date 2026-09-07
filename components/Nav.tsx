"use client";

import { useState } from "react";
import { NavLogo } from "./Logo";

const HOME_LINKS = [
  { href: "how", label: "How it works" },
  { href: "repayment", label: "Repayment" },
  { href: "charges", label: "Charges" },
  { href: "eligibility", label: "Eligibility" },
  { href: "documents", label: "Documents" },
  { href: "faq", label: "FAQ" },
];

const LEGAL_LINKS = [
  { href: "how", label: "How it works" },
  { href: "charges", label: "Charges" },
  { href: "eligibility", label: "Eligibility" },
  { href: "faq", label: "FAQ" },
];

export default function Nav({ isHome = false }: { isHome?: boolean }) {
  const [open, setOpen] = useState(false);
  const links = isHome ? HOME_LINKS : LEGAL_LINKS;
  // On the homepage, section anchors are plain "#how"; on every other page
  // they need to route back to "/" first, e.g. "/#how".
  const prefix = isHome ? "" : "/";

  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="wrap in">
        <NavLogo />
        <div className="links">
          {links.map((l) => (
            <a key={l.href} href={`${prefix}#${l.href}`}>
              {l.label}
            </a>
          ))}
        </div>
        <a className="navbtn" href={`${prefix}#apply`}>
          Apply Now
        </a>
        <button
          className={`burger${open ? " on" : ""}`}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mm"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`mob${open ? " on" : ""}`} id="mm">
        <div className="wrap">
          {links.map((l) => (
            <a key={l.href} href={`${prefix}#${l.href}`} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href={`${prefix}#apply`} onClick={close}>
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
