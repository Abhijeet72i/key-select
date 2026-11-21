import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { VideoShowcaseSection } from './components/VideoShowcaseSection';
import { RoomsSection } from './components/RoomsSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryContext, setEnquiryContext] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (context?: string) => {
    setEnquiryContext(context);
    setEnquiryOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F7F5F0] text-[#1A1D1B]">
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        <main>
          <HeroSection />
          <AboutSection onOpenEnquiry={handleOpenEnquiry} />
          <VideoShowcaseSection />
          <RoomsSection onOpenEnquiry={handleOpenEnquiry} />
          <ExperiencesSection onOpenEnquiry={handleOpenEnquiry} />
          <GallerySection />
          <LocationSection />
        </main>

        <Footer onOpenEnquiry={handleOpenEnquiry} />

        <EnquiryModal
          isOpen={enquiryOpen}
          initialContext={enquiryContext}
          onClose={() => setEnquiryOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
