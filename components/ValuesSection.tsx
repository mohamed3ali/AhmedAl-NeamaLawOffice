"use client";

import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const keys = ["v1", "v2", "v3", "v4"] as const;

export function ValuesSection() {
  const { t, locale } = useLanguage();
  const nums =
    locale === "ar"
      ? (["٠١", "٠٢", "٠٣", "٠٤"] as const)
      : (["01", "02", "03", "04"] as const);

  return (
    <section className="bg-navy-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <h2
            className={`mb-12 text-center text-3xl text-parchment md:text-4xl ${
              locale === "ar" ? "font-arabic" : "font-latin"
            }`}
          >
            {t.values.title}
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {keys.map((k, i) => (
            <Reveal key={k} delay={i * 0.07}>
              <div className="border border-gold/15 bg-navy/60 p-8 transition hover:border-gold/35">
                <p className="font-arabic mb-4 text-5xl text-gold/90">{nums[i]}</p>
                <p
                  className={`text-lg text-parchment ${
                    locale === "ar" ? "font-arabic" : "font-latin"
                  }`}
                >
                  {t.values[k]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
