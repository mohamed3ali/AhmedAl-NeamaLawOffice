"use client";

import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  /** Home hero stays visually dark — use light chrome so borders/focus match the bar */
  onDarkHero?: boolean;
};

export function ThemeToggle({ onDarkHero }: Props = {}) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const isDark = theme === "dark";

  const chrome =
    onDarkHero === true
      ? "text-[#F5F0E8] hover:bg-white/10"
      : "text-parchment hover:bg-gold/10";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded border border-gold/40 transition hover:border-gold/60 ${chrome}`}
      aria-label={isDark ? t.nav.themeUseLight : t.nav.themeUseDark}
      title={isDark ? t.nav.themeUseLight : t.nav.themeUseDark}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-gold" aria-hidden />
      ) : (
        <Moon className="h-4 w-4 text-gold" aria-hidden />
      )}
    </button>
  );
}
