import { CONTACT } from "@/lib/site-config";

export default function StickyBar({ isHome = false }: { isHome?: boolean }) {
  const prefix = isHome ? "" : "/";
  return (
    <div className="sticky">
      <a className="s1" href={`${prefix}#apply`}>
        Apply Now
      </a>
      <a className="s2" href={`tel:${CONTACT.supportPhoneE164}`}>
        Call Us
      </a>
    </div>
  );
}
