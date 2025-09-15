import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import Facts from '@/components/Facts';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Facts />
        <Services />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
