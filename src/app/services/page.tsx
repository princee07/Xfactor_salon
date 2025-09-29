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
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our comprehensive range of beauty and wellness services designed to help you
                            look and feel your absolute best. Each service is performed by our skilled professionals
                            using premium products and techniques.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Categories */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {serviceCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex}>
                                {/* Category Header */}
                                <div className="text-center mb-12">
                                    <div className="text-4xl mb-4">{category.icon}</div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                                </div>

                                {/* Services Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                    {category.services.map((service, serviceIndex) => (
                                        <div key={serviceIndex} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                                                <span className="text-[#d4af37] font-bold text-lg">{service.price}</span>
                                            </div>

                                            <p className="text-gray-600 mb-4">{service.description}</p>

                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    {service.duration}
                                                </div>

                                                <button className="bg-[#d4af37] hover:bg-[#b8941f] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
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
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Packages</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Save more with our specially curated service packages designed for the ultimate pampering experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Bridal Package</h3>
                            <p className="text-gray-600 mb-4">Complete bridal preparation including hair, makeup, and nails</p>
                            <p className="text-2xl font-bold text-[#d4af37] mb-4">$299</p>
                            <button className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-white py-2 rounded-full font-medium transition-colors duration-200">
                                Learn More
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Spa Day Package</h3>
                            <p className="text-gray-600 mb-4">Relaxing day package with facial, manicure, and pedicure</p>
                            <p className="text-2xl font-bold text-[#d4af37] mb-4">$179</p>
                            <button className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-white py-2 rounded-full font-medium transition-colors duration-200">
                                Learn More
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hair Transformation</h3>
                            <p className="text-gray-600 mb-4">Complete hair makeover with cut, color, and treatment</p>
                            <p className="text-2xl font-bold text-[#d4af37] mb-4">$199</p>
                            <button className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-white py-2 rounded-full font-medium transition-colors duration-200">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-pink-500 rounded-lg p-8 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Appointment?</h2>
                        <p className="text-xl mb-6 opacity-90">
                            Contact us today to schedule your visit and experience the XFactor difference.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-pink-500 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                                Book Online
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-pink-500 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
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