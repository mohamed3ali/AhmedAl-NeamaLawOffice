"use client";

import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export function WhyUs() {
  const { t, locale } = useLanguage();
  const bullets = t.whyUs.bullets;

  return (
    <section className="border-y border-gold/10 bg-navy py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-8">
        <Reveal>
          <blockquote
            className={`relative border-s-2 border-gold/50 ps-8 text-2xl leading-relaxed text-parchment md:text-3xl ${
              locale === "ar" ? "font-arabic" : "font-latin"
            }`}
          >
            “{t.whyUs.quote}”
          </blockquote>
        </Reveal>
        <div className="space-y-5">
          <Reveal delay={0.1}>
            <h2
              className={`mb-6 text-2xl text-gold ${
                locale === "ar" ? "font-arabic" : "font-latin"
              }`}
            >
              {t.whyUs.title}
            </h2>
          </Reveal>
          {bullets.map((b, i) => (
            <Reveal key={i} delay={0.12 + i * 0.06}>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <p className="font-arabicBody text-parchment/85">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
