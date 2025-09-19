export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  features: string[];
  challenges: string[];
  tech: string[];
  status: string;
  liveUrl: string;
  sourceUrl?: string;
  images?: string[];
  date: string;
}

export const projects: Project[] = [
  {
    id: "study-abroad",
    title: "Study Abroad",
    description: "Personalized learning platform powered by advanced AI algorithms for adaptive education.",
    detailedDescription: "The Study Abroad platform revolutionizes online education by leveraging cutting-edge AI technology to create personalized learning experiences. Our system analyzes individual student performance, learning patterns, and preferences to deliver customized curriculum paths that optimize knowledge retention and engagement. The platform features interactive lessons, real-time assessments, and adaptive content delivery that adjusts difficulty based on student progress.",
    features: [
      "AI-powered personalized learning paths",
      "Real-time performance analytics",
      "Interactive multimedia content",
      "Progress tracking and reporting",
      "Mobile-responsive design",
      "Multi-language support",
      "Integration with popular learning management systems"
    ],
    challenges: [
      "Implementing complex AI algorithms for personalization",
      "Ensuring data privacy and security",
      "Optimizing performance for large-scale usage",
      "Creating engaging user interfaces"
    ],
    tech: ["React", "Node.js", "OpenAI", "MongoDB", "Express", "TensorFlow"],
    status: "Live",
    liveUrl: "https://arhaminternational.in/",
    sourceUrl: "#",
    images: [],
    date: "2023"
  },
  {
    id: "creative-studio-agency",
    title: "Creative Studio Agency",
    description: "Build a Create studio Agency website from Scratch in under 7 days",
    detailedDescription: "A comprehensive digital presence for a creative studio agency, built from the ground up in just 7 days. The website showcases the agency's portfolio, services, and creative process through an immersive and interactive design. Features include dynamic animations, portfolio galleries, client testimonials, and a streamlined contact system that converts visitors into clients.",
    features: [
      "Stunning portfolio showcase",
      "Interactive animations and transitions",
      "Client testimonial system",
      "Service pricing calculator",
      "Contact form with project inquiry",
      "Blog and case study sections",
      "SEO optimized content"
    ],
    challenges: [
      "Meeting tight 7-day deadline",
      "Creating compelling visual design",
      "Implementing complex animations",
      "Ensuring cross-browser compatibility"
    ],
    tech: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Live",
    liveUrl: "https://stonepaperscissors.in/",
    sourceUrl: "#",
    images: [],
    date: "2023"
  },
  {
    id: "dreams-in-frames",
    title: "Dreams in Frames",
    description: "A wedding photography website showcasing stunning portfolios and seamless booking experiences.",
    detailedDescription: "Dreams in Frames is a premium wedding photography website that combines breathtaking visual storytelling with seamless booking functionality. The platform allows couples to explore photographer portfolios, book services, and manage their wedding photography journey from inquiry to delivery. Advanced features include online galleries, client portals, and automated workflow management.",
    features: [
      "Online portfolio galleries",
      "Automated booking system",
      "Client portal for image access",
      "Package customization",
      "Calendar integration",
      "Payment processing",
      "Email notifications and reminders"
    ],
    challenges: [
      "Managing large image files efficiently",
      "Creating intuitive booking flow",
      "Ensuring fast loading times",
      "Implementing secure payment processing"
    ],
    tech: ["TailwindCSS", "Next.js", "Supabase", "GSAP", "Stripe"],
    status: "Live",
    liveUrl: "https://www.dreamsinframes.in/",
    sourceUrl: "#",
    images: [],
    date: "2023"
  },
  {
    id: "webwoon",
    title: "Webwoon",
    description: "A new age tool that merges Instagram and Pinterest to create a unique social media experience.",
    detailedDescription: "Webwoon is an innovative social media platform that bridges the gap between Instagram's storytelling and Pinterest's visual discovery. Users can create, curate, and share visual content with enhanced interaction features. The platform features advanced image processing, social networking capabilities, and monetization tools for content creators.",
    features: [
      "Visual content creation tools",
      "Social networking features",
      "Advanced image processing",
      "Content monetization",
      "Cross-platform sharing",
      "Analytics dashboard",
      "Community building tools"
    ],
    challenges: [
      "Developing unique user experience",
      "Managing large volumes of media content",
      "Implementing real-time features",
      "Scaling for growing user base"
    ],
    tech: ["React Native", "Next.js", "TailwindCSS", "Stripe", "AWS"],
    status: "Prototype",
    liveUrl: "#",
    sourceUrl: "#",
    images: [],
    date: "2024"
  },
  {
    id: "bijnis",
    title: "Bijnis",
    description: "India's leading digital platforms where retailers can buy clothing and footwear products at wholesale prices.",
    detailedDescription: "Bijnis is India's premier B2B e-commerce platform connecting retailers with wholesale suppliers of clothing and footwear. The platform streamlines the procurement process with advanced search filters, bulk ordering capabilities, and real-time inventory tracking. Features include vendor management, order tracking, and comprehensive analytics for both buyers and sellers.",
    features: [
      "Advanced product search and filtering",
      "Bulk ordering system",
      "Real-time inventory tracking",
      "Vendor management dashboard",
      "Order tracking and history",
      "Payment processing and escrow",
      "Analytics and reporting"
    ],
    challenges: [
      "Managing complex B2B relationships",
      "Ensuring product authenticity",
      "Handling large-scale transactions",
      "Building trust in digital marketplace"
    ],
    tech: ["React Native", "Next.js", "TailwindCSS", "Stripe", "PostgreSQL"],
    status: "Prototype",
    liveUrl: "https://play.google.com/store/apps/details?id=com.shoekonnect.bizcrum&pli=1",
    sourceUrl: "#",
    images: [],
    date: "2024"
  },
  {
    id: "veera-health",
    title: "Veera Health",
    description: "Veera Health, the world's largest online PCOS clinic, specialising in PCOS, weight loss management, and hormonal health treatments.",
    detailedDescription: "Veera Health is the world's leading digital clinic for PCOS treatment and hormonal health management. The platform offers comprehensive care through telemedicine, personalized treatment plans, and continuous monitoring. Features include AI-powered symptom tracking, virtual consultations, medication management, and educational content about PCOS and hormonal health.",
    features: [
      "AI-powered symptom tracking",
      "Virtual consultations with specialists",
      "Personalized treatment plans",
      "Medication management system",
      "Educational content library",
      "Progress monitoring dashboard",
      "Emergency support features"
    ],
    challenges: [
      "Ensuring medical data privacy and compliance",
      "Integrating with healthcare systems",
      "Providing accurate medical information",
      "Scaling telemedicine services"
    ],
    tech: ["React Native", "Next.js", "TailwindCSS", "Stripe", "HIPAA-compliant backend"],
    status: "Live",
    liveUrl: "https://play.google.com/store/apps/details?id=com.veerahealth.pcosapp",
    sourceUrl: "#",
    images: [],
    date: "2024"
  }
];

export const getProjectById = (id: string) => projects.find(p => p.id === id);