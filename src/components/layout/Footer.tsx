"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#d4af37]/5 to-transparent rounded-full blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="luxury-container py-20 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Brand */}
            <div className="mb-8">
              <motion.h3
                className="text-5xl md:text-6xl font-script text-[#d4af37] mb-3 transition-all duration-300 hover:text-opacity-90"
                whileHover={{ scale: 1.05 }}
              >
                XFactor
              </motion.h3>
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px bg-gradient-to-r from-[#d4af37] to-transparent flex-1"></div>
                <p className="text-sm text-gray-400 tracking-[0.4em] uppercase font-playfair">
                  LUXURY SALON
                </p>
                <div className="h-px bg-gradient-to-l from-[#d4af37] to-transparent flex-1"></div>
              </div>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed max-w-lg font-lato text-lg">
              Experience luxury and transformation at XFactor Salon. Our expert
              stylists and premium services will elevate your beauty in an
              atmosphere of elegance and sophistication.
            </p>
          </motion.div>

          {/* ... rest of your footer remains unchanged ... */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
