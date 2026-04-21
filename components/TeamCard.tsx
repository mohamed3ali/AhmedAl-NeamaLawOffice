"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { nationalityFlag, type Lawyer } from "@/lib/data/lawyers";
import { darkBlurDataURL } from "@/lib/image-blur";

type Props = {
  lawyer: Lawyer;
};

export function TeamCard({ lawyer }: Props) {
  const { locale, t } = useLanguage();
  const name = locale === "ar" ? lawyer.nameAr : lawyer.nameEn;
  const role = locale === "ar" ? lawyer.roleAr : lawyer.roleEn;
  const tags = locale === "ar" ? lawyer.tagsAr : lawyer.tagsEn;
  const specs = locale === "ar" ? lawyer.specialtiesAr : lawyer.specialtiesEn;
  const reg = locale === "ar" ? lawyer.registeredAr : lawyer.registeredEn;
  // Start with the provided local photo if present, otherwise fall back to
  // pravatar. If the image fails to load, we'll try pravatar, then a local
  // placeholder image so the card always shows something sensible.
  const initialSrc =
    lawyer.photoSrc ?? `https://i.pravatar.cc/400?img=${lawyer.avatarImg}`;
  const [src, setSrc] = useState(initialSrc);

  // A last-resort local placeholder (exists in public/images)
  const localPlaceholder = "/images/leader.jpeg";

  return (
    <div className="group perspective-1000 mx-auto h-[440px] w-full max-w-sm">
      <div className="flip-inner relative h-full w-full">
        <div className="flip-face absolute inset-0 flex flex-col items-center overflow-hidden rounded-2xl border border-gold/35 bg-navy-muted p-6 shadow-lg">
          <div className="relative mb-5 h-40 w-40 shrink-0 rounded-full border-2 border-gold p-1">
            <Image
              src={src}
              alt={name}
              fill
              sizes="160px"
              className="rounded-full object-cover"
              style={{ objectPosition: lawyer.imagePosition }}
              loading="lazy"
              placeholder={lawyer.photoSrc ? "empty" : "blur"}
              blurDataURL={lawyer.photoSrc ? undefined : darkBlurDataURL}
              onError={() => {
                // If the current src is a local photo and it fails, try pravatar.
                const pravatar = `https://i.pravatar.cc/400?img=${lawyer.avatarImg}`;
                if (src !== pravatar) {
                  setSrc(pravatar);
                  return;
                }
                // If pravatar also fails, use a local placeholder.
                if (src !== localPlaceholder) {
                  setSrc(localPlaceholder);
                }
              }}
            />
          </div>
          <p className="mb-2 text-2xl" aria-hidden>
            {nationalityFlag[lawyer.nationality]}
          </p>
          <h3
            className={`text-center font-semibold text-parchment ${
              locale === "ar" ? "font-arabic text-lg" : "font-latin text-xl"
            }`}
          >
            {name}
          </h3>
          <p className="font-arabicBody mt-1 text-center text-sm text-gold/90">
            {role}
          </p>
          <p className="font-arabicBody mt-2 text-center text-xs text-parchment/65">
            {lawyer.yearsExp} · {t.team.years}
          </p>
          {reg && (
            <p className="font-arabicBody mt-1 text-center text-xs text-parchment/55">
              {reg}
            </p>
          )}
          <div className="mt-4 flex max-w-full flex-wrap justify-center gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gold/35 bg-navy/80 px-2 py-0.5 text-[11px] text-gold"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="font-arabicBody mt-4 text-center text-[11px] text-parchment/45">
            {locale === "ar" ? "مرّر للتفاصيل" : "Hover for specialties"}
          </p>
        </div>

        <div className="flip-face flip-back absolute inset-0 flex flex-col justify-center rounded-2xl border border-gold/40 bg-navy p-6 text-center shadow-xl">
          <p className="font-arabicBody mb-3 text-xs uppercase tracking-widest text-gold">
            {t.team.specialties}
          </p>
          <ul className="font-arabicBody space-y-2 text-sm text-parchment/85">
            {specs.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
          <p className="font-arabicBody mt-6 text-xs leading-relaxed text-parchment/65">
            {locale === "ar" ? lawyer.bioAr : lawyer.bioEn}
          </p>
        </div>
      </div>
    </div>
  );
}
