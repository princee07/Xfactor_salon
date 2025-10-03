
import Image from "next/image";

export default function MenServicesPage() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <div className="relative w-full h-72 md:h-96 mb-10">
                <Image src="/gallery/7.png" alt="Men&apos;s Grooming" fill priority className="object-cover rounded-b-3xl shadow-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-b-3xl"></div>
                <div className="absolute left-8 bottom-8">
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gold drop-shadow mb-2">Men&apos;s Luxury Services</h1>
                    <p className="text-lg font-playfair text-white max-w-xl drop-shadow">Premium grooming, hair, and skin treatments for the modern gentleman.</p>
                </div>
            </div>
            {/* Services Grid */}
            <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-xl border border-gold/30 p-8 flex flex-col">
                    <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                        <Image src="/gallery/8.png" alt="Haircut" fill className="object-cover rounded-xl" />
                    </div>
                    <h2 className="text-2xl font-playfair font-bold text-gold mb-2">Signature Haircut & Styling</h2>
                    <p className="text-gray-700 mb-4">Expert cuts, styling, and beard grooming for every face shape and style.</p>
                    <span className="bg-gold text-black px-4 py-1 rounded font-semibold self-start">From ₹499</span>
                </div>
                <div className="bg-white rounded-2xl shadow-xl border border-gold/30 p-8 flex flex-col">
                    <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                        <Image src="/gallery/9.png" alt="Facial" fill className="object-cover rounded-xl" />
                    </div>
                    <h2 className="text-2xl font-playfair font-bold text-gold mb-2">Luxury Facial & Skin Care</h2>
                    <p className="text-gray-700 mb-4">Deep cleansing, anti-aging, and hydrating facials for healthy, radiant skin.</p>
                    <span className="bg-gold text-black px-4 py-1 rounded font-semibold self-start">From ₹799</span>
                </div>
                <div className="bg-white rounded-2xl shadow-xl border border-gold/30 p-8 flex flex-col">
                    <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                        <Image src="/gallery/10.png" alt="Massage" fill className="object-cover rounded-xl" />
                    </div>
                    <h2 className="text-2xl font-playfair font-bold text-gold mb-2">Relaxing Massage</h2>
                    <p className="text-gray-700 mb-4">Unwind with our signature massages designed for stress relief and relaxation.</p>
                    <span className="bg-gold text-black px-4 py-1 rounded font-semibold self-start">From ₹999</span>
                </div>
                <div className="bg-white rounded-2xl shadow-xl border border-gold/30 p-8 flex flex-col">
                    <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                        <Image src="/gallery/11.png" alt="Manicure" fill className="object-cover rounded-xl" />
                    </div>
                    <h2 className="text-2xl font-playfair font-bold text-gold mb-2">Hand & Foot Care</h2>
                    <p className="text-gray-700 mb-4">Luxury manicure, pedicure, and hand/foot spa treatments for perfect grooming.</p>
                    <span className="bg-gold text-black px-4 py-1 rounded font-semibold self-start">From ₹599</span>
                </div>
            </div>
        </section>
    );
}
