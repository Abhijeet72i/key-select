import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { HotelImage } from './HotelImage';

interface AboutSectionProps {
  onOpenEnquiry: (context?: string) => void;
}

const RESORT_FACTS = [
  { value: '2,510 m', label: 'Himalayan Altitude in Kufri' },
  { value: '5 Styles', label: 'Mountain Rooms & Studio Suites' },
  { value: '16 km', label: 'From Shimla Mall Road' },
  { value: '4 Seasons', label: 'Pine Summers & Snowy Winters' },
];

export function AboutSection({ onOpenEnquiry }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F7F5F0] text-[#1A1D1B]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between py-2"
          >
            <div>
              <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#99763A] mb-4">
                The Mountain Retreat
              </p>

              <h2
                className="font-serif font-normal text-[#12261E] leading-[1.1] mb-8"
                style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
              >
                A Stay Above the Ordinary
              </h2>

              <div className="space-y-5 text-[15px] sm:text-base text-[#3E4340] leading-[1.8]">
                <p>
                  Nestled along the cedar-clad slopes of Kufri, just beyond the bustle of Shimla,
                  <strong className="font-medium text-[#12261E]">
                    {' '}
                    Keys Select by Lemon Tree Hotels
                  </strong>{' '}
                  is a contemporary mountain sanctuary shaped for unhurried escapes. Surrounded by
                  tall deodar forests and crisp Himalayan air, every terrace, window, and suite
                  opens out to nature’s quiet theatre.
                </p>
                <p>
                  Whether you arrive in summer for sunlit pine trails and golden sunsets from our
                  Open Deck Jacuzzi, or in winter when fresh snowfall turns the hillside into a
                  hushed alpine postcard, our warm Lemon Tree hospitality ensures an effortless,
                  restorative stay.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#rooms"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#12261E] text-[#F7F5F0] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#1E3C30] transition-colors whitespace-nowrap shrink-0"
                >
                  View Rooms & Suites
                </a>
                <button
                  type="button"
                  onClick={() => onOpenEnquiry('General Stay Enquiry')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-[#12261E] hover:text-[#99763A] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  Speak with Reservations
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
                </button>
              </div>
            </div>

            {/* Secondary Real Property Detail Photograph (Warm Timber Entrance) */}
            <div className="mt-12 pt-8 border-t border-[#DDD6C8] hidden lg:grid grid-cols-12 gap-5 items-center">
              <div className="col-span-6 aspect-[16/10] overflow-hidden bg-[#EDE9E0]">
                <HotelImage
                  src="/assets/aistudio/i6_f2125a2e.jpg"
                  alt="Warm pinewood main entrance of Keys Select by Lemon Tree Hotels, Kufri"
                  className="w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="col-span-6">
                <p className="font-serif text-lg text-[#12261E] mb-1.5">
                  Timeless Timber & Warmth
                </p>
                <p className="text-[13px] text-[#636864] leading-relaxed">
                  Handcrafted cedar porticos, lantern-lit stone pathways, and heartfelt mountain
                  hospitality from the moment you arrive.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Large Hotel Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative w-full h-[420px] sm:h-[520px] lg:h-full min-h-[540px] overflow-hidden bg-[#1A352A]">
              <HotelImage
                src="/assets/aistudio/i2_5a31c7bd.jpg"
                alt="Keys Select by Lemon Tree Hotels, Kufri facade glowing warmly against deodar pine trees at dusk"
                className="w-full h-full hover:scale-[1.03] transition-transform duration-1000"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[#636864]">
              <span>Keys Select by Lemon Tree Hotels · Kufri Exterior at Twilight</span>
              <span className="tabular-nums text-[#99763A]">31.0979° N, 77.2678° E</span>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Key Resort Facts Row (below split, unboxed editorial style) */}
        <div className="mt-16 lg:mt-20 pt-10 border-t border-[#DDD6C8] grid grid-cols-2 lg:grid-cols-4 gap-8">
          {RESORT_FACTS.map((fact) => (
            <div key={fact.label}>
              <p className="font-serif text-3xl sm:text-4xl text-[#12261E] tabular-nums mb-1.5">
                {fact.value}
              </p>
              <p className="text-xs sm:text-[13px] text-[#636864] tracking-wide">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
