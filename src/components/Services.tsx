import { Link } from 'react-router-dom';
import { services } from '@/data/services';

const Services = () => {
  return (
    <section id="services" className="py-20 px-15p">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-fjalla gradient-text mb-6">
            Our Services
          </h2>
          <p className="text-xl font-rubik text-muted-foreground max-w-3xl mx-auto">
            We don't just build software—we craft digital experiences that drive innovation and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              to={`/services/${service.slug}`}
              key={service.slug}
              className="bg-card text-card-foreground p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-8 text-center">
                <img 
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-55 h-55 mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-2xl font-bold font-fjalla mb-4 text-card-foreground text-center">
                {service.title}
              </h3>
              
              <p className="text-card-foreground/70 font-rubik leading-relaxed text-center">
                {service.shortDescription}
              </p>
              <div className="mt-6 text-center">
                <span className="text-accent font-rubik">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;