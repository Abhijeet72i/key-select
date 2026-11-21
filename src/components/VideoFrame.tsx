import { useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

interface VideoFrameProps {
  src: string;
  posterImage: string;
  label: string;
  aspectClass?: string;
  isHero?: boolean;
}

export function VideoFrame({
  src,
  posterImage,
  label,
  aspectClass = 'aspect-[16/9]',
  isHero = false,
}: VideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(() => {});
      setIsPlaying(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#0C1A14] ${
        isHero ? 'h-full min-h-screen' : aspectClass
      }`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={posterImage}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload={isHero ? 'auto' : 'metadata'}
        aria-label={label}
        className="w-full h-full object-cover block"
      />

      {/* Measured Readability Scrim for Hero */}
      {isHero && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1A14]/65 via-[#0C1A14]/38 to-[#0C1A14]/78 pointer-events-none" />
      )}

      {/* Subtle Cinema Playback Controls */}
      <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? `Pause ${label}` : `Play ${label}`}
          className="w-10 h-10 flex items-center justify-center bg-[#0C1A14]/65 hover:bg-[#12261E] text-[#F7F5F0] border border-[#F7F5F0]/20 backdrop-blur-md transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? `Unmute ${label}` : `Mute ${label}`}
          className="h-10 px-3.5 flex items-center gap-2 bg-[#0C1A14]/65 hover:bg-[#12261E] text-[#F7F5F0] border border-[#F7F5F0]/20 backdrop-blur-md text-[11px] uppercase tracking-[0.14em] transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-[#E2CB9D]" />
              <span className="hidden sm:inline">Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-[#E2CB9D]" />
              <span className="hidden sm:inline">Sound On</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
