"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight, Check } from "lucide-react";
import { TRUINTEL } from "./content";

const STORAGE_KEY = "ti_promo_dismissed_at";
const COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const SHOW_DELAY_MS = 18000; // let users engage with the page first

/**
 * Site-wide TruIntel promo popup. Mounted once in the root layout so it appears
 * across every Marqait page. Appears after a delay, remembers dismissal for a
 * week, and never blocks the initial experience.
 */
export default function TruIntelPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Respect a recent dismissal.
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw && Date.now() - Number(raw) < COOLDOWN_MS) return;
    } catch {
      /* localStorage unavailable — still allow the popup */
    }

    const timer = window.setTimeout(() => {
      setMounted(true);
      // Next frame → trigger the enter transition.
      requestAnimationFrame(() => setVisible(true));
    }, SHOW_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    window.setTimeout(() => setMounted(false), 300);
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-[9999] w-[calc(100vw-2rem)] max-w-sm transition-all duration-300 sm:bottom-6 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      role="dialog"
      aria-label="TruIntel — AI search visibility"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0611] shadow-2xl">
        {/* Emerald glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/25 blur-3xl"
        />

        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative z-10 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Image
              src="/truintel/truintel-brandmark.png"
              alt="TruIntel"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="text-sm font-semibold text-white">
              Tru<span className="text-emerald-400">Intel</span>
            </span>
            <span className="ml-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
              by Marqait
            </span>
          </div>

          <h3 className="mb-2 text-lg font-semibold leading-snug text-white">
            Is AI recommending your competitors?
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-white/60">
            See how your brand shows up inside ChatGPT, Gemini, Perplexity &amp;
            Google AI — free, in 60 seconds.
          </p>

          <ul className="mb-5 space-y-1.5">
            {["AI visibility score", "Competitor benchmark", "Action plan"].map(
              (p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-xs text-white/70"
                >
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  {p}
                </li>
              )
            )}
          </ul>

          <Link
            href={TRUINTEL.urls.audit}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-emerald-400"
          >
            Get my free AI audit
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
