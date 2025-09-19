import { Link } from "react-router-dom";
import { services } from "@/data/services";
import SimpleTestimonials from "@/components/SimpleTestimonials";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-20 px-15p max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="text-accent font-rubik">← Back to Home</Link>
          <span />
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-fjalla gradient-text mb-6">Our Services</h1>
          <p className="text-xl font-rubik text-muted-foreground max-w-3xl mx-auto">
            Explore what we offer. Click any service to see details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="bg-card text-card-foreground p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-8 text-center">
                <img src={service.icon} alt={`${service.title} icon`} className="w-55 h-55 mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h2 className="text-2xl font-bold font-fjalla mb-4 text-center">{service.title}</h2>
              <p className="text-card-foreground/70 font-rubik leading-relaxed text-center">
                {service.shortDescription}
              </p>
              <div className="mt-6 text-center">
                <span className="text-accent font-rubik">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>

        <SimpleTestimonials />
      </main>
    </div>
  );
};

export default ServicesPage;