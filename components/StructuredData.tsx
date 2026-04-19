import { BRANDING } from "@/lib/branding";
import { CONTACT_EMAIL } from "@/lib/contact";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://alnaama-law.example.com/#legal",
        name: BRANDING.officeFullAr,
        alternateName: BRANDING.officeFullEn,
        url: "https://alnaama-law.example.com",
        areaServed: {
          "@type": "Country",
          name: "Qatar",
        },
        provider: {
          "@type": "Organization",
          name: BRANDING.officeFullEn,
          foundingDate: "2011",
          telephone: "+97455935310",
          email: CONTACT_EMAIL,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Doha",
            addressCountry: "QA",
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
