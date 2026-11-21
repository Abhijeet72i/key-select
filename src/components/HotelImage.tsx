import { useState } from 'react';
import { Mountain } from 'lucide-react';

interface HotelImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  objectPosition?: string;
}

export function HotelImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  objectPosition = 'center',
}: HotelImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#1A352A] text-[#E2CB9D] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Mountain className="w-8 h-8 mb-3 opacity-70" strokeWidth={1.25} />
        <p className="font-serif text-lg tracking-wide text-[#F7F5F0]">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      style={{ objectPosition }}
      onError={() => setHasError(true)}
      className={`object-cover ${className}`}
    />
  );
}
