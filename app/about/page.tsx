"use client";

import { Scale, Eye, Target, Heart } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionDivider } from "@/components/SectionDivider";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t, locale } = useLanguage();

  const blocks = [
    {
      icon: Eye,
      title: t.about.visionTitle,
      body: t.about.vision,
    },
    {
      icon: Target,
      title: t.about.missionTitle,
      body: t.about.mission,
    },
    {
      icon: Heart,
      title: t.about.valuesTitle,
      body: t.about.valuesCard,
    },
  ];

  return (
    <div className="pt-28">
      <div className="mx-auto max-w-4xl px-4 pb-8 md:px-8">
        <Reveal>
          <h1
            className={`mb-6 text-4xl text-parchment md:text-5xl ${
              locale === "ar" ? "font-arabic" : "font-latin"
            }`}
          >
            {t.about.title}
          </h1>
        </Reveal>
      </div>

      <section className="mx-auto max-w-4xl px-4 md:px-8">
        <Reveal delay={0.05}>
          <h2
            className={`mb-4 text-2xl text-gold ${
              locale === "ar" ? "font-arabic" : "font-latin"
            }`}
          >
            {t.about.historyTitle}
          </h2>
          <p className="font-arabicBody text-lg leading-relaxed text-parchment/80">
            {t.about.history}
          </p>
        </Reveal>
      </section>

      <SectionDivider />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 md:grid-cols-3 md:px-8">
        {blocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08}>
            <article className="h-full border border-gold/15 bg-navy-muted/70 p-8">
              <b.icon className="mb-4 h-10 w-10 text-gold" strokeWidth={1.25} />
              <h3
                className={`mb-3 text-xl text-parchment ${
                  locale === "ar" ? "font-arabic" : "font-latin"
                }`}
              >
                {b.title}
              </h3>
              <p className="font-arabicBody text-sm leading-relaxed text-parchment/75">
                {b.body}
              </p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-gold/10 bg-navy-muted/50 py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
              <Scale className="h-14 w-14 shrink-0 text-gold/80" strokeWidth={1} />
              <div>
                <p
                  className={`text-xl leading-relaxed text-parchment md:text-2xl ${
                    locale === "ar" ? "font-arabic" : "font-latin"
                  }`}
                >
                  {t.about.confidentiality}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
