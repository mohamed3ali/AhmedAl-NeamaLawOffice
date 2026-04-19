/** زخرفة ميزان — SVG مضمّن فقط (بدون صورة خارجية) */
export function ScalesWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute text-gold opacity-[0.06] ${className}`}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M200 40L80 120v160l120 80 120-80V120L200 40z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M140 180h120M200 140v80"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="160" cy="200" r="28" stroke="currentColor" strokeWidth="2" />
      <circle cx="240" cy="200" r="28" stroke="currentColor" strokeWidth="2" />
      <path d="M200 100v240" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
