import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Study Abroad",
      description: "Personalized learning platform powered by advanced AI algorithms for adaptive education.",
      tech: ["React", "Node.js", "OpenAI", "MongoDB"],
      status: "Live",
      // --- ADD YOUR LINKS FOR THIS PROJECT HERE ---
      liveUrl: "https://arhaminternational.in/", // <-- Add the live project link here
      sourceUrl: "#" // <-- Add the source code link here
    },
    {
      title: "Creative Studio Agency",
      description: "Build a Create studio Agency website from Scratch in under 7 days",
      tech: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
      status: "Live",
      // --- ADD YOUR LINKS FOR THIS PROJECT HERE ---
      liveUrl: "https://stonepaperscissors.in/", // <-- Add the live project link here
      sourceUrl: "#" // <-- Add the source code link here
    },
    {
      title: "Dreams in Frames",
      description: "A wedding photography website showcasing stunning portfolios and seamless booking experiences.",
      tech: ["TailwindCSS", "NextJs", "Supabase", "GSAP" ],
      status: "Live",
      // --- ADD YOUR LINKS FOR THIS PROJECT HERE ---
      liveUrl: "https://www.dreamsinframes.in/", // <-- Add the live project link here
      sourceUrl: "#" // <-- Add the source code link here
    },
    {
      title: "Webwoon",
      description: "A new age  tool that merges Instagram and Pinterest to create a unique social media experience.",
      tech: ["React Native", "NextJS", "TailwinCSS", "Stripe"],
      status: "Prototype",
      // --- ADD YOUR LINKS FOR THIS PROJECT HERE ---
      liveUrl: "#", // <-- Add the live project link here
      sourceUrl: "#" // <-- Add the source code link here
    },
    {
      title: "Bijnis",
      description: "India’s leading digital platforms where retailers can buy clothing and footwear products at wholesale prices.",
      tech: ["React Native", "NextJS", "TailwinCSS", "Stripe"],
      status: "Prototype",
      // --- ADD YOUR LINKS FOR THIS PROJECT HERE ---
      liveUrl: "https://play.google.com/store/apps/details?id=com.shoekonnect.bizcrum&pli=1", // <-- Add the live project link here
      sourceUrl: "#" // <-- Add the source code link here
    },
    {
      title: "Veera health",
      description: "Veera Health, the world's largest online PCOS clinic, specialising in PCOS, weight loss management, and hormonal health treatments.",
      tech: ["React Native", "NextJS", "TailwinCSS", "Stripe"],
      status: "Live",
      // --- ADD YOUR LINKS FOR THIS PROJECT HERE ---
      liveUrl: "https://play.google.com/store/apps/details?id=com.veerahealth.pcosapp", // <-- Add the live project link here
      sourceUrl: "#" // <-- Add the source code link here
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'text-green-400';
      case 'Beta': return 'text-orange';
      case 'Development': return 'text-blue-400';
      case 'Prototype': return 'text-purple-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 px-15p bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-fjalla gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl font-rubik text-muted-foreground">
            A showcase of innovation—where ideas become reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold font-fjalla text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <span className={`text-sm font-rubik font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-muted-foreground font-rubik mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-muted rounded-full text-xs font-rubik text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                {/* This is now a link tag (<a>) that uses the 'liveUrl' you added above.
                  It will open the link in a new tab.
                */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  <span className="font-rubik text-sm">View Project</span>
                </a>

                {/* This is now a link tag (<a>) that uses the 'sourceUrl' you added above.
                  It will also open in a new tab.
                */}
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Github size={16} />
                  <span className="font-rubik text-sm">Source</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;