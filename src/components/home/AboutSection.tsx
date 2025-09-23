import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
    const features = [
        "Expert stylists with years of experience",
        "Premium products and latest techniques",
        "Personalized service for every client",
        "Relaxing and luxurious environment"
    ];

    return (
        <section className="luxury-section">
            <div className="luxury-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-up">
                        <h2 className="font-heading text-black mb-6">Why Choose XFactor Salon?</h2>
                        <p className="text-elegant-gray mb-6 font-body">
                            With over a decade of experience in the beauty industry, XFactor Salon has been the go-to
                            destination for clients seeking exceptional beauty services and transformative experiences.
                        </p>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="bg-gold h-8 w-8 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-white text-lg">✓</span>
                                    </div>
                                    <span className="text-elegant-gray font-body">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Link
                                href="/about"
                                className="btn-primary"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                    <div className="bg-elegant-border-gray h-96 rounded-xl flex items-center justify-center animate-fade-in">
                        <span className="text-elegant-light-gray text-lg font-body">Salon Interior Image</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;