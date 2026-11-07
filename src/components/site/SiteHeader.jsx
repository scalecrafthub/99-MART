import { useEffect, useState } from 'react';
import { MapPin, Menu, X } from 'lucide-react';
import { business } from '@/lib/siteData';

const links = [
  { label: 'What we stock', href: '#stock' },
  { label: 'Plan your visit', href: '#visit' },
  { label: 'Find us', href: '#contact' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-border bg-background/90 backdrop-blur-md'
          : 'border-transparent bg-background/70 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="99 Mart, home">
          <span className="flex h-9 w-9 items-center justify-center border border-foreground/25 font-heading text-sm font-semibold tracking-tight">
            99
          </span>
          <span className="leading-none">
            <span className="block font-heading text-sm font-semibold uppercase tracking-[0.3em]">
              Mart
            </span>
            <span className="mt-1 hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Household goods · Pharenda
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 bg-primary px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-foreground sm:inline-flex"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Get directions
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col" aria-label="Sections">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-4 text-sm text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex items-center justify-center gap-2 bg-primary px-5 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-primary-foreground"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Get directions
          </a>
        </div>
      )}
    </header>
  );
}