import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://guestloan.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0c10",
};

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Same non-render-blocking preload+swap pattern as the original
            static site: the stylesheet loads with media="print" so it
            doesn't block first paint, then swaps to "all" once the fetch
            completes (via the inline script below, since a plain HTML
            onload="..." attribute isn't expressible from a Server
            Component — this addEventListener achieves the identical
            effect). */}
        <link rel="preload" as="style" href={FONT_URL} />
        <link id="gfont" href={FONT_URL} rel="stylesheet" media="print" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.getElementById('gfont').addEventListener('load',function(){this.media='all'});",
          }}
        />
        <noscript>
          <link href={FONT_URL} rel="stylesheet" />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
