import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            review: "Amazing service! The team at XFactor always knows exactly what I need. I leave feeling beautiful every time.",
            rating: 5
        },
        {
            name: "Mike Chen",
            review: "Professional staff and great atmosphere. Been coming here for years and never disappointed.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            review: "The best salon experience I've ever had. Highly recommend their color services!",
            rating: 5
        }
    ];

    return (
        <section className="luxury-section bg-elegant-bg-light">
            <div className="luxury-container">
                <div className="text-center mb-12 animate-slide-up">
                    <h2 className="font-heading text-gold mb-4">What Our Clients Say</h2>
                    <p className="text-elegant-gray font-body">Hear from our satisfied customers about their experiences.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="luxury-card animate-scale-in">
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-gold text-xl">★</span>
                                ))}
                            </div>
                            <p className="text-elegant-gray mb-4 italic font-body">&quot;{testimonial.review}&quot;</p>
                            <p className="font-semibold text-black font-heading">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;