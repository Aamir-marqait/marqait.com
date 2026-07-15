import Image from "next/image";

/**
 * TruIntel brand lockup: green brandmark + controlled-color wordmark.
 * The wordmark is rendered as text (not the dark-green PNG) so it stays legible
 * on Marqait's dark surfaces while keeping TruIntel's identity.
 */
export default function TruIntelLockup({
  className = "",
  markSize = 28,
  textClassName = "text-lg",
}: {
  className?: string;
  markSize?: number;
  textClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/truintel/truintel-brandmark.png"
        alt="TruIntel"
        width={markSize}
        height={markSize}
        className="rounded-full"
      />
      <span className={`font-semibold tracking-tight text-white ${textClassName}`}>
        Tru<span className="text-emerald-400">Intel</span>
      </span>
    </span>
  );
}
