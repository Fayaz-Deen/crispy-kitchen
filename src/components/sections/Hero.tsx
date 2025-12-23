'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, MapPin, MessageCircle, Flame } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to('.hero-bg', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Text stagger animation with split effect
      gsap.fromTo(
        '.hero-text-line',
        { y: 150, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.3,
        }
      );

      // Floating elements animation
      gsap.to('.float-element', {
        y: -20,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });

      // Pulsing glow effect
      gsap.to('.pulse-glow', {
        scale: 1.2,
        opacity: 0.5,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // More particles with varied sizes and colors
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 2,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 3,
    color: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#C41E24' : '#FACC15',
  }));

  // Floating food emojis
  const floatingEmojis = ['🍗', '🔥', '🍟', '✨', '🌶️', '💥'];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="hero-bg absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-transparent to-[#1A1A1A]/90 z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-[#1A1A1A]/60" />

        {/* Animated overlay gradients */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-[#C41E24]/20 via-transparent to-[#F97316]/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Pulsing glow orbs */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        <div className="pulse-glow absolute top-1/4 left-1/4 w-96 h-96 bg-[#C41E24]/30 rounded-full blur-3xl" />
        <div className="pulse-glow absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F97316]/30 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating emojis */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {floatingEmojis.map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl float-element"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              rotate: [-10, 10, -10],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-10, 10, -10],
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Rising smoke/steam effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 z-10 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-32 h-32 rounded-full bg-gradient-to-t from-white/10 to-transparent blur-xl"
            style={{ left: `${10 + i * 12}%` }}
            animate={{
              y: [0, -400],
              opacity: [0.5, 0],
              scale: [1, 2],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div
        ref={textRef}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Animated Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'backOut' }}
          className="mb-6"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#F97316]/20 to-[#C41E24]/20 border border-[#F97316]/40 text-[#F97316] text-sm font-bold uppercase tracking-wider"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249,115,22,0.4)' }}
          >
            <Flame className="w-4 h-4 animate-pulse" />
            Madurai&apos;s Crunch King
            <Flame className="w-4 h-4 animate-pulse" />
          </motion.span>
        </motion.div>

        {/* Main Headline with 3D effect */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-none mb-6 md:mb-8 perspective-1000">
          <span className="hero-text-line block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] md:drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Crispy.
          </span>
          <span className="hero-text-line block text-gradient-fire drop-shadow-[0_0_25px_rgba(249,115,22,0.5)] md:drop-shadow-[0_0_40px_rgba(249,115,22,0.5)]">
            Juicy.
          </span>
          <span className="hero-text-line block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] md:drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Addictive.
          </span>
        </h1>

        {/* Animated Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4"
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Premium fried chicken crafted with passion. Fresh oil, secret spices,
            and that perfect golden crunch.
          </motion.span>
        </motion.p>

        {/* Animated CTA Buttons - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <motion.a
            href="#menu"
            className="btn-primary flex items-center justify-center gap-2 relative overflow-hidden group w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">View Menu</span>
            <Flame className="w-5 h-5 relative z-10" />
          </motion.a>

          <motion.a
            href="https://wa.me/919597376713?text=Hi!%20I%20would%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
            whileHover={{ scale: 1.05, borderColor: '#25D366', color: '#25D366' }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} />
            <span>Order on WhatsApp</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin size={20} />
            <span>Visit Store</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <motion.span
            className="text-xs uppercase tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Scroll Down
          </motion.span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1A1A1A] to-transparent z-10" />
    </section>
  );
}
