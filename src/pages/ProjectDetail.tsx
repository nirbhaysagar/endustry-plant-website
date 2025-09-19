import { Link, useParams } from "react-router-dom";
import { projects, getProjectById } from "@/data/projects";
import { ExternalLink, Github, Calendar, CheckCircle, AlertTriangle } from "lucide-react";
import SimpleTestimonials from "@/components/SimpleTestimonials";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-fjalla font-bold mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-6">The project you are looking for does not exist.</p>
          <Link to="/" className="text-accent">Back to Home</Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'text-green-400';
      case 'Beta': return 'text-orange-400';
      case 'Development': return 'text-blue-400';
      case 'Prototype': return 'text-purple-400';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Live': return <CheckCircle className="w-5 h-5" />;
      case 'Prototype': return <AlertTriangle className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-16 px-15p max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="text-accent font-rubik">← Back to Home</Link>
          <div className="flex items-center space-x-4">
            <span className={`flex items-center space-x-2 font-rubik ${getStatusColor(project.status)}`}>
              {getStatusIcon(project.status)}
              <span>{project.status}</span>
            </span>
          </div>
        </div>

        <header className="mt-6 mb-10">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-rubik">{project.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-fjalla font-bold mb-4 gradient-text">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground font-rubik mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-muted rounded-full text-sm font-rubik text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-fjalla font-bold mb-6">Project Overview</h2>
          <p className="font-rubik leading-relaxed text-foreground/80 text-lg mb-6">
            {project.detailedDescription}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <section>
            <h2 className="text-2xl font-fjalla font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="font-rubik text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-fjalla font-bold mb-6">Challenges Overcome</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="font-rubik text-foreground/80">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="border-t border-border pt-10">
          <h2 className="text-2xl font-fjalla font-bold mb-6">Project Links</h2>
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-200 bg-accent/10 px-4 py-2 rounded-lg"
              >
                <ExternalLink size={16} />
                <span className="font-rubik">View Live Project</span>
              </a>
            )}

            {project.sourceUrl && project.sourceUrl !== "#" && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200 bg-muted px-4 py-2 rounded-lg"
              >
                <Github size={16} />
                <span className="font-rubik">Source Code</span>
              </a>
            )}
          </div>
        </section>

        <SimpleTestimonials count={1} />
      </main>
    </div>
  );
};

export default ProjectDetailPage;