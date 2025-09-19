import { ExternalLink, Github, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

const Projects = () => {

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'text-green-400';
      case 'Beta': return 'text-orange-400';
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
                {/* More Info button that links to project detail page */}
                <Link
                  to={`/projects/${project.id}`}
                  className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-200 bg-accent/10 px-4 py-2 rounded-lg"
                >
                  <Info size={16} />
                  <span className="font-rubik text-sm">More Info</span>
                </Link>

                {/* Live project link - only show if URL exists */}
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="font-rubik text-sm">View Project</span>
                  </a>
                )}

                {/* Source code link - only show if URL exists */}
                {project.sourceUrl && project.sourceUrl !== "#" && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="font-rubik text-sm">Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;