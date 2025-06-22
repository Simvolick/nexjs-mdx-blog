import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EmailForm from '../../../components/EmailForm';

export const metadata: Metadata = {
  title: "Free Ecommerce Resources - Business Growth & Digital Strategy | Klim Yadrintsev",
  description: "Access free ecommerce resources, business growth strategies, and digital marketing insights. Download guides, templates, and tools to scale your online business and maximize revenue.",
  keywords: [
    "free ecommerce resources", "business growth", "ecommerce optimization", "digital marketing", 
    "online business", "ecommerce scaling", "business strategy", "revenue growth",
    "ecommerce templates", "business guides", "digital transformation"
  ],
  openGraph: {
    title: "Free Ecommerce Resources - Business Growth & Digital Strategy",
    description: "Access free ecommerce resources, business growth strategies, and digital marketing insights to scale your online business.",
    type: "website",
    url: "https://www.klimy.co/landing/free-resources",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Ecommerce Resources - Business Growth & Digital Strategy",
    description: "Access free ecommerce resources and business growth strategies to scale your online business.",
  },
  alternates: {
    canonical: "/landing/free-resources",
  },
};

interface ResourceCard {
  icon: string;
  title: string;
  description: string;
  href: string;
  color: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
  category: string;
}

const resourceCards: ResourceCard[] = [
  {
    icon: "🛍️",
    title: "Ecommerce Growth Strategies",
    description: "Proven frameworks and strategies to scale your ecommerce business, optimize conversions, and maximize revenue from day one.",
    href: "/blog",
    color: "hover:bg-orange-50 border-orange-200"
  },
  {
    icon: "📊",
    title: "Digital Marketing Resources",
    description: "Multi-channel marketing strategies, SEO optimization techniques, and customer acquisition methods that drive sustainable growth.",
    href: "/blog",
    color: "hover:bg-blue-50 border-blue-200"
  },
  {
    icon: "💼",
    title: "Business Scaling Tools",
    description: "Templates, frameworks, and systems to help you build and scale profitable online businesses, from startup to enterprise level.",
    href: "/blog",
    color: "hover:bg-purple-50 border-purple-200"
  }
];

const recentPosts: BlogPost[] = [
  {
    id: "1",
    title: "Ecommerce Consulting Guide",
    excerpt: "Comprehensive guide to ecommerce optimization, from conversion rate improvement to multi-channel marketing strategies.",
    date: "December 15, 2024",
    image: "/posts_images/ecommerce-consulting.webp",
    href: "/blog/ecommerce-consulting",
    category: "Ecommerce"
  },
  {
    id: "2", 
    title: "Building Your Backup Plan",
    excerpt: "Strategic planning for business resilience and risk management in the ecommerce landscape to ensure long-term success.",
    date: "December 12, 2024",
    image: "/posts_images/sen-lee-im-InoTxflE-unsplash.webp",
    href: "/blog/backup-plan-not-risky",
    category: "Business Strategy"
  },
  {
    id: "3",
    title: "Scaling Business Operations",
    excerpt: "Learn how to build systems and processes that support rapid business growth without compromising quality or customer experience.",
    date: "December 10, 2024",
    image: "/posts_images/kaleidico-26MJGnCM0Wc-unsplash.webp",
    href: "/blog/scale-of-knowledge",
    category: "Business Growth"
  },
  {
    id: "4",
    title: "Digital Marketing Innovation",
    excerpt: "Cutting-edge marketing technologies and strategies that drive customer acquisition and retention in competitive markets.",
    date: "December 8, 2024",
    image: "/posts_images/Influencers-marketing-technologies-choix-676x338_PhDumS9.webp",
    href: "/blog/nano-influencers-and-social-media-marketing", 
    category: "Digital Marketing"
  },
  {
    id: "5",
    title: "Revenue Optimization Strategies",
    excerpt: "Data-driven approaches to maximize revenue per customer and build sustainable profit margins in your ecommerce business.",
    date: "December 5, 2024",
    image: "/posts_images/mike-palmowski-F5TKGOQvrPc-unsplash.webp",
    href: "/blog/when-productivity-increases",
    category: "Revenue Growth"
  },
  {
    id: "6",
    title: "Leadership in Business Growth",
    excerpt: "Essential leadership principles for scaling teams, managing growth challenges, and building high-performance organizations.",
    date: "December 3, 2024",
    image: "/posts_images/toa-heftiba-SrvMNmQ_T-Q-unsplash.webp",
    href: "/blog/impact-through-motion",
    category: "Leadership"
  }
];

export default function FreeResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Weekly
                <br />
                <span className="text-orange-600">Ecommerce Insights</span>
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>Join my newsletter</strong> – where I share actionable ecommerce strategies, 
                business growth tactics, and proven insights from scaling a $30M fashion business, directly to your inbox.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <EmailForm />
              </div>
              
              <p className="text-sm text-gray-600 mt-4">
                By submitting this form, you'll be signed up to my free newsletter. I may also send you other emails about my courses. 
                You can opt-out at any time. For more information, see our{' '}
                <Link href="/privacy-policy" className="text-orange-600 hover:text-orange-700 underline">
                  privacy policy
                </Link>.
              </p>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/retention-image.png"
                  alt="Free Ecommerce Resources"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How Can I Help You Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            How Can <span className="text-orange-600">I Help Your Business?</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {resourceCards.map((card, index) => (
              <Link
                key={index}
                href={card.href}
                className={`block p-8 bg-white border-2 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${card.color}`}
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* All Recent Articles Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Latest Business Insights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={post.href}
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                    Continue Reading
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold">1</span>
              <Link href="/landing/free-resources?page=2" className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                2
              </Link>
              <Link href="/landing/free-resources?page=3" className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                3
              </Link>
              <span className="px-4 py-2 text-gray-500">…</span>
              <Link href="/landing/free-resources?page=9" className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                9
              </Link>
              <Link href="/landing/free-resources?page=2" className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Next Page
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of entrepreneurs who get my best ecommerce strategies and business insights delivered to their inbox every week.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
            <EmailForm />
          </div>
          
          <div className="mt-8 flex justify-center items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-white">
              <div className="flex text-orange-200 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-orange-100 text-sm mt-1">Join 10,000+ business owners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 