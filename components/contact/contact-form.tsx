// Marqait's contact form has been replaced by a TruIntel CTA so every contact
// action funnels to TruIntel. Kept the default export name (`ContactForm`).
import { TruIntelContactCTA } from "../truintel";

export default function ContactForm() {
  return (
    <TruIntelContactCTA
      className="!bg-transparent !py-0 !px-0"
      heading="Talk to the TruIntel team"
    />
  );
}
