export default function StickyBar({ isHome = false }: { isHome?: boolean }) {
  const prefix = isHome ? "" : "/";
  return (
    <div className="sticky">
      <a className="s1" href={`${prefix}#apply`}>
        Apply Now
      </a>
      <a className="s2" href="tel:+911140000000">
        Call Us
      </a>
    </div>
  );
}
