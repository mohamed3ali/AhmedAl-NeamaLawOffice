"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
function toArabicIndic(n: number) {
  return String(n)
    .split("")
    .map((d) => AR_DIGITS[Number(d)] ?? d)
    .join("");
}

function useCountTo(
  end: number,
  duration: number,
  enabled: boolean,
  reduced: boolean
) {
  const [v, setV] = useState(reduced ? end : 0);
  useEffect(() => {
    if (reduced) {
      setV(end);
      return;
    }
    if (!enabled) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      setV(Math.floor(p * end));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, enabled, reduced]);
  return v;
}

export function StatsCounter() {
  const { t, locale } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  const y14 = useCountTo(14, 1.2, inView, !!reduced);
  const y9 = useCountTo(9, 1.1, inView, !!reduced);
  const y3 = useCountTo(3, 1, inView, !!reduced);

  const items = [
    {
      value: locale === "ar" ? `${toArabicIndic(y14)}+` : `${y14}+`,
      label: t.stats.years,
    },
    {
      value: locale === "ar" ? toArabicIndic(y9) : `${y9}`,
      label: t.stats.lawyers,
    },
    {
      value: locale === "ar" ? toArabicIndic(y3) : `${y3}`,
      label: t.stats.nationalities,
    },
    {
      value:
        locale === "ar" ? "درجات التقاضي المختلفة" : t.stats.statCourts,
      label: locale === "ar" ? "" : t.stats.courts,
    },
  ];

  return (
    <section
      ref={ref}
      className="border-y border-gold/15 bg-navy-muted/80 backdrop-blur-sm"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 md:grid-cols-4 md:px-8">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: reduced ? 0 : i * 0.08, duration: 0.5 }}
            className="text-center"
          >
            <p
              className={`mb-2 text-balance text-2xl leading-snug text-gold md:text-3xl ${
                locale === "ar" ? "font-arabic" : "font-latin"
              }`}
            >
              {it.value}
            </p>
            {it.label ? (
              <p className="font-arabicBody text-sm text-parchment/75">{it.label}</p>
            ) : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
