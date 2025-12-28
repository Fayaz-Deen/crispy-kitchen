'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock, Instagram, MessageCircle, Navigation, Handshake } from 'lucide-react';
import { contactInfo } from '@/data/menu';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#1A1A1A]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C41E24]/10 text-[#F97316] text-sm font-semibold uppercase tracking-wider mb-4">
            <MapPin size={16} />
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4">
            Visit <span className="text-gradient-fire">Crispy Kitchen</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Come taste the crunch in person or order directly via WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className={`contact-card bg-[#2D2D2D] rounded-2xl p-6 hover:bg-[#3D3D3D] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '100ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316] to-[#C41E24] flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Location</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {contactInfo.address}
                  </p>
                  <a
                    href={contactInfo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-[#F97316] font-semibold hover:text-[#FB923C] transition-colors"
                  >
                    <Navigation size={16} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className={`contact-card bg-[#2D2D2D] rounded-2xl p-6 hover:bg-[#3D3D3D] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316] to-[#C41E24] flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-2xl font-bold text-[#F97316] hover:text-[#FB923C] transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="text-gray-400 text-sm mt-1">
                    For orders and inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className={`contact-card bg-[#2D2D2D] rounded-2xl p-6 hover:bg-[#3D3D3D] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316] to-[#C41E24] flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Opening Hours</h3>
                  <p className="text-2xl font-bold text-white">
                    {contactInfo.openingHours}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Open all days of the week
                  </p>
                </div>
              </div>
            </div>

            {/* Franchise Enquiry Card */}
            <div className={`contact-card bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] rounded-2xl p-6 border border-[#F97316]/30 hover:border-[#F97316]/60 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316] to-[#C41E24] flex items-center justify-center flex-shrink-0">
                  <Handshake size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Franchise Enquiry</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Interested in owning a Crispy Kitchen franchise?
                  </p>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}?text=Hi!%20I%20am%20interested%20in%20franchise%20opportunities`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#F97316] font-semibold hover:text-[#FB923C] transition-colors"
                  >
                    <MessageCircle size={16} />
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className={`contact-card flex flex-col sm:flex-row gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '500ms' }}>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=Hi!%20I%20would%20like%20to%20place%20an%20order`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300"
              >
                <MessageCircle size={20} />
                WhatsApp Order
              </a>
              <a
                href={`https://instagram.com/${contactInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
                Follow Us
              </a>
            </div>
          </div>

          {/* Map */}
          <div className={`contact-card relative h-[400px] lg:h-full min-h-[400px] bg-[#2D2D2D] rounded-2xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5!2d78.1!3d9.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTQnMDAuMCJOIDc4wrAwNicwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Crispy Kitchen location on Google Maps"
            />

            {/* Map Overlay CTA */}
            <div className="absolute bottom-4 left-4 right-4">
              <a
                href={contactInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#1A1A1A]/90 backdrop-blur-sm rounded-xl p-4 hover:bg-[#1A1A1A] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold">Crispy Kitchen</p>
                    <p className="text-gray-400 text-sm">Food Bazaar, Madurai</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F97316] to-[#C41E24] flex items-center justify-center">
                    <Navigation size={18} className="text-white" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
