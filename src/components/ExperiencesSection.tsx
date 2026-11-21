import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { EXPERIENCES, type ExperienceItem } from '../data/hotelData';
import { HotelImage } from './HotelImage';

interface ExperiencesSectionProps {
  onOpenEnquiry: (context?: string) => void;
}

function ExperienceMedia({ item, aspectClass }: { item: ExperienceItem; aspectClass: string }) {
  const [showSecondary, setShowSecondary] = useState(false);
  const currentSrc = showSecondary && item.secondaryImage ? item.secondaryImage : item.image;

  return (
    <div className="relative overflow-hidden bg-[#12261E]">
      <div className={`${aspectClass} w-full overflow-hidden`}>
        <HotelImage
          src={currentSrc}
          alt={item.name}
          className="w-full h-full group-hover:scale-[1.04] transition-transform duration-700"
        />
      </div>

      {item.secondaryImage && (
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 bg-[#0C1A14]/75 backdrop-blur-md p-1 border border-[#F7F5F0]/20">
          <button
            type="button"
            onClick={() => setShowSecondary(false)}
            className={`px-2.5 py-1 text-[11px] tracking-[0.12em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              !showSecondary
                ? 'bg-[#F7F5F0] text-[#12261E] font-semibold'
                : 'text-[#F7F5F0]/80 hover:text-white'
            }`}
          >
            View 01
          </button>
          <button
            type="button"
            onClick={() => setShowSecondary(true)}
            className={`px-2.5 py-1 text-[11px] tracking-[0.12em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              showSecondary
                ? 'bg-[#F7F5F0] text-[#12261E] font-semibold'
                : 'text-[#F7F5F0]/80 hover:text-white'
            }`}
          >
            View 02
          </button>
        </div>
      )}
    </div>
  );
}

export function ExperiencesSection({ onOpenEnquiry }: ExperiencesSectionProps) {
  const marqueeExperiences = EXPERIENCES.filter((e) => e.featured);
  const wellnessAndEvents = EXPERIENCES.filter((e) => !e.featured);

  return (
    <section id="experiences" className="py-24 lg:py-32 bg-[#EDE9E0] text-[#1A1D1B]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 border-b border-[#D5CDBE]"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#99763A] mb-4">
              Curated Hospitality
            </p>
            <h2
              className="font-serif font-normal text-[#12261E] leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
            >
              Dining & Experiences
            </h2>
          </div>
          <p className="text-[15px] text-[#3E4340] max-w-md leading-relaxed">
            Savour hillside culinary traditions, twilight spirits on the canopy terrace, steaming
            open-deck jacuzzis, and mountain celebrations tailored to every season.
          </p>
        </motion.div>

        {/* Marquee Alternating Editorial Spreads: Keys Café, Unlock Bar, Open Deck Jacuzzi */}
        <div className="divide-y divide-[#D5CDBE]">
          {marqueeExperiences.map((item, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="group py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                <div
                  className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <ExperienceMedia item={item} aspectClass="aspect-[16/10]" />
                </div>

                <div
                  className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="flex items-center gap-2.5 text-xs text-[#636864] mb-3 tabular-nums">
                    <span className="text-[#99763A] font-semibold">{item.number}.</span>
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.timing}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#12261E] mb-3">
                    {item.name}
                  </h3>

                  <p className="font-serif italic text-lg text-[#555B57] mb-5">{item.tagline}</p>

                  <p className="text-sm sm:text-[15px] text-[#3E4340] leading-[1.8] mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-[#1A1D1B]"
                      >
                        <Check
                          className="w-4 h-4 text-[#99763A] shrink-0 mt-0.5"
                          strokeWidth={1.9}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(item.name)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#12261E] text-[#F7F5F0] hover:bg-[#1E3C30] text-xs font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {item.ctaLabel}
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Wellness, Recreation & Events 3-Column Row */}
        <div className="pt-14 border-t border-[#D5CDBE]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#99763A] mb-2">
                Wellness, Play & Celebrations
              </p>
              <h3 className="font-serif text-3xl text-[#12261E]">
                More Spaces Across the Property
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wellnessAndEvents.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[#F7F5F0] border border-[#DDD6C8] flex flex-col"
              >
                <ExperienceMedia item={item} aspectClass="aspect-[4/3]" />

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#636864] mb-2.5 tabular-nums">
                      <span className="text-[#99763A] font-semibold">{item.number}.</span>
                      <span>{item.category}</span>
                    </div>

                    <h4 className="font-serif text-2xl text-[#12261E] mb-2.5">{item.name}</h4>

                    <p className="text-sm text-[#3E4340] leading-[1.75] mb-5">{item.description}</p>
                  </div>

                  <div className="pt-4 border-t border-[#E2DDD2] flex items-center justify-between gap-3">
                    <span className="text-xs text-[#636864]">{item.timing}</span>
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry(item.name)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#12261E] hover:text-[#99763A] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      {item.ctaLabel}
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
