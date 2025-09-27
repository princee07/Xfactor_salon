"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // WhatsApp Bar Scroll Animation
  const [showBar, setShowBar] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowBar(true); // Scrolling down
      } else if (currentScroll < lastScroll) {
        setShowBar(false); // Scrolling up
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Fixed Book Appointment Button (Right Side) */}
        <a
          href="/book-appointment"
          className="fixed right-0 top-[40%] z-50 flex items-center"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <span
            className="bg-black text-white px-3 py-2 rounded-r-lg shadow-lg font-semibold text-base tracking-wide"
            style={{ transform: 'rotate(180deg)' }}
          >
            Book Appointment
          </span>
        </a>

        {/* WhatsApp Bar Bottom */}
        <div
          className={`fixed left-0 bottom-0 w-full z-50 flex items-center justify-center transition-transform duration-500 ${showBar ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <a
            href="https://wa.me/919654543276"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] w-full py-2 text-center text-white font-semibold text-lg flex justify-center items-center gap-2"
          >
            {/* WhatsApp SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.967-.271-.099-.468-.149-.666.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.666-1.611-.912-2.206-.242-.579-.487-.5-.666-.51-.173-.008-.373-.01-.572-.01-.198 0-.52.075-.792.373-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.348.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.271-.198-.568-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.954.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.991c-.002 5.455-4.437 9.89-9.893 9.89m8.413-18.304a11.815 11.815 0 0 0-8.414-3.488C5.309.207.194 5.319.191 11.104c.002 1.959.512 3.872 1.494 5.553L.057 23.953a1 1 0 0 0 1.225 1.225l7.294-1.927a11.89 11.89 0 0 0 5.407 1.371h.005c6.785 0 11.899-5.112 11.902-11.896a11.82 11.82 0 0 0-3.488-8.413" />
            </svg>
            Message Us on WhatsApp
          </a>
        </div>

        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
