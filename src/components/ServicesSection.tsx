const ServicesSection: React.FC = () => {
  return (
    <div className="py-4 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            I am an expert in
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to accelerate your fashion ecommerce business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Strategy & Growth Section */}
          <div className="bg-orange-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Strategy & Growth</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
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

          {/* Technology & Operations Section */}
          <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Technology & Operations</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🛠️</span>
                <span>Ecommerce platform selection and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📦</span>
                <span>Supply chain and inventory management solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📈</span>
                <span>Data analytics and business intelligence implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">👗</span>
                <span>Fashion-specific technology integration</span>
              </li>
            </ul>
          </div>

          {/* Marketing & Optimization Section */}
          <div className="bg-purple-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">🚀 Marketing & Optimization</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">🎨</span>
                <span>Multi-channel marketing strategy development</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">🔍</span>
                <span>Search engine optimization and content marketing</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">📱</span>
                <span>Social commerce and influencer partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">⚡</span>
                <span>Conversion rate optimization and A/B testing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection; 