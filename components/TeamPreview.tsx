"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { useLanguage } from "@/context/LanguageContext";
import { featuredLawyerIds, getLawyersByIds } from "@/lib/data/lawyers";

export function TeamPreview() {
  const { t, locale } = useLanguage();
  const featured = getLawyersByIds([...featuredLawyerIds]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <Reveal>
        <h2
          className={`mb-12 text-center text-3xl text-parchment md:text-4xl ${
            locale === "ar" ? "font-arabic" : "font-latin"
          }`}
        >
          {t.teamPreview.title}
        </h2>
      </Reveal>
      <div className="grid gap-10 md:grid-cols-3">
        {featured.map((lawyer, i) => (
          <Reveal key={lawyer.id} delay={i * 0.08}>
            <TeamCard lawyer={lawyer} />
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-12 text-center">
        <Link
          href="/team"
          className="font-arabicBody inline-flex border border-gold px-8 py-3 text-sm text-gold transition hover:bg-gold hover:text-ink"
        >
          {t.teamPreview.viewAll}
        </Link>
      </Reveal>
    </section>
  );
}
