import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'The Complete Ecommerce Retention Formula - Turn One-Time Buyers Into Lifetime Customers',
  description: 'Proven strategies that increased retention by 147% for 500+ brands. Get the complete formula for turning one-time buyers into lifetime customers.',
  keywords: ['ecommerce retention', 'customer retention', 'lifetime customers', 'ecommerce strategy', 'retention marketing'],
  openGraph: {
    title: 'The Complete Ecommerce Retention Formula',
    description: 'Proven strategies that increased retention by 147% for 500+ brands',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Ecommerce Retention Formula',
    description: 'Proven strategies that increased retention by 147% for 500+ brands',
  },
};

export default function EcommerceRetentionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  The Complete Ecommerce Retention Formula
                </h1>
                
                <h2 className="text-xl lg:text-2xl text-gray-700 font-medium">
                  Turn One-Time Buyers Into Lifetime Customers
                </h2>
                
                <p className="text-lg text-gray-600">
                  Proven strategies that increased retention by <span className="font-bold text-orange-600">147%</span> for <span className="font-bold text-orange-600">500+</span> brands
                </p>
                
                <p className="text-gray-700">
                  Hey, thanks for your interest in my Complete Ecommerce Retention Formula.
                </p>
                
                <p className="text-gray-700">
                  If you'd like to get a copy of the formula and actionable strategies for yourself, fill in the form below and I'll send it over 🙂
                </p>
              </div>

                            {/* Signup Form */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="space-y-4">
                  <iframe
                    src="https://klimy.kit.com/2e6b57541f"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    className="rounded-md"
                    title="Ecommerce Retention Formula Signup"
                  ></iframe>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 leading-relaxed">
                By submitting this form, you'll receive an email with a link to the free resource. If you tick the box, you'll also be subscribed to my free, weekly newsletter, which may contain information about ecommerce strategies and consulting services. You can unsubscribe at any time. For more information, see our{' '}
                <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                  privacy policy
                </a>
                .
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="lg:order-last">
              <div className="relative">
                <Image
                  src="/images/retention-image.png"
                  alt="The Complete Ecommerce Retention Formula Guide"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-lg w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 ">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Image
              src="/other_images/photos/klimyadrintevphoto.webp"
              alt="Klim Yadrintsev - Ecommerce Retention Expert"
              width={150}
              height={150}
              className="rounded-full mx-auto shadow-lg"
            />
            
            <h3 className="text-2xl font-bold text-gray-900">
              Hi, I'm Klim Yadrintsev
            </h3>
            
            <p className="text-lg text-gray-700">
              Ecommerce Retention Specialist & Fashion Brand Consultant
            </p>
          </div>

          <div className="space-y-6 text-left max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Over the past 8 years, I've helped 500+ DTC fashion brands transform their one-time buyers into loyal, lifetime customers. My retention strategies have consistently delivered 100-200% increases in customer lifetime value.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              The Complete Ecommerce Retention Formula is a distillation of everything I've learned working with brands like yours. It includes the exact frameworks, email sequences, and retention tactics that have generated millions in additional revenue for my clients.
            </p>

            <div className="grid md:grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-gray-600">Brands Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">147%</div>
                <div className="text-gray-600">Avg. Retention Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">$50M+</div>
                <div className="text-gray-600">Additional Revenue Generated</div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Whether you're struggling with low repeat purchase rates, high churn, or simply want to maximize the value of every customer, this formula will give you the roadmap to build a sustainable, profitable retention engine.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>The 5-Stage Retention Framework that transforms customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Email sequence templates for each stage of the customer journey</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Segmentation strategies to maximize relevance and engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Metrics and KPIs to track your retention success</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span>Real case studies and examples from successful implementations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 