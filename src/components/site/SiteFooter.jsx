import { ArrowUpRight, MapPin, Star } from 'lucide-react';
import { business } from '@/lib/siteData';

const explore = [
  { label: 'Home', href: '#home' },
  { label: 'What we stock', href: '#stock' },
  { label: 'Plan your visit', href: '#visit' },
];

export default function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-foreground/25 font-heading text-sm font-semibold">
                99
              </span>
              <span className="font-heading text-sm font-semibold uppercase tracking-[0.3em]">
                Mart
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {business.category} in Tarakulawa, Pharenda — everyday household goods for
              the whole house, seven days a week.
            </p>
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" />
              <span className="font-medium">{business.rating}</span>
              <span className="text-muted-foreground">· {business.reviews} reviews</span>
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <address className="mt-4 not-italic text-sm leading-relaxed">
              {business.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 text-sm text-muted-foreground">
              {business.hours}
              <br />
              {business.hoursTime}
            </p>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-primary"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Get directions
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </p>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer">
              {explore.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Walk in any day between 9 AM and 10 PM — no appointment needed.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 99 Mart · Pharenda, Uttar Pradesh</p>
          <p>Household goods · Wholesale & retail</p>
        </div>
      </div>
    </footer>
  );
}