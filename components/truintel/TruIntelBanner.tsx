import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TRUINTEL } from "./content";

/**
 * Thin, full-width promo strip. Good near the top or between sections of a page.
 * Emerald gradient edge so it reads as a distinct TruIntel "ad" without clashing
 * with Marqait's dark UI.
 */
export default function TruIntelBanner({
  message = "See if AI recommends your brand — not your competitors.",
  cta = "Run a free audit",
  href = TRUINTEL.urls.audit,
  className = "",
}: {
  message?: string;
  cta?: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className={`w-full bg-[#05000A] px-4 py-4 ${className}`}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 rounded-2xl border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 via-emerald-500/[0.04] to-transparent px-5 py-3.5 sm:flex-row"
      >
        <span className="flex items-center gap-3 text-sm text-white/80">
          <span className="flex h-6 items-center rounded-full bg-emerald-500 px-2.5 text-[11px] font-bold uppercase tracking-wide text-black">
            TruIntel
          </span>
          <span>{message}</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-emerald-300 transition-colors group-hover:text-emerald-200">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  );
}
