'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, Sparkles, ChefHat } from 'lucide-react';
import { menuData, MenuCategory, MenuItem } from '@/data/menu';

gsap.registerPlugin(ScrollTrigger);

const categoryIcons: { [key: string]: string } = {
  'french-fries': '🍟',
  'popcorn': '🍿',
  'loaded-fries': '🍟',
  'wings': '🍗',
  'strips': '🍗',
  'wraps': '🌯',
  'burgers': '🍔',
  'sandwiches': '🥪',
  'fried-chicken': '🍗',
  'mojitos': '🍹',
  'shakes': '🥤',
  'choco-shakes': '🍫',
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const activeMenuItems = menuData.find((cat) => cat.id === activeCategory)?.items || [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.menu-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#C41E24]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-[#F97316]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="menu-header text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C41E24]/10 text-[#F97316] text-sm font-semibold uppercase tracking-wider mb-4">
            <ChefHat size={16} />
            Full Menu
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4">
            What&apos;s <span className="text-gradient-fire">Cooking</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every item made fresh, crispy, and packed with flavor
          </p>
        </div>

        {/* Category Tabs */}
        <div
          ref={tabsRef}
          className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-full whitespace-nowrap font-semibold text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#F97316] to-[#C41E24] text-white shadow-lg glow-orange'
                  : 'bg-[#2D2D2D] text-gray-300 hover:bg-[#3D3D3D] hover:text-white'
              }`}
            >
              <span className="text-lg">{categoryIcons[category.id]}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {activeMenuItems.map((item, index) => (
              <MenuItemCard key={item.name} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Sticky Order CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:relative md:bottom-0 md:left-0 md:translate-x-0 md:mt-12 md:text-center"
        >
          <a
            href="https://wa.me/919597376713?text=Hi!%20I%20would%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 shadow-2xl"
          >
            <span>Order Now</span>
            <Flame size={18} className="animate-flame" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group relative bg-[#2D2D2D] rounded-xl p-4 hover:bg-[#3D3D3D] transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white font-bold group-hover:text-[#F97316] transition-colors">
              {item.name}
            </h3>
            {item.isPopular && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#F97316] to-[#C41E24] text-white text-xs font-bold">
                <Flame size={10} />
                Hot
              </span>
            )}
            {item.isSpicy && (
              <span className="px-2 py-0.5 rounded-full bg-[#C41E24]/20 text-[#F97316] text-xs font-bold">
                🌶️
              </span>
            )}
          </div>

          {item.variants && item.variants.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.variants.map((variant) => (
                <span
                  key={variant.name}
                  className="text-xs text-gray-400 bg-[#1A1A1A] px-2 py-1 rounded"
                >
                  {variant.name}: ₹{variant.price}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="text-right">
          <span className="text-[#F97316] font-bold text-lg">
            ₹{item.price}
          </span>
          {item.variants && (
            <span className="block text-gray-500 text-xs">onwards</span>
          )}
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#F97316]/30 transition-all duration-300 pointer-events-none" />

      {/* Sparkle effect on hover */}
      <motion.div
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        <Sparkles size={14} className="text-[#F97316]" />
      </motion.div>
    </motion.div>
  );
}
