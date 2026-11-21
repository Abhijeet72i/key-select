import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenEnquiry: (context?: string) => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
];

export function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#DDD6C8] text-[#12261E]'
          : 'bg-gradient-to-b from-[#0C1A14]/75 to-transparent text-[#F7F5F0]'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Official Hotel Logo */}
        <a
          href="#hero"
          onClick={handleNavClick}
          aria-label="Keys Select by Lemon Tree Hotels, Kufri — Home"
          className={`inline-flex items-center shrink-0 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B6904D] ${
            scrolled || mobileOpen
              ? 'bg-white/90 px-2.5 py-1.5 border border-[#E2DDD2]/80'
              : 'bg-white/95 px-2.5 py-1.5 shadow-sm'
          }`}
        >
          <img
            src={HOTEL_INFO.logo}
            alt="Keys Select by Lemon Tree Hotels"
            referrerPolicy="no-referrer"
            className="h-10 sm:h-11 w-auto object-contain block"
          />
        </a>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-[0.08em] uppercase"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-1 whitespace-nowrap shrink-0 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-200 ${
                scrolled
                  ? 'text-[#3E4340] hover:text-[#12261E] after:bg-[#B6904D]'
                  : 'text-[#F7F5F0]/90 hover:text-white after:bg-[#E2CB9D]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action (+ Mobile Menu Button on small viewports) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenEnquiry()}
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B6904D] ${
              scrolled
                ? 'bg-[#12261E] text-[#F7F5F0] hover:bg-[#1E3C30]'
                : 'bg-[#F7F5F0] text-[#12261E] hover:bg-[#E2CB9D]'
            }`}
          >
            Book Now
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden w-11 h-11 flex items-center justify-center cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#F7F5F0] border-t border-[#DDD6C8] px-6 py-6 text-[#12261E]"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="py-2 text-base font-serif tracking-wide text-[#1A1D1B] border-b border-[#E7E1D5] last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenEnquiry();
                }}
                className="mt-2 w-full py-3.5 bg-[#12261E] text-[#F7F5F0] text-xs font-semibold tracking-[0.14em] uppercase cursor-pointer"
              >
                Book Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
