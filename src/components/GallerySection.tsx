import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import {
  GALLERY_CATEGORIES,
  GALLERY_PHOTOS,
  type GalleryCategory,
} from '../data/hotelData';
import { HotelImage } from './HotelImage';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredPhotos.length) % filteredPhotos.length;
    });
  }, [filteredPhotos.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredPhotos.length;
    });
  }, [filteredPhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#F7F5F0] text-[#1A1D1B]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Heading & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#99763A] mb-4">
              Visual Monograph · {GALLERY_PHOTOS.length} Photographs
            </p>
            <h2
              className="font-serif font-normal text-[#12261E] leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
            >
              Gallery
            </h2>
          </div>

          <p className="text-[15px] text-[#3E4340] max-w-md leading-relaxed">
            Authentic photographs of Keys Select by Lemon Tree Hotels, Kufri across every season —
            select any frame to view full-screen.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Gallery photo categories"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#DDD6C8]"
        >
          {GALLERY_CATEGORIES.map((category) => {
            const count =
              category === 'All'
                ? GALLERY_PHOTOS.length
                : GALLERY_PHOTOS.filter((p) => p.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2.5 text-xs tracking-[0.12em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0 tabular-nums ${
                  isActive
                    ? 'bg-[#12261E] text-[#F7F5F0] font-semibold'
                    : 'bg-transparent text-[#3E4340] hover:bg-[#EDE9E0] hover:text-[#12261E]'
                }`}
              >
                {category} <span className="opacity-65 ml-1">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Modern Responsive Masonry Editorial Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo, index) => (
            <motion.figure
              key={photo.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid group relative overflow-hidden bg-[#12261E] border border-[#E2DDD2]"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="relative block w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99763A]"
                aria-label={`Open ${photo.title} in full-screen lightbox`}
              >
                <div
                  className={`w-full overflow-hidden ${
                    photo.orientation === 'portrait' ? 'aspect-[4/5]' : 'aspect-[4/3]'
                  }`}
                >
                  <HotelImage
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Hover Scrim & Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1A14]/85 via-[#0C1A14]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                  <div className="flex justify-end">
                    <span className="w-9 h-9 bg-[#0C1A14]/65 backdrop-blur-sm border border-[#F7F5F0]/25 text-[#F7F5F0] flex items-center justify-center">
                      <Expand className="w-4 h-4" strokeWidth={1.6} />
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.16em] uppercase text-[#E2CB9D] mb-1">
                      {photo.category}
                    </p>
                    <p className="font-serif text-xl text-[#F7F5F0] leading-snug">{photo.title}</p>
                  </div>
                </div>
              </button>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox */}
      <AnimatePresence>
        {currentPhoto && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0A130F]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo lightbox: ${currentPhoto.title}`}
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between text-[#F7F5F0] max-w-[1440px] w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 text-xs tracking-[0.16em] uppercase text-[#E2CB9D] tabular-nums">
                <span>
                  {String(lightboxIndex + 1).padStart(2, '0')} /{' '}
                  {String(filteredPhotos.length).padStart(2, '0')}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-[#F7F5F0]/80">{currentPhoto.category}</span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="w-11 h-11 flex items-center justify-center border border-[#F7F5F0]/20 text-[#F7F5F0] hover:bg-[#F7F5F0] hover:text-[#0C1A14] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Frame with Prev/Next */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 max-w-[1440px] w-full mx-auto min-h-0"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous photograph"
                className="absolute left-0 sm:left-2 z-10 w-12 h-12 flex items-center justify-center bg-[#0C1A14]/70 hover:bg-[#F7F5F0] text-[#F7F5F0] hover:text-[#12261E] border border-[#F7F5F0]/20 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <motion.div
                key={currentPhoto.id}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="max-h-[72vh] max-w-[82vw] flex items-center justify-center"
              >
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[72vh] max-w-full w-auto h-auto object-contain shadow-2xl"
                />
              </motion.div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next photograph"
                className="absolute right-0 sm:right-2 z-10 w-12 h-12 flex items-center justify-center bg-[#0C1A14]/70 hover:bg-[#F7F5F0] text-[#F7F5F0] hover:text-[#12261E] border border-[#F7F5F0]/20 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div
              className="max-w-3xl mx-auto text-center text-[#F7F5F0]"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-serif text-2xl sm:text-3xl mb-1.5">{currentPhoto.title}</p>
              <p className="text-xs sm:text-sm text-[#F7F5F0]/75">{currentPhoto.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
