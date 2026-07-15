import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TRUINTEL } from "./content";
import TruIntelLockup from "./TruIntelLockup";

/**
 * Compact inline card — sized for narrow content columns (blog posts, docs,
 * legal pages, sidebars). A small, tasteful TruIntel plug.
 */
export default function TruIntelCallout({
  heading = "Track your brand across AI search",
  body = "TruIntel shows how ChatGPT, Gemini, Perplexity and Google AI talk about your brand — and how to win those answers.",
  cta = "Free AI visibility audit",
  href = TRUINTEL.urls.audit,
  className = "",
}: {
  heading?: string;
  body?: string;
  cta?: string;
  href?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/[0.08] to-white/[0.02] p-6 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl"
      />
      <div className="relative z-10">
        <div className="mb-3">
          <TruIntelLockup markSize={24} textClassName="text-base" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white">{heading}</h3>
        <p className="mb-4 text-sm leading-relaxed text-white/60">{body}</p>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
        >
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
