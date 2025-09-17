import mvpdevelopment from "@/assets/mvpdevelopment.png";
import fullsaas from "@/assets/fullsaas.png";
import webdev2 from "@/assets/webdev2.png";
import webdesign2 from "@/assets/webdesign2.png";
import customintegration from "@/assets/customintegration.png";
import mobileapp from "@/assets/mobileapp.png";

export type Service = {
  slug: string; // URL-friendly identifier
  title: string;
  shortDescription: string;
  longDescription: string[]; // paragraphs
  icon: string; // resolved URL from import
  accent: string; // gradient classes
  highlights: string[];
};

// Centralized services data used by list and detail pages
export const services: Service[] = [
  {
    slug: "mvp-building",
    title: "MVP Building",
    shortDescription: "Rapid prototyping from concept to functional MVP in weeks.",
    longDescription: [
      "We turn raw ideas into validated MVPs quickly, so you can test with real users and iterate with confidence.",
      "Our approach focuses on essential features, technical scalability, and a polished user experience from day one.",
    ],
    icon: mvpdevelopment,
    accent: "from-pink-400 to-purple-600",
    highlights: [
      "Lean scope prioritization",
      "Fast iterations and feedback loops",
      "Foundational architecture for scale",
    ],
  },
  {
    slug: "full-saas-building",
    title: "Full SaaS Building",
    shortDescription: "End-to-end development of scalable SaaS platforms.",
    longDescription: [
      "From multi-tenant design to billing and analytics, we build robust SaaS products ready for growth.",
      "We cover product discovery, UX, backend, infra, and CI/CD with modern best practices.",
    ],
    icon: fullsaas,
    accent: "from-orange-400 to-red-600",
    highlights: [
      "Multi-tenant architecture",
      "Subscriptions, auth, and roles",
      "Observability and DevOps",
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription: "Custom websites built for performance, SEO, and UX.",
    longDescription: [
      "We craft fast, accessible websites optimized for conversions and modern SEO.",
    ],
    icon: webdev2,
    accent: "from-blue-400 to-cyan-600",
    highlights: ["Core Web Vitals", "SSR/SSG options", "SEO & analytics"],
  },
  {
    slug: "web-design",
    title: "Web Design",
    shortDescription: "Minimal and modern UI/UX design that converts.",
    longDescription: [
      "Design systems, wireframes, and high-fidelity prototypes aligned with your brand and goals.",
    ],
    icon: webdesign2,
    accent: "from-purple-400 to-pink-600",
    highlights: ["Design systems", "Prototyping", "Usability testing"],
  },
  {
    slug: "custom-solutions",
    title: "Custom Solutions",
    shortDescription: "Tailored AI integrations and bespoke software solutions.",
    longDescription: [
      "We integrate AI and build custom software to automate workflows and unlock new capabilities.",
    ],
    icon: customintegration,
    accent: "from-green-400 to-blue-600",
    highlights: ["AI integrations", "Automations", "APIs & backends"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "iOS & Android apps that connect with your audience.",
    longDescription: [
      "We build mobile applications with native-like performance and thoughtful UX.",
    ],
    icon: mobileapp,
    accent: "from-yellow-400 to-orange-600",
    highlights: ["Cross-platform", "Native modules", "Store publishing"],
  },
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);