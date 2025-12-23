'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, Droplets, Sparkles, Thermometer } from 'lucide-react';
import { flavorProfiles } from '@/data/menu';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Droplets,
    title: 'Fresh Oil Daily',
    description: 'We change our frying oil every single day. No compromises on freshness.',
  },
  {
    icon: Thermometer,
    title: 'Perfect Temperature',
    description: 'Precisely maintained oil temperature for that golden, crispy perfection.',
  },
  {
    icon: Sparkles,
    title: 'Secret Seasoning',
    description: 'Our signature spice blend passed down through generations.',
  },
  {
    icon: Flame,
    title: 'Made to Order',
    description: 'Every piece fried fresh when you order. Never pre-cooked.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate features on scroll
      gsap.fromTo(
        '.about-feature',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-features',
            start: 'top 70%',
          },
        }
      );

      // Animate flavor profiles
      gsap.fromTo(
        '.flavor-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.flavor-profiles',
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#1A1A1A] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C41E24]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#F97316]/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C41E24]/10 text-[#F97316] text-sm font-semibold uppercase tracking-wider mb-4">
            <Flame size={16} className="animate-flame" />
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4">
            Why <span className="text-gradient-fire">Crispy Kitchen</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We&apos;re not just another fried chicken joint. We&apos;re obsessed with
            the science of crunch - the perfect coating, the ideal temperature,
            and flavors that make you come back for more.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="about-features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="about-feature group bg-[#2D2D2D] rounded-2xl p-6 hover:bg-[#3D3D3D] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F97316] to-[#C41E24] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flavor Profiles */}
        <div className="flavor-profiles">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">
              Four <span className="text-gradient-fire">Flavor</span> Profiles
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From classic comfort to fiery Nashville heat - pick your adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flavorProfiles.map((flavor, index) => (
              <div
                key={flavor.name}
                className="flavor-card group relative bg-[#2D2D2D] rounded-2xl p-6 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${flavor.color} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${flavor.color}20` }}
                  >
                    <Flame size={24} style={{ color: flavor.color }} />
                  </div>
                  <h4
                    className="text-xl font-bold mb-2 transition-colors duration-300"
                    style={{ color: flavor.color }}
                  >
                    {flavor.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {flavor.description}
                  </p>
                </div>

                {/* Border effect */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current transition-all duration-300 pointer-events-none"
                  style={{ borderColor: `${flavor.color}50` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to taste the <span className="text-gradient-fire">crunch</span>?
          </p>
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
