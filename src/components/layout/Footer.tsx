'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Phone, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '@/data/menu';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="Crispy Kitchen"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Madurai&apos;s Crunch King. Serving the crispiest, juiciest fried
              chicken since day one.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${contactInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#F97316] hover:to-[#C41E24] transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#F97316] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-[#F97316] flex-shrink-0 mt-1" />
                <span className="text-sm">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-[#F97316] flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-[#F97316] transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock size={20} className="text-[#F97316] flex-shrink-0" />
                <span>{contactInfo.openingHours}</span>
              </li>
            </ul>
          </div>

          {/* Order */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">
              Order Now
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Craving some crispy goodness? Order directly via WhatsApp!
            </p>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hi!%20I%20would%20like%20to%20place%20an%20order`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-sm"
            >
              WhatsApp Order
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#2D2D2D] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Crispy Kitchen. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with fire in Madurai
          </p>
        </div>
      </div>
    </footer>
  );
}
