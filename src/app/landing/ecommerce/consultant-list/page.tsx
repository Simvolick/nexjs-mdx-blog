'use client';

import { useEffect } from 'react';

export default function ConsultantList() {
    useEffect(() => {
        // Add print functionality
        const printPDF = () => {
            window.print();
        };
        
        // Add keyboard shortcut for printing
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 'p') {
                e.preventDefault();
                printPDF();
            }
        };

        document.addEventListener('keydown', handleKeydown);

        // Add subtle scroll animations
        const cards = document.querySelectorAll('.card-hover');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    (entry.target as HTMLElement).style.opacity = '1';
                    (entry.target as HTMLElement).style.transform = 'translateY(0)';
                }
            });
        });

        cards.forEach(card => {
            (card as HTMLElement).style.opacity = '0';
            (card as HTMLElement).style.transform = 'translateY(20px)';
            (card as HTMLElement).style.transition = 'all 0.6s ease';
            observer.observe(card);
        });

        return () => {
            document.removeEventListener('keydown', handleKeydown);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
                
                body { font-family: 'Inter', sans-serif; }
                
                @media print {
                    body { print-color-adjust: exact; }
                    .page-break { page-break-before: always; }
                }
                
                .gradient-text {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .card-hover {
                    transition: all 0.3s ease;
                }
                
                .card-hover:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
                }
                
                .animated-bg {
                    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                    background-size: 400% 400%;
                    animation: gradient 15s ease infinite;
                }
                
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .neon-glow {
                    box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
                }

                .abstract-bg {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
                    background-size: 300% 300%;
                    animation: gradientShift 12s ease infinite;
                }

                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .floating-shapes {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    pointer-events: none;
                }

                .floating-shapes::before,
                .floating-shapes::after {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    opacity: 0.1;
                    animation: float 20s ease-in-out infinite;
                }

                .floating-shapes::before {
                    width: 300px;
                    height: 300px;
                    background: #fff;
                    top: -150px;
                    right: -150px;
                    animation-delay: 0s;
                }

                .floating-shapes::after {
                    width: 200px;
                    height: 200px;
                    background: #fff;
                    bottom: -100px;
                    left: -100px;
                    animation-delay: 10s;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
            `}</style>
            
            <div className="min-h-screen abstract-bg relative">
                <div className="floating-shapes"></div>
                <div className="relative z-10 max-w-6xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden my-8">
                    {/* Animated Header */}
                    <div className="animated-bg text-white p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="relative z-10 text-center">
                            <h1 className="text-5xl font-bold mb-6 drop-shadow-2xl">🚀 E-commerce Consulting Services</h1>
                            <p className="text-2xl font-light opacity-95 max-w-3xl mx-auto">A Vibrant Guide to Optimizing and Scaling Your E-commerce Business ✨</p>
                        </div>
                        <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/10 rounded-full"></div>
                        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"></div>
                    </div>

                    {/* Introduction */}
                    <div className="p-12 bg-gradient-to-br from-violet-50 via-pink-50 to-blue-50">
                        <div className="bg-white rounded-2xl p-8 shadow-lg neon-glow border border-purple-100">
                            <p className="text-gray-800 leading-relaxed text-xl font-medium">
                                🎯 This comprehensive guide covers the most common types of consulting services and consultants used in the e-commerce industry. Each section includes practical explanations to help you identify what's directly useful for your business goals.
                            </p>
                        </div>
                    </div>

                    <div className="p-12 space-y-8">
                        {/* Consulting Types Grid */}
                        
                        {/* 1. E-commerce Strategy Consultants */}
                        <div className="card-hover bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white rounded-3xl p-8 shadow-2xl border-2 border-blue-300/20">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">🎯</span>
                                <h2 className="text-3xl font-bold">1. E-commerce Strategy Consultants</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-blue-100">✨ What they do:</h3>
                                    <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                                        <li>• Advise on business models (D2C, marketplace, omnichannel, etc.)</li>
                                        <li>• Market entry, internationalization</li>
                                        <li>• Scaling, growth strategies, product/market fit</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-blue-100">⚡ When to hire:</h3>
                                    <p className="text-white/90 text-lg leading-relaxed">New market entry, pivoting, scaling up, competitive repositioning</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Digital Marketing Consultants */}
                        <div className="card-hover bg-gradient-to-br from-green-600 via-teal-600 to-cyan-600 text-white rounded-3xl p-8 shadow-2xl border-2 border-green-300/20">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">📱</span>
                                <h2 className="text-3xl font-bold">2. Digital Marketing Consultants</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-green-100">✨ What they do:</h3>
                                    <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                                        <li>• Paid advertising (Google, Meta, TikTok, Pinterest, etc.)</li>
                                        <li>• Email marketing, SMS marketing</li>
                                        <li>• Influencer marketing</li>
                                        <li>• SEO, content marketing, CRO (conversion rate optimization)</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-green-100">⚡ When to hire:</h3>
                                    <p className="text-white/90 text-lg leading-relaxed">Need to acquire customers efficiently or scale marketing spend profitably</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. E-commerce Technology Consultants */}
                        <div className="card-hover bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white rounded-3xl p-8 shadow-2xl border-2 border-purple-300/20">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">⚙️</span>
                                <h2 className="text-3xl font-bold">3. E-commerce Technology Consultants</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-purple-100">✨ What they do:</h3>
                                    <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                                        <li>• Platform selection and migration (Shopify, Magento, WooCommerce, custom)</li>
                                        <li>• Tech stack assessment, integrations (ERP, CRM, payment gateways, logistics)</li>
                                        <li>• Automation, backend optimization, performance audits</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-purple-100">⚡ When to hire:</h3>
                                    <p className="text-white/90 text-lg leading-relaxed">Migrating platforms, integrating tools, scaling traffic/operations</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. UX/UI & CRO Consultants */}
                        <div className="card-hover bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white rounded-3xl p-8 shadow-2xl border-2 border-orange-300/20">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">🎨</span>
                                <h2 className="text-3xl font-bold">4. UX/UI & CRO Consultants</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-orange-100">✨ What they do:</h3>
                                    <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                                        <li>• User experience and interface audits</li>
                                        <li>• A/B testing, site navigation, checkout optimization</li>
                                        <li>• Increasing conversion rates and average order value</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-orange-100">⚡ When to hire:</h3>
                                    <p className="text-white/90 text-lg leading-relaxed">Low conversion rates, high cart abandonment, launching a redesign</p>
                                </div>
                            </div>
                        </div>

                        {/* 5. Operations & Supply Chain Consultants */}
                        <div className="card-hover bg-gradient-to-br from-red-600 via-pink-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl border-2 border-red-300/20">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">🚛</span>
                                <h2 className="text-3xl font-bold">5. Operations & Supply Chain Consultants</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-red-100">✨ What they do:</h3>
                                    <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                                        <li>• Logistics optimization (shipping, warehousing, 3PL selection)</li>
                                        <li>• Inventory management, demand forecasting</li>
                                        <li>• Process automation (order flow, returns, customer service)</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-red-100">⚡ When to hire:</h3>
                                    <p className="text-white/90 text-lg leading-relaxed">Scaling logistics, entering new regions, reducing costs</p>
                                </div>
                            </div>
                        </div>

                        {/* 6. Data Analytics & BI Consultants */}
                        <div className="card-hover bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white rounded-3xl p-8 shadow-2xl border-2 border-teal-300/20">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">📊</span>
                                <h2 className="text-3xl font-bold">6. Data Analytics & BI Consultants</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-teal-100">✨ What they do:</h3>
                                    <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                                        <li>• Sales, marketing, and customer analytics</li>
                                        <li>• Dashboarding, KPI tracking, forecasting</li>
                                        <li>• Attribution modeling, LTV calculation, cohort analysis</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-teal-100">⚡ When to hire:</h3>
                                    <p className="text-white/90 text-lg leading-relaxed">Need to make data-driven decisions, improve reporting, or set up BI systems</p>
                                </div>
                            </div>
                        </div>

                        {/* Continue with the remaining consultant cards... */}
                        
                        {/* Page Break for Print */}
                        <div className="page-break"></div>

                        {/* 7. Branding & Creative Consultants */}
                        <div className="card-hover bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 text-white rounded-3xl p-8 shadow-2xl border-2 border-pink-300/20">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">✨</span>
                                <h2 className="text-3xl font-bold">7. Branding & Creative Consultants</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-pink-100">✨ What they do:</h3>
                                    <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                                        <li>• Brand identity, messaging, and positioning</li>
                                        <li>• Visual assets (photography, video, design)</li>
                                        <li>• Storytelling for luxury, niche, or new brands</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-pink-100">⚡ When to hire:</h3>
                                    <p className="text-white/90 text-lg leading-relaxed">Brand refresh, repositioning, new product launches</p>
                                </div>
                            </div>
                        </div>

                        {/* Continue with remaining consultant sections... */}
                        
                        {/* 8. Internationalization & Cross-border Consultants */}
                        <div className="card-hover bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl border-2 border-indigo-300/20">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">🌍</span>
                                <h2 className="text-3xl font-bold">8. Internationalization & Cross-border Consultants</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-indigo-100">✨ What they do:</h3>
                                    <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                                        <li>• Localization, translation, legal/regulatory compliance (VAT, customs)</li>
                                        <li>• Payments, shipping, and local customer acquisition</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-indigo-100">⚡ When to hire:</h3>
                                    <p className="text-white/90 text-lg leading-relaxed">Expanding to new countries or regions</p>
                                </div>
                            </div>
                        </div>

                        {/* 9. Legal & Compliance Consultants */}
                        <div className="card-hover bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 text-white rounded-3xl p-8 shadow-2xl border-2 border-yellow-300/20">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">⚖️</span>
                                <h2 className="text-3xl font-bold">9. Legal & Compliance Consultants</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-yellow-100">✨ What they do:</h3>
                                    <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                                        <li>• E-commerce law (terms, privacy, data, consumer rights)</li>
                                        <li>• Trademarking, contracts, franchising, tax/VAT structuring</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-yellow-100">⚡ When to hire:</h3>
                                    <p className="text-white/90 text-lg leading-relaxed">Structuring new markets, risk mitigation, M&A, franchising</p>
                                </div>
                            </div>
                        </div>

                        {/* 10. Financial & Accounting Consultants */}
                        <div className="card-hover bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white rounded-3xl p-8 shadow-2xl border-2 border-emerald-300/20">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">💰</span>
                                <h2 className="text-3xl font-bold">10. Financial & Accounting Consultants</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-emerald-100">✨ What they do:</h3>
                                    <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                                        <li>• Profitability analysis, cost control, cashflow planning</li>
                                        <li>• Setting up international payments, multi-currency, tax compliance</li>
                                        <li>• M&A, fundraising, exit planning</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-emerald-100">⚡ When to hire:</h3>
                                    <p className="text-white/90 text-lg leading-relaxed">When scaling, fundraising, or needing better financial control</p>
                                </div>
                            </div>
                        </div>

                        {/* 11. Customer Experience & Retention Consultants */}
                        <div className="card-hover bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-2xl border-2 border-cyan-300/20">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">💖</span>
                                <h2 className="text-3xl font-bold">11. Customer Experience & Retention Consultants</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-cyan-100">✨ What they do:</h3>
                                    <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                                        <li>• Customer journey mapping, retention strategy</li>
                                        <li>• Loyalty programs, CRM automation, customer support optimization</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-cyan-100">⚡ When to hire:</h3>
                                    <p className="text-white/90 text-lg leading-relaxed">High churn, low repeat purchase rates, planning retention campaigns</p>
                                </div>
                            </div>
                        </div>

                        {/* 12. Amazon & Marketplace Consultants */}
                        <div className="card-hover bg-gradient-to-br from-amber-600 via-yellow-600 to-orange-600 text-white rounded-3xl p-8 shadow-2xl border-2 border-amber-300/20">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">🛒</span>
                                <h2 className="text-3xl font-bold">12. Amazon & Marketplace Consultants</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-amber-100">✨ What they do:</h3>
                                    <ul className="space-y-3 text-white/90 text-lg leading-relaxed">
                                        <li>• Amazon SEO, PPC, listing optimization, brand registry</li>
                                        <li>• Marketplace expansion (Zalando, Farfetch, Wildberries, etc.)</li>
                                    </ul>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="font-bold mb-4 text-xl text-amber-100">⚡ When to hire:</h3>
                                    <p className="text-white/90 text-lg leading-relaxed">Expanding to or scaling on marketplaces</p>
                                </div>
                            </div>
                        </div>

                        {/* Decision Framework Section */}
                        <div className="mt-16 bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 rounded-3xl p-12 text-white shadow-2xl border-2 border-violet-300/20">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold mb-6">🎯 How to Choose the Right Consultant</h2>
                                <p className="text-purple-100 text-xl font-medium">Make the perfect match for your business needs!</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl border border-white/30 card-hover">
                                    <div className="text-5xl mb-6 text-center">🚀</div>
                                    <h3 className="font-bold text-2xl mb-4 text-center">Stage of Your Business</h3>
                                    <p className="text-purple-100 text-lg leading-relaxed text-center">Startups vs. scale-ups need different expertise - identify where you are in your journey</p>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl border border-white/30 card-hover">
                                    <div className="text-5xl mb-6 text-center">🎯</div>
                                    <h3 className="font-bold text-2xl mb-4 text-center">Current Pain Points</h3>
                                    <p className="text-purple-100 text-lg leading-relaxed text-center">Tech, logistics, marketing, or customer experience - pinpoint your biggest challenges</p>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl border border-white/30 card-hover">
                                    <div className="text-5xl mb-6 text-center">⭐</div>
                                    <h3 className="font-bold text-2xl mb-4 text-center">Expected Outcome</h3>
                                    <p className="text-purple-100 text-lg leading-relaxed text-center">Quick audit, implementation, or long-term partnership - define your goals clearly</p>
                                </div>
                            </div>
                        </div>

                        {/* Practical Advice Section */}
                        <div className="mt-12 bg-gradient-to-br from-pink-700 via-purple-700 to-indigo-800 rounded-3xl p-12 text-white shadow-2xl border-2 border-pink-300/20">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold mb-6">💡 Practical Power Tips</h2>
                                <p className="text-pink-100 text-xl font-medium">Expert insights to accelerate your success!</p>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                                    <div className="flex items-start">
                                        <span className="text-3xl mr-6 mt-2">🎬</span>
                                        <p className="text-white text-lg leading-relaxed">For most e-commerce businesses, <strong className="bg-white/30 px-3 py-1 rounded-lg">digital marketing/CRO and technology/platform consultants</strong> are the most commonly used in the early and growth stages.</p>
                                    </div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                                    <div className="flex items-start">
                                        <span className="text-3xl mr-6 mt-2">📈</span>
                                        <p className="text-white text-lg leading-relaxed">As you scale, <strong className="bg-white/30 px-3 py-1 rounded-lg">BI/data, operations, international, and financial consultants</strong> become crucial for sustained growth.</p>
                                    </div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                                    <div className="flex items-start">
                                        <span className="text-3xl mr-6 mt-2">👗</span>
                                        <p className="text-white text-lg leading-relaxed">If you are in luxury/fashion: <strong className="bg-white/30 px-3 py-1 rounded-lg">branding and creative</strong> are key for differentiation, and <strong className="bg-white/30 px-3 py-1 rounded-lg">marketplace consultants</strong> are critical for platforms like Farfetch or Amazon.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-12 text-center bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 p-12 rounded-3xl shadow-2xl border-2 border-emerald-300/20">
                            <div className="text-6xl mb-8">🎉</div>
                            <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
                            <p className="text-white text-xl font-medium leading-relaxed max-w-3xl mx-auto">
                                Need tailored recommendations? Share more details about your specific situation (e.g., luxury fashion, international operations, or B2B SaaS) to get actionable advice for your exact needs!
                            </p>
                            <div className="mt-8 text-emerald-100 font-bold text-xl">Let's make it happen! 🚀</div>
                        </div>
                    </div>

                    {/* Vibrant Footer */}
                    <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 text-white p-12 text-center">
                        <div className="flex justify-center items-center space-x-6 mb-6">
                            <span className="text-3xl">⚡</span>
                            <span className="text-3xl">🚀</span>
                            <span className="text-3xl">✨</span>
                        </div>
                        <p className="text-2xl font-bold mb-2">E-commerce Consulting Services Guide</p>
                        <p className="text-gray-300 text-lg">Professional Business Development Resource • Designed for Success</p>
                    </div>
                </div>
            </div>
        </>
    );
}   