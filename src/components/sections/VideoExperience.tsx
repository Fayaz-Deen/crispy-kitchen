'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, X, Film } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const videoItems = [
  { id: 1, title: 'The Perfect Fry', description: 'Watch our chicken hit the hot oil', thumbnail: '/images/video-frying.jpg', category: 'Frying' },
  { id: 2, title: 'Sauce Toss', description: 'Wings getting their flavor coat', thumbnail: '/images/video-sauce.jpg', category: 'Glazing' },
  { id: 3, title: 'Cheese Pull', description: 'That satisfying stretch', thumbnail: '/images/video-cheese.jpg', category: 'Loaded' },
  { id: 4, title: 'Golden Glaze', description: 'Korean wings in action', thumbnail: '/images/video-glaze.jpg', category: 'Wings' },
  { id: 5, title: 'Crunch Test', description: 'Hear that crispy sound', thumbnail: '/images/video-crunch.jpg', category: 'Crispy' },
  { id: 6, title: 'Steam Rising', description: 'Fresh out of the fryer', thumbnail: '/images/video-steam.jpg', category: 'Fresh' },
];

export default function VideoExperience() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.video-card',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
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
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C41E24]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
            <Film size={16} />
            Visual Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4">
            Watch The <span className="text-gradient-fire">Sizzle</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Food that looks as good as it tastes. Get hungry just watching.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {videoItems.map((video, index) => (
            <motion.div
              key={video.id}
              className="video-card group relative aspect-video bg-[#2D2D2D] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedVideo(video.id)}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Category badge */}
              <div className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#1A1A1A]/80 text-[#F97316] text-[10px] md:text-xs font-bold uppercase">
                {video.category}
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#F97316] to-[#C41E24] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play size={16} className="text-white ml-0.5 md:ml-1 md:w-7 md:h-7" fill="white" />
                </motion.div>
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-[#1A1A1A] to-transparent">
                <h3 className="text-white font-bold text-xs md:text-lg group-hover:text-[#F97316] transition-colors line-clamp-1">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-[10px] md:text-sm hidden sm:block">{video.description}</p>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-transparent group-hover:border-[#F97316]/50 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Video Modal Placeholder */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full aspect-video bg-[#2D2D2D] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#C41E24] transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Video placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#F97316] to-[#C41E24] flex items-center justify-center mb-4">
                    <Play size={36} className="text-white ml-1" fill="white" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {videoItems.find((v) => v.id === selectedVideo)?.title}
                  </h3>
                  <p className="text-gray-400">
                    Video content coming soon! Add your delicious food videos here.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
