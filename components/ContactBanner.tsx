"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export function ContactBanner() {
  const { t, locale } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-navy-muted to-navy py-20">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <Reveal>
          <h2
            className={`mb-8 text-3xl text-gold md:text-4xl ${
              locale === "ar" ? "font-arabic" : "font-latin"
            }`}
          >
            {t.contactBanner.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-latin mb-8 text-2xl tracking-wide text-parchment">
            <a href="tel:+97455935310" className="hover:text-gold">
              5593 5310
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <Link
            href="/contact"
            className="font-arabicBody inline-flex border border-gold bg-transparent px-10 py-3 text-sm text-gold transition hover:bg-gold hover:text-ink"
          >
            {t.contactBanner.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
