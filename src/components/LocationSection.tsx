import { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, ExternalLink, MapPin, Navigation } from 'lucide-react';
import { HOTEL_INFO, NEARBY_ATTRACTIONS } from '../data/hotelData';
import { HotelImage } from './HotelImage';

export function LocationSection() {
  const [viewMode, setViewMode] = useState<'map' | 'seasons'>('map');
  const [selectedAttractionId, setSelectedAttractionId] = useState<string>(
    NEARBY_ATTRACTIONS[0].id
  );

  return (
    <section id="location" className="py-24 lg:py-32 bg-[#12261E] text-[#F7F5F0]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 border-b border-[#F7F5F0]/12"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#CFAF72] mb-4">
              Surroundings & Connectivity
            </p>
            <h2
              className="font-serif font-normal text-[#F7F5F0] leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
            >
              Discover Kufri
            </h2>
          </div>

          <p className="text-sm sm:text-[15px] text-[#F7F5F0]/75 max-w-md leading-relaxed">
            Perched along NH-22 amidst serene Himalayan cedar slopes, the resort offers effortless
            access to Kufri’s adventure ridges, Mashobra’s tranquil valleys, and historic Shimla.
          </p>
        </motion.div>

        {/* Main 2-Column Split: Attractions List + Map / Seasonal Frame */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left: Nearby Attractions */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="divide-y divide-[#F7F5F0]/12 border-t border-b border-[#F7F5F0]/12">
              {NEARBY_ATTRACTIONS.map((place, index) => {
                const isSelected = selectedAttractionId === place.id;
                return (
                  <button
                    key={place.id}
                    type="button"
                    onClick={() => setSelectedAttractionId(place.id)}
                    className={`w-full text-left py-6 transition-colors cursor-pointer ${
                      isSelected ? 'opacity-100' : 'opacity-75 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs text-[#CFAF72] tabular-nums">
                          0{index + 1}.
                        </span>
                        <h3 className="font-serif text-2xl sm:text-[26px] text-[#F7F5F0]">
                          {place.name}
                        </h3>
                      </div>
                      <span className="text-xs text-[#E2CB9D] tabular-nums whitespace-nowrap shrink-0">
                        {place.distance} · {place.driveTime}
                      </span>
                    </div>

                    <p className="text-xs tracking-[0.14em] uppercase text-[#F7F5F0]/55 mb-2 pl-7">
                      {place.category}
                    </p>

                    <p className="text-sm text-[#F7F5F0]/78 leading-relaxed pl-7">
                      {place.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Address & Direct Google Maps Actions */}
            <div className="mt-8 pt-2">
              <div className="flex items-start gap-3 text-sm text-[#F7F5F0]/80 mb-6">
                <MapPin
                  className="w-4 h-4 text-[#CFAF72] shrink-0 mt-1"
                  strokeWidth={1.75}
                />
                <p className="leading-relaxed">{HOTEL_INFO.address}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={HOTEL_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F7F5F0] text-[#12261E] hover:bg-[#E2CB9D] text-xs font-semibold tracking-[0.14em] uppercase transition-colors whitespace-nowrap shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" strokeWidth={1.8} />
                  Get Directions
                </a>
                <a
                  href={HOTEL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#F7F5F0]/30 text-[#F7F5F0] hover:border-[#E2CB9D] hover:text-[#E2CB9D] text-xs font-semibold tracking-[0.14em] uppercase transition-colors whitespace-nowrap shrink-0"
                >
                  Open in Google Maps
                  <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Map Embed & Kufri Seasonal Perspectives */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2 text-xs text-[#E2CB9D]">
                <Compass className="w-4 h-4" strokeWidth={1.6} />
                <span>NH-22, Kufri · 35 mins from Shimla</span>
              </div>

              <div className="inline-flex items-center border border-[#F7F5F0]/20 bg-[#0C1A14]/60 p-1">
                <button
                  type="button"
                  onClick={() => setViewMode('map')}
                  className={`px-3.5 py-1.5 text-[11px] tracking-[0.14em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    viewMode === 'map'
                      ? 'bg-[#F7F5F0] text-[#12261E] font-semibold'
                      : 'text-[#F7F5F0]/75 hover:text-white'
                  }`}
                >
                  Location Map
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('seasons')}
                  className={`px-3.5 py-1.5 text-[11px] tracking-[0.14em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    viewMode === 'seasons'
                      ? 'bg-[#F7F5F0] text-[#12261E] font-semibold'
                      : 'text-[#F7F5F0]/75 hover:text-white'
                  }`}
                >
                  Kufri Seasons
                </button>
              </div>
            </div>

            <div className="flex-1 min-h-[460px] lg:min-h-[540px] border border-[#F7F5F0]/15 bg-[#0C1A14] overflow-hidden relative">
              {viewMode === 'map' ? (
                <iframe
                  title="Keys Select by Lemon Tree Hotels, Kufri Map"
                  src={HOTEL_INFO.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[460px] lg:min-h-[540px] border-0 grayscale-[20%] contrast-[1.03]"
                />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full min-h-[460px] lg:min-h-[540px]">
                  <div className="relative overflow-hidden border-b sm:border-b-0 sm:border-r border-[#F7F5F0]/15">
                    <HotelImage
                      src="/assets/aistudio/i5_78e33721.jpeg"
                      alt="Snow-covered entrance of Keys Select by Lemon Tree Hotels, Kufri in winter"
                      className="w-full h-full min-h-[240px]"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#0C1A14]/90 to-transparent">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[#E2CB9D] mb-1">
                        Dec – Feb
                      </p>
                      <p className="font-serif text-xl text-[#F7F5F0]">Winter Snowfall</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <HotelImage
                      src="/assets/aistudio/i4_c2402e8e.jpg"
                      alt="Sunny mountain arrival driveway at Keys Select by Lemon Tree Hotels, Kufri"
                      className="w-full h-full min-h-[240px]"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#0C1A14]/90 to-transparent">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[#E2CB9D] mb-1">
                        Mar – Nov
                      </p>
                      <p className="font-serif text-xl text-[#F7F5F0]">Crisp Pine Summers</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#F7F5F0]/60 tabular-nums">
              <span>Shimla Airport: ~38 km · Kalka Railway Station: ~102 km</span>
              <span>Chandigarh International Airport: ~132 km</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
