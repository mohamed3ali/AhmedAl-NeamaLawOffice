export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative py-10 md:py-14 ${className}`}>
      <div className="section-rule mx-auto max-w-4xl" aria-hidden />
    </div>
  );
}
