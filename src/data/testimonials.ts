export type TestimonialCard = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
};

export type SimpleTestimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
};

// Testimonials for the home page carousel
export const testimonialsCards: TestimonialCard[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content: "Endustry Plant transformed our vision into a fully functional SaaS platform in just 8 weeks. Their expertise in modern web technologies and agile methodology exceeded our expectations.",
    avatar: "/api/placeholder/64/64"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "The MVP they built for us helped us secure $2M in seed funding. The code quality, performance, and scalability considerations were outstanding from day one.",
    avatar: "/api/placeholder/64/64"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Founder",
    company: "GreenTech Solutions",
    content: "Working with Endustry Plant was a game-changer for our startup. They delivered a beautiful, responsive website that perfectly captured our brand and drove significant user engagement.",
    avatar: "/api/placeholder/64/64"
  },
  {
    id: "4",
    name: "David Kim",
    role: "CTO",
    company: "DataFlow Corp",
    content: "Their custom AI integration saved us months of development time and countless hours of research. The solution seamlessly integrates with our existing systems and has improved our operational efficiency by 40%.",
    avatar: "/api/placeholder/64/64"
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "Creative Agency Pro",
    content: "The mobile app they developed for us has received rave reviews on both iOS and Android. The attention to detail in the UI/UX design and the smooth performance has delighted our users.",
    avatar: "/api/placeholder/64/64"
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Operations Manager",
    company: "LogiTech Industries",
    content: "Endustry Plant's web design services created a professional online presence that truly represents our brand. The SEO optimization and fast loading times have significantly improved our online visibility.",
    avatar: "/api/placeholder/64/64"
  }
];

// Simple testimonials for other pages (1-2 per page)
export const simpleTestimonials: SimpleTestimonial[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Startup Founder",
    company: "NextGen Apps",
    content: "Endustry Plant delivered our MVP ahead of schedule with exceptional quality. Their communication was transparent throughout the project."
  },
  {
    id: "2",
    name: "Maria Gonzalez",
    role: "Product Owner",
    company: "InnovateCorp",
    content: "The team's technical expertise and problem-solving skills are impressive. They built exactly what we needed and more."
  },
  {
    id: "3",
    name: "Robert Davis",
    role: "Engineering Lead",
    company: "ScaleTech",
    content: "Outstanding code quality and modern architecture. The solution they provided has scaled beautifully with our growing user base."
  },
  {
    id: "4",
    name: "Jennifer Lee",
    role: "Creative Director",
    company: "DesignHub",
    content: "Their design sensibility is top-notch. They created a user experience that our clients absolutely love."
  }
];

// Get random testimonials for pages
export const getRandomTestimonials = (count: number = 2): SimpleTestimonial[] => {
  const shuffled = [...simpleTestimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};