"use client";

import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_EMAIL } from "@/lib/contact";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-28">
      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <Reveal>
          <h1
            className={`mb-12 text-4xl text-parchment md:text-5xl ${
              locale === "ar" ? "font-arabic" : "font-latin"
            }`}
          >
            {t.contact.title}
          </h1>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.06}>
            <ContactForm />
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="border border-gold/20 bg-navy-muted/50 p-8">
                <h2
                  className={`mb-6 text-xl text-gold ${
                    locale === "ar" ? "font-arabic" : "font-latin"
                  }`}
                >
                  {t.contact.infoTitle}
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <a
                        href="tel:+97455935310"
                        className="font-latin text-2xl text-parchment hover:text-gold"
                      >
                        +974 5593 5310
                      </a>
                      <p className="font-arabicBody mt-2 text-sm text-parchment/65">
                        55935310
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="font-latin break-all text-parchment hover:text-gold"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <p className="font-arabicBody text-parchment/80">
                      {locale === "ar"
                        ? "الدوحة، دولة قطر"
                        : "Doha, State of Qatar"}
                    </p>
                  </div>
                  <p className="font-arabicBody border-t border-gold/10 pt-6 text-parchment/85">
                    {t.contact.person}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <GoogleMapEmbed openLabel={t.contact.openInMaps} />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
