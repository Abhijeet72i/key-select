import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onOpenEnquiry: (context?: string) => void;
}

export function Footer({ onOpenEnquiry }: FooterProps) {
  return (
    <footer className="bg-[#0E1512] text-[#F7F5F0] border-t border-[#F7F5F0]/10">
      {/* Top Booking Banner */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-16 lg:py-20 border-b border-[#F7F5F0]/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div>
          <p className="text-xs tracking-[0.22em] uppercase text-[#CFAF72] mb-3">
            Direct Reservations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#F7F5F0] leading-tight">
            Ready to Escape to Kufri?
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => onOpenEnquiry('General Stay Enquiry')}
            className="px-8 py-4 bg-[#CFAF72] text-[#0E1512] hover:bg-[#E2CB9D] text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Enquire / Book Now
          </button>
          <a
            href={HOTEL_INFO.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 border border-[#F7F5F0]/25 text-[#F7F5F0] hover:border-[#CFAF72] hover:text-[#E2CB9D] text-xs font-semibold tracking-[0.15em] uppercase transition-colors whitespace-nowrap shrink-0"
          >
            Google Maps Directions
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
          </a>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* Brand Identity & Official Logo */}
        <div className="lg:col-span-4">
          <a
            href="#hero"
            aria-label="Keys Select by Lemon Tree Hotels, Kufri"
            className="inline-block bg-white px-4 py-3 mb-6 border border-[#F7F5F0]/15"
          >
            <img
              src={HOTEL_INFO.logo}
              alt="Keys Select by Lemon Tree Hotels"
              referrerPolicy="no-referrer"
              className="h-14 w-auto object-contain block"
            />
          </a>

          <p className="font-serif text-2xl text-[#F7F5F0] mb-2">
            {HOTEL_INFO.name}
          </p>
          <p className="text-xs tracking-[0.16em] uppercase text-[#CFAF72] mb-5">
            Kufri, Shimla · Himachal Pradesh
          </p>
          <p className="text-sm text-[#F7F5F0]/70 leading-relaxed max-w-sm">
            A refined hillside retreat offering contemporary rooms, mountain-view balconies,
            open-deck jacuzzis, and warm Lemon Tree hospitality amidst Kufri’s pine forests.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#CFAF72] mb-5">
            Explore
          </p>
          <ul className="space-y-3 text-sm text-[#F7F5F0]/75">
            <li>
              <a href="#about" className="hover:text-[#E2CB9D] transition-colors">
                About the Hotel
              </a>
            </li>
            <li>
              <a href="#films" className="hover:text-[#E2CB9D] transition-colors">
                Hotel Films
              </a>
            </li>
            <li>
              <a href="#rooms" className="hover:text-[#E2CB9D] transition-colors">
                Rooms & Suites
              </a>
            </li>
            <li>
              <a href="#experiences" className="hover:text-[#E2CB9D] transition-colors">
                Dining & Experiences
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#E2CB9D] transition-colors">
                Photo Gallery
              </a>
            </li>
            <li>
              <a href="#location" className="hover:text-[#E2CB9D] transition-colors">
                Discover Kufri
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#CFAF72] mb-5">
            Contact & Address
          </p>
          <ul className="space-y-4 text-sm text-[#F7F5F0]/78">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#CFAF72] shrink-0 mt-1" strokeWidth={1.6} />
              <span className="leading-relaxed">{HOTEL_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#CFAF72] shrink-0" strokeWidth={1.6} />
              <div className="tabular-nums">
                <a
                  href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#E2CB9D] transition-colors"
                >
                  {HOTEL_INFO.phone}
                </a>
                <span className="text-[#F7F5F0]/45 mx-2">·</span>
                <span className="text-xs text-[#F7F5F0]/65">
                  Toll-Free {HOTEL_INFO.centralReservations}
                </span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#CFAF72] shrink-0" strokeWidth={1.6} />
              <a
                href={`mailto:${HOTEL_INFO.email}`}
                className="hover:text-[#E2CB9D] transition-colors"
              >
                {HOTEL_INFO.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Timings */}
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#CFAF72] mb-5">
            Connect
          </p>
          <div className="flex items-center gap-3 mb-7">
            <a
              href="https://www.instagram.com/lemontreehotels/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lemon Tree Hotels on Instagram"
              className="w-10 h-10 border border-[#F7F5F0]/20 flex items-center justify-center text-[#F7F5F0]/80 hover:border-[#CFAF72] hover:text-[#E2CB9D] transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.6} />
            </a>
            <a
              href="https://www.facebook.com/lemontreehotels/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lemon Tree Hotels on Facebook"
              className="w-10 h-10 border border-[#F7F5F0]/20 flex items-center justify-center text-[#F7F5F0]/80 hover:border-[#CFAF72] hover:text-[#E2CB9D] transition-colors"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.6} />
            </a>
            <a
              href="https://www.youtube.com/user/lemontreehotels"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lemon Tree Hotels on YouTube"
              className="w-10 h-10 border border-[#F7F5F0]/20 flex items-center justify-center text-[#F7F5F0]/80 hover:border-[#CFAF72] hover:text-[#E2CB9D] transition-colors"
            >
              <Youtube className="w-4 h-4" strokeWidth={1.6} />
            </a>
          </div>

          <div className="text-xs text-[#F7F5F0]/60 space-y-1.5 tabular-nums">
            <p>Check-in: {HOTEL_INFO.checkIn}</p>
            <p>Check-out: {HOTEL_INFO.checkOut}</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-[#F7F5F0]/10">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F5F0]/55">
          <p>© {new Date().getFullYear()} Keys Select by Lemon Tree Hotels, Kufri. All rights reserved.</p>
          <p>Shimla · Himachal Pradesh · India</p>
        </div>
      </div>
    </footer>
  );
}
