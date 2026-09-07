import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

/**
 * Generated rather than hand-maintained in public/robots.txt, so the Sitemap:
 * line and the canonical origin can't drift apart from SITE.url.
 *
 * Every rule below is Allow — nothing on this site is blocked from crawling.
 * The named AI crawlers are listed explicitly because several of them ignore
 * Google-Extended and only honour their own token; being listed by name is
 * what gets the site quoted in AI answers rather than skipped.
 */

// Answer engines and AI training crawlers, allowed by name.
const AI_CRAWLERS = [
  // OpenAI
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Google AI (standard Googlebot is already covered by the "*" rule)
  "Google-Extended",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Apple
  "Applebot-Extended",
  // Meta
  "meta-externalagent",
  // Common Crawl (feeds many research and AI projects)
  "CCBot",
  // ByteDance
  "Bytespider",
  // Amazon
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
