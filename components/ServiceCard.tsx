import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Service } from "@/lib/data/services";
import type { Locale } from "@/lib/i18n/translations";

type Props = {
  service: Service;
  locale: Locale;
  readMore: string;
  compact?: boolean;
  showLink?: boolean;
};

export function ServiceCard({
  service,
  locale,
  readMore,
  compact,
  showLink = true,
}: Props) {
  const title = locale === "ar" ? service.titleAr : service.titleEn;
  const desc = compact
    ? locale === "ar"
      ? service.shortAr
      : service.shortEn
    : locale === "ar"
      ? service.descAr
      : service.descEn;

  return (
    <article
      className={`group flex flex-col border border-gold/15 bg-navy-muted/90 p-6 transition hover:border-gold/40 ${
        compact ? "min-w-[280px] snap-center md:min-w-[300px]" : ""
      }`}
    >
      <div className="mb-4 inline-flex rounded-full border border-gold/25 bg-navy/80 p-3 text-gold">
        <ServiceIcon name={service.icon} className="h-7 w-7" />
      </div>
      <h3
        className={`mb-2 text-xl text-parchment ${
          locale === "ar" ? "font-arabic" : "font-latin"
        }`}
      >
        {title}
      </h3>
      {!compact && (
        <p className="font-latin mb-1 text-sm text-gold/90">
          {locale === "ar" ? service.titleEn : service.titleAr}
        </p>
      )}
      <p className="font-arabicBody flex-1 text-sm leading-relaxed text-parchment/75">
        {desc}
      </p>
      {showLink && (
        <Link
          href={`/services#${service.id}`}
          className="font-arabicBody mt-4 inline-flex items-center gap-2 text-sm text-gold transition hover:gap-3"
        >
          {readMore}
          <ChevronRight
            className={`h-4 w-4 shrink-0 text-gold transition-transform ${
              locale === "ar" ? "rotate-180" : ""
            }`}
            aria-hidden
          />
        </Link>
      )}
    </article>
  );
}
