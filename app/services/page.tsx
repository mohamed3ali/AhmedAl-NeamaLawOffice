"use client";

import { Reveal } from "@/components/Reveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ServiceIcon } from "@/components/ServiceIcon";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/lib/data/services";
import { getLawyersByIds } from "@/lib/data/lawyers";

export default function ServicesPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-28">
      <div className="mx-auto max-w-4xl px-4 pb-12 md:px-8">
        <Reveal>
          <h1
            className={`mb-4 text-4xl text-parchment md:text-5xl ${
              locale === "ar" ? "font-arabic" : "font-latin"
            }`}
          >
            {t.services.title}
          </h1>
        </Reveal>
      </div>

      <div className="mx-auto max-w-5xl space-y-0 px-4 md:px-8">
        {services.map((service, index) => {
          const related = getLawyersByIds(service.lawyerIds);
          const title = locale === "ar" ? service.titleAr : service.titleEn;
          const sub = locale === "ar" ? service.titleEn : service.titleAr;
          const desc = locale === "ar" ? service.descAr : service.descEn;

          return (
            <div key={service.id} id={service.id}>
              {index > 0 && <SectionDivider />}
              <Reveal>
                <article className="border border-gold/15 bg-navy-muted/60 p-8 md:p-10">
                  <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                    <div className="inline-flex shrink-0 rounded-full border border-gold/30 bg-navy/80 p-5 text-gold">
                      <ServiceIcon name={service.icon} className="h-12 w-12 md:h-14 md:w-14" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2
                        className={`mb-2 text-2xl text-parchment md:text-3xl ${
                          locale === "ar" ? "font-arabic" : "font-latin"
                        }`}
                      >
                        {title}
                      </h2>
                      <p
                        className={`mb-6 text-lg text-gold/90 ${
                          locale === "ar" ? "font-latin" : "font-arabic"
                        }`}
                      >
                        {sub}
                      </p>
                      <p className="font-arabicBody text-base leading-relaxed text-parchment/80">
                        {desc}
                      </p>
                      <div className="mt-10 border-t border-gold/10 pt-8">
                        <p className="font-arabicBody mb-4 text-sm uppercase tracking-widest text-gold/90">
                          {t.services.related}
                        </p>
                        <ul className="font-arabicBody flex flex-wrap gap-2 text-sm text-parchment/85">
                          {related.map((l) => (
                            <li
                              key={l.id}
                              className="rounded-full border border-gold/25 bg-navy/80 px-3 py-1"
                            >
                              {locale === "ar" ? l.nameAr : l.nameEn}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
