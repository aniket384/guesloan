import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import StickyBar from "./StickyBar";

export default function LegalShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to main content
      </a>
      <Nav />
      <main id="main" className="legal">
        <div className="wrap">
          <div className="inner">
            <p className="crumb">
              <a href="/">Home</a> &rsaquo; {title}
            </p>
            <h1>{title}</h1>
            <p className="upd">Last updated: 21 August 2026</p>
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
