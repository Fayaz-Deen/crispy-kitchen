'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, Sparkles, ChefHat } from 'lucide-react';
import { menuData, MenuItem } from '@/data/menu';
import Image from 'next/image';

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

const categoryImages: { [key: string]: string } = {
  'french-fries': '/images/fries.jpg',
  'popcorn': '/images/popcorn.jpg',
  'loaded-fries': '/images/loaded-fries.jpg',
  'wings': '/images/wings.jpg',
  'strips': '/images/fried-chicken.jpg',
  'wraps': '/images/wrap.jpg',
  'burgers': '/images/burger.jpg',
  'sandwiches': '/images/sandwich.jpg',
  'fried-chicken': '/images/fried-chicken.jpg',
  'mojitos': '/images/mojito.jpg',
  'shakes': '/images/shake.jpg',
  'choco-shakes': '/images/shake.jpg',
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const activeMenuItems = menuData.find((cat) => cat.id === activeCategory)?.items || [];

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.querySelector(`[data-category="${activeCategory}"]`);
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeCategory]);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-48 md:w-72 h-48 md:h-72 bg-[#C41E24]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-48 md:w-72 h-48 md:h-72 bg-[#F97316]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="menu-header text-center mb-8 md:mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#C41E24]/10 text-[#F97316] text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4"
          >
            <ChefHat size={14} className="md:w-4 md:h-4" />
            Full Menu
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-3 md:mb-4">
            What&apos;s <span className="text-gradient-fire">Cooking</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-4">
            Every item made fresh, crispy, and packed with flavor
          </p>
        </div>

        {/* Category Tabs - Horizontal scroll on mobile */}
        <div
          ref={tabsRef}
          className="flex overflow-x-auto gap-2 pb-4 mb-6 md:mb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {menuData.map((category) => (
            <motion.button
              key={category.id}
              data-category={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-3 rounded-full whitespace-nowrap font-semibold text-xs md:text-sm transition-all duration-300 snap-center flex-shrink-0 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#F97316] to-[#C41E24] text-white shadow-lg'
                  : 'bg-[#2D2D2D] text-gray-300 active:bg-[#3D3D3D]'
              }`}
            >
              <span className="text-base md:text-lg">{categoryIcons[category.id]}</span>
              <span>{category.name}</span>
            </motion.button>
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
            className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mb-20 md:mb-0"
          >
            {activeMenuItems.map((item, index) => (
              <MenuItemCard key={item.name} item={item} index={index} categoryImage={categoryImages[activeCategory]} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Desktop Order CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:block text-center mt-12"
        >
          <a
            href="https://wa.me/919597376713?text=Hi!%20I%20would%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Order Now</span>
            <Flame size={18} className="animate-flame" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function MenuItemCard({ item, index, categoryImage }: { item: MenuItem; index: number; categoryImage: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-[#2D2D2D] rounded-lg md:rounded-xl overflow-hidden active:bg-[#3D3D3D] md:hover:bg-[#3D3D3D] transition-all duration-300 cursor-pointer"
    >
      {/* Category Image */}
      <div className="relative h-24 md:h-32 w-full overflow-hidden">
        <Image
          src={categoryImage}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] to-transparent" />
        {/* Price badge on image */}
        <div className="absolute top-2 right-2 bg-[#1A1A1A]/80 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-[#F97316] font-bold text-xs md:text-sm">
            ₹{item.price}
          </span>
        </div>
      </div>

      <div className="p-2 md:p-3">
        <div className="flex items-center gap-1 md:gap-2 mb-0.5 flex-wrap">
          <h3 className="text-white font-bold text-xs md:text-sm group-hover:text-[#F97316] transition-colors line-clamp-1">
            {item.name}
          </h3>
          {item.isPopular && (
            <span className="flex items-center gap-0.5 px-1 md:px-1.5 py-0.5 rounded-full bg-gradient-to-r from-[#F97316] to-[#C41E24] text-white text-[8px] md:text-xs font-bold flex-shrink-0">
              <Flame size={6} className="md:w-[10px] md:h-[10px]" />
              Hot
            </span>
          )}
          {item.isSpicy && (
            <span className="px-1 py-0.5 rounded-full bg-[#C41E24]/20 text-[#F97316] text-[8px] md:text-xs font-bold flex-shrink-0">
              🌶️
            </span>
          )}
        </div>

        {item.variants && item.variants.length > 0 && (
          <div className="hidden md:flex flex-wrap gap-1.5 mt-1">
            {item.variants.map((variant) => (
              <span
                key={variant.name}
                className="text-[10px] md:text-xs text-gray-400 bg-[#1A1A1A] px-1.5 md:px-2 py-0.5 rounded"
              >
                {variant.name}: ₹{variant.price}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover effect - only on desktop */}
      <div className="hidden md:block absolute inset-0 rounded-xl border border-transparent group-hover:border-[#F97316]/30 transition-all duration-300 pointer-events-none" />

      {/* Sparkle effect on hover - only on desktop */}
      <motion.div
        className="hidden md:block absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        <Sparkles size={14} className="text-[#F97316]" />
      </motion.div>
    </motion.div>
  );
}

