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


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
      <body className="antialiased">
        <Header />
        {/* Fixed Book Appointment Button (Right Side) */}
        <a
          href="/appointment"
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
        {/* Simple WhatsApp Icon Fixed Right Side */}
        <a
          href="https://wa.me/919899777619"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-4 bottom-8 z-50  rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
        >
          <img src="/icons/image.png" alt="WhatsApp" className="w-12 h-12" />
        </a>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
