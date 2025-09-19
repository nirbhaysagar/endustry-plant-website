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
    <section className="py-20 px-15p bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-fjalla gradient-text mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl font-rubik text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div
          ref={containerRef}
          className="overflow-hidden cursor-pointer"
        >
          <div
            ref={wrapperRef}
            className="flex gap-8"
            style={{ width: 'max-content' }}
          >
            {testimonialsCards.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="flex-shrink-0 w-96 bg-card hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Quote className="w-6 h-6 text-accent mb-3 opacity-60" />
                      <p className="text-card-foreground font-rubik leading-relaxed mb-4">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <p className="font-semibold font-fjalla text-card-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground font-rubik">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;