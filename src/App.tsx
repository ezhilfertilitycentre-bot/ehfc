import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AchievementsTicker } from './components/AchievementsTicker';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { CausesOfInfertility } from './pages/CausesOfInfertility';
import { FertilityEvaluation } from './pages/FertilityEvaluation';
import { EndometriosisInfertility } from './pages/EndometriosisInfertility';
import { CosmeticGynaecology } from './pages/CosmeticGynaecology';
import { SexualMedicine } from './pages/SexualMedicine';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Helper component to scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-[#30323A]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/causes-of-infertility" element={<CausesOfInfertility />} />
            <Route path="/fertility-evaluation" element={<FertilityEvaluation />} />
            <Route path="/endometriosis-infertility" element={<EndometriosisInfertility />} />
            <Route path="/cosmetic-gynaecology" element={<CosmeticGynaecology />} />
            <Route path="/sexual-medicine" element={<SexualMedicine />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Custom 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
