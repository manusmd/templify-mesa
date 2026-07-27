import type { Metadata } from "next";
import LegalShell from "../components/Legal";

export const metadata: Metadata = {
  title: "Legal Notice — Mesa",
  robots: { index: false, follow: true },
};

// Placeholder legal notice. Replace every [ … ] with the operator's real details
// before going live. (Note: businesses operating in Germany are legally required
// to provide an Impressum under § 5 DDG — have this reviewed for your market.)
export default function LegalNoticePage() {
  return (
    <LegalShell title="Legal Notice">
      <p className="lead">
        This is placeholder text for a demo template. Replace every bracketed
        field with the operator&rsquo;s real details, and have it reviewed for
        your market before publishing.
      </p>

      <h2>Operator</h2>
      <p>
        <span className="ph-note">[ Business / company name ]</span>
        <br />
        <span className="ph-note">[ Street and number ]</span>
        <br />
        <span className="ph-note">[ Postcode and city ]</span>
        <br />
        <span className="ph-note">[ Country ]</span>
      </p>

      <h2>Represented by</h2>
      <p>
        <span className="ph-note">[ Name of the authorised representative ]</span>
      </p>

      <h2>Contact</h2>
      <p>
        Phone: <span className="ph-note">[ +49 … ]</span>
        <br />
        Email: <span className="ph-note">[ hello@… ]</span>
      </p>

      <h2>VAT ID</h2>
      <p>
        VAT identification number:
        <br />
        <span className="ph-note">[ e.g. DE… ]</span>
      </p>

      <h2>Responsible for content</h2>
      <p>
        <span className="ph-note">[ Name ]</span>
        <br />
        <span className="ph-note">[ Address ]</span>
      </p>

      <h2>Dispute resolution</h2>
      <p>
        We are not obliged and not willing to participate in dispute resolution
        proceedings before a consumer arbitration board.
      </p>
    </LegalShell>
  );
}
