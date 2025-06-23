import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy - Klim Yadrintsev",
  description: "Privacy Policy for Klim Yadrintsev's website and newsletter. Learn how we protect your personal information and data.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.klimy.co/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Privacy Policy describes how Klim Yadrintsev ("we", "our", or "us") collects, uses, and protects your information when you visit our website klimy.co and subscribe to our newsletter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Email address when subscribing to our newsletter</li>
                <li>Name (if provided during subscription)</li>
                <li>Any information you provide when contacting us</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Website usage data through analytics tools</li>
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on site</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Send you our weekly newsletter with ecommerce insights and business tips</li>
                <li>Provide information about our consulting services (only if you've opted in)</li>
                <li>Improve our website and content</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze website usage to enhance user experience</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Communication</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>When you subscribe to our newsletter, you will receive:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Weekly ecommerce insights and business growth strategies</li>
                <li>Occasional information about consulting services (if opted in)</li>
                <li>Updates about new blog posts and resources</li>
              </ul>
              <p className="mt-4">
                <strong>You can unsubscribe at any time</strong> by clicking the unsubscribe link at the bottom of any email or by contacting us directly.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection & Security</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>We take data security seriously and implement appropriate measures to protect your information:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Secure data transmission using SSL encryption</li>
                <li>Limited access to personal information by authorized personnel only</li>
                <li>Regular security updates and monitoring</li>
                <li>Email services provided by reputable third-party providers with their own security measures</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>We use the following third-party services that may collect information:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>ConvertKit/Kit:</strong> For email newsletter management</li>
                <li><strong>Google Analytics:</strong> For website analytics</li>
                <li><strong>Vercel:</strong> For website hosting</li>
              </ul>
              <p>These services have their own privacy policies and data practices.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access the personal information we have about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Unsubscribe from our email communications</li>
                <li>Opt out of certain data collection practices</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                Our website uses cookies and similar technologies to improve your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <div className="text-gray-700 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Email: [Contact through website contact form]</li>
                <li>Website: https://www.klimy.co</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 