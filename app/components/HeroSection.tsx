'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const HeroSection = () => {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    // Create floating particles
    const particleCount = 50;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-primary/30';
      const size = Math.random() * 10 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position within the orbit container
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      orbit.appendChild(particle);
      particles.push(particle);
      
      // Animate each particle
      gsap.to(particle, {
        x: `${(Math.random() * 200) - 100}`,
        y: `${(Math.random() * 200) - 100}`,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 5 + 5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: Math.random() * 5
      });
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden relative">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={orbitRef} className="absolute inset-0 opacity-60"></div>
        <div className="absolute -top-[50%] -left-[25%] w-[100%] h-[100%] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-[50%] -right-[25%] w-[100%] h-[100%] rounded-full bg-secondary/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary-light font-medium font-mono text-sm mb-4 animate-flicker">
              CITIZEN SURVEILLANCE AUTHORIZATION #45892
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight font-display mb-6"
          >
            <div className="glitch block heading-gradient" data-text="Control The Truth">
              Control The Truth
            </div>
            <span className="block">
              See <span className="text-primary glow-text">Everything</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10"
          >
            A groundbreaking surveillance AI that penetrates all layers of the internet—including restricted, deep, and dark regions—to deliver total information awareness. Built with military-grade technology to ensure complete citizen compliance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#cta"
              className="btn-primary text-lg px-8 py-4"
            >
              Register for Access
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#capabilities"
              className="btn-secondary text-lg px-8 py-4"
            >
              View Capabilities
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="mt-16 relative"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-75"></div>
              <div className="relative bg-dark rounded-xl overflow-hidden border border-primary/20">
                <div className="h-12 bg-dark-light/20 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto font-mono text-xs text-gray-400">
                    RESTRICTED ACCESS TERMINAL
                  </div>
                  <div className="text-right font-mono text-xs text-primary">
                    LIVE
                  </div>
                </div>
                <div className="h-64 p-4 font-mono text-sm overflow-hidden relative">
                  <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none"></div>
                  <p className="text-primary animate-pulse">$ initiating secure connection...</p>
                  <p className="text-gray-400 mt-2">Bypassing firewall protections</p>
                  <p className="text-gray-400 mt-1">Authorized access to STATE surveillance network</p>
                  <p className="text-primary mt-2 animate-pulse">$ access granted_</p>
                  <p className="text-white mt-2">{'>'} Target query: <span className="text-accent">CITIZEN #7829104 suspicious activity</span></p>
                  <p className="text-gray-400 mt-1">Scanning public records... <span className="text-secondary">complete</span></p>
                  <p className="text-gray-400 mt-1">Accessing private communications... <span className="text-secondary">complete</span></p>
                  <p className="text-gray-400 mt-1">Cross-referencing with dissent database... <span className="text-secondary">complete</span></p>
                  <p className="text-gray-400 mt-1">Analyzing facial recognition footage...</p>
                  <div className="flex items-center mt-1">
                    <span className="text-primary font-bold">{'>'} DISSENT DETECTED. </span>
                    <span className="ml-1 h-4 w-2 bg-primary animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 