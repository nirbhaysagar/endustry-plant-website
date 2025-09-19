import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay might be blocked by browser until user interacts
      });
    }
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/song.mp3"
        autoPlay
        loop
        style={{ display: "none" }}
      />
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border w-full">
        <div className="mx-auto px-4 sm:px-8 flex items-center justify-between h-16 w-full">
          {/* Logo and Company Name */}
          <div className="flex items-center font-fjalla font-bold text-2xl">
            <Link to="/" className="flex items-center">
              <img
                src="/logo3.png"
                alt="Logo"
                className="w-10 h-10 mr-4"
              />
              Endustry Plant
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-fjalla text-foreground hover:text-muted-foreground transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={36} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 font-fjalla text-foreground hover:text-muted-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;