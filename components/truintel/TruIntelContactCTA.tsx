import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { TRUINTEL } from "./content";
import TruIntelLockup from "./TruIntelLockup";

const CONTACT_URL =
  "https://truintel.ai/contact?utm_source=marqait_promo&utm_medium=contact-cta";

/**
 * Contact / demo CTA that replaces Marqait's lead-capture forms. Every path
 * navigates to TruIntel (book a demo or start free). Dark to match Marqait,
 * with a purple→emerald blend so it bridges both brands.
 */
export default function TruIntelContactCTA({
  heading = "Ready to win AI search?",
  subheading = "Book a demo with the TruIntel team, or start free in 60 seconds. See exactly how your brand shows up inside ChatGPT, Gemini, Perplexity and Google AI.",
  className = "",
}: {
  heading?: string;
  subheading?: string;
  className?: string;
}) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-[#05000A] py-20 px-5 sm:px-8 ${className}`}
      aria-label="Contact TruIntel"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(50% 60% at 25% 0%, rgba(140,69,255,0.16) 0%, transparent 60%), radial-gradient(45% 55% at 80% 100%, rgba(16,185,129,0.14) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 text-center sm:p-14 backdrop-blur-sm">
          <div className="mb-6 flex justify-center">
            <TruIntelLockup markSize={34} textClassName="text-2xl" />
          </div>

          <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            {heading}
          </h2>
          <p className="mx-auto mb-9 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            {subheading}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8C45FF] to-emerald-500 px-8 py-3.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
            >
              <Calendar className="h-4 w-4" />
              Book a TruIntel Demo
            </Link>
            <Link
              href={TRUINTEL.urls.register}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Start Free
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
