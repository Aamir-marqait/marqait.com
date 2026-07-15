import { ArrowRight } from "lucide-react";

const AUDIT_URL =
  "https://truintel.ai/";

/**
 * Slim site-wide announcement strip rendered at the top of the fixed header.
 * Tells every visitor up front that Marqait is paused and points them to
 * TruIntel. Fixed h-9 so the layout offset in components/Layout.tsx stays
 * predictable.
 */
export default function TruIntelPauseBar() {
  return (
    <div className="flex h-9 w-full items-center justify-center gap-2 bg-gradient-to-r from-[#8C45FF]/25 via-[#0A0611] to-emerald-500/20 px-3 text-center border-b border-white/10">
      <p className="truncate text-xs text-white/75 sm:text-[13px]">
        <span className="font-semibold text-white">
          MARQAIT is currently on pause
        </span>
        <span className="hidden sm:inline">
          {" "}
          — meet <span className="font-semibold text-white">TruIntel</span>,
          our AI Visibility platform.
        </span>
      </p>
      <a
        href={AUDIT_URL}
        className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-emerald-300 transition-colors hover:text-emerald-200 sm:text-[13px]"
      >
        <span className="hidden sm:inline">Get your free AI Visibility Audit</span>
        <span className="sm:hidden">Free AI Audit</span>
        <ArrowRight className="h-3 w-3" />
      </a>
    </div>
  );
}
