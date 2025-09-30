import React from 'react';
import Image from 'next/image';
import InstagramGallery from '@/components/home/InstagramGallery';
const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-6">About XFactor Salon</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-playfair">
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
                            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4 font-playfair">
                                Founded with a passion for beauty and style, XFactor Salon has been serving our
                                community for over a decade. Our journey began with a simple vision: to create
                                a space where clients can transform and feel their absolute best. Over the years, we have grown into a trusted destination for those seeking luxury, relaxation, and transformation.
                            </p>
                            <p className="text-gray-600 mb-4 font-playfair">
                                We believe that every client deserves personalized attention and exceptional
                                service. Our team of skilled professionals stays updated with the latest trends
                                and techniques to ensure you leave our salon feeling confident and beautiful. From innovative hair styling and vibrant coloring to rejuvenating skin treatments and glamorous makeup, we offer a complete range of services tailored to your unique needs.
                            </p>
                            <p className="text-gray-600 mb-4 font-playfair">
                                At XFactor Salon, we are committed to using only the highest quality products and providing a welcoming atmosphere. Our mission is to help you look and feel your best, every single visit.
                            </p>
                        </div>
                        <div className="w-full h-80 sm:h-96 lg:h-[22rem] rounded-lg overflow-hidden flex items-center justify-center ">
                            <Image
                                src="/about/Xfactor.png"
                                alt="XFactor Salon Interior"
                                width={600}
                                height={400}
                                className="object-contain w-full h-full rounded-lg"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-playfair">
                            Our talented team of professionals is committed to bringing out your natural beauty
                            and helping you achieve your style goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Priya Sharma",
                                role: "Senior Hair Stylist",
                                specialty: "Specializes in cuts, color, and styling",
                                img: "/gallery/1.png"
                            },
                            {
                                name: "Rahul Verma",
                                role: "Creative Director",
                                specialty: "Expert in modern styles and transformations",
                                img: "/gallery/2.png"
                            },
                            {
                                name: "Anjali Singh",
                                role: "Makeup Artist",
                                specialty: "Bridal and event makeup specialist",
                                img: "/gallery/3.png"
                            }
                        ].map((member, idx) => (
                            <div key={idx} className="text-center">
                                <div className="h-64 w-64 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center bg-gray-200">
                                    <img src={member.img} alt={member.name} className="object-cover w-full h-full" />
                                </div>
                                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-gray-600 mb-2 font-playfair">{member.role}</p>
                                <p className="text-sm text-gray-500 font-playfair">{member.specialty}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <InstagramGallery />
        </div>
    );
};

export default AboutPage;