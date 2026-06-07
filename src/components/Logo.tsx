/**
 * Fonslab Capital logo — the hexagonal mark from the brand SVG (logo-v3),
 * recolored to the institutional sage palette and mirrored clockwise.
 * Coordinates are baked (no transform). Uses `currentColor` so it can
 * render sage on light surfaces or white on dark ones.
 */

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 68 73"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M45.543 5.961L66.300 17.943L66.300 27.239L45.543 15.256L24.787 27.239L24.787 17.943Z" />
      <path d="M25.147 65.842L45.904 53.859L45.904 44.565L25.147 56.547L4.391 44.565L4.391 53.859Z" />
      <path d="M66.300 29.736L45.543 17.752L37.495 22.400L58.250 34.383L58.250 58.351L66.300 53.703Z" />
      <path d="M14.575 11.989L35.331 0.006L43.381 4.654L22.626 16.637L22.626 40.604L14.575 35.957Z" />
      <path d="M56.044 59.733L56.044 35.766L47.994 31.119L47.994 55.087L27.239 67.069L35.288 71.718Z" />
      <path d="M4.391 42.067L4.391 18.100L12.441 13.452L12.441 37.419L33.197 49.404L25.147 54.052Z" />
    </svg>
  );
}

export default function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  /** "dark" for light backgrounds, "light" for dark/sage backgrounds */
  tone?: "dark" | "light";
}) {
  const markColor = tone === "light" ? "text-sage-300" : "text-sage-500";
  const wordColor = tone === "light" ? "text-white" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark className={`h-7 w-auto ${markColor}`} />
      <span className={`flex flex-col leading-none ${wordColor}`}>
        <span className="text-[15px] font-semibold tracking-tight">Fonslab</span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-sage-600">
          Capital
        </span>
      </span>
    </span>
  );
}
