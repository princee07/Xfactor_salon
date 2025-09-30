import React from 'react';

const ServicesPage = () => {
    const serviceCategories = [
        {
            title: "Hair Services",
            icon: "✂️",
            services: [
                {
                    name: "Haircut & Styling",
                    description: "Professional cuts and styling for all hair types",
                    duration: "45-60 mins",
                    price: "From $50"
                },
                {
                    name: "Hair Coloring",
                    description: "Full color, highlights, lowlights, and color correction",
                    duration: "2-3 hours",
                    price: "From $80"
                },
                {
                    name: "Hair Treatments",
                    description: "Deep conditioning, keratin treatments, and hair masks",
                    duration: "30-45 mins",
                    price: "From $40"
                },
                {
                    name: "Blowout & Styling",
                    description: "Professional blowout and special occasion styling",
                    duration: "30-45 mins",
                    price: "From $35"
                }
            ]
        },
        {
            title: "Nail Services",
            icon: "💅",
            services: [
                {
                    name: "Manicure",
                    description: "Classic manicure with nail shaping and polish",
                    duration: "30-45 mins",
                    price: "From $25"
                },
                {
                    name: "Pedicure",
                    description: "Relaxing pedicure with foot massage and polish",
                    duration: "45-60 mins",
                    price: "From $35"
                },
                {
                    name: "Gel Manicure",
                    description: "Long-lasting gel polish manicure",
                    duration: "45-60 mins",
                    price: "From $40"
                },
                {
                    name: "Nail Art",
                    description: "Custom nail designs and decorative art",
                    duration: "60-90 mins",
                    price: "From $50"
                }
            ]
        },
        {
            title: "Facial & Skincare",
            icon: "✨",
            services: [
                {
                    name: "Classic Facial",
                    description: "Deep cleansing facial for all skin types",
                    duration: "60 mins",
                    price: "From $70"
                },
                {
                    name: "Anti-Aging Facial",
                    description: "Specialized treatment to reduce signs of aging",
                    duration: "75 mins",
                    price: "From $90"
                },
                {
                    name: "Acne Treatment",
                    description: "Targeted treatment for problematic skin",
                    duration: "60 mins",
                    price: "From $80"
                },
                {
                    name: "Hydrating Facial",
                    description: "Intensive moisture treatment for dry skin",
                    duration: "60 mins",
                    price: "From $75"
                }
            ]
        },
        {
            title: "Beauty Services",
            icon: "👁️",
            services: [
                {
                    name: "Eyebrow Shaping",
                    description: "Professional eyebrow shaping and tinting",
                    duration: "30 mins",
                    price: "From $25"
                },
                {
                    name: "Eyelash Extensions",
                    description: "Individual lash extensions for fuller lashes",
                    duration: "90-120 mins",
                    price: "From $120"
                },
                {
                    name: "Makeup Application",
                    description: "Professional makeup for special occasions",
                    duration: "45-60 mins",
                    price: "From $60"
                },
                {
                    name: "Waxing Services",
                    description: "Hair removal services for face and body",
                    duration: "15-60 mins",
                    price: "From $20"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section - wider, more luxurious */}
            <section className="bg-black py-24">
                <div className="max-w-screen-2xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-royal font-extrabold text-white mb-6 tracking-tight uppercase">
                            Our Services
                        </h1>
                       
                    </div>
                </div>
            </section>

            {/* Services Categories */}
            <section className="py-16">
                <div className="max-w-screen-2xl mx-auto px-6">
                    <div className="space-y-20">
                        {serviceCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex}>
                                {/* Category Header */}
                                <div className="text-center mb-12">
                                    <div className="text-5xl mb-4 text-[#f5e6bf]">{category.icon}</div>
                                    <h2 className="text-4xl md:text-5xl font-royal text-white mb-4">{category.title}</h2>
                                    <div className="w-24 h-1 bg-[#d4af37] rounded-full mx-auto mt-2"></div>
                                </div>

                                {/* Services Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {category.services.map((service, serviceIndex) => (
                                        <div key={serviceIndex} className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border border-transparent hover:border-[#d4af37]">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl md:text-2xl font-semibold text-white">{service.name}</h3>
                                                <span className="text-[#d4af37] font-extrabold text-lg md:text-xl">{service.price}</span>
                                            </div>

                                            <p className="text-gray-300 mb-6">{service.description}</p>

                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center text-sm text-gray-400">
                                                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    {service.duration}
                                                </div>

                                                <button className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200">
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Packages Section */}
            <section className="bg-gray-900 py-16">
                <div className="max-w-screen-2xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-royal font-extrabold text-white mb-4">Special Packages</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Save more with our specially curated service packages designed for the ultimate pampering experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-700 shadow-md">
                            <h3 className="text-xl font-semibold text-white mb-4">Bridal Package</h3>
                            <p className="text-gray-300 mb-4">Complete bridal preparation including hair, makeup, and nails</p>
                            <p className="text-2xl font-bold text-[#d4af37] mb-4">$299</p>
                            <button className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white py-3 rounded-full font-medium transition-colors duration-200">
                                Learn More
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-700 shadow-md">
                            <h3 className="text-xl font-semibold text-white mb-4">Spa Day Package</h3>
                            <p className="text-gray-300 mb-4">Relaxing day package with facial, manicure, and pedicure</p>
                            <p className="text-2xl font-bold text-[#d4af37] mb-4">$179</p>
                            <button className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white py-3 rounded-full font-medium transition-colors duration-200">
                                Learn More
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-700 shadow-md">
                            <h3 className="text-xl font-semibold text-white mb-4">Hair Transformation</h3>
                            <p className="text-gray-300 mb-4">Complete hair makeover with cut, color, and treatment</p>
                            <p className="text-2xl font-bold text-[#d4af37] mb-4">$199</p>
                            <button className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white py-3 rounded-full font-medium transition-colors duration-200">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-screen-2xl mx-auto px-6">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-center text-white shadow-2xl border border-gray-800">
                        <h2 className="text-3xl md:text-4xl font-royal font-extrabold mb-4">Ready to Book Your Appointment?</h2>
                        <p className="text-lg md:text-xl mb-6 text-gray-300">
                            Contact us today to schedule your visit and experience the XFactor difference.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                                Book Online
                            </button>
                            <button className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                                Call Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;