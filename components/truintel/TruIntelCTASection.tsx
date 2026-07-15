import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { TRUINTEL } from "./content";
import TruIntelLockup from "./TruIntelLockup";

/**
 * Full-width TruIntel promo section. Dark to match Marqait, emerald accents to
 * carry TruIntel's identity. Drop it near the bottom of a page (before the
 * footer/contact) as a clean cross-promo "ad".
 */
export default function TruIntelCTASection({
  eyebrow = "From the makers of Marqait",
  heading,
  subheading = TRUINTEL.subtitle,
  className = "",
}: {
  eyebrow?: string;
  heading?: React.ReactNode;
  subheading?: string;
  className?: string;
}) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-[#05000A] py-20 px-5 sm:px-8 ${className}`}
      aria-label="TruIntel — AI search visibility platform"
    >
      {/* Emerald ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(50% 60% at 20% 0%, rgba(16,185,129,0.15) 0%, transparent 60%), radial-gradient(45% 55% at 85% 100%, rgba(140,69,255,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-12 backdrop-blur-sm">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            {eyebrow}
          </div>

          <div className="mb-6">
            <TruIntelLockup markSize={34} textClassName="text-2xl" />
          </div>

          <h2 className="mb-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            {heading ?? (
              <>
                AI is recommending your competitors.{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Find out why.
                </span>
              </>
            )}
          </h2>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {subheading}
          </p>

          {/* Platform trust ribbon */}
          <div className="mb-9 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-white/50">
            <span className="text-white/40">Tracks:</span>
            {TRUINTEL.platforms.map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium text-white/70"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={TRUINTEL.urls.audit}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-emerald-400"
            >
              Get your free AI visibility audit
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={TRUINTEL.urls.home}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Explore TruIntel
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
