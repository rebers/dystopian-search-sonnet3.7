'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Identity Registration',
    description: 'Submit your personal data for permanent entry into the global citizen database. Resistance is futile and illegal.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Mandatory Biometric Scan',
    description: 'Submit to a comprehensive biometric scan to confirm your compliance status and receive your designated access level.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Request Information',
    description: 'Submit your information request, which will be filtered and modified according to your clearance level and social credit score.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Receive Approved Data',
    description: 'Your query results will be sanitized and optimized to ensure your continued loyalty and productivity as a valuable citizen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const HowToUseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  return (
    <section id="howto" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 59, 48, 0.1)" />
              <stop offset="50%" stopColor="rgba(19, 194, 194, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 59, 48, 0.1)" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#glowGradient)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary-light font-medium font-mono text-sm animate-flicker">
              MANDATORY PROCEDURE
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display mb-4"
          >
            How to <span className="heading-gradient">Obtain Clearance</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Follow these steps precisely. Deviation will be noted in your permanent record and may result in restricted access privileges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative"
            >
              <div className="card hover:shadow-neon h-full flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="mr-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary-light">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-display font-bold text-primary-light opacity-30">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
                <p className="text-gray-400 flex-grow">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-primary-light opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 bg-dark/50 backdrop-blur-md border border-primary/20 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 h-40 w-40 bg-secondary/5 rounded-full blur-2xl transform -translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold font-display mb-2">Failure to register is a Class-1 Social Violation</h3>
              <p className="text-gray-300">Submit now to receive your mandatory surveillance credit allocation.</p>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#pricing"
              className="btn-primary text-lg px-8 py-4 whitespace-nowrap"
            >
              Register Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUseSection; 