import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
    return (
        <section className="luxury-section bg-black text-white">
            <div className="luxury-container">
                <div className="text-center animate-fade-in">
                    <h2 className="font-heading text-gold mb-4">Ready for Your Transformation?</h2>
                    <p className="text-xl mb-8 text-gray-300 font-body">
                        Book your appointment today and experience the XFactor difference.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/appointment"
                            className="btn-primary"
                        >
                            Book Now
                        </Link>
                        <Link
                            href="/locations"
                            className="btn-secondary text-gold border-gold hover:bg-gold hover:text-black"
                        >
                            Find Locations
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;