import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { TRUINTEL } from "./content";
import TruIntelLockup from "./TruIntelLockup";

/**
 * Split "ad" — copy on one side, a real TruIntel dashboard screenshot on the
 * other. Great mid-page or before a footer on service/tool pages.
 */
export default function TruIntelSpotlight({
  heading = "Is your brand invisible to AI?",
  points = [
    "Track mentions across ChatGPT, Gemini & Perplexity",
    "Benchmark against competitors in AI answers",
    "Get an action plan to become the AI-recommended choice",
  ],
  reverse = false,
  className = "",
}: {
  heading?: string;
  points?: string[];
  reverse?: boolean;
  className?: string;
}) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-[#05000A] py-20 px-5 sm:px-8 ${className}`}
      aria-label="TruIntel AI visibility"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(45% 50% at 80% 20%, rgba(16,185,129,0.13) 0%, transparent 60%)",
        }}
      />

      <div
        className={`relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-14 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1">
          <div className="mb-5">
            <TruIntelLockup markSize={30} textClassName="text-xl" />
          </div>
          <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          <ul className="mb-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-white/70">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm leading-relaxed sm:text-base">{p}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={TRUINTEL.urls.audit}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-emerald-400"
            >
              Run a free audit
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={TRUINTEL.urls.home}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl">
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-60" />
            <Image
              src="/truintel/truintel-dashboard.png"
              alt="TruIntel dashboard — AI search visibility, citations and competitor metrics"
              width={1200}
              height={700}
              className="relative rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
