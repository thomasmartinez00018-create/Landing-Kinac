import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';
import FloatingCTA from './components/FloatingCTA';
import PromoPopup from './components/PromoPopup';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [promoContext, setPromoContext] = useState<string | null>(null);

  const openModal = () => {
    setPromoContext(null); // Reset promo context for standard opens
    setIsModalOpen(true);
  };

  const openPromoModal = () => {
    setPromoContext('PROMO_ENERO_2+1');
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen selection:bg-primary-200 selection:text-primary-900">
      <Navbar onSchedule={openModal} />
      <main>
        <Hero onSchedule={openModal} />
        <ProblemSection onSchedule={openModal} />
        <Services onSchedule={openModal} />
        <Methodology onSchedule={openModal} />
        <Testimonials />
        <FAQ onSchedule={openModal} />
      </main>
      <Footer onSchedule={openModal} />
      
      <ScheduleModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        promoContext={promoContext}
      />
      <PromoPopup onClaim={openPromoModal} />
      <FloatingCTA onClick={openModal} />
    </div>
  );
};

export default App;