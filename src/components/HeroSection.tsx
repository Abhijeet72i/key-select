import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { VIDEO_ASSETS } from '../data/hotelData';
import { VideoFrame } from './VideoFrame';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0C1A14]"
    >
      {/* Full-Screen Cinematic Hero Video */}
      <div className="absolute inset-0 z-0">
        <VideoFrame
          src={VIDEO_ASSETS.hero.src}
          posterImage={VIDEO_ASSETS.hero.posterImage}
          label={VIDEO_ASSETS.hero.title}
          isHero
        />
      </div>

      {/* Centered Editorial Hero Typography */}
      <div className="relative z-10 max-w-[1160px] mx-auto px-6 lg:px-10 pt-24 pb-20 text-center text-[#F7F5F0]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-[13px] font-medium tracking-[0.28em] uppercase text-[#E2CB9D] mb-6"
        >
          Kufri · Shimla · Himachal Pradesh
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-normal tracking-[0.06em] text-[#F7F5F0] leading-[1.06] mb-6"
          style={{ fontSize: 'clamp(2.75rem, 6.2vw, 5.5rem)' }}
        >
          ESCAPE TO THE HILLS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-[1px] bg-[#CFAF72] mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-xl sm:text-2xl md:text-[28px] font-normal tracking-wide text-[#F7F5F0] mb-3"
        >
          Keys Select by Lemon Tree Hotels
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-[17px] text-[#F7F5F0]/85 max-w-2xl mx-auto leading-relaxed font-light mb-11"
        >
          Kufri, Shimla – Where comfort meets the beauty of the mountains.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#F7F5F0] text-[#12261E] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#E2CB9D] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2CB9D]"
          >
            Explore Our Hotel
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </a>

          <a
            href="#experiences"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-[#F7F5F0]/55 text-[#F7F5F0] bg-[#0C1A14]/30 hover:bg-[#F7F5F0]/12 hover:border-[#E2CB9D] backdrop-blur-sm text-xs font-semibold tracking-[0.16em] uppercase transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2CB9D]"
          >
            Discover More
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        aria-label="Scroll to About the Hotel"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#F7F5F0]/70 hover:text-[#E2CB9D] transition-colors"
      >
        <span className="text-[11px] tracking-[0.22em] uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" strokeWidth={1.4} />
      </motion.a>
    </section>
  );
}
