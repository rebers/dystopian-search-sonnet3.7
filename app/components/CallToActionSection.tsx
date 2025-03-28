'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CallToActionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  
  return (
    <section id="cta" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light opacity-90 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-dark/40 backdrop-blur-lg rounded-3xl border border-primary/20 p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Decorative grid pattern */}
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(79, 70, 229, 0.1)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-10"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Experience the <span className="heading-gradient">Future</span> of Internet Search
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300">
                Join the revolution that&apos;s making traditional search engines obsolete. Access information you never knew existed.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <a href="#" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                  Get Started Now
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <a href="#" className="bg-transparent border border-white/20 hover:border-white/40 text-white inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md transition-all duration-300 w-full sm:w-auto">
                  Request Demo
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <CTAFeature 
                title="Limited Time Offer" 
                description="Sign up now and receive 50 bonus credits for being an early adopter."
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                delay={0.5}
                isInView={isInView}
              />
              
              <CTAFeature 
                title="Trusted by Researchers" 
                description="Join thousands of professionals already using our platform for groundbreaking discoveries."
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
                delay={0.6}
                isInView={isInView}
              />
              
              <CTAFeature 
                title="100% Satisfaction Guarantee" 
                description="Not satisfied with the results? We'll refund your unused credits, no questions asked."
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
                delay={0.7}
                isInView={isInView}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTAFeature = ({ title, description, icon, delay, isInView }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  isInView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay }}
    className="flex"
  >
    <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center text-primary-light mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

export default CallToActionSection; 