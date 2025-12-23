'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, Sparkles, Star } from 'lucide-react';
import Image from 'next/image';

const signatureDishes = [
  { id: 'fried-chicken', name: 'Fried Chicken', tagline: 'Golden & Crispy', description: 'Our signature fried chicken - crispy on the outside, juicy on the inside', price: 90, image: '/images/fried-chicken.jpg' },
  { id: 'wings', name: 'Wings', tagline: 'Saucy & Bold', description: 'Tossed in your choice of Classic, Korean, Sweetchilli, or Nashville', price: 100, image: '/images/wings.jpg' },
  { id: 'popcorn', name: 'Chicken Popcorn', tagline: 'Bite-Sized Crunch', description: 'Perfectly seasoned bite-sized chicken pieces', price: 170, image: '/images/popcorn.jpg' },
  { id: 'loaded-fries', name: 'Loaded Fries', tagline: 'Fully Loaded', description: 'Crispy fries topped with cheese, sauces, and chicken', price: 240, image: '/images/loaded-fries.jpg' },
];

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 100, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

export default function SignatureDishes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for decorative elements
      gsap.to('.float-decoration', {
        y: -15,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#1A1A1A] overflow-hidden"
    >
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#C41E24]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute float-decoration"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          >
            <Sparkles className="w-4 h-4 text-[#F97316]/50" />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C41E24]/10 text-[#F97316] text-sm font-semibold uppercase tracking-wider mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Flame size={16} />
            </motion.div>
            Signature Selection
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Star size={14} fill="#F97316" />
            </motion.div>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4"
          >
            Our <span className="text-gradient-fire">Best Sellers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            The dishes that made us famous. Each one crafted to crispy perfection.
          </motion.p>
        </motion.div>

        {/* Signature Dishes Grid with stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
        >
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="signature-card group relative bg-[#2D2D2D] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Card Image Area */}
              <div className="relative h-32 md:h-64 bg-gradient-to-b from-[#3D3D3D] to-[#2D2D2D] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-transparent to-transparent"
                  whileHover={{ opacity: 0.5 }}
                />

                {/* Animated shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: '-200%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* Floating spice particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        background: i % 2 === 0 ? '#F97316' : '#FACC15',
                        boxShadow: `0 0 10px ${i % 2 === 0 ? '#F97316' : '#FACC15'}`,
                      }}
                      animate={{
                        y: [-10, -40],
                        x: [0, (Math.random() - 0.5) * 30],
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
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    className="absolute top-2 left-2 md:top-4 md:left-4 flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-gradient-to-r from-[#F97316] to-[#C41E24] text-white text-[10px] md:text-xs font-bold uppercase"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      <Flame size={10} className="md:w-3 md:h-3" />
                    </motion.div>
                    <span className="hidden sm:inline">Most Ordered</span>
                    <span className="sm:hidden">Hot</span>
                  </motion.div>
                )}

                {/* Price Badge with bounce */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  className="absolute bottom-2 right-2 md:bottom-4 md:right-4 px-2 py-1 md:px-4 md:py-2 rounded-full bg-[#1A1A1A] text-white text-xs md:text-base font-bold shadow-lg"
                >
                  ₹{dish.price}
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-3 md:p-6">
                <motion.span
                  className="text-[#F97316] text-[10px] md:text-sm font-semibold uppercase tracking-wider inline-block"
                  whileHover={{ x: 5 }}
                >
                  {dish.tagline}
                </motion.span>
                <h3 className="text-white text-sm md:text-xl font-bold mt-0.5 md:mt-1 mb-1 md:mb-2 group-hover:text-[#F97316] transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-gray-400 text-[10px] md:text-sm line-clamp-2 hidden sm:block">
                  {dish.description}
                </p>
              </div>

              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  boxShadow: '0 0 30px rgba(249,115,22,0.4), inset 0 0 0 2px rgba(249,115,22,0.5)',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#menu"
            className="btn-primary inline-flex items-center gap-2 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Full Menu</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Flame size={18} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
