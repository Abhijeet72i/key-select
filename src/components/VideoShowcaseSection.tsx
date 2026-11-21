import { motion } from 'motion/react';
import { VIDEO_ASSETS } from '../data/hotelData';
import { VideoFrame } from './VideoFrame';

export function VideoShowcaseSection() {
  return (
    <section id="films" className="py-24 lg:py-32 bg-[#12261E] text-[#F7F5F0]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 border-b border-[#F7F5F0]/12"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#CFAF72] mb-4">
              Cinematic Showcase
            </p>
            <h2
              className="font-serif font-normal text-[#F7F5F0] leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
            >
              Life in the Hills, in Motion
            </h2>
          </div>
          <p className="text-sm sm:text-[15px] text-[#F7F5F0]/75 max-w-md leading-relaxed">
            Step inside the mountain calm of Keys Select by Lemon Tree Hotels, Kufri — from
            steaming sunset jacuzzis to cedar-framed twilight terraces.
          </p>
        </motion.div>

        {/* Video 01 – Hotel Experience (Uncropped Vertical Film Feature) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p className="text-xs tracking-[0.2em] uppercase text-[#CFAF72] tabular-nums mb-3">
              Video {VIDEO_ASSETS.experience.number} · {VIDEO_ASSETS.experience.subtitle}
            </p>
            <h3 className="font-serif text-3xl sm:text-5xl font-normal text-[#F7F5F0] mb-5 leading-tight">
              {VIDEO_ASSETS.experience.title}
            </h3>
            <p className="text-sm sm:text-base text-[#F7F5F0]/80 leading-[1.85] mb-8 max-w-xl">
              {VIDEO_ASSETS.experience.description}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-7 border-t border-[#F7F5F0]/12 max-w-lg">
              <div>
                <p className="font-serif text-2xl text-[#E2CB9D] mb-1">Open Deck Jacuzzi</p>
                <p className="text-xs text-[#F7F5F0]/65 leading-relaxed">
                  Heated outdoor hydro-relaxation facing Kufri’s forested valley at golden hour.
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#E2CB9D] mb-1">Fitness Centre</p>
                <p className="text-xs text-[#F7F5F0]/65 leading-relaxed">
                  Modern cardio and strength studio designed to keep every mountain stay energizing.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[380px] border border-[#F7F5F0]/15 shadow-2xl">
              <VideoFrame
                src={VIDEO_ASSETS.experience.src}
                posterImage={VIDEO_ASSETS.experience.posterImage}
                label={`Video 01 – ${VIDEO_ASSETS.experience.title}`}
                aspectClass="aspect-[9/16]"
              />
            </div>
          </div>
        </motion.div>

        {/* Video 02 – Explore the Property (Wide Cinematic Scroll-Triggered Reveal) */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 lg:mt-32 pt-20 border-t border-[#F7F5F0]/12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#CFAF72] tabular-nums mb-2">
                Video {VIDEO_ASSETS.property.number} · {VIDEO_ASSETS.property.subtitle}
              </p>
              <h3 className="font-serif text-3xl sm:text-5xl font-normal text-[#F7F5F0]">
                {VIDEO_ASSETS.property.title}
              </h3>
            </div>
            <p className="text-sm sm:text-[15px] text-[#F7F5F0]/75 max-w-lg leading-relaxed">
              {VIDEO_ASSETS.property.description}
            </p>
          </div>

          <div className="border border-[#F7F5F0]/15 shadow-2xl">
            <VideoFrame
              src={VIDEO_ASSETS.property.src}
              posterImage={VIDEO_ASSETS.property.posterImage}
              label={`Video 02 – ${VIDEO_ASSETS.property.title}`}
              aspectClass="aspect-[16/9]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
