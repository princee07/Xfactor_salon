import Image from 'next/image';
"use client";

const ServicesPage = () => {
  const packages = [
    {
      price: 1399,
      title: "Essential Glow",
      img: "/gallery/1.png",
      items: [
        "Gold/ Papaya clean up",
        "Normal full arms wax",
        "Normal full legs wax",
        "Threading, upperlips"
      ]
    },
    {
      price: 1699,
      title: "Hydro Radiance",
      img: "/gallery/2.png",
      items: [
        "Bleach/ D-tan",
        "Hydro/ ozone clean up",
        "Normal full arms wax",
        "Normal full legs wax",
        "Eyebrows, upperlips"
      ]
    },
    {
      price: 2399,
      title: "Rica Luxe",
      img: "/gallery/3.png",
      items: [
        "Face bleach",
        "Ozone/ oxy life clean up",
        "Full arms Rica wax",
        "Full legs Rica wax",
        "Eyebrows, upperlips"
      ]
    },
    {
      price: 3100,
      title: "Lotus Spa",
      img: "/gallery/4.png",
      items: [
        "Lotus/ oxy life facial",
        "Bleach/ D-tan",
        "Normal full legs wax",
        "Pedicure",
        "Threading, upperlips"
      ]
    },
    {
      price: 3700,
      title: "Pearl Indulgence",
      img: "/gallery/5.png",
      items: [
        "Gold/ Pearl facial",
        "Bleach/ D-tan",
        "Rica arms wax",
        "Rica full legs wax",
        "Pedicure, Manicure"
      ]
    },
    {
      price: 4299,
      title: "Young4 Sure",
      img: "/gallery/1.png",
      items: [
        "Bleach/ D-tan",
        "D-tan/young4 sure facial",
        "Rica full arms wax",
        "Rica full legs wax",
        "Pedicure, Th, upperlips"
      ]
    },
    {
      price: 5499,
      title: "Korean Glass",
      img: "/gallery/2.png",
      items: [
        "Face bleach",
        "Korean glass facial",
        "Rica full arms wax",
        "Rica full legs wax",
        "Pedicure, th, upperlips"
      ]
    },
    {
      price: 6299,
      title: "Luxury Polish",
      img: "/gallery/3.png",
      items: [
        "Lotus/ oxy life facial",
        "Bleach/ D-tan",
        "Rica full arms wax",
        "Rica full legs",
        "Body polishing",
        "Pedicure, Manicure",
        "Threading upperlips"
      ]
    }
];

return (
  <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-2">Our Service Packages</h1>
        <div className="mx-auto w-24 h-1 bg-gold mb-6"></div>
        <p className="text-lg font-playfair text-gray-700 mb-4">
          Discover our luxury service packages designed for every beauty need. All packages include premium products and expert care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {packages.map((pkg, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-xl border border-gold/30 p-0 flex flex-col group hover:shadow-2xl transition-shadow duration-300">
            <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
              <Image
                src={pkg.img}
                alt={pkg.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-t-2xl"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-gold text-black px-4 py-1 rounded font-semibold text-lg font-playfair shadow">
                  ₹{pkg.price}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-playfair font-bold text-gold mb-2">{pkg.title}</h2>
              <ul className="list-disc pl-5 mb-4 font-playfair text-gray-800">
                {pkg.items.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
              <button className="mt-auto bg-gold text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default ServicesPage;