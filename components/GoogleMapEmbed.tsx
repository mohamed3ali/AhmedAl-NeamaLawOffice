import { MAPS_EMBED_URL, MAPS_PAGE_URL } from "@/lib/contact";

type Props = {
  openLabel: string;
};

export function GoogleMapEmbed({ openLabel }: Props) {
  return (
    <div className="overflow-hidden border border-gold/25 bg-navy/40">
      <iframe
        title={openLabel}
        src={MAPS_EMBED_URL}
        className="aspect-[16/10] min-h-[280px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="border-t border-gold/15 p-3 text-center">
        <a
          href={MAPS_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-arabicBody text-sm text-gold underline-offset-4 hover:underline"
        >
          {openLabel}
        </a>
      </div>
    </div>
  );
}
