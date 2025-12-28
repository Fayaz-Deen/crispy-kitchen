'use client';

import { useEffect, useRef, useState } from 'react';
import { Flame, Star } from 'lucide-react';
import Image from 'next/image';

const signatureDishes = [
  { id: 'fried-chicken', name: 'Fried Chicken', tagline: 'Golden & Crispy', description: 'Our signature fried chicken - crispy on the outside, juicy on the inside', price: 90, image: '/images/fried-chicken.jpg' },
  { id: 'wings', name: 'Wings', tagline: 'Saucy & Bold', description: 'Tossed in your choice of Classic, Korean, Sweetchilli, or Nashville', price: 100, image: '/images/wings.jpg' },
  { id: 'popcorn', name: 'Chicken Popcorn', tagline: 'Bite-Sized Crunch', description: 'Perfectly seasoned bite-sized chicken pieces', price: 170, image: '/images/popcorn.jpg' },
  { id: 'loaded-fries', name: 'Loaded Fries', tagline: 'Fully Loaded', description: 'Crispy fries topped with cheese, sauces, and chicken', price: 240, image: '/images/loaded-fries.jpg' },
];

export default function SignatureDishes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#1A1A1A] overflow-hidden"
    >
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C41E24]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with enhanced animation */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C41E24]/10 text-[#F97316] text-sm font-semibold uppercase tracking-wider mb-4">
            <Flame size={16} className="animate-flame" />
            Signature Selection
            <Star size={14} fill="#F97316" className="animate-pulse" />
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4">
            Our <span className="text-gradient-fire">Best Sellers</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The dishes that made us famous. Each one crafted to crispy perfection.
          </p>
        </div>

        {/* Signature Dishes Grid with stagger animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {signatureDishes.map((dish, index) => (
            <div
              key={dish.id}
              className={`signature-card group relative bg-[#2D2D2D] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Card Image Area */}
              <div className="relative h-32 md:h-64 bg-gradient-to-b from-[#3D3D3D] to-[#2D2D2D] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-transparent to-transparent" />

                {/* Most Ordered Badge */}
                {index === 0 && (
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-gradient-to-r from-[#F97316] to-[#C41E24] text-white text-[10px] md:text-xs font-bold uppercase">
                    <Flame size={10} className="md:w-3 md:h-3 animate-pulse" />
                    <span className="hidden sm:inline">Most Ordered</span>
                    <span className="sm:hidden">Hot</span>
                  </div>
                )}

                {/* Price Badge with bounce */}
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 px-2 py-1 md:px-4 md:py-2 rounded-full bg-[#1A1A1A] text-white text-xs md:text-base font-bold shadow-lg group-hover:scale-110 transition-transform">
                  ₹{dish.price}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-3 md:p-6">
                <span className="text-[#F97316] text-[10px] md:text-sm font-semibold uppercase tracking-wider inline-block group-hover:translate-x-1 transition-transform">
                  {dish.tagline}
                </span>
                <h3 className="text-white text-sm md:text-xl font-bold mt-0.5 md:mt-1 mb-1 md:mb-2 group-hover:text-[#F97316] transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-gray-400 text-[10px] md:text-sm line-clamp-2 hidden sm:block">
                  {dish.description}
                </p>
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-[#F97316]/50 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* CTA with animation */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#menu"
            className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <span>Explore Full Menu</span>
            <Flame size={18} className="animate-bounce-subtle" />
          </a>
        </div>
      </div>
    </section>
  );
}
