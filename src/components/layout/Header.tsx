'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle, MapPin } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#1A1A1A]/98 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Crispy Kitchen"
              width={150}
              height={40}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white font-semibold uppercase tracking-wider text-sm hover:text-[#F97316] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F97316] to-[#C41E24] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919597376713"
              className="flex items-center gap-2 text-white hover:text-[#F97316] transition-colors"
            >
              <Phone size={18} />
              <span className="font-semibold">Call Now</span>
            </a>
            <a
              href="https://wa.me/919597376713?text=Hi!%20I%20would%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-6"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 z-50 active:scale-90 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1A1A1A] md:hidden z-40 border-t border-[#2D2D2D] shadow-2xl animate-fade-in-fast">
          <nav className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-white font-bold uppercase tracking-wider text-lg py-3 px-4 hover:bg-[#2D2D2D] rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Divider */}
            <div className="h-px bg-[#2D2D2D] my-3" />

            {/* Mobile Quick Actions */}
            <div className="flex flex-col gap-3 px-2">
              <a
                href="https://wa.me/919597376713?text=Hi!%20I%20would%20like%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>
              <div className="flex gap-3">
                <a
                  href="tel:+919597376713"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#2D2D2D] text-white font-bold py-3 px-4 rounded-xl text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone size={18} />
                  Call
                </a>
                <a
                  href="#contact"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#F97316] to-[#C41E24] text-white font-bold py-3 px-4 rounded-xl text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MapPin size={18} />
                  Visit
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
