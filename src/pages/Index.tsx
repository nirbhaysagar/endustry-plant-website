import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import Facts from '@/components/Facts';
import Services from '@/components/Services';
import SimpleCTA from '@/components/SimpleCTA';
import Projects from '@/components/Projects';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import DetailedCTA from '@/components/DetailedCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Facts />
        <Services />
        <SimpleCTA />
        <Projects />
        <TestimonialsCarousel />
        <DetailedCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
