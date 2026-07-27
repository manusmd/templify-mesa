import Link from "next/link";
import { content } from "@/lib/content";

/** Minimal chrome for the legal pages — its own nav/footer (no in-page anchors). */
export default function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-brand">
          {content.brand}
        </Link>
        <div className="nav-right">
          <Link href="/" className="nav-phone">
            Back to site
          </Link>
        </div>
      </nav>
      <main className="legal">
        <Link href="/" className="back">
          ← {content.brand}
        </Link>
        <h1 className="serif">{title}</h1>
        {children}
      </main>
      <footer className="footer">
        <span className="footer-brand">{content.brand}</span>
        <div className="footer-links">
          <Link href="/legal">Legal Notice</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <span className="footer-note">{content.footer.note}</span>
      </footer>
    </>
  );
}
