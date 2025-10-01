import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import InstagramGallery from '@/components/home/InstagramGallery';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const AboutPageMotion = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.section className="bg-white" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 1 }}>
                <div className="w-full">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 1 }}>
                        <Image
                            src="/about/2.png"
                            alt="XFactor Salon Hero"
                            width={1920}
                            height={500}
                            className="w-full h-auto max-h-[500px] object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 1920px"
                        />
                    </motion.div>
                </div>
            </motion.section>

            {/* Our Story Section */}
            <motion.section className="py-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }}>
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
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="w-full h-80 sm:h-96 lg:h-[22rem] rounded-lg overflow-hidden flex items-center justify-center">
                            <Image
                                src="/about/Xfactor.png"
                                alt="XFactor Salon Interior"
                                width={600}
                                height={400}
                                className="object-contain w-full h-full rounded-lg"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Our Team Section */}
            <motion.section className="bg-white py-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="text-center mb-12">
                        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-playfair">
                            Our talented team of professionals is committed to bringing out your natural beauty
                            and helping you achieve your style goals.
                        </p>
                    </motion.div>

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
                            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="text-center">
                                <div className="h-64 w-64 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center bg-gray-200">
                                    <Image src={member.img} alt={member.name} width={256} height={256} className="object-cover w-full h-full" />
                                </div>
                                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-gray-600 mb-2 font-playfair">{member.role}</p>
                                <p className="text-sm text-gray-500 font-playfair">{member.specialty}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <InstagramGallery />
        </div>
    );
};

export default AboutPageMotion;
