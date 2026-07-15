// Marqait's contact/booking form has been replaced by a TruIntel CTA so every
// contact action funnels to TruIntel. Kept the default export name
// (`ContactSection`) so all existing imports across pages keep working.
import { TruIntelContactCTA } from "./truintel";

export default function ContactSection() {
  return <TruIntelContactCTA />;
}
