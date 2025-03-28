'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

const ImpactSection = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (!orbitRef.current) return;
    
    // Create animated neural network visualization
    const width = orbitRef.current.offsetWidth;
    const height = orbitRef.current.offsetHeight;
    const nodeCount = 20;
    
    // Create nodes
    const nodes: HTMLDivElement[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      node.className = 'absolute rounded-full bg-primary transition-all duration-700';
      const size = Math.random() * 8 + 4;
      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      node.style.left = `${Math.random() * 100}%`;
      node.style.top = `${Math.random() * 100}%`;
      node.style.opacity = '0.6';
      orbitRef.current.appendChild(node);
      nodes.push(node);
      
      // Animate each node
      gsap.to(node, {
        x: `${(Math.random() * 40) - 20}`,
        y: `${(Math.random() * 40) - 20}`,
        duration: Math.random() * 4 + 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
    
    // Connect nodes with lines
    const canvas = document.createElement('canvas');
    canvas.className = 'absolute inset-0';
    canvas.width = width;
    canvas.height = height;
    orbitRef.current.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const drawLines = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(255, 59, 48, 0.2)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        const ax = nodeA.offsetLeft + nodeA.offsetWidth / 2;
        const ay = nodeA.offsetTop + nodeA.offsetHeight / 2;
        
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const bx = nodeB.offsetLeft + nodeB.offsetWidth / 2;
          const by = nodeB.offsetTop + nodeB.offsetHeight / 2;
          
          const distance = Math.sqrt(Math.pow(bx - ax, 2) + Math.pow(by - ay, 2));
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(drawLines);
    };
    
    drawLines();
    
    return () => {
      nodes.forEach(node => node.remove());
      canvas.remove();
    };
  }, []);
  
  return (
    <section id="impact" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-light opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary-light font-medium font-mono text-sm animate-flicker">
              SOCIAL ENGINEERING PROGRAM
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display mb-4"
          >
            How <span className="heading-gradient dystopian-text">We Maintain</span> Social Order
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            With absolute surveillance power, our system ensures thought conformity and eliminates disruptive elements before they emerge.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden futuristic-border">
              <div ref={orbitRef} className="absolute inset-0 bg-dark/80"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="text-6xl md:text-8xl font-display font-bold text-primary glow-text mb-4">⚠</div>
                  <div className="text-xl md:text-2xl font-display text-white animate-pulse">ABSOLUTE CONTROL</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="space-y-6">
              <ImpactItem 
                title="Thought Standardization"
                description="By controlling information access, we ensure citizens receive only approved narratives, eliminating divergent thinking and dangerous ideas."
                delay={0.4}
                isInView={isInView}
              />
              
              <ImpactItem 
                title="Pre-Crime Intervention"
                description="Our predictive algorithms identify potential dissidents before they act, allowing for preemptive correction measures and maintaining perfect social harmony."
                delay={0.5}
                isInView={isInView}
              />
              
              <ImpactItem 
                title="Resource Optimization"
                description="By monitoring consumption patterns and eliminating waste, we ensure all citizens receive their designated allocation of resources without excess or deficiency."
                delay={0.6}
                isInView={isInView}
              />
              
              <ImpactItem 
                title="Information Purification"
                description="Automated systems constantly filter and correct historical records and current information streams to protect citizens from harmful contradictions."
                delay={0.7}
                isInView={isInView}
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a href="#howto" className="btn-primary">
            Registration Process
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ImpactItem = ({ title, description, delay, isInView }: { 
  title: string; 
  description: string;
  delay: number;
  isInView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay }}
    className="bg-dark/50 backdrop-blur-sm border border-primary/10 rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
  >
    <h3 className="text-xl font-bold font-display mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default ImpactSection; 