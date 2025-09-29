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
    <section className="py-16 px-15p bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 mb-4">
            <Quote className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Client Feedback</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold font-fjalla gradient-text mb-4">
            Client Testimonials
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-rubik max-w-2xl mx-auto">
            What our valued clients have to say about working with us
          </p>
        </div>

        <div className={`grid gap-8 ${count === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'md:grid-cols-2'}`}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 p-8 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/5 transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-700/50 backdrop-blur-sm"
            >
              {/* Card decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                <Quote className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-100 dark:text-gray-200 font-rubik leading-relaxed text-base italic relative pl-2">
                      <span className="absolute -left-2 -top-1 text-4xl text-blue-200 dark:text-blue-800 font-serif leading-none">"</span>
                      {testimonial.content}
                      <span className="text-4xl text-blue-200 dark:text-blue-800 font-serif leading-none absolute -bottom-2 right-0">"</span>
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                  <p className="font-bold font-fjalla text-gray-900 dark:text-gray-100 text-base mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-rubik font-medium text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 font-rubik text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators for simple testimonials */}
        {count === 2 && (
          <div className="mt-12 text-center">
            <div className="flex justify-center items-center gap-6 opacity-70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Verified Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Real Clients</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SimpleTestimonials;