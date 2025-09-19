import { useEffect, useState } from 'react';
import { getRandomTestimonials, SimpleTestimonial } from '@/data/testimonials';
import { Quote } from 'lucide-react';

interface SimpleTestimonialsProps {
  count?: number;
}

const SimpleTestimonials = ({ count = 2 }: SimpleTestimonialsProps) => {
  const [testimonials, setTestimonials] = useState<SimpleTestimonial[]>([]);

  useEffect(() => {
    setTestimonials(getRandomTestimonials(count));
  }, [count]);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-12 px-15p bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold font-fjalla text-center mb-8 text-foreground">
          Client Testimonials
        </h3>

        <div className={`grid gap-6 ${count === 1 ? 'grid-cols-1' : 'md:grid-cols-2 gap-8'}`}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <Quote className="w-5 h-5 text-accent mb-3 opacity-60" />
              <p className="text-foreground font-rubik leading-relaxed mb-4 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold font-fjalla text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground font-rubik">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleTestimonials;