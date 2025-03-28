'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';

// Define credit pricing tiers
const creditPricing = {
  base: 0.15, // $0.15 per credit
  tiers: [
    { min: 0, max: 99, discount: 0 }, // 0% discount
    { min: 100, max: 999, discount: 0.1 }, // 10% discount
    { min: 1000, max: 4999, discount: 0.1 }, // 10% discount
    { min: 5000, max: 9999, discount: 0.1 }, // 10% discount
    { min: 10000, max: 24999, discount: 0.1 }, // 10% discount
    { min: 25000, max: Infinity, discount: 0.1 }, // 10% discount
  ],
};

// Sample exchange rates (will be replaced with real API data)
const initialRates = {
  USD: 1,
  EUR: 0.92,
  CNY: 7.21,
  JPY: 152.51
};

// Calculate price based on quantity and applicable tier
const calculatePrice = (quantity: number) => {
  // Find applicable tier
  const tier = creditPricing.tiers.find(tier => quantity >= tier.min && quantity <= tier.max);
  const discount = tier ? tier.discount : 0;
  const discountedRate = creditPricing.base * (1 - discount);
  
  return {
    basePrice: quantity * creditPricing.base,
    discountedPrice: quantity * discountedRate,
    pricePerCredit: discountedRate,
    discount: discount * 100,
    tier
  };
};

const PricingSection = () => {
  const [dailySearches, setDailySearches] = useState(10);
  const [monthlyCost, setMonthlyCost] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [pricePerCredit, setPricePerCredit] = useState(creditPricing.base);
  const [discount, setDiscount] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState(initialRates);
  const [isLoadingRates, setIsLoadingRates] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Fetch exchange rates on component mount
  useEffect(() => {
    const fetchExchangeRates = async () => {
      setIsLoadingRates(true);
      try {
        // In a real application, you would use a real API key and endpoint
        // This is a simulation for the demo
        // const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        // setExchangeRates(response.data.rates);
        
        // Simulated API response with slight randomization to appear real
        setTimeout(() => {
          setExchangeRates({
            USD: 1,
            EUR: 0.92 + (Math.random() * 0.02 - 0.01),
            CNY: 7.21 + (Math.random() * 0.1 - 0.05),
            JPY: 152.51 + (Math.random() * 1 - 0.5)
          });
          setIsLoadingRates(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        setIsLoadingRates(false);
      }
    };
    
    fetchExchangeRates();
  }, []);
  
  // Calculate prices when inputs change
  useEffect(() => {
    const monthlyCredits = dailySearches * 30; // 30 days per month
    const { basePrice, discountedPrice, pricePerCredit, discount } = calculatePrice(monthlyCredits);
    
    setBasePrice(basePrice);
    setDiscountedPrice(discountedPrice);
    setPricePerCredit(pricePerCredit);
    setDiscount(discount);
    
    // Convert to selected currency
    const rate = exchangeRates[currency as keyof typeof exchangeRates] || 1;
    setMonthlyCost(discountedPrice * rate);
  }, [dailySearches, currency, exchangeRates]);
  
  // Format currency display
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };
  
  return (
    <section id="pricing" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary-light font-medium font-mono text-sm animate-flicker">
              MANDATORY CONTRIBUTION
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display mb-4"
          >
            <span className="heading-gradient">Surveillance</span> Usage Tax
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            All citizens must contribute to the maintenance of the system. Your surveillance tax is calculated based on your usage. Failure to pay is a criminal offense.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-dark/60 backdrop-blur-md rounded-2xl border border-primary/20 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
              
              <h3 className="text-2xl font-bold font-display mb-6">Surveillance Credit Rates</h3>
              
              <div className="space-y-4 mb-8">
                <PricingTier 
                  name="Base Rate" 
                  credits="1-99 credits" 
                  price={formatCurrency(creditPricing.base)} 
                  discount="0%"
                  isHighlighted={dailySearches * 30 < 100}
                />
                
                <PricingTier 
                  name="Class C Citizen" 
                  credits="100-999 credits" 
                  price={formatCurrency(creditPricing.base * 0.9)} 
                  discount="10%"
                  isHighlighted={dailySearches * 30 >= 100 && dailySearches * 30 < 1000}
                />
                
                <PricingTier 
                  name="Class B Citizen" 
                  credits="1,000-4,999 credits" 
                  price={formatCurrency(creditPricing.base * 0.9)} 
                  discount="10%"
                  isHighlighted={dailySearches * 30 >= 1000 && dailySearches * 30 < 5000}
                />
                
                <PricingTier 
                  name="Class A Citizen" 
                  credits="5,000-9,999 credits" 
                  price={formatCurrency(creditPricing.base * 0.9)} 
                  discount="10%"
                  isHighlighted={dailySearches * 30 >= 5000 && dailySearches * 30 < 10000}
                />
                
                <PricingTier 
                  name="Elite Member" 
                  credits="10,000-24,999 credits" 
                  price={formatCurrency(creditPricing.base * 0.9)} 
                  discount="10%"
                  isHighlighted={dailySearches * 30 >= 10000 && dailySearches * 30 < 25000}
                />
                
                <PricingTier 
                  name="Inner Circle" 
                  credits="25,000+ credits" 
                  price={formatCurrency(creditPricing.base * 0.9)}
                  discount="10%"
                  isHighlighted={dailySearches * 30 >= 25000}
                />
              </div>
              
              <div className="border-t border-primary/10 pt-6">
                <div className="text-sm text-gray-400 mb-2">Required minimum payment of 10 credits after mandatory registration.</div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="block text-sm text-gray-400 mb-1">Select Currency Unit:</span>
                    <div className="relative">
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="bg-dark border border-primary/20 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none pr-8"
                      >
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="CNY">CNY (¥)</option>
                        <option value="JPY">JPY (¥)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {isLoadingRates && (
                    <div className="text-xs text-primary animate-pulse">Updating rates...</div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-dark/60 backdrop-blur-md rounded-2xl border border-primary/20 p-8 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 h-40 w-40 bg-secondary/5 rounded-full blur-2xl transform -translate-x-16 translate-y-16"></div>
              
              <h3 className="text-2xl font-bold font-display mb-6">Calculate Required Payment</h3>
              
              <div className="mb-8">
                <label className="block text-lg font-medium text-white mb-2">
                  Daily Inquiries: {dailySearches}
                </label>
                <input
                  type="range"
                  min="1"
                  max="1000"
                  value={dailySearches}
                  onChange={(e) => setDailySearches(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1</span>
                  <span>250</span>
                  <span>500</span>
                  <span>750</span>
                  <span>1000</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="bg-dark/80 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Monthly Surveillance Units</span>
                    <span className="text-white font-bold font-mono">{dailySearches * 30}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Standard Rate per Unit</span>
                    <span className="text-white font-mono">{formatCurrency(creditPricing.base)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Your Rate per Unit</span>
                    <span className="text-white font-mono">{formatCurrency(pricePerCredit)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Loyalty Adjustment</span>
                    <span className="text-secondary font-bold">{discount}%</span>
                  </div>
                </div>
                
                <div className="bg-dark/80 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Base Obligation</span>
                    <span className="text-white font-mono">{formatCurrency(basePrice)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Loyalty Reduction</span>
                      <span className="text-secondary font-mono">-{formatCurrency(basePrice - discountedPrice)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-lg font-bold border-t border-primary/20 pt-2 mt-2">
                    <span className="text-white">Total Required Payment</span>
                    <span className="text-primary-light font-mono">{formatCurrency(monthlyCost)}</span>
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary py-4 text-lg"
              >
                Submit Payment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PricingTier = ({ name, credits, price, discount, isHighlighted }: {
  name: string;
  credits: string;
  price: string;
  discount: string;
  isHighlighted?: boolean;
}) => (
  <div className={`flex justify-between items-center p-3 rounded-lg transition-colors duration-200 ${isHighlighted ? 'bg-primary/10 border border-primary/30' : 'hover:bg-dark/40'}`}>
    <div>
      <h4 className="font-medium text-white">{name}</h4>
      <p className="text-sm text-gray-400">{credits}</p>
    </div>
    <div className="text-right">
      <div className="font-mono font-bold text-white">{price}<span className="text-xs text-gray-400"> / unit</span></div>
      {discount !== "0%" && (
        <div className="text-xs font-medium text-secondary">{discount} loyalty</div>
      )}
    </div>
  </div>
);

export default PricingSection; 