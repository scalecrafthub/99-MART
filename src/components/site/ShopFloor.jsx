import { Image } from '@/components/ui/image';
import { photos } from '@/lib/siteData';
import Reveal from './Reveal';

const shots = [
  { src: photos.cookware, label: 'Cookware & steel', tone: 'Steel thalis, bowls, pans' },
  { src: photos.cleaning, label: 'Cleaning & utility', tone: 'Brushes, baskets, mops' },
  { src: photos.rugs, label: 'Mats & rugs', tone: 'Floor coverings, every size' },
  { src: photos.trays, label: 'Trays & storage', tone: 'Serving and shelf stock' },
];

export default function ShopFloor() {
  return (
    <section className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-background/55">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              On the shop floor
            </p>
            <h2 className="mt-4 max-w-md font-heading text-[clamp(1.9rem,4vw,2.9rem)] font-medium leading-[1.02] tracking-[-0.02em]">
              Real shelves. Real stock. Photographed this week.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xs text-sm leading-relaxed text-background/55">
              Everything below is pulled straight from our aisles in Tarakulawa — not a
              catalogue picture.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {shots.map((shot, index) => (
            <Reveal key={shot.label} delay={0.05 * index}>
              <figure className={`group relative overflow-hidden bg-background/10 ${index % 2 === 1 ? 'lg:mt-8' : ''}`}>
                <Image
                  src={shot.src}
                  alt={shot.label}
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                    {shot.label}
                  </p>
                  <p className="mt-1 hidden text-[11px] text-white/70 sm:block">{shot.tone}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}