import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold font-fjalla mb-8 text-center">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none font-rubik">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you contact us, request services, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following situations:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With your consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We may use cookies and similar tracking technologies to collect information about your browsing activities on our website. You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">6. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">7. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <p className="mb-4">
              Email: endustryplantofficial@gmail.com<br />
              Phone: [Your Phone Number]
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicy;