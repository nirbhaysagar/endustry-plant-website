import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const SimpleCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you!",
        description: "We'll get back to you soon.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-15p bg-gradient-to-r from-accent/10 to-accent/5">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-fjalla gradient-text mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg font-rubik text-muted-foreground">
            Let's discuss your ideas and bring them to life. Drop us your email and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-12"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting || !email}
            className="h-12 px-8 bg-accent hover:bg-accent/90"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Get Started</span>
              </div>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SimpleCTA;