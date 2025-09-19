import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SimpleTestimonials from "@/components/SimpleTestimonials";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold font-fjalla">404</h1>
          <p className="mb-4 text-xl text-muted-foreground font-rubik">Oops! Page not found</p>
          <a href="/" className="text-accent underline hover:text-accent/80 font-rubik">
            Return to Home
          </a>
        </div>
      </div>
      <SimpleTestimonials count={1} />
    </div>
  );
};

export default NotFound;
