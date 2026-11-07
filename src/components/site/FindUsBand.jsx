import { MapPin, Navigation } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { business, photos } from '@/lib/siteData';
import Reveal from './Reveal';

export default function FindUsBand() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1A1A1A]">
      <Image
        src={photos.rugs}
        alt="Racks of colourful floor mats and rugs inside 99 Mart"
        className="absolute inset-0 h-full w-full object-cover scale-105"
        fittingType="fill"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/80 to-[#1A1A1A]/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 left-0 w-1.5 bg-accent sm:w-2"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#D1D8C4]">
            Find us in Tarakulawa
          </p>
          <h2 className="mt-5 max-w-lg font-heading text-[clamp(1.9rem,4.4vw,3rem)] font-medium leading-[1.05] tracking-[-0.02em] text-[#F9F7F2]">
            Right on the main road, open till 10 pm.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            {business.address}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F9F7F2] px-7 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#1A1A1A] transition-colors hover:bg-[#D1D8C4]"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get directions
            </a>
            <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/70">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {business.hoursShort}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}