import { ArrowRight, MapPin, Star } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { business, photos } from '@/lib/siteData';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <div className="lg:col-span-6 lg:pt-4">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 border border-border bg-card px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/80">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Open now · closes 10 pm
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-heading text-[clamp(2.6rem,7.4vw,4.7rem)] font-semibold leading-[0.94] tracking-[-0.04em]">
              Your daily shopping{' '}
              <span className="relative inline-block">
                <span className="relative z-10">destination</span>
                <span
                  className="absolute inset-x-0 bottom-1.5 z-0 h-3 -skew-x-6 bg-accent/45"
                  aria-hidden="true"
                />
              </span>{' '}
              in Pharenda.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              Open every day from 9 AM to 10 PM, with top-quality household essentials,
              friendly counter service and prices that stay sensible — right in the heart of
              Tarakulawa.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-7 inline-flex flex-wrap items-center gap-x-4 gap-y-2 border border-border bg-card px-4 py-3">
              <span className="flex items-center gap-1" aria-hidden="true">
                {[0, 1, 2, 3].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
                <Star className="h-3.5 w-3.5 fill-accent/40 text-accent/40" />
              </span>
              <span className="font-heading text-sm font-semibold">{business.rating}</span>
              <span className="h-4 w-px bg-border" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">
                {business.reviews}+ customer reviews
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[0_10px_30px_-14px_hsl(var(--primary))] transition-all hover:-translate-y-0.5 hover:bg-foreground"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Get directions
              </a>
              <a
                href="#stock"
                className="group inline-flex items-center justify-center gap-2 border border-foreground/15 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground hover:bg-card"
              >
                See what we stock
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <div className="relative pb-10 sm:pb-0">
              <span
                className="absolute -left-2 -top-2 h-20 w-20 border-2 border-accent/60 sm:h-28 sm:w-28"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={photos.cookware}
                  alt="Stainless steel plates, bowls and non-stick pans laid out on the shop floor at 99 Mart"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  fittingType="fill"
                />
                <span className="absolute left-0 top-0 bg-primary px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                  In store today
                </span>
              </div>
              <div className="absolute -bottom-2 left-4 w-36 overflow-hidden border-4 border-background bg-muted shadow-2xl sm:-bottom-10 sm:left-auto sm:right-6 sm:w-44">
                <Image
                  src={photos.rugs}
                  alt="Stacks of patterned floor mats and rugs in the store"
                  className="aspect-square h-full w-full object-cover"
                  fittingType="fill"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}