import SiteHeader from '@/components/site/SiteHeader';
import Ticker from '@/components/site/Ticker';
import Hero from '@/components/site/Hero';
import TrustMonolith from '@/components/site/TrustMonolith';
import GoodsGallery from '@/components/site/GoodsGallery';
import ShopFloor from '@/components/site/ShopFloor';
import VisitSection from '@/components/site/VisitSection';
import FindUsBand from '@/components/site/FindUsBand';
import SiteFooter from '@/components/site/SiteFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <TrustMonolith />
        <GoodsGallery />
        <ShopFloor />
        <VisitSection />
        <FindUsBand />
      </main>
      <SiteFooter />
    </div>
  );
}