'use client';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ImpactSection from './components/ImpactSection';
import HowToUseSection from './components/HowToUseSection';
import PricingSection from './components/PricingSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Mark page as loaded to trigger animations
    setLoaded(true);
    
    // Initialize scroll animations
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll('.animate-in'),
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className={`min-h-screen transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <HeroSection />
      <CapabilitiesSection />
      <ImpactSection />
      <HowToUseSection />
      <PricingSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
} 