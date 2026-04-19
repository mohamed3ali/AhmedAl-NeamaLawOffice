"use client";

import { useForm } from "react-hook-form";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_EMAIL } from "@/lib/contact";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  caseType: string;
  message: string;
};

export function ContactForm() {
  const { t, locale } = useLanguage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { caseType: "" },
  });

  const onSubmit = (data: FormValues) => {
    const subject =
      locale === "ar"
        ? `[تواصل من الموقع] ${data.caseType} — ${data.name}`
        : `[Website contact] ${data.caseType} — ${data.name}`;
    const body =
      locale === "ar"
        ? `الاسم: ${data.name}\nالبريد: ${data.email}\nالهاتف: ${data.phone}\nنوع القضية: ${data.caseType}\n\n${data.message}`
        : `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMatter: ${data.caseType}\n\n${data.message}`;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 border border-gold/20 bg-navy-muted/60 p-6 md:p-8"
      noValidate
    >
      <div>
        <label htmlFor="name" className="font-arabicBody mb-1 block text-sm text-parchment/80">
          {t.contact.name}
        </label>
        <input
          id="name"
          className="font-arabicBody w-full border border-gold/25 bg-navy/80 px-4 py-3 text-parchment outline-none ring-gold/40 focus:border-gold/50 focus:ring-1"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">
            {locale === "ar" ? "مطلوب" : "Required"}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="font-arabicBody mb-1 block text-sm text-parchment/80">
          {t.contact.email}
        </label>
        <input
          id="email"
          type="email"
          className="font-arabicBody w-full border border-gold/25 bg-navy/80 px-4 py-3 text-parchment outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400">
            {locale === "ar" ? "مطلوب" : "Required"}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="font-arabicBody mb-1 block text-sm text-parchment/80">
          {t.contact.phone}
        </label>
        <input
          id="phone"
          type="tel"
          className="font-arabicBody w-full border border-gold/25 bg-navy/80 px-4 py-3 text-parchment outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-400">
            {locale === "ar" ? "مطلوب" : "Required"}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="caseType" className="font-arabicBody mb-1 block text-sm text-parchment/80">
          {t.contact.caseType}
        </label>
        <select
          id="caseType"
          className="font-arabicBody w-full border border-gold/25 bg-navy/80 px-4 py-3 text-parchment outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
          {...register("caseType", { required: true })}
        >
          <option value="">{t.contact.selectPlaceholder}</option>
          {t.contact.caseTypes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.caseType && (
          <p className="mt-1 text-xs text-red-400">
            {locale === "ar" ? "مطلوب" : "Required"}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="font-arabicBody mb-1 block text-sm text-parchment/80">
          {t.contact.message}
        </label>
        <textarea
          id="message"
          rows={5}
          className="font-arabicBody w-full resize-y border border-gold/25 bg-navy/80 px-4 py-3 text-parchment outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">
            {locale === "ar" ? "مطلوب" : "Required"}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="font-arabicBody w-full border border-gold bg-gold py-3 text-sm font-medium text-ink transition hover:bg-gold/90"
      >
        {t.contact.submit}
      </button>
      <p className="font-arabicBody text-center text-xs text-parchment/55">
        {locale === "ar"
          ? `يتم توجيه الرسالة إلى بريد المكتب: ${CONTACT_EMAIL}`
          : `Your email app will open with a message addressed to: ${CONTACT_EMAIL}`}
      </p>
    </form>
  );
}
