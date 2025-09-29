import { useState } from 'react';
import { Mail, Send, FileText, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const DetailedCTA = () => {
  const [formData, setFormData] = useState({
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.projectType) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Project inquiry submitted!",
        description: "We'll review your details and get back to you within 24 hours.",
      });
      setFormData({
        email: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 px-15p bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-fjalla gradient-text mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg font-rubik text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project vision. We'll help you turn ideas into reality with our expert development team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Section */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-fjalla font-bold text-lg mb-2">Detailed Project Planning</h3>
                <p className="text-muted-foreground font-rubik">
                  We create comprehensive project roadmaps with clear milestones and deliverables.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-fjalla font-bold text-lg mb-2">Flexible Timelines</h3>
                <p className="text-muted-foreground font-rubik">
                  Whether you need a quick MVP or a full-scale application, we adapt to your schedule.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-fjalla font-bold text-lg mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground font-rubik">
                  Every project goes through rigorous testing and quality checks before delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-background border border-border rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-rubik font-medium mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-rubik font-medium mb-2">
                  Project Type *
                </label>
                <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-app">Web Application</SelectItem>
                    <SelectItem value="mobile-app">Mobile App</SelectItem>
                    <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                    <SelectItem value="saas">SaaS Solution</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="mvp">MVP Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-rubik font-medium mb-2">
                    Budget Range
                  </label>
                  <Select onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-15k">$0K - $5K</SelectItem>
                      <SelectItem value="15k-30k">$5K - $10K</SelectItem>
                      <SelectItem value="30k-50k">$10K - $25K</SelectItem>
                      <SelectItem value="50k-100k">$25K - $50K</SelectItem>
                      <SelectItem value="100k+">$500K+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                
              </div>

              <div>
                <label className="block text-sm font-rubik font-medium mb-2">
                  Project Description
                </label>
                <Textarea
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.email || !formData.projectType}
                className="w-full h-12 bg-accent hover:bg-accent/90"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Start Your Project</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedCTA;