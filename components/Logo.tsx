function LogoMark() {
  return (
    <svg viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M26 6L46 13V28C46 39.5 26 50 26 50C26 50 6 39.5 6 28V13L26 6Z"
        fill="none"
        stroke="#66fcf1"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 18H16C14 18 13 19 13 21V33C13 35 14 36 16 36H24V27H19"
        stroke="#66fcf1"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M28 18V36H37"
        stroke="#f2f5f6"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M4 42L20 30L27 34L44 17"
        stroke="#10b981"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M36 17H44V25"
        stroke="#10b981"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="56"
        y="32"
        fontFamily="'Plus Jakarta Sans',Arial,sans-serif"
        fontWeight="800"
        fontSize="21"
        fill="#f2f5f6"
        letterSpacing="-0.5"
      >
        GUEST
        <tspan fill="#66fcf1" fontWeight="600">
          {" "}
          LOAN
        </tspan>
      </text>
      <text
        x="57"
        y="44"
        fontFamily="'Plus Jakarta Sans',Arial,sans-serif"
        fontWeight="500"
        fontSize="8.5"
        fill="#4fb8ab"
        letterSpacing="0.8"
      >
        Apply Fast &middot; Get Faster
      </text>
    </svg>
  );
}

/** Logo used inside the nav bar — wrapped in a link back to the homepage. */
export function NavLogo() {
  return (
    <a className="logo" href="/" aria-label="Guest Loan home">
      <LogoMark />
    </a>
  );
}

/** Logo used inside the footer — not a link, matches the original markup exactly. */
export function FooterLogo() {
  return (
    <div className="logo" style={{ marginBottom: 12 }}>
      <LogoMark />
    </div>
  );
}

/** Icon-only shield mark (with dark tile background) — used in the homepage Trust section. */
export function ShieldIcon() {
  return (
    <svg viewBox="0 0 50 56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="50" height="56" rx="12" fill="#0b0c10" />
      <path
        d="M26 6L46 13V28C46 39.5 26 50 26 50C26 50 6 39.5 6 28V13L26 6Z"
        fill="none"
        stroke="#66fcf1"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 18H16C14 18 13 19 13 21V33C13 35 14 36 16 36H24V27H19"
        stroke="#66fcf1"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M28 18V36H37"
        stroke="#f2f5f6"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M4 42L20 30L27 34L44 17"
        stroke="#10b981"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M36 17H44V25"
        stroke="#10b981"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
