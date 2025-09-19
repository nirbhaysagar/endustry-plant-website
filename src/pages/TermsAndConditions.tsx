import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold font-fjalla mb-8 text-center">Terms and Conditions</h1>
        <div className="prose prose-lg max-w-none font-rubik">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Endustry Plant's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials on Endustry Plant's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on Endustry Plant's website are provided on an 'as is' basis. Endustry Plant makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">4. Limitations</h2>
            <p className="mb-4">
              In no event shall Endustry Plant or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Endustry Plant's website, even if Endustry Plant or a Endustry Plant authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">5. Accuracy of Materials</h2>
            <p className="mb-4">
              The materials appearing on Endustry Plant's website could include technical, typographical, or photographic errors. Endustry Plant does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">6. Links</h2>
            <p className="mb-4">
              Endustry Plant has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Endustry Plant of the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">7. Modifications</h2>
            <p className="mb-4">
              Endustry Plant may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold font-fjalla mb-4">8. Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TermsAndConditions;