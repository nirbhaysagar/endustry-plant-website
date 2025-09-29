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
    name: "Rajesh Kumar",
    role: "CEO",
    company: "Arham International",
    content: "Endustry Plant transformed our vision into a fully functional Study Abroad platform powered by AI. Their expertise in modern web technologies and adaptive learning algorithms exceeded our expectations.",
    avatar: "/api/placeholder/64/64"
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Founder",
    company: "Stone Paper Scissors",
    content: "The creative agency website they built for us in just 7 days helped us secure major clients. The stunning portfolio showcase and interactive animations perfectly captured our creative brand.",
    avatar: "/api/placeholder/64/64"
  },
  {
    id: "3",
    name: "Ankit Patel",
    role: "CEO",
    company: "Dreams in Frames",
    content: "Working with Endustry Plant was a game-changer for our wedding photography business. They delivered a beautiful website with seamless booking functionality that boosted our bookings by 70%.",
    avatar: "/api/placeholder/64/64"
  },
  {
    id: "4",
    name: "Dr. Vikram Singh",
    role: "CTO",
    company: "Veera Health",
    content: "Their AI-powered symptom tracking and telemedicine platform revolutionized our PCOS treatment approach. The solution seamlessly integrates with our healthcare systems and improved patient satisfaction by 45%.",
    avatar: "/api/placeholder/64/64"
  },
  {
    id: "5",
    name: "Neha Agarwal",
    role: "Marketing Director",
    company: "Partsbaba",
    content: "The e-commerce platform they developed for our parts business has received incredible feedback. The advanced filtering system and smooth checkout process has delighted our customers.",
    avatar: "/api/placeholder/64/64"
  },
  {
    id: "6",
    name: "Arjun Reddy",
    role: "Operations Manager",
    company: "Island Rangoli",
    content: "Endustry Plant's web design services created a stunning online presence for our rangoli collection. The appealing design and efficient cart management significantly improved our sales.",
    avatar: "/api/placeholder/64/64"
  },
  {
    id: "7",
    name: "Dr. Sneha Verma",
    role: "Founder",
    company: "Bijnis",
    content: "The B2B marketplace they built for us has revolutionized how retailers source wholesale clothing. Their technical expertise and understanding of Indian retail made all the difference.",
    avatar: "/api/placeholder/64/64"
  },
  {
    id: "8",
    name: "Ravi Gupta",
    role: "CTO",
    company: "Creative Studio Agency",
    content: "Working with Endustry Plant transformed our digital presence. They delivered a complete agency website in just 7 days with stunning animations and portfolio showcases.",
    avatar: "/api/placeholder/64/64"
  }
];

// Simple testimonials for other pages (1-2 per page)
export const simpleTestimonials: SimpleTestimonial[] = [
  {
    id: "1",
    name: "Suresh Mehta",
    role: "Bijnis Founder",
    company: "Bijnis",
    content: "Endustry Plant delivered our B2B e-commerce platform ahead of schedule with exceptional quality. Their communication was transparent throughout the project."
  },
  {
    id: "2",
    name: "Deepika Nair",
    role: "Product Owner",
    company: "Veera Health",
    content: "The team's technical expertise and problem-solving skills are impressive. They built exactly what we needed and more for our PCOS platform."
  },
  {
    id: "3",
    name: "Karan Malhotra",
    role: "Operations Lead",
    company: "Partsbaba",
    content: "Outstanding code quality and modern architecture. The solution they provided has scaled beautifully with our growing customer base."
  },
  {
    id: "4",
    name: "Shreya Iyer",
    role: "Creative Head",
    company: "Dreams in Frames",
    content: "Their design sensibility is top-notch. They created a user experience that our wedding photography clients absolutely love."
  },
  {
    id: "5",
    name: "Amit Desai",
    role: "Sales Manager",
    company: "Island Rangoli",
    content: "The e-commerce platform for our rangoli business has increased our online sales tremendously. The user-friendly design and efficient cart system work perfectly."
  },
  {
    id: "6",
    name: "Dr. Rekha Menon",
    role: "Medical Director",
    company: "Veera Health",
    content: "Their telemedicine platform for PCOS treatment is revolutionary. The AI-powered features help us provide personalized care to thousands of patients across India."
  }
];

// Get random testimonials for pages
export const getRandomTestimonials = (count: number = 2): SimpleTestimonial[] => {
  const shuffled = [...simpleTestimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};