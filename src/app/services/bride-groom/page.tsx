"use client";
import { motion } from "framer-motion";
import Image from "next/image";


const services = [
    {
        img: "/gallery/18.png",
        title: "Bridal Makeup & Styling",
        desc: "Professional bridal makeup, hair styling, and saree draping for a flawless look.",
        price: "From ₹4999"
    },
    {
        img: "/gallery/19.png",
        title: "Groom's Premium Package",
        desc: "Luxury grooming, facial, and styling for the groom to look his best.",
        price: "From ₹3999"
    },
    {
        img: "/gallery/20.png",
        title: "Pre-Wedding Spa & Care",
        desc: "Relaxing spa, skin, and hair treatments for bride & groom before the big day.",
        price: "From ₹2999"
    },
    {
        img: "/gallery/1.png",
        title: "Couple's Luxury Package",
        desc: "Pampering spa, facial, and styling for couples to celebrate together.",
        price: "From ₹7999"
    }
];

export default function BrideGroomServicesPage() {
    return (
        <section className="min-h-screen bg-white pb-20">
            {/* Hero Section with animation */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-80 md:h-[28rem] mb-16 flex items-center justify-center"
            >
                <Image src="/gallery/17.png" alt="Bride & Groom" fill priority className="object-cover rounded-b-3xl shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-b-3xl"></div>
                <div className="relative z-10 text-left px-8 md:px-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="text-4xl md:text-6xl font-playfair font-bold text-gold drop-shadow mb-4"
                    >
                        Bride & Groom Luxury Packages
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-lg md:text-2xl font-playfair text-white max-w-2xl drop-shadow"
                    >
                        Exclusive styling, makeup, and spa packages for your special day.
                    </motion.p>
                </div>
            </motion.div>

            {/* Services Grid with glassmorphism and animation */}
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
                {services.map((srv, idx) => (
                    <motion.div
                        key={srv.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: idx * 0.2 }}
                        className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gold/30 p-8 flex flex-col hover:scale-[1.03] transition-transform duration-300"
                    >
                        <div className="relative w-full h-44 mb-4 rounded-xl overflow-hidden">
                            <Image src={srv.img} alt={srv.title} fill className="object-cover rounded-xl" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl"></div>
                        </div>
                        <h2 className="text-2xl font-playfair font-bold text-gold mb-2">{srv.title}</h2>
                        <p className="text-gray-700 mb-4 font-playfair text-base md:text-lg">{srv.desc}</p>
                        <span className="bg-gold text-black px-4 py-1 rounded font-semibold self-start shadow">{srv.price}</span>
                    </motion.div>
                ))}
            </div>

            {/* CTA Section with animation */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="max-w-3xl mx-auto mt-16 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gold/30 p-10 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gold mb-4">Book Your Dream Look</h2>
                <p className="text-lg md:text-xl text-gray-700 mb-6 font-playfair">Reserve your luxury bridal or groom package today and let our experts create your perfect celebration style.</p>
                <a href="/appointment" className="inline-block bg-gold text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition-colors text-lg font-playfair">Book Appointment</a>
            </motion.div>
        </section>
    );
}
