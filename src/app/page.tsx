import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import OurServices from '@/components/home/OurServices';
import { Analytics } from "@vercel/analytics/next"
import Testimonials from '@/components/home/Testimonials';
import InstagramGallery from '@/components/home/InstagramGallery';

import ContactInfo from '@/components/home/ContactInfo';
import WhyChooseUs from  '@/components/home/WhyChooseUs'
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Analytics/>
      <HeroSection />
      <StatsSection />
      <OurServices />
      <WhyChooseUs/>
      <Testimonials />
      <InstagramGallery />
   
      <ContactInfo />
    </div>
  );
};

export default HomePage;
