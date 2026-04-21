"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { ScalesWatermark } from "@/components/ScalesWatermark";
import { darkBlurDataURL } from "@/lib/image-blur";
import { BRANDING } from "@/lib/branding";


export function Hero() {
  const { t, locale } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], reduced ? [0, 0] : [0, 120]);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="/images/law.jpg"
          alt="Al-Neama Law Firm Background"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={darkBlurDataURL}
          className={`object-cover transition-all duration-700 ${isLight ? "brightness-[0.80] opacity-80" : "brightness-[0.35]"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy transition-colors duration-700" />
        <div className="absolute inset-0 bg-gold-mesh opacity-50" />
        <div className="absolute inset-0 bg-grain-dark" />
      </motion.div>

      {/*
        inset-inline-end: مع RTL ينتقل الزخرفة لليسار، مع LTR لليمين — يتوافق مع اتجاه النص
      */}
      {/* <ScalesWatermark
        key={locale}
        className="end-[-5%] top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-y-1/2 md:end-[8%]"
      /> */}

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-32 md:px-8 md:pt-36">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p
            className={`mb-4 text-xs text-gold/90 ${
              locale === "ar"
                ? "font-arabic tracking-wide"
                : "font-latin uppercase tracking-[0.4em]"
            }`}
          >
            {locale === "ar"
              ? `${BRANDING.officeFullAr} · قطر`
              : `${BRANDING.officeFullEn} · Qatar`}
          </p>
          <h1
            className={`mb-6 text-4xl font-semibold leading-tight text-parchment md:text-5xl lg:text-6xl ${
              locale === "ar" ? "font-arabic" : "font-latin"
            }`}
          >
            {t.hero.headline}
          </h1>
          <p className="font-arabicBody mb-10 max-w-xl text-lg text-parchment/80 md:text-xl">
            {t.hero.sub}
          </p>

          <motion.div
            initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{
              transformOrigin: locale === "ar" ? "100% 50%" : "0% 50%",
            }}
            className="mb-12 h-px w-32 bg-gradient-to-r from-gold via-gold/70 to-transparent md:w-48"
          />

          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="font-arabicBody inline-flex border border-gold bg-gold px-8 py-3 text-sm font-medium text-ink transition hover:bg-gold/90"
            >
              {t.hero.cta1}
            </Link>
            <Link
              href="/contact"
              className={`font-arabicBody inline-flex border px-8 py-3 text-sm transition ${
                isLight
                  ? "border-gold/60 text-ink hover:border-gold hover:text-gold"
                  : "border-gold/60 text-parchment hover:border-gold hover:text-gold"
              }`}
            >
              {t.hero.cta2}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
