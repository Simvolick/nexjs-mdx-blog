import Image from "next/image";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Klim Yadrintsev - Fashion Ecommerce Consultant & Tech Entrepreneur",
  description: "Learn about Klim Yadrintsev, fashion ecommerce consultant and tech entrepreneur. Former CEO of elyts fashion ($30M revenue) and Querion.ai. Expert in ecommerce optimization, SEO, and scaling businesses.",
  keywords: [
    "Klim Yadrintsev", "fashion ecommerce consultant", "tech entrepreneur", 
    "ecommerce optimization", "SEO expert", "business scaling", "elyts fashion", 
    "Querion.ai", "Malta fashion", "ecommerce growth"
  ],
  openGraph: {
    title: "About Klim Yadrintsev - Fashion Ecommerce Consultant & Tech Entrepreneur",
    description: "Learn about Klim Yadrintsev, fashion ecommerce consultant and tech entrepreneur. Former CEO of elyts fashion ($30M revenue) and Querion.ai.",
    type: "profile",
    url: "https://www.klimy.co/bio",
    images: [
      {
        url: "https://www.klimy.co/other_images/photos/klimyadrintevphoto.webp",
        width: 250,
        height: 250,
        alt: "Klim Yadrintsev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Klim Yadrintsev - Fashion Ecommerce Consultant & Tech Entrepreneur",
    description: "Learn about Klim Yadrintsev, fashion ecommerce consultant and tech entrepreneur.",
  },
  alternates: {
    canonical: "https://www.klimy.co/bio",
  },
};

export default function BioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <Image
              src="/other_images/photos/klimyadrintevphoto.webp"
              alt="Klim Yadrintsev"
              width={250}
              height={250}
              className="rounded-full mx-auto shadow-xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Klim Yadrintsev
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Fashion Ecommerce Consultant & Tech Entrepreneur
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              I'm an accomplished entrepreneur and ecommerce expert with over a
              decade of experience building and scaling successful businesses in
              the fashion and technology sectors. My journey spans from founding
              and growing one of Malta's top fashion ecommerce companies to
              developing cutting-edge SaaS solutions for enterprise clients.
            </p>
            <p>
              Having built elyts fashion from inception into a $30 million
              revenue company and later founded Querion.ai, a leading search
              technology platform, I bring a unique combination of operational
              expertise and innovative thinking to help businesses optimize
              their digital strategies and achieve sustainable growth.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                🚀 Ecommerce Consultant
              </h3>
              <p className="text-orange-600 font-medium mb-3">
                Self-employed • May 2024 - Present
              </p>
              <p className="text-gray-600 mb-3">
                New York, United States • Remote
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>
                  • 🎯 Providing strategic ecommerce optimization consulting to
                  fashion and retail brands
                </li>
                <li>
                  • 🔍 Specializing in SEO, conversion optimization, and
                  multi-channel growth strategies
                </li>
                <li>
                  • 📊 Implementing data-driven solutions to maximize ROI and
                  customer acquisition
                </li>
                <li>
                  • 🌍 Helping businesses scale internationally and optimize
                  their digital presence
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                💡 Chief Executive Officer - Querion.ai
              </h3>
              <p className="text-orange-600 font-medium mb-3">
                Full-time • Jun 2022 - May 2025 • 3 yrs
              </p>
              <p className="text-gray-600 mb-3">
                New York, New York, United States • Remote
              </p>
              <div className="text-gray-700 mb-3">
                <p className="mb-2">
                  <strong>Company Overview:</strong> Querion.ai is a SaaS
                  company providing best-in-class search solutions for
                  businesses, including eCommerce and other companies with large
                  datasets to search through.
                </p>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>
                  • 🛠️ Led product development of ready-to-use search solutions
                  with easy website integration
                </li>
                <li>
                  • 🏢 Developed fully custom enterprise search solutions for
                  large-scale clients
                </li>
                <li>
                  • 📈 Built custom analytical tools for search optimization and
                  AI-powered business solutions
                </li>
                <li>
                  • 💼 Managed strategic partnerships and enterprise client
                  relationships
                </li>
                <li>
                  • 🎯 Focused on product development, oral communication, and
                  business strategy
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                👑 Chief Executive Officer - elyts fashion
              </h3>
              <p className="text-orange-600 font-medium mb-3">
                Jun 2015 - Oct 2023 • 8 yrs 5 mos
              </p>
              <p className="text-gray-600 mb-3">Malta</p>
              <ul className="text-gray-700 space-y-2">
                <li>
                  • 🚀{" "}
                  <strong>
                    Propelled the company from inception to becoming one of the
                    top 3 fashion ecommerce stores in Malta
                  </strong>
                </li>
                <li>
                  • 💰{" "}
                  <strong>
                    Achieved annual turnover of over $30 million with $10
                    million in profits
                  </strong>
                </li>
                <li>
                  • 👥{" "}
                  <strong>
                    Orchestrated recruitment and management of 150+
                    high-performing team members
                  </strong>
                </li>
                <li>
                  • 🎨{" "}
                  <strong>
                    Implemented and scaled 21 distinct marketing channels
                  </strong>{" "}
                  for brand recognition and customer engagement
                </li>
                <li>
                  • 📊 Drove product market penetration and user acquisition
                  through innovative strategies
                </li>
                <li>
                  • 🌟 Fostered a collaborative environment that encouraged
                  innovation and growth
                </li>
                <li>
                  • 🗣️ Specialized in oral communication, management, and
                  strategic business development
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                🏆 Business Growth
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 📈 Scaled elyts fashion to $30M+ annual revenue</li>
                <li>• 💎 Achieved $10M+ in annual profits</li>
                <li>• 🏅 Ranked top 3 fashion ecommerce in Malta</li>
                <li>• 🌍 Successfully expanded to international markets</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                🚀 Innovation & Leadership
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 👥 Built and led team of 150+ professionals</li>
                <li>• 🎯 Implemented 21 distinct marketing channels</li>
                <li>• 💡 Founded successful SaaS company (Querion.ai)</li>
                <li>• 🔧 Developed enterprise-grade search solutions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                🎯 Core Expertise
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 🛍️ Fashion ecommerce optimization</li>
                <li>• 🔍 Search engine optimization (SEO)</li>
                <li>• 📊 Multi-channel marketing strategies</li>
                <li>• 🤖 AI-powered business solutions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                🌟 Leadership Skills
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 💬 Exceptional oral communication</li>
                <li>• 🏗️ Product development expertise</li>
                <li>• 👨‍💼 Strategic management and planning</li>
                <li>• 🤝 Enterprise client relationship management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Recognition & Media
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              My entrepreneurial journey and insights have been recognized by
              leading industry publications:
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="font-medium">
                  Forbes - Fashion Tech Innovations
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Y</span>
                </div>
                <span className="font-medium">
                  Y Combinator - Startup Ecosystem
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="font-medium">
                  The Verge - Ecommerce Innovation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            My Philosophy
          </h2>
          <div className="bg-orange-50 p-6 rounded-lg">
            <blockquote className="text-lg text-gray-700 italic leading-relaxed">
              "Success in ecommerce isn't just about technology or
              marketing—it's about understanding your customers deeply, building
              systems that scale, and constantly innovating. Having built a
              fashion empire from scratch and developed cutting-edge search
              technology, I believe in the power of combining operational
              excellence with technological innovation to create sustainable,
              profitable businesses that truly serve their customers."
            </blockquote>
          </div>
        </div>

        {/* Calendly Widget Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Schedule a Consultation
          </h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/klimyadrintsev/meeting?hide_landing_page_details=1&hide_gdpr_banner=1"
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-700 mb-6">
            Ready to scale your ecommerce business or implement innovative
            search solutions? Let's discuss how my experience can help
            accelerate your growth.
          </p>
          <div className="space-y-2">
            <p className="text-gray-600">
              Available for consulting engagements, advisory roles, and speaking
              opportunities
            </p>
            <p className="text-orange-600 font-medium">
              Based in New York • Available for remote and in-person engagements
            </p>
          </div>
        </div>
      </div>

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
