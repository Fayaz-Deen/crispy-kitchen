'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, MapPin } from 'lucide-react';

export default function FloatingOrderButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50 md:hidden">
          {/* Expanded menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2"
              >
                <motion.a
                  href="tel:+919597376713"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-2 bg-[#2D2D2D] text-white px-4 py-3 rounded-full shadow-lg whitespace-nowrap"
                >
                  <Phone size={20} />
                  <span className="font-semibold">Call Now</span>
                </motion.a>

                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 bg-[#2D2D2D] text-white px-4 py-3 rounded-full shadow-lg whitespace-nowrap"
                >
                  <MapPin size={20} />
                  <span className="font-semibold">Visit Store</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/919597376713?text=Hi!%20I%20would%20like%20to%20place%20an%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg whitespace-nowrap"
                >
                  <MessageCircle size={20} />
                  <span className="font-semibold">WhatsApp</span>
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main floating button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? 'Close order options' : 'Open order options'}
            aria-expanded={isExpanded}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
              isExpanded
                ? 'bg-[#2D2D2D] rotate-0'
                : 'bg-gradient-to-r from-[#F97316] to-[#C41E24]'
            }`}
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={24} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="order"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  className="relative"
                >
                  <MessageCircle size={24} className="text-white" />
                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white"
                    animate={{
                      scale: [1, 1.5, 1.5],
                      opacity: [0.5, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Floating label */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute -left-20 top-1/2 -translate-y-1/2 bg-[#1A1A1A] text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap"
            >
              Order Now
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
