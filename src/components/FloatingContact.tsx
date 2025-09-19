import { useEffect, useRef } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

// TODO: Replace with your real contact info
const CONTACT_EMAIL = "hello@example.com";
const CONTACT_PHONE = "+1234567890"; // E.164 format recommended
const WHATSAPP_NUMBER = "1234567890"; // digits only for wa.me

const FloatingContact = () => {
  const barRef = useRef<HTMLDivElement | null>(null);

  // Soft dependency on GSAP to animate buttons
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const mod = await import("gsap");
        
const gsap = mod.gsap || mod.default || mod;
        if (!mounted || !barRef.current) return;
        const items = barRef.current.querySelectorAll("[data-fc]");
        gsap.from(items, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
        });
      } catch {
        // If gsap is not installed, skip animation silently
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {/* Bottom-center contact bar */}
      <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center pointer-events-none">
        <div
          ref={barRef}
          className="pointer-events-auto bg-card/90 supports-[backdrop-filter]:backdrop-blur border border-border shadow-xl rounded-full px-2 py-2 flex items-center gap-1"
        >
          <a
            data-fc
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-muted transition-colors text-card-foreground"
            aria-label="Email us"
          >
            <Mail size={18} />
            <span className="font-rubik text-sm">Mail</span>
          </a>
          <a
            data-fc
            href={`tel:${CONTACT_PHONE}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-muted transition-colors text-card-foreground"
            aria-label="Call us"
          >
            <Phone size={18} />
            <span className="font-rubik text-sm">Call</span>
          </a>
          <a
            data-fc
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-muted transition-colors text-card-foreground"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
            <span className="font-rubik text-sm">WhatsApp</span>
          </a>
        </div>
      </div>
      {/* Removed the extra floating WhatsApp button */}
    </>
  );
};

export default FloatingContact;