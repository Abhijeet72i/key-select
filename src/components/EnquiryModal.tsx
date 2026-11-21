import { useEffect, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';
import { EXPERIENCES, HOTEL_INFO, ROOM_CATEGORIES } from '../data/hotelData';

interface EnquiryModalProps {
  isOpen: boolean;
  initialContext?: string;
  onClose: () => void;
}

export function EnquiryModal({ isOpen, initialContext, onClose }: EnquiryModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [interest, setInterest] = useState(initialContext || 'Studio Suite');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (initialContext) {
      setInterest(initialContext);
    }
  }, [initialContext]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (phone.trim().length < 7) {
      setError('Please enter a valid contact phone number.');
      return;
    }
    if (checkIn && checkOut && checkOut < checkIn) {
      setError('Check-out date must be after the check-in date.');
      return;
    }

    const refCode = `KSK-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
  };

  const resetAndClose = () => {
    setSubmittedRef(null);
    setError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 z-50 bg-[#0C1A14]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Reservation and stay enquiry"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#F7F5F0] text-[#1A1D1B] max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-[#DDD6C8] p-7 sm:p-10"
          >
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#DDD6C8]">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#99763A] mb-2">
                  Reservations & Enquiries
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#12261E]">
                  Plan Your Mountain Stay
                </h2>
              </div>

              <button
                type="button"
                onClick={resetAndClose}
                aria-label="Close enquiry modal"
                className="w-10 h-10 flex items-center justify-center border border-[#DDD6C8] text-[#12261E] hover:bg-[#12261E] hover:text-[#F7F5F0] transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedRef ? (
              <div className="py-10 text-center">
                <CheckCircle2
                  className="w-12 h-12 text-[#1A352A] mx-auto mb-4"
                  strokeWidth={1.4}
                />
                <p className="text-xs tracking-[0.2em] uppercase text-[#99763A] mb-2">
                  Enquiry Received · Ref {submittedRef}
                </p>
                <h3 className="font-serif text-3xl text-[#12261E] mb-3">
                  Thank You, {fullName}
                </h3>
                <p className="text-sm text-[#3E4340] max-w-md mx-auto leading-relaxed mb-8">
                  Our reservations desk at Keys Select by Lemon Tree Hotels, Kufri has received your
                  request for <strong className="text-[#12261E]">{interest}</strong> and will reach
                  out to <span className="text-[#12261E]">{email}</span> shortly with best available
                  mountain rates.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="px-7 py-3 bg-[#12261E] text-[#F7F5F0] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#1E3C30] transition-colors cursor-pointer"
                  >
                    Return to Hotel
                  </button>
                  <a
                    href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
                    className="px-6 py-3 border border-[#12261E] text-[#12261E] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#EDE9E0] transition-colors"
                  >
                    Call {HOTEL_INFO.phone}
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-6 space-y-5" noValidate>
                {error && (
                  <div
                    role="alert"
                    className="px-4 py-3 bg-[#F4E7E4] border border-[#C98A7E] text-[#6E261A] text-xs font-medium"
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs font-medium tracking-[0.12em] uppercase text-[#3E4340] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Aarav Sharma"
                      className="w-full px-4 py-3 bg-white border border-[#D5CDBE] text-sm text-[#1A1D1B] focus:outline-none focus:border-[#12261E]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-xs font-medium tracking-[0.12em] uppercase text-[#3E4340] mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98100 00000"
                      className="w-full px-4 py-3 bg-white border border-[#D5CDBE] text-sm text-[#1A1D1B] focus:outline-none focus:border-[#12261E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="block text-xs font-medium tracking-[0.12em] uppercase text-[#3E4340] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="guest@example.com"
                      className="w-full px-4 py-3 bg-white border border-[#D5CDBE] text-sm text-[#1A1D1B] focus:outline-none focus:border-[#12261E]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-guests"
                      className="block text-xs font-medium tracking-[0.12em] uppercase text-[#3E4340] mb-2"
                    >
                      Guests
                    </label>
                    <select
                      id="enquiry-guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#D5CDBE] text-sm text-[#1A1D1B] focus:outline-none focus:border-[#12261E]"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests / Family</option>
                      <option>Group / Event (10+ Guests)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enquiry-checkin"
                      className="block text-xs font-medium tracking-[0.12em] uppercase text-[#3E4340] mb-2"
                    >
                      Check-In Date
                    </label>
                    <input
                      id="enquiry-checkin"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#D5CDBE] text-sm text-[#1A1D1B] focus:outline-none focus:border-[#12261E]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-checkout"
                      className="block text-xs font-medium tracking-[0.12em] uppercase text-[#3E4340] mb-2"
                    >
                      Check-Out Date
                    </label>
                    <input
                      id="enquiry-checkout"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#D5CDBE] text-sm text-[#1A1D1B] focus:outline-none focus:border-[#12261E]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-interest"
                    className="block text-xs font-medium tracking-[0.12em] uppercase text-[#3E4340] mb-2"
                  >
                    Room Category or Experience
                  </label>
                  <select
                    id="enquiry-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-[#D5CDBE] text-sm text-[#1A1D1B] focus:outline-none focus:border-[#12261E]"
                  >
                    <option value="General Stay Enquiry">General Stay Enquiry</option>
                    <optgroup label="Rooms & Suites">
                      {ROOM_CATEGORIES.map((room) => (
                        <option key={room.id} value={room.name}>
                          {room.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Dining, Jacuzzi & Events">
                      {EXPERIENCES.map((exp) => (
                        <option key={exp.id} value={exp.name}>
                          {exp.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-notes"
                    className="block text-xs font-medium tracking-[0.12em] uppercase text-[#3E4340] mb-2"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="enquiry-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Jacuzzi sunset slot, valley-facing balcony preference, airport pickup, or banquet setup..."
                    className="w-full px-4 py-3 bg-white border border-[#D5CDBE] text-sm text-[#1A1D1B] focus:outline-none focus:border-[#12261E] resize-none"
                  />
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#636864]">
                    Direct Desk: {HOTEL_INFO.phone} · {HOTEL_INFO.email}
                  </p>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#12261E] text-[#F7F5F0] hover:bg-[#1E3C30] text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
