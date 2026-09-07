import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

/**
 * Web app manifest — lets Android/Chrome treat the site as installable and
 * gives "Add to Home Screen" a real name, icon and theme colour instead of a
 * page screenshot. Colours match the tokens in globals.css (--fo / --gr2).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.tagline}`,
    short_name: SITE.name,
    description:
      "Short-term salary loans for salaried professionals across Delhi NCR, repaid on your salary date.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0c10",
    theme_color: "#0b0c10",
    lang: "en-IN",
    categories: ["finance"],
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/logo-512.png", type: "image/png", sizes: "512x512" },
      {
        src: "/logo-512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
  };
}
