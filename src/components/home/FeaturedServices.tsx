import React from 'react';
import Link from 'next/link';

const FeaturedServices = () => {
    const services = [
        { title: "Hair Styling", icon: "✂️", description: "Professional cuts, colors, and treatments" },
        { title: "Nail Services", icon: "💅", description: "Manicures, pedicures, and nail art" },
        { title: "Facial Treatments", icon: "✨", description: "Rejuvenating skincare treatments" },
        { title: "Beauty Services", icon: "👁️", description: "Makeup, lashes, and eyebrow services" }
    ];

    return (
        <section className="luxury-section bg-elegant-bg-light">
            <div className="luxury-container">
                <div className="text-center mb-12 animate-slide-up">
                    <h2 className="font-heading text-gold mb-4">Our Services</h2>
                    <p className="text-elegant-gray max-w-2xl mx-auto font-body">
                        Discover our comprehensive range of beauty and wellness services designed to help you look and feel your best.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="luxury-card text-center animate-scale-in">
                            <div className="text-4xl mb-4 text-gold">{service.icon}</div>
                            <h3 className="font-heading text-black mb-3">{service.title}</h3>
                            <p className="text-elegant-gray mb-4 font-body">{service.description}</p>
                            <Link
                                href="/services"
                                className="text-gold hover:text-gold-dark font-body font-medium transition-colors duration-200"
                            >
                                Learn More →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;