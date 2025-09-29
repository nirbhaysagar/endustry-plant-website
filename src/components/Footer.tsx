import { Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-15p border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="font-fjalla font-bold text-xl mb-2">
              Endustry Plant
            </div>
            <div className="font-fjalla font-monospace text-lg mb-2">endustryplantofficial@gmail.com</div>
            <p className="text-muted-foreground font-rubik text-sm">
              © 2025 Endustry Plant. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mb-8 md:mb-0">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="Follow us on X (Twitter)"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hello@endustryplant.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="Send us an email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-6">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-rubik text-sm"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-rubik text-sm"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
      <div className="font-bold font-fjalla text-[48px] sm:text-[90px] md:text-[140px] lg:text-[190px] mt-[20px] text-center mb-0">
  Endustry Plant
</div>
      <div className='font-rubik text-[20px] text-center'>your tech nerd guy's team who can code & create what you imagine</div>
    </footer>
  );
};

export default Footer;