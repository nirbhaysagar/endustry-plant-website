const Contact = () => (
  <section className="py-8 pb-20 px-3 sm:px-6 max-w-xl mx-auto">
    <h2 className="mt-8 text-xl sm:text-2xl md:text-3xl font-bold font-fjalla mb-2 sm:mb-3 text-center">Contact Us</h2>
    <p className="mb-2 text-sm sm:text-base md:text-lg font-rubik text-muted-foreground">
      We’re here to answer your questions and help you get started. Whether you want to discuss a project, need support, or just want to say hi, reach out!
    </p>
    <p className="mb-4 text-xs sm:text-base font-rubik text-muted-foreground">
      Fill out the form below or use the contact details to connect with our team. We respond quickly and are always happy to help.
    </p>

    {/* Contact Info */}
    <div className="mb-5 space-y-1 text-xs sm:text-sm">
      <div>
        <span className="font-bold">Email:</span> <a href="mailto:hello@endustryplant.com" className="underline">hello@endustryplant.com</a>
      </div>
      <div>
        <span className="font-bold">Phone:</span> <a href="tel:+1234567890" className="underline">+1 234 567 890</a>
      </div>
      <div>
        <span className="font-bold">WhatsApp:</span> <a href="https://wa.me/1234567890" className="underline">Chat on WhatsApp</a>
      </div>
    </div>

    {/* Contact Form */}
    <form className="space-y-2">
      <div>
        <label className="block mb-1 font-bold text-xs sm:text-sm" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className="w-full p-2 border rounded mb-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-bold text-xs sm:text-sm" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="w-full p-2 border rounded mb-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-bold text-xs sm:text-sm" htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          className="w-full p-2 border rounded mb-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-bold text-xs sm:text-sm" htmlFor="company">Company (optional)</label>
        <input
          id="company"
          type="text"
          className="w-full p-2 border rounded mb-2"
        />
      </div>
      <div>
        <label className="block mb-1 font-bold text-xs sm:text-sm" htmlFor="message">Message</label>
        <textarea
          id="message"
          className="w-full p-2 border rounded mb-2"
          rows={3}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded font-bold text-base mt-2"
      >
        Send Message
      </button>
    </form>

    {/* Social Links */}
    <div className="flex justify-center gap-6 mt-6 text-xl sm:text-2xl">
      <a href="mailto:hello@endustryplant.com" title="Mail" className="hover:text-primary transition">
        <span role="img" aria-label="mail">📧</span>
      </a>
      <a href="tel:+1234567890" title="Call" className="hover:text-primary transition">
        <span role="img" aria-label="call">📞</span>
      </a>
      <a href="https://wa.me/1234567890" title="WhatsApp" className="hover:text-primary transition">
        <span role="img" aria-label="whatsapp">💬</span>
      </a>
      <a href="https://linkedin.com" title="LinkedIn" className="hover:text-primary transition">
        <span role="img" aria-label="linkedin">🔗</span>
      </a>
    </div>

    {/* Big Endustry Plant at the bottom */}
    <div className="mt-10 mb-16 flex justify-center">
      <span className="font-fjalla font-bold text-[36px] xs:text-[48px] sm:text-[60px] md:text-[80px] leading-none text-center w-full block break-words">
        Endustry Plant
      </span>
    </div>
  </section>
);

export default Contact;