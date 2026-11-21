import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Check, X } from 'lucide-react';
import { ROOM_CATEGORIES, type RoomCategory } from '../data/hotelData';
import { HotelImage } from './HotelImage';

interface RoomsSectionProps {
  onOpenEnquiry: (context?: string) => void;
}

export function RoomsSection({ onOpenEnquiry }: RoomsSectionProps) {
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory | null>(null);

  const featuredRooms = ROOM_CATEGORIES.slice(3); // Superior w/ Balcony & Studio Suite
  const classicRooms = ROOM_CATEGORIES.slice(0, 3); // Standard, Standard Mountain, Superior

  return (
    <section id="rooms" className="py-24 lg:py-32 bg-[#F7F5F0] text-[#1A1D1B]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#99763A] mb-4">
              Accommodations
            </p>
            <h2
              className="font-serif font-normal text-[#12261E] leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
            >
              Rooms & Suites
            </h2>
          </div>
          <p className="text-[15px] text-[#3E4340] max-w-md leading-relaxed">
            Five thoughtfully appointed room categories pairing warm timber interiors with private
            balconies, bay windows, and tranquil views of Kufri’s forested ridges.
          </p>
        </motion.div>

        {/* Top Signature Duo: Studio Suite & Superior with Balcony */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {[...featuredRooms].reverse().map((room, idx) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white border border-[#E2DDD2] flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedRoom(room)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#EDE9E0] cursor-pointer text-left"
                aria-label={`Inspect ${room.name}`}
              >
                <HotelImage
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </button>

              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#636864] mb-3 tabular-nums">
                    <span className="text-[#99763A] font-medium">{room.shortLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{room.size}</span>
                    <span aria-hidden="true">·</span>
                    <span>{room.view}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-[28px] font-normal text-[#12261E] leading-snug mb-3">
                    {room.name}
                  </h3>

                  <p className="text-sm text-[#3E4340] leading-[1.75] mb-6">{room.description}</p>
                </div>

                <div className="pt-5 border-t border-[#EDE9E0] flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[#12261E] hover:text-[#99763A] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Room Details
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(room.name)}
                    className="px-5 py-2.5 bg-[#12261E] text-[#F7F5F0] hover:bg-[#1E3C30] text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Classic Trio: Standard Double, Standard Mountain View, Superior Double */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classicRooms.map((room, idx) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white border border-[#E2DDD2] flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedRoom(room)}
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#EDE9E0] cursor-pointer text-left"
                aria-label={`Inspect ${room.name}`}
              >
                <HotelImage
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </button>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#636864] mb-2.5 tabular-nums">
                    <span>{room.size}</span>
                    <span aria-hidden="true">·</span>
                    <span>{room.bedType}</span>
                    <span aria-hidden="true">·</span>
                    <span>{room.view}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#12261E] leading-snug mb-3">
                    {room.name}
                  </h3>

                  <p className="text-sm text-[#3E4340] leading-[1.7] mb-6">{room.description}</p>
                </div>

                <div className="pt-4 border-t border-[#EDE9E0] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#12261E] hover:text-[#99763A] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Details
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(room.name)}
                    className="text-xs font-semibold tracking-[0.14em] uppercase text-[#99763A] hover:text-[#12261E] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Room Detail Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRoom(null)}
            className="fixed inset-0 z-50 bg-[#0C1A14]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selectedRoom.name}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F7F5F0] text-[#1A1D1B] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#DDD6C8]"
            >
              <div className="relative aspect-[16/9] w-full bg-[#12261E]">
                <HotelImage
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-full"
                />
                <button
                  type="button"
                  onClick={() => setSelectedRoom(null)}
                  aria-label="Close room details"
                  className="absolute top-4 right-4 w-11 h-11 bg-[#0C1A14]/75 hover:bg-[#12261E] text-[#F7F5F0] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-7 sm:p-10">
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#636864] mb-3 tabular-nums">
                  <span className="text-[#99763A] font-medium">{selectedRoom.shortLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedRoom.size}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedRoom.bedType}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedRoom.occupancy}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#12261E] mb-4">
                  {selectedRoom.name}
                </h3>

                <p className="text-[15px] text-[#3E4340] leading-[1.8] mb-8">
                  {selectedRoom.description}
                </p>

                <div className="pt-6 border-t border-[#DDD6C8] mb-8">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#99763A] mb-4">
                    In-Room Highlights
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-[#1A1D1B]">
                    {selectedRoom.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 text-[#99763A] shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#DDD6C8]">
                  <p className="text-xs text-[#636864]">
                    Check-in 2:00 PM · Check-out 12:00 PM · Complimentary Wi-Fi
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      const roomName = selectedRoom.name;
                      setSelectedRoom(null);
                      onOpenEnquiry(roomName);
                    }}
                    className="px-7 py-3.5 bg-[#12261E] text-[#F7F5F0] hover:bg-[#1E3C30] text-xs font-semibold tracking-[0.15em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Enquire for This Room
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
