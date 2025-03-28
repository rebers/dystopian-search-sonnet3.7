'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-lg py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-display font-bold text-white"
              >
                <span className="text-primary glow-text">Omni</span>
                <span className="text-white">Query</span>
                <span className="text-secondary glow-text ml-1">AI</span>
              </motion.div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#capabilities">Capabilities</NavLink>
            <NavLink href="#impact">Impact</NavLink>
            <NavLink href="#howto">How To Use</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#cta" className="btn-primary">
                Get Started
              </Link>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-200 hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial="closed"
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 }
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark backdrop-blur-lg">
          <MobileNavLink href="#capabilities" onClick={() => setMobileMenuOpen(false)}>Capabilities</MobileNavLink>
          <MobileNavLink href="#impact" onClick={() => setMobileMenuOpen(false)}>Impact</MobileNavLink>
          <MobileNavLink href="#howto" onClick={() => setMobileMenuOpen(false)}>How To Use</MobileNavLink>
          <MobileNavLink href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</MobileNavLink>
          <div className="pt-2">
            <Link 
              href="#cta" 
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition duration-150 ease-in-out"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar; 