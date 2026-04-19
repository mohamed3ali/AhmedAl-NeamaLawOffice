"use client";

import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/lib/data/services";

export function ServicesPreview() {
  const { t, locale } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <Reveal>
        <h2
          className={`mb-10 text-center text-3xl text-parchment md:text-4xl ${
            locale === "ar" ? "font-arabic" : "font-latin"
          }`}
        >
          {t.servicesPreview.title}
        </h2>
      </Reveal>

      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:snap-none md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.06} className="min-w-[85%] md:min-w-0">
            <ServiceCard
              service={s}
              locale={locale}
              readMore={t.servicesPreview.readMore}
              compact
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
