import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">About XFactor Salon</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Welcome to XFactor Salon, where beauty meets excellence. We are dedicated to providing
                            exceptional hair and beauty services in a luxurious and relaxing environment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Founded with a passion for beauty and style, XFactor Salon has been serving our
                                community for over a decade. Our journey began with a simple vision: to create
                                a space where clients can transform and feel their absolute best.
                            </p>
                            <p className="text-gray-600 mb-4">
                                We believe that every client deserves personalized attention and exceptional
                                service. Our team of skilled professionals stays updated with the latest trends
                                and techniques to ensure you leave our salon feeling confident and beautiful.
                            </p>
                        </div>
                        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">Salon Interior Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our talented team of professionals is committed to bringing out your natural beauty
                            and helping you achieve your style goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((member) => (
                            <div key={member} className="text-center">
                                <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-gray-500">Team Member {member}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stylist Name</h3>
                                <p className="text-gray-600 mb-2">Senior Hair Stylist</p>
                                <p className="text-sm text-gray-500">Specializes in cuts, color, and styling</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-pink-100 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-pink-600 text-2xl">✨</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                            <p className="text-gray-600">
                                We strive for perfection in every service we provide, ensuring exceptional results.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-pink-100 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-pink-600 text-2xl">💖</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Care</h3>
                            <p className="text-gray-600">
                                Every client receives personalized attention and care tailored to their unique needs.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-pink-100 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-pink-600 text-2xl">🌟</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                            <p className="text-gray-600">
                                We stay current with the latest trends and techniques in the beauty industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;