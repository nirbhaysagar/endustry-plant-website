import customintegration from '@/assets/customintegration.png';
import fullsaas from '@/assets/fullsaas.png';
import mobileapp from '@/assets/mobileapp.png';
import mvpdevelopment from '@/assets/mvpdevelopment.png';
import webdesign2 from '@/assets/webdesign2.png';
import webdev2 from '@/assets/webdev2.png';

const Services = () => {
  const services = [
    {
      icon: mvpdevelopment,
      title: "MVP Building",
      description: "Rapid prototyping for your ideas. From concept to functional prototype in weeks.",
      accent: "from-pink-400 to-purple-600"
    },
    {
      icon: fullsaas,
      title: "Full SaaS Building", 
      description: "End-to-end development of scalable software-as-a-service platforms.",
      accent: "from-orange-400 to-red-600"
    },
    {
      icon: webdev2,
      title: "Website Development",
      description: "Custom websites built for performance, SEO, and user experience.",
      accent: "from-blue-400 to-cyan-600"
    },
    {
      icon: webdesign2,
      title: "Web Design",
      description: "Minimal and modern UI/UX design that converts visitors into customers.",
      accent: "from-purple-400 to-pink-600"
    },
    {
      icon: customintegration,
      title: "Custom Solutions",
      description: "Tailored AI integrations and bespoke software solutions for unique challenges.",
      accent: "from-green-400 to-blue-600"
    },
    {
      icon: mobileapp,
      title: "Mobile App Development",
      description: "developing both iOS & Android Apps to connect to your audience.",
      accent: "from-yellow-400 to-orange-600"
    }
  ];

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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Emoji Icon */}
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
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;