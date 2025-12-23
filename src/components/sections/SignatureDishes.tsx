'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame } from 'lucide-react';
import Image from 'next/image';

const signatureDishes = [
  { id: 'fried-chicken', name: 'Fried Chicken', tagline: 'Golden & Crispy', description: 'Our signature fried chicken - crispy on the outside, juicy on the inside', price: 90, image: '/images/fried-chicken.jpg' },
  { id: 'wings', name: 'Wings', tagline: 'Saucy & Bold', description: 'Tossed in your choice of Classic, Korean, Sweetchilli, or Nashville', price: 100, image: '/images/wings.jpg' },
  { id: 'popcorn', name: 'Chicken Popcorn', tagline: 'Bite-Sized Crunch', description: 'Perfectly seasoned bite-sized chicken pieces', price: 170, image: '/images/popcorn.jpg' },
  { id: 'loaded-fries', name: 'Loaded Fries', tagline: 'Fully Loaded', description: 'Crispy fries topped with cheese, sauces, and chicken', price: 240, image: '/images/loaded-fries.jpg' },
];

gsap.registerPlugin(ScrollTrigger);

export default function SignatureDishes() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.fromTo(
        '.signature-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#1A1A1A]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C41E24]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C41E24]/10 text-[#F97316] text-sm font-semibold uppercase tracking-wider mb-4">
            <Flame size={16} className="animate-flame" />
            Signature Selection
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4">
            Our <span className="text-gradient-fire">Best Sellers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The dishes that made us famous. Each one crafted to crispy perfection.
          </p>
        </motion.div>

        {/* Signature Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureDishes.map((dish, index) => (
            <div
              key={dish.id}
              className="signature-card group relative bg-[#2D2D2D] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Card Image Area */}
              <div className="relative h-64 bg-gradient-to-b from-[#3D3D3D] to-[#2D2D2D] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-transparent to-transparent" />

                {/* Floating spice particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-[#F97316]"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [-10, -30],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>

                {/* Most Ordered Badge */}
                {index === 0 && (
                  <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#F97316] to-[#C41E24] text-white text-xs font-bold uppercase">
                    <Flame size={12} />
                    Most Ordered
                  </div>
                )}

                {/* Price Badge */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#1A1A1A] text-white font-bold"
                >
                  From ₹{dish.price}
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <span className="text-[#F97316] text-sm font-semibold uppercase tracking-wider">
                  {dish.tagline}
                </span>
                <h3 className="text-white text-xl font-bold mt-1 mb-2 group-hover:text-[#F97316] transition-colors">
                  {dish.name}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {dish.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-[#F97316]/50 glow-orange" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#menu"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Explore Full Menu</span>
            <Flame size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
