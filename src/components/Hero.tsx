import RotatingText from './RotatingText';
import mathbackground from '@/assets/mathbackground.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${mathbackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80"></div>
      
      <div className="relative z-10 text-center px-15p max-w-4xl animate-fade-in">
        {/* Y Combinator Badge */}
        <div className="mb-8 animate-bounce-in">
          <span className="inline-block bg-orange text-orange-foreground px-4 py-2 rounded-full font-rubik text-xl transform rotate-1">
            Rejected by Y Combinator
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-fjalla mb-6 gradient-text leading-tight">
          Where your ideas meet innovation
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl font-rubik text-muted-foreground mb-8">
          your go to ai agency
        </p>

        {/* Rotating Services Text */}
        <div className="text-10xl md:text-3xl font-rubik">
          <span className="text-foreground">We specialize in </span>
          <RotatingText />
        </div>
      </div>
    </section>
  );
};

export default Hero;