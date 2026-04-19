import type { Metadata, Viewport } from "next";
import { Cairo, Cormorant_Garamond, El_Messiri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { BRANDING } from "@/lib/branding";

const elMessiri = El_Messiri({
  subsets: ["arabic", "latin"],
  variable: "--font-el-messiri",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0E1A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://alnaama-law.example.com"),
  title: {
    default: `${BRANDING.officeFullAr} | استشارات قانونية في قطر`,
    template: `%s | ${BRANDING.siteNameEn}`,
  },
  description:
    "مكتب محاماة رائد في قطر منذ ٢٠١١ — خبرة في التقاضي المدني والتجاري والجنائي وصياغة العقود وتأسيس الشركات.",
  openGraph: {
    type: "website",
    locale: "ar_QA",
    alternateLocale: ["en_QA"],
    title: BRANDING.officeFullAr,
    description:
      "استشارات قانونية وتمثيل أمام المحاكم في دولة قطر منذ عام ٢٠١١.",
    siteName: BRANDING.officeFullEn,
  },
  twitter: {
    card: "summary_large_image",
    title: BRANDING.officeFullEn,
    description: "Legal consultancy and litigation in Qatar since 2011.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${elMessiri.variable} ${cairo.variable} ${cormorant.variable} min-h-screen font-arabicBody`}
      >
        <StructuredData />
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="min-h-[60vh]">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
