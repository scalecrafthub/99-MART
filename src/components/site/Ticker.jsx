import { Star } from 'lucide-react';
import { tickerItems } from '@/lib/siteData';

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {tickerItems.map((item) => (
        <span
          key={item}
          className="flex items-center gap-5 px-5 py-3 font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground"
        >
          <Star className="h-2.5 w-2.5 fill-current opacity-70" aria-hidden="true" />
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="ticker overflow-hidden border-y border-primary/30 bg-primary">
      <div className="flex w-max ticker-track" aria-hidden="true">
        <Row />
        <Row />
      </div>
      <p className="sr-only">
        Stocked daily · Wholesale prices · Open 9 AM to 10 PM · Rated 4.8 from over 430 customer
        reviews.
      </p>
    </div>
  );
}