import { CONTACT } from "@/lib/site-config";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrap in">
        <span>
          <b>Same-day disbursal</b> &middot; Delhi NCR &middot; Salaried only
        </span>
        <span>
          Support:{" "}
          <a href={`tel:${CONTACT.supportPhoneE164}`}>
            <b>{CONTACT.supportPhoneDisplay}</b>
          </a>{" "}
          &middot; Mon&ndash;Sun 9 AM&ndash;8 PM
        </span>
      </div>
    </div>
  );
}
