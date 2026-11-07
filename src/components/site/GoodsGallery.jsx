import { Boxes, CookingPot, Gift, ShoppingBasket, SprayCan, Utensils } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { photos } from '@/lib/siteData';
import Reveal from './Reveal';

const departments = [
  {
    icon: CookingPot,
    name: 'Kitchenware & cookware',
    note: 'Pans, pressure cookers, serving pots and everyday cookware.',
  },
  {
    icon: Utensils,
    name: 'Dining & utensils',
    note: 'Steel thalis, plates, cutlery, tumblers and serving sets.',
  },
  {
    icon: SprayCan,
    name: 'Cleaning & laundry',
    note: 'Soaps, detergents, mops, brushes and floor care.',
  },
  {
    icon: Boxes,
    name: 'Storage & organisers',
    note: 'Containers, racks, bins and baskets for every corner.',
  },
  {
    icon: ShoppingBasket,
    name: 'Daily household',
    note: 'Plastics, water bottles and the small things you run out of.',
  },
  {
    icon: Gift,
    name: 'Gifting & festive',
    note: 'Serving sets and occasional buys for the season.',
  },
];

export default function GoodsGallery() {
  return (
    <section id="stock" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="group relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={photos.trays}
                  alt="Stacked mustard and navy serving trays wrapped and ready for sale at 99 Mart"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fittingType="fill"
                />
                <span className="absolute left-0 top-0 bg-accent px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground">
                  Fresh stock
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Serving trays, straight off the shelf
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                What we stock
              </p>
              <h2 className="mt-5 font-heading text-[clamp(1.9rem,4vw,2.9rem)] font-medium leading-[1.05] tracking-[-0.02em]">
                A well-stocked shop for the whole house.
              </h2>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Household goods, chosen the practical way: the pieces a home actually wears
                through, in the quantities a family actually buys.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
              {departments.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.name} delay={0.04 * index} className="bg-background">
                    <div className="group h-full p-5 transition-colors duration-300 hover:bg-card sm:p-6">
                      <span className="inline-flex h-9 w-9 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-heading text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 group-hover:text-primary">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.note}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}