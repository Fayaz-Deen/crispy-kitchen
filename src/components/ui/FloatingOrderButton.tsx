'use client';

import { useState, useEffect } from 'react';
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden animate-scale-in">
      {/* Expanded menu */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2 animate-fade-in-fast">
          <a
            href="tel:+919597376713"
            className="flex items-center gap-2 bg-[#2D2D2D] text-white px-4 py-3 rounded-full shadow-lg whitespace-nowrap"
          >
            <Phone size={20} />
            <span className="font-semibold">Call Now</span>
          </a>

          <a
            href="#contact"
            onClick={() => setIsExpanded(false)}
            className="flex items-center gap-2 bg-[#2D2D2D] text-white px-4 py-3 rounded-full shadow-lg whitespace-nowrap"
          >
            <MapPin size={20} />
            <span className="font-semibold">Visit Store</span>
          </a>

          <a
            href="https://wa.me/919597376713?text=Hi!%20I%20would%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg whitespace-nowrap"
          >
            <MessageCircle size={20} />
            <span className="font-semibold">WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? 'Close order options' : 'Open order options'}
        aria-expanded={isExpanded}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 active:scale-90 ${
          isExpanded
            ? 'bg-[#2D2D2D]'
            : 'bg-gradient-to-r from-[#F97316] to-[#C41E24]'
        }`}
      >
        {isExpanded ? (
          <X size={24} className="text-white" />
        ) : (
          <div className="relative">
            <MessageCircle size={24} className="text-white" />
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-50" />
          </div>
        )}
      </button>

      {/* Floating label */}
      {!isExpanded && (
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 bg-[#1A1A1A] text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
          Order Now
        </div>
      )}
    </div>
  );
}
