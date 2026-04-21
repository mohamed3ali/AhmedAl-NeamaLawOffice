"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { BRANDING } from "@/lib/branding";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/team", key: "team" as const },
  { href: "/services", key: "services" as const },
  { href: "/contact", key: "contact" as const },
];

export function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /** The hero section now supports light theme properly, so we don't need hardcoded text colors anymore. */
  const onHero = pathname === "/" && !scrolled;

  const navClass = scrolled
    ? "bg-navy/95 border-b border-gold/15 shadow-lg backdrop-blur-md"
    : "bg-transparent";

  const linkInactive = "text-parchment/85 hover:text-parchment";
  const localeInactive = "text-parchment/70 hover:text-parchment";

  const menuIconClass = "inline-flex rounded border border-gold/40 p-2 text-parchment lg:hidden";

  const primaryName = locale === "ar" ? BRANDING.siteNameAr : BRANDING.siteNameEn;
  const secondaryName = locale === "ar" ? BRANDING.siteNameEn : BRANDING.siteNameAr;

  const titlePrimaryClass =
    locale === "ar"
      ? "font-arabic text-2xl font-semibold tracking-wide text-parchment md:text-3xl"
      : "font-latin text-2xl font-semibold tracking-wide text-parchment md:text-3xl";

  const titleSecondaryClass =
    locale === "ar"
      ? "font-latin text-xs tracking-wide text-gold/90"
      : "font-arabic text-xs tracking-wide text-gold/90";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${navClass}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
          <Link href="/" className="group flex flex-col gap-0.5">
            <span
              className={titlePrimaryClass}
              style={{ fontFeatureSettings: locale === "ar" ? '"liga" 1' : undefined }}
            >
              {primaryName}
            </span>
            <span className={titleSecondaryClass}>{secondaryName}</span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main"
          >
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`nav-link-gold font-arabicBody text-sm transition-colors ${
                    active ? "text-gold" : linkInactive
                  }`}
                >
                  {t.nav[l.key]}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle onDarkHero={onHero} />
            <div className="flex rounded-full border border-gold/40 p-0.5">
              <button
                type="button"
                onClick={() => setLocale("ar")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  locale === "ar"
                    ? "bg-gold text-ink"
                    : localeInactive
                }`}
                aria-pressed={locale === "ar"}
              >
                عربي
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  locale === "en"
                    ? "bg-gold text-ink"
                    : localeInactive
                }`}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
            </div>

            <Link
              href="/contact"
              className="font-arabicBody hidden border border-gold px-4 py-2 text-sm text-gold transition-colors hover:bg-gold hover:text-ink md:inline-block"
            >
              {t.nav.cta}
            </Link>

            <button
              type="button"
              className={menuIconClass}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-5 w-5 shrink-0" aria-hidden />
              ) : (
                <Menu className="h-5 w-5 shrink-0" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black lg:hidden"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,320px)] flex-col border-l border-gold/20 bg-navy p-6 shadow-2xl lg:hidden"
            >
              <div className="mb-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded border border-gold/30 p-2 text-parchment"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="nav-link-gold font-arabicBody border-b border-gold/10 py-3 text-lg text-parchment"
                  >
                    {t.nav[l.key]}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 border border-gold py-3 text-center font-arabicBody text-gold"
                  onClick={() => setOpen(false)}
                >
                  {t.nav.cta}
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
