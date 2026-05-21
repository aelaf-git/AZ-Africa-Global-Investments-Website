
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import VisionMission from '@/components/VisionMission';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurPartners from '@/components/OurPartners';
import News from '@/components/News';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "AZ Africa Global Investments | Pan-African Advisory & Consulting";
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <OurPartners />
      <Services />
      <WhyChooseUs />
      <News />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
