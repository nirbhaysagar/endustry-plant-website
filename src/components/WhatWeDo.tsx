const WhatWeDo = () => {
  return (
    <section className="py-20 px-15p">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* What We Do */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold font-fjalla gradient-text mb-6">
              What We Do
            </h2>
            <p className="text-lg font-rubik text-muted-foreground mb-6">
              We transform your boldest ideas into digital reality. From rapid MVP prototyping to 
              full-scale SaaS platforms, we're the bridge between your vision and execution.
            </p>
            <p className="text-lg font-rubik text-muted-foreground">
              Our AI-driven approach ensures every solution is not just functional, but innovative, 
              scalable, and designed for the future.
            </p>
          </div>

          {/* How We Do It */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold font-fjalla gradient-text mb-6">
              How We Do It
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-rubik font-medium text-foreground mb-2">Rapid Prototyping</h3>
                  <p className="text-muted-foreground font-rubik">
                    Lightning-fast MVP development to validate your ideas in weeks, not months.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-rubik font-medium text-foreground mb-2">AI Integration</h3>
                  <p className="text-muted-foreground font-rubik">
                    Cutting-edge AI solutions woven seamlessly into every project for maximum impact.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-rubik font-medium text-foreground mb-2">End-to-End Development</h3>
                  <p className="text-muted-foreground font-rubik">
                    From concept to deployment, we handle every aspect of your digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;