import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { business, peakHours } from '@/lib/siteData';
import Reveal from './Reveal';

const trafficDescription = peakHours
  .map((slot) => `${slot.from} to ${slot.to}: ${slot.label.toLowerCase()}`)
  .join('; ');

export default function VisitSection() {
  return (
    <section id="visit" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Plan your visit
              </p>
              <h2 className="mt-5 font-heading text-[clamp(1.9rem,4vw,2.9rem)] font-medium leading-[1.05] tracking-[-0.02em]">
                Quiet mornings. Busy evenings.
              </h2>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Mornings and afternoons stay quiet and easy to navigate, which makes them
                the best time for a slow, unhurried shop. Evenings, Monday through Saturday,
                are the absolute busiest — plan around them if you are picking up a big order.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-9 border border-border bg-background p-5 sm:p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Foot traffic · 9 AM – 10 PM
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Quieter → Busiest
                  </p>
                </div>

                <div className="mt-5 flex gap-1" aria-hidden="true">
                  {peakHours.map((slot) => (
                    <div key={slot.from} style={{ width: `${slot.width}%` }}>
                      <div
                        className="h-16 rounded-sm transition-all duration-300"
                        style={{
                          backgroundColor: `hsl(var(--primary) / ${slot.intensity / 100})`,
                        }}
                      />
                      <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                        {slot.from}
                      </p>
                      <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-foreground/80">
                        {slot.label}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="sr-only">
                  Foot traffic from 9 AM to 10 PM — {trafficDescription}. Evenings are the
                  busiest, especially Monday through Saturday.
                </p>

                <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                  Busiest on Monday to Saturday evenings, roughly 5 PM to 10 PM. If you are
                  collecting in bulk, a morning visit is the calmer choice.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <Reveal delay={0.06}>
              <div className="border border-border bg-background p-6 sm:p-7">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Opening hours
                </p>
                <p className="mt-2 font-heading text-lg font-medium leading-snug">
                  {business.hours}
                </p>
                <p className="font-heading text-lg font-medium text-primary">
                  {business.hoursTime}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Open all seven days of the week, including Sundays.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="border border-border bg-background p-6 sm:p-7">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Where to find us
                </p>
                <address className="mt-2 not-italic leading-relaxed text-foreground">
                  {business.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-primary"
                >
                  Get directions
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}