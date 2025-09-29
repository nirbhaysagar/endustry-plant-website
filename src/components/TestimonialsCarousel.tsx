import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { testimonialsCards } from '@/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!container || !wrapper) return;

    // Duplicate testimonials for seamless loop
    const duplicateCards = () => {
      const cards = Array.from(wrapper.children) as HTMLElement[];
      cards.forEach(card => {
        const clone = card.cloneNode(true) as HTMLElement;
        wrapper.appendChild(clone);
      });
    };

    duplicateCards();

    // Calculate total width of all cards
    const cards = Array.from(wrapper.children) as HTMLElement[];
    const totalWidth = cards.reduce((width, card) => width + card.offsetWidth + 32, 0); // 32px for gap

    // Create infinite scroll animation
    gsap.set(wrapper, { x: 0 });

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(wrapper, {
      x: -totalWidth / 2, // Move by half because we duplicated
      duration: 30, // Adjust speed here
      ease: 'none',
    });

    // Pause on hover
    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.resume();

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tl.kill();
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-24 px-15p bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-6">
            <Quote className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Client Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-fjalla gradient-text mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl font-rubik text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div
          ref={containerRef}
          className="overflow-hidden cursor-pointer mx-4 md:mx-0"
        >
          <div
            ref={wrapperRef}
            className="flex gap-8"
            style={{ width: 'max-content' }}
          >
            {testimonialsCards.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="flex-shrink-0 w-[420px] bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/5 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-700/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <Avatar className="w-16 h-16 ring-4 ring-white dark:ring-slate-700 shadow-lg">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center">
                        <Quote className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-blue-400 mb-3 opacity-60" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-200 font-rubik leading-relaxed mb-6 text-lg italic relative">
                        <span className="absolute -left-8 -top-2 text-6xl text-blue-200 dark:text-blue-800 font-serif leading-none">"</span>
                        {testimonial.content}
                        <span className="text-6xl text-blue-200 dark:text-blue-800 font-serif leading-none absolute -bottom-4 -right-2">"</span>
                      </p>
                      <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                        <p className="font-bold font-fjalla text-gray-900 dark:text-gray-100 text-lg mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-blue-600 dark:text-blue-400 font-rubik font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 font-rubik text-sm mt-1">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-slate-400 font-rubik text-sm mb-4">
            Trusted by entrepreneurs and businesses across India
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Best in Class Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;