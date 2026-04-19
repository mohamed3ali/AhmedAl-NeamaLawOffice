"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BRANDING } from "@/lib/branding";
import { CONTACT_EMAIL } from "@/lib/contact";
import { services } from "@/lib/data/services";

export function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer className="border-t border-gold/15 bg-navy-muted">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <p
            className={`text-2xl text-parchment ${
              locale === "ar" ? "font-arabic" : "font-latin"
            }`}
          >
            {locale === "ar" ? BRANDING.siteNameAr : BRANDING.siteNameEn}
          </p>
          <p
            className={`mt-1 text-sm tracking-wide text-gold ${
              locale === "ar" ? "font-latin" : "font-arabic"
            }`}
          >
            {locale === "ar" ? BRANDING.siteNameEn : BRANDING.siteNameAr}
          </p>
          <p className="font-arabicBody mt-4 max-w-xs text-sm leading-relaxed text-parchment/65">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="font-arabicBody mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            {t.footer.quickLinks}
          </h4>
          <ul className="space-y-2 text-sm text-parchment/75">
            <li>
              <Link href="/about" className="hover:text-gold">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-gold">
                {t.nav.team}
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gold">
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-arabicBody mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            {t.footer.practice}
          </h4>
          <ul className="space-y-2 text-sm text-parchment/75">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/services#${s.id}`}
                  className="hover:text-gold"
                >
                  {locale === "ar" ? s.titleAr : s.titleEn}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-arabicBody mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            {t.contact.infoTitle}
          </h4>
          <p className="font-arabicBody text-sm text-parchment/80">
            <a href="tel:+97455935310" className="hover:text-gold">
              +974 5593 5310
            </a>
          </p>
          <p className="font-arabicBody mt-3 text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="break-all text-parchment/80 hover:text-gold"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="font-arabicBody mt-2 text-sm text-parchment/65">
            {locale === "ar" ? "الدوحة، دولة قطر" : "Doha, State of Qatar"}
          </p>
        </div>
      </div>

      <div className="border-t border-gold/10 py-6 text-center">
        <p className="font-arabicBody text-xs text-parchment/45">
          © {new Date().getFullYear()}{" "}
          {locale === "ar" ? BRANDING.officeFullAr : BRANDING.officeFullEn}.{" "}
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
