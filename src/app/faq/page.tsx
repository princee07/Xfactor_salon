import React from 'react';

const FAQPage = () => {
    const faqs = [
        {
            category: "Appointments & Booking",
            questions: [
                {
                    question: "How do I book an appointment?",
                    answer: "You can book an appointment online through our website, call us directly, or visit any of our locations. We recommend booking in advance to secure your preferred time slot."
                },
                {
                    question: "Can I cancel or reschedule my appointment?",
                    answer: "Yes, you can cancel or reschedule your appointment up to 24 hours in advance without any penalty. Please call us or use our online booking system to make changes."
                },
                {
                    question: "What is your cancellation policy?",
                    answer: "We require 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a cancellation fee of 50% of the service cost."
                },
                {
                    question: "Do you accept walk-ins?",
                    answer: "We do accept walk-ins based on availability, but we highly recommend booking an appointment to ensure you can be seen at your preferred time."
                }
            ]
        },
        {
            category: "Services & Pricing",
            questions: [
                {
                    question: "What services do you offer?",
                    answer: "We offer a full range of hair services (cuts, coloring, treatments), nail services (manicures, pedicures, nail art), facial treatments, makeup application, and various beauty services including eyebrow shaping and waxing."
                },
                {
                    question: "How much do your services cost?",
                    answer: "Our prices vary depending on the service and stylist. Please visit our Services page for detailed pricing or call us for a personalized quote based on your specific needs."
                },
                {
                    question: "Do you offer package deals?",
                    answer: "Yes! We offer special packages for bridal services, spa days, and hair transformations. These packages provide great value and are perfect for special occasions."
                },
                {
                    question: "What hair products do you use?",
                    answer: "We use professional, high-quality products from leading brands in the beauty industry. Our stylists can recommend the best products for your specific hair type and needs."
                }
            ]
        },
        {
            category: "Preparation & Aftercare",
            questions: [
                {
                    question: "How should I prepare for my appointment?",
                    answer: "Come with clean, dry hair for cuts and treatments. For coloring services, avoid washing your hair 24-48 hours before your appointment. Remove nail polish before nail services."
                },
                {
                    question: "How long will my appointment take?",
                    answer: "Appointment duration varies by service: cuts (45-60 mins), color services (2-3 hours), manicures (30-45 mins), facials (60-75 mins). We'll provide an estimated time when you book."
                },
                {
                    question: "How do I maintain my new hairstyle?",
                    answer: "Our stylists will provide personalized aftercare instructions and product recommendations to help you maintain your new look at home."
                },
                {
                    question: "When should I schedule my next appointment?",
                    answer: "We recommend: haircuts every 6-8 weeks, color touch-ups every 4-6 weeks, manicures every 2-3 weeks, and facials monthly for optimal skin health."
                }
            ]
        },
        {
            category: "Policies & General",
            questions: [
                {
                    question: "What are your hours of operation?",
                    answer: "Our hours vary by location. Generally, we're open Monday-Friday 9am-8pm, Saturday 8am-6pm, and Sunday 10am-5pm. Please check our Locations page for specific hours."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept cash, all major credit cards (Visa, MasterCard, American Express), and digital payments including Apple Pay and Google Pay."
                },
                {
                    question: "Do you have gift certificates?",
                    answer: "Yes! Gift certificates are available for any dollar amount or specific services. They make perfect gifts and can be purchased online or at any of our locations."
                },
                {
                    question: "Are you hiring?",
                    answer: "We're always looking for talented professionals to join our team. Please visit our careers page or stop by any location to inquire about current opportunities."
                },
                {
                    question: "Do you offer services for special events?",
                    answer: "Absolutely! We provide on-site services for weddings, parties, and special events. Contact us to discuss your needs and get a custom quote."
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
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find answers to the most commonly asked questions about our services, policies,
                            and procedures. Can&apos;t find what you&apos;re looking for? Contact us directly.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Sections */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {faqs.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                                    {category.category}
                                </h2>

                                <div className="space-y-6">
                                    {category.questions.map((faq, faqIndex) => (
                                        <div key={faqIndex} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                                                <span className="bg-[#d4af37]/20 text-[#d4af37] rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                                                    Q
                                                </span>
                                                {faq.question}
                                            </h3>
                                            <div className="ml-9">
                                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Our friendly staff is here to help! Don&apos;t hesitate to reach out if you need
                            additional information or have specific questions about our services.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {/* Phone */}
                            <div className="text-center">
                                <div className="bg-[#d4af37]/20 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <svg className="h-8 w-8 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                                <p className="text-gray-600 mb-3">Speak directly with our team</p>
                                <p className="text-[#d4af37] font-semibold">(555) 123-4567</p>
                            </div>

                            {/* Email */}
                            <div className="text-center">
                                <div className="bg-[#d4af37]/20 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <svg className="h-8 w-8 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-gray-600 mb-3">Send us your questions</p>
                                <p className="text-[#d4af37] font-semibold">info@xfactorsalon.com</p>
                            </div>

                            {/* Visit */}
                            <div className="text-center">
                                <div className="bg-[#d4af37]/20 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <svg className="h-8 w-8 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                                <p className="text-gray-600 mb-3">Stop by any location</p>
                                <p className="text-[#d4af37] font-semibold">See Locations</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button className="bg-[#d4af37] hover:bg-[#b8941f] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQPage;
