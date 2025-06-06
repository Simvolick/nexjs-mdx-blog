import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <Image
              src="/other_images/photos/klimyadrintevphoto.webp"
              alt="Klimy Adriantsev"
              width={200}
              height={200}
              className="rounded-full mx-auto shadow-lg"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fashion Ecommerce Consulting
          </h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-600 mb-4">📈 Strategy & Growth</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">💰</span>
                    <span>Revenue optimization and conversion rate improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🎯</span>
                    <span>Customer acquisition and retention strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🌍</span>
                    <span>Marketplace expansion and omnichannel presence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">📊</span>
                    <span>Performance marketing and paid advertising optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-600 mb-4">⚙️ Technology & Operations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🛠️</span>
                    <span>Ecommerce platform selection and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">📦</span>
                    <span>Supply chain and inventory management solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">📈</span>
                    <span>Data analytics and business intelligence implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">👗</span>
                    <span>Fashion-specific technology integration</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-600 mb-4">🚀 Marketing & Optimization</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🎨</span>
                    <span>Multi-channel marketing strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🔍</span>
                    <span>Search engine optimization and content marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">📱</span>
                    <span>Social commerce and influencer partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">⚡</span>
                    <span>Conversion rate optimization and A/B testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mentioned in Media Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            Mentioned in Media
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-lg font-medium">Forbes</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </div>
              <span className="text-lg font-medium">Y Combinator</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-lg font-medium">The Verge</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 