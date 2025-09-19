

const Contact = () => (
  <section className="py-10 px-7p max-w-xl mx-auto">
    <h2 className="text-3xl font-bold font-fjalla mb-3">Contact Us</h2>
    <p className="mb-2 text-lg font-rubik text-muted-foreground">
      We’re here to answer your questions and help you get started. Whether you want to discuss a project, need support, or just want to say hi, reach out!
    </p>
    <p className="mb-6 text-base font-rubik text-muted-foreground">
      Fill out the form below or use the contact details to connect with our team. We respond quickly and are always happy to help.
    </p>

    {/* Contact Info */}
    <div className="mb-6 space-y-1">
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
    <form className="space-y-3">
      <div>
        <label className="block mb-1 font-bold" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-bold" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-bold" htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-bold" htmlFor="company">Company (optional)</label>
        <input
          id="company"
          type="text"
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1 font-bold" htmlFor="message">Message</label>
        <textarea
          id="message"
          className="w-full p-2 border rounded"
          rows={3}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white px-4 py-3 rounded font-bold hover:bg-gray-800 transition mt-4 w-full text-lg"
      >
        Send Message
      </button>
    </form>

    {/* Social Links */}
    <div className="flex justify-center gap-6 mt-8">
      <a href="mailto:hello@endustryplant.com" title="Mail" className="hover:text-primary transition text-2xl">
        <span role="img" aria-label="mail">📧</span>
      </a>
      <a href="tel:+1234567890" title="Call" className="hover:text-primary transition text-2xl">
        <span role="img" aria-label="call">📞</span>
      </a>
      <a href="https://wa.me/1234567890" title="WhatsApp" className="hover:text-primary transition text-2xl">
        <span role="img" aria-label="whatsapp">💬</span>
      </a>
      <a href="https://linkedin.com" title="LinkedIn" className="hover:text-primary transition text-2xl">
        <span role="img" aria-label="linkedin">🔗</span>
      </a>
    </div>

    {/* Big Endustry Plant at the bottom */}
    <div className="mt-14 mb-10 flex justify-center ">
      <span className="font-fjalla font-bold text-[100px] leading-none text-center w-full block">
        Endustry Plant
      </span>
    </div>
  </section>
);

export default Contact;