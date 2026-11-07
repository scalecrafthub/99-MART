import { Star } from 'lucide-react';
import { business } from '@/lib/siteData';
import Reveal from './Reveal';

const notes = [
  {
    title: 'Stocked daily',
    body: 'Shelves are filled before opening, seven days a week, so the everyday items are there when you need them.',
  },
  {
    title: 'Built for bulk',
    body: 'A wholesaler first — buy a single piece or a full carton at prices that make sense for the whole household.',
  },
  {
    title: 'Service at the counter',
    body: 'Someone is always on hand to help you find the right size, finish or quantity without the run-around.',
  },
];

export default function TrustMonolith() {
  return (
    <section className="bg-[#1A1A1A] text-[#F9F7F2]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#D1D8C4]/80">
                Reputation
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-6 flex items-end gap-4">
                <span className="font-heading text-[clamp(4rem,11vw,6.5rem)] font-medium leading-[0.8] tracking-[-0.04em]">
                  {business.rating}
                </span>
                <div className="pb-2">
                  <div className="flex items-center gap-1" aria-hidden="true">
                    {[0, 1, 2, 3].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-[#D1D8C4] text-[#D1D8C4]" />
                    ))}
                    <Star className="h-4 w-4 fill-[#D1D8C4]/45 text-[#D1D8C4]/45" />
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/55">
                    {business.reviews}+ reviews
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-sm text-[1.0625rem] leading-relaxed text-white/70">
                Shoppers across Pharenda and Tarakulawa keep coming back for the range, the
                prices and the people behind the counter.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <div className="grid gap-px overflow-hidden bg-white/10 sm:grid-cols-3">
              {notes.map((note, index) => (
                <Reveal key={note.title} delay={0.08 + index * 0.06} className="group bg-[#1A1A1A]">
                  <div className="h-full p-6 transition-colors duration-300 group-hover:bg-white/[0.04] sm:p-7">
                    <span
                      className="mb-5 block h-0.5 w-8 bg-accent transition-all duration-300 group-hover:w-14"
                      aria-hidden="true"
                    />
                    <p className="font-heading text-[11px] uppercase tracking-[0.18em] text-[#D1D8C4]">
                      {note.title}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/60">{note.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.25}>
              <p className="mt-6 text-xs uppercase tracking-[0.16em] text-white/40">
                In store · {business.hoursShort} · Pharenda, Maharajganj
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}