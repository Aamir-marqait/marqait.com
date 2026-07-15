import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Search,
  FileText,
  Users,
  MessageSquare,
  Zap,
} from "lucide-react";
import { TRUINTEL, TRUINTEL_FEATURES } from "./content";
import TruIntelLockup from "./TruIntelLockup";

const ICONS = [Eye, Search, FileText, Users, MessageSquare, Zap];

/**
 * Feature-grid "ad" — shows the full breadth of TruIntel at once. Dark surface,
 * emerald accents, six product pillars. Use on broad landing / solutions pages.
 */
export default function TruIntelShowcase({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-[#05000A] py-20 px-5 sm:px-8 ${className}`}
      aria-label="TruIntel platform features"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(40% 40% at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 flex justify-center">
            <TruIntelLockup markSize={30} textClassName="text-xl" />
          </div>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Win the{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              AI search
            </span>{" "}
            era
          </h2>
          <p className="text-base leading-relaxed text-white/60 sm:text-lg">
            {TRUINTEL.subtitle} One platform for AI visibility, SEO and content.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUINTEL_FEATURES.map((f, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-6 transition-colors duration-300 hover:border-emerald-400/30"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={TRUINTEL.urls.home}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-emerald-400"
          >
            Explore the TruIntel platform
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
