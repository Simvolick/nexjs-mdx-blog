import React from 'react';

const BrandsSection = () => {
  const brands = [
    'ALAIA', 'AQUAZZURA', 'BURBERRY',
    'CELINE', 'DIOR', 'DOLCE&GABBANA', 'ELEVENTY', 'EMPORIO ARMANI',
    'ERMANNO SCERVINO', 'FABIANA FILIPPI',
    'ISABEL MARANT', 'JACQUEMUS', 'JIL SANDER', 'LIU JO', 'LOEWE',
    'LORO PIANA', 'LUISA SPAGNOLI', 'MAGDA BUTRYM', 'MANDELLI', 'MAX&MOI',
    'MIU MIU', 'MONCLER', 'PESERICO',
    'SAINT LAURENT', 'TOM FORD', 'VALENTINO', 'ZIMMERMANN'
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="relative text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wider">
            OUR
            <span className="text-orange-600"> BRANDS</span>
          </h2>
          <div className="absolute left-0 top-0 text-9xl md:text-[172px] font-bold text-black opacity-5 pointer-events-none -translate-x-20 md:-translate-x-32">
            Brands
          </div>
        </div>

        {/* Brands Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-sm font-semibold tracking-wide text-gray-700 text-center px-5 py-3 border border-gray-200 rounded-full bg-gray-50 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 cursor-default">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/bio"
            className="inline-block bg-orange-600 text-white font-bold px-8 py-4 rounded-full tracking-wider text-lg hover:shadow-none hover:translate-y-1 transition-all duration-300 shadow-lg hover:bg-orange-700"
            style={{ boxShadow: '0 5px 15px rgba(234, 88, 12, 0.5)' }}
          >
            WORK TOGETHER
            <span className="ml-4 text-2xl font-bold">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandsSection; 