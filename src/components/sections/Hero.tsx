'use client';

import Image from 'next/image';
import { ChevronDown, MapPin, MessageCircle, Flame } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Crispy Kitchen hero background"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-transparent to-[#1A1A1A]/90 z-10" />
        <div className="absolute inset-0 bg-[#1A1A1A]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#C41E24]/20 via-transparent to-[#F97316]/20 z-10" />
      </div>

      {/* Pulsing glow orbs */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C41E24]/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F97316]/30 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />
      </div>

      {/* Floating emojis */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute text-4xl animate-float" style={{ left: '10%', top: '20%' }}>🍗</div>
        <div className="absolute text-4xl animate-float animation-delay-500" style={{ left: '25%', top: '45%' }}>🔥</div>
        <div className="absolute text-4xl animate-float animation-delay-1000" style={{ left: '75%', top: '30%' }}>🍟</div>
        <div className="absolute text-4xl animate-float animation-delay-1500" style={{ left: '85%', top: '60%' }}>✨</div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Tagline */}
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#F97316]/20 to-[#C41E24]/20 border border-[#F97316]/40 text-[#F97316] text-sm font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 animate-pulse" />
            Madurai&apos;s Crunch King
            <Flame className="w-4 h-4 animate-pulse" />
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-none mb-6 md:mb-8">
          <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-fade-in-up">
            Crispy.
          </span>
          <span className="block text-gradient-fire drop-shadow-[0_0_25px_rgba(249,115,22,0.5)] animate-fade-in-up animation-delay-200">
            Juicy.
          </span>
          <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-fade-in-up animation-delay-400">
            Addictive.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4 animate-fade-in-up animation-delay-600">
          Premium fried chicken crafted with passion. Fresh oil, secret spices,
          and that perfect golden crunch.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 animate-fade-in-up animation-delay-800">
          <a
            href="#menu"
            className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-105 transition-transform"
          >
            <span>View Menu</span>
            <Flame className="w-5 h-5" />
          </a>

          <a
            href="https://wa.me/919597376713?text=Hi!%20I%20would%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-105 transition-transform"
          >
            <MessageCircle size={20} />
            <span>Order on WhatsApp</span>
          </a>

          <a
            href="#contact"
            className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-105 transition-transform"
          >
            <MapPin size={20} />
            <span>Visit Store</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-fade-in animation-delay-1000">
        <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce-slow">
          <span className="text-xs uppercase tracking-wider">Scroll Down</span>
          <ChevronDown size={28} />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1A1A1A] to-transparent z-10" />
    </section>
  );
}
