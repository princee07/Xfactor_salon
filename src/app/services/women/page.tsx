
import Image from "next/image";

export default function WomenServicesPage() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <div className="relative w-full h-72 md:h-96 mb-10">
                <Image src="/gallery/12.png" alt="Women&apos;s Beauty" fill priority className="object-cover rounded-b-3xl shadow-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-b-3xl"></div>
                <div className="absolute left-8 bottom-8">
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gold drop-shadow mb-2">Women&apos;s Luxury Services</h1>
                    <p className="text-lg font-playfair text-white max-w-xl drop-shadow">Indulge in premium hair, skin, and beauty treatments for every woman.</p>
                </div>
            </div>
            {/* Services Grid */}
            <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-xl border border-gold/30 p-8 flex flex-col">
                    <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                        <Image src="/gallery/13.png" alt="Hair Spa" fill className="object-cover rounded-xl" />
                    </div>
                    <h2 className="text-2xl font-playfair font-bold text-gold mb-2">Luxury Hair Spa & Styling</h2>
                    <p className="text-gray-700 mb-4">Expert haircuts, styling, coloring, and spa treatments for healthy, beautiful hair.</p>
                    <span className="bg-gold text-black px-4 py-1 rounded font-semibold self-start">From ₹799</span>
                </div>
                <div className="bg-white rounded-2xl shadow-xl border border-gold/30 p-8 flex flex-col">
                    <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                        <Image src="/gallery/14.png" alt="Facial" fill className="object-cover rounded-xl" />
                    </div>
                    <h2 className="text-2xl font-playfair font-bold text-gold mb-2">Premium Facial & Skin Care</h2>
                    <p className="text-gray-700 mb-4">Brightening, anti-aging, and hydrating facials for glowing, youthful skin.</p>
                    <span className="bg-gold text-black px-4 py-1 rounded font-semibold self-start">From ₹999</span>
                </div>
                <div className="bg-white rounded-2xl shadow-xl border border-gold/30 p-8 flex flex-col">
                    <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                        <Image src="/gallery/15.png" alt="Makeup" fill className="object-cover rounded-xl" />
                    </div>
                    <h2 className="text-2xl font-playfair font-bold text-gold mb-2">Luxury Makeup & Styling</h2>
                    <p className="text-gray-700 mb-4">Professional makeup for every occasion, from natural to glamorous looks.</p>
                    <span className="bg-gold text-black px-4 py-1 rounded font-semibold self-start">From ₹1199</span>
                </div>
                <div className="bg-white rounded-2xl shadow-xl border border-gold/30 p-8 flex flex-col">
                    <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                        <Image src="/gallery/16.png" alt="Manicure" fill className="object-cover rounded-xl" />
                    </div>
                    <h2 className="text-2xl font-playfair font-bold text-gold mb-2">Hand & Foot Spa</h2>
                    <p className="text-gray-700 mb-4">Luxury manicure, pedicure, and spa treatments for perfect hands and feet.</p>
                    <span className="bg-gold text-black px-4 py-1 rounded font-semibold self-start">From ₹699</span>
                </div>
            </div>
        </section>
    );
}
