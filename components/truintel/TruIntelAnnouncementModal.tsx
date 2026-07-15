"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { TRUINTEL } from "./content";

/**
 * "MARQAIT is on pause" announcement modal.
 *
 * Every conversion CTA on marqait.com points at TruIntel. Instead of sending
 * visitors away instantly, this modal intercepts those clicks site-wide and
 * explains the transition first, then hands them to TruIntel through its own
 * CTAs. Two triggers:
 *
 *   1. A capture-phase click listener that catches any anchor whose href is a
 *      truintel.ai conversion link (utm_medium=cta / contact-cta). No changes
 *      needed in the dozens of files that render those links.
 *   2. `openTruIntelAnnouncement()` for programmatic CTAs (buttons that used
 *      to call `window.open`).
 *
 * Contextual/footer links (utm_medium=footer / contextual / cross-promo)
 * intentionally pass straight through — the user already knows those go to
 * TruIntel.
 */

export const TRUINTEL_ANNOUNCE_EVENT = "truintel:announce";

export function openTruIntelAnnouncement() {
  window.dispatchEvent(new Event(TRUINTEL_ANNOUNCE_EVENT));
}

const PRIMARY_URL =
  "https://truintel.ai/?utm_source=marqait_promo&utm_medium=pause-modal";
const EXPLORE_URL =
  "https://truintel.ai/?utm_source=marqait_promo&utm_medium=pause-modal";

// Only conversion CTAs open the modal; informational links navigate directly.
const INTERCEPT_MEDIUMS = /utm_medium=(cta|contact-cta)(&|$)/;

export default function TruIntelAnnouncementModal() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const show = useCallback(() => {
    setMounted(true);
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => setMounted(false), 250);
  }, []);

  // Programmatic trigger for button-based CTAs.
  useEffect(() => {
    const onEvent = () => show();
    window.addEventListener(TRUINTEL_ANNOUNCE_EVENT, onEvent);
    return () => window.removeEventListener(TRUINTEL_ANNOUNCE_EVENT, onEvent);
  }, [show]);

  // Site-wide interception of conversion-CTA anchors.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      // Links inside the modal itself must navigate normally.
      if (anchor.closest("[data-ti-announce]")) return;
      const href = anchor.getAttribute("href") ?? "";
      if (!href.includes("truintel.ai") || !INTERCEPT_MEDIUMS.test(href))
        return;
      e.preventDefault();
      e.stopPropagation();
      show();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [show]);

  // Escape closes; lock page scroll while open; focus the dialog.
  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [mounted, close]);

  if (!mounted) return null;

  return (
    <div
      data-ti-announce
      className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 transition-opacity duration-250 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ti-announce-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      <div
        className={`relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0A0611] shadow-2xl transition-transform duration-250 ${
          visible ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.98]"
        }`}
      >
        {/* Brand glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#8C45FF]/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl"
        />

        <button
          ref={closeButtonRef}
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative z-10 p-7 sm:p-9">
          {/* Marqait → TruIntel lockup */}
          <div className="mb-5 flex items-center gap-2.5">
            <span className="text-sm font-semibold tracking-wide text-white/60">
              MARQAIT
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-white/30" />
            <span className="inline-flex items-center gap-1.5">
              <Image
                src="/truintel/truintel-brandmark.png"
                alt=""
                width={22}
                height={22}
                className="rounded-full"
              />
              <span className="text-sm font-semibold text-white">
                Tru<span className="text-emerald-400">Intel</span>
              </span>
            </span>
          </div>

          <h2
            id="ti-announce-title"
            className="mb-3 text-2xl font-bold leading-tight text-white sm:text-[28px]"
          >
            MARQAIT is currently on pause.
          </h2>

          <p className="mb-6 text-[15px] leading-relaxed text-white/65">
            We&apos;re building the next chapter of AI-powered marketing. In
            the meantime, we&apos;d love to introduce you to{" "}
            <span className="font-semibold text-white">TruIntel</span> — our AI
            Visibility platform that helps brands understand how they&apos;re
            being discovered across AI search engines and answer engines,
            measure AI visibility, and improve their presence where users are
            increasingly finding information.
          </p>

          {/* Platform ribbon */}
          <div className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-white/45">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            {TRUINTEL.platforms.map((p, i) => (
              <span key={p} className="flex items-center gap-3">
                {p}
                {i < TRUINTEL.platforms.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                )}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={PRIMARY_URL}
              onClick={close}
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8C45FF] to-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
            >
              Get Your Free AI Visibility Audit
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href={EXPLORE_URL}
              onClick={close}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 transition-colors duration-200 hover:border-white/30 hover:text-white"
            >
              Explore TruIntel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
