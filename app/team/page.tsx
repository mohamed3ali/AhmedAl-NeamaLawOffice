"use client";

import { Reveal } from "@/components/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { useLanguage } from "@/context/LanguageContext";
import { lawyers } from "@/lib/data/lawyers";

export default function TeamPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-28">
      <div className="mx-auto max-w-7xl px-4 pb-12 md:px-8">
        <Reveal>
          <h1
            className={`mb-12 text-center text-4xl text-parchment md:text-5xl ${
              locale === "ar" ? "font-arabic" : "font-latin"
            }`}
          >
            {t.team.title}
          </h1>
        </Reveal>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {lawyers.map((lawyer, i) => (
            <Reveal key={lawyer.id} delay={i * 0.05}>
              <TeamCard lawyer={lawyer} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
