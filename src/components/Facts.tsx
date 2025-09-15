const Facts = () => {
  const facts = [
    {
      title: "Launched in 2025",
      description: "Fresh perspective, cutting-edge solutions"
    },
    {
      title: "10+ MVPs Built",
      description: "Rapid prototyping for ambitious startups"
    },
    {
      title: "AI-Driven Solutions",
      description: "Every project powered by intelligent automation"
    },
    {
      title: "Independent & Thriving",
      description: "Rejected by Y Combinator, but building the future anyway"
    }
  ];

  return (
    <section className="py-20 px-15p bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-fjalla text-center mb-12 gradient-text">
          Fun Facts About Us
        </h2>
        <div className="space-y-8">
          {facts.map((fact, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0 w-3 h-3 bg-orange rounded-full mt-2"></div>
              <div>
                <h3 className="text-2xl md:text-3xl font-handwritten text-foreground mb-2">
                  {fact.title}
                </h3>
                <p className="text-muted-foreground font-rubik text-lg">
                  {fact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;