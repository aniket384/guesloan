import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

/**
 * Generated at build time rather than hand-maintained in public/sitemap.xml.
 * The previous static file had drifted to the old plain-HTML paths
 * (/privacy.html etc.), which 404 under App Router — every legal page in the
 * sitemap was a dead URL. Deriving the paths here keeps them tied to the
 * routes that actually exist, and the origin comes from SITE.url so a domain
 * change only has to happen in one place.
 */

// lastmod must reflect real content change, not build time — Google discounts
// the signal if every deploy bumps it. The legal pages carry a visible
// "Last updated" line in LegalShell; keep these two in sync when that changes.
const LEGAL_UPDATED = new Date("2026-08-21");
const HOME_UPDATED = new Date("2026-09-07");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.url}/`,
      lastModified: HOME_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE.url}/grievance`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE.url}/privacy`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE.url}/terms`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE.url}/fair-practice`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
