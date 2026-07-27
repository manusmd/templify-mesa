import type { Metadata } from "next";
import LegalShell from "../components/Legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Mesa",
  robots: { index: false, follow: true },
};

// Placeholder privacy policy. Replace every [ … ] with the operator's real
// details and have it reviewed for compliance (e.g. GDPR) before going live.
export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <p className="lead">
        This is placeholder text for a demo template. Adapt it to your actual
        data processing and have it legally reviewed before publishing.
      </p>

      <h2>1. Who is responsible</h2>
      <p>
        The party responsible for data processing on this website is:
        <br />
        <span className="ph-note">[ Name / company ]</span>
        <br />
        <span className="ph-note">[ Address ]</span>
        <br />
        <span className="ph-note">[ Email ]</span>
      </p>

      <h2>2. Hosting</h2>
      <p>
        This website is hosted by{" "}
        <span className="ph-note">[ hosting provider ]</span>. When you visit the
        site, technically necessary data is processed to deliver it.
      </p>

      <h2>3. Server log files</h2>
      <p>
        The provider automatically collects and stores information in server log
        files (browser type, operating system, referrer URL, hostname, time of
        the request, IP address). This data is not merged with other sources.
      </p>

      <h2>4. Contact &amp; reservations</h2>
      <p>
        If you contact us by email or phone, or book a table, your details are
        stored to handle the request.
      </p>

      <h2>5. Cookies</h2>
      <p>
        <span className="ph-note">
          [ If cookies / analytics are used, describe them here ]
        </span>
      </p>

      <h2>6. Your rights</h2>
      <p>
        You have the right to access, rectify, erase, restrict processing of,
        and port your data, as well as to object. You may also lodge a complaint
        with a supervisory authority.
      </p>

      <h2>7. Privacy contact</h2>
      <p>
        For any questions about data protection, contact us at:{" "}
        <span className="ph-note">[ privacy@… ]</span>
      </p>
    </LegalShell>
  );
}
