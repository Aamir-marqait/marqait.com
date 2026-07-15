// Marqait's home contact form has been replaced by a TruIntel CTA so every
// contact action funnels to TruIntel. Kept the forwardRef signature so the
// homepage "scroll to contact" ref still resolves to this section.
import { forwardRef, Ref } from "react";
import { TruIntelContactCTA } from "../truintel";

const ContactFormSection = forwardRef<HTMLElement>(
  (_props, ref: Ref<HTMLElement>) => {
    return (
      <section ref={ref}>
        <TruIntelContactCTA />
      </section>
    );
  }
);

ContactFormSection.displayName = "ContactFormSection";

export default ContactFormSection;
