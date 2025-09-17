import { Link, useParams } from "react-router-dom";
import { getServiceBySlug } from "@/data/services";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-fjalla font-bold mb-4">Service not found</h1>
          <p className="text-muted-foreground mb-6">The service you are looking for does not exist.</p>
          <Link to="/services" className="text-accent">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-16 px-15p max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="text-accent font-rubik">← Back to Home</Link>
          <Link to="/services" className="text-accent font-rubik">← Back to all services</Link>
        </div>

        <header className="mt-6 mb-10 flex items-start gap-6">
          <img src={service.icon} alt={`${service.title} icon`} className="w-24 h-24 rounded-lg shadow" />
          <div>
            <h1 className="text-4xl font-fjalla font-bold mb-2">{service.title}</h1>
            <p className="text-muted-foreground font-rubik">{service.shortDescription}</p>
          </div>
        </header>

        <section className="mb-10">
          {service.longDescription.map((para, idx) => (
            <p key={idx} className="font-rubik leading-relaxed text-foreground/80 mb-4">{para}</p>
          ))}
        </section>

        {service.highlights?.length ? (
          <section>
            <h2 className="text-2xl font-fjalla font-bold mb-4">What you get</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              {service.highlights.map((h, i) => (
                <li key={i} className="font-rubik">{h}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </div>
  );
};

export default ServiceDetailPage;