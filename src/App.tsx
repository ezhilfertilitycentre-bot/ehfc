import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AchievementsTicker } from './components/AchievementsTicker';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceCategoryDetail } from './pages/ServiceCategoryDetail';
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
        <AchievementsTicker />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

            {/* 15 Individual Service Category Routes */}
            <Route path="/services/fertility-ivf" element={<ServiceCategoryDetail forcedSlug="fertility-ivf" />} />
            <Route path="/services/gynaecology-womens-health" element={<ServiceCategoryDetail forcedSlug="gynaecology-womens-health" />} />
            <Route path="/services/obstetrics-maternity" element={<ServiceCategoryDetail forcedSlug="obstetrics-maternity" />} />
            <Route path="/services/general-laparoscopic-surgery" element={<ServiceCategoryDetail forcedSlug="general-laparoscopic-surgery" />} />
            <Route path="/services/family-planning" element={<ServiceCategoryDetail forcedSlug="family-planning" />} />
            <Route path="/services/cardiology" element={<ServiceCategoryDetail forcedSlug="cardiology" />} />
            <Route path="/services/paediatrics-neonatal" element={<ServiceCategoryDetail forcedSlug="paediatrics-neonatal" />} />
            <Route path="/services/laboratory" element={<ServiceCategoryDetail forcedSlug="laboratory" />} />
            <Route path="/services/ultrasound" element={<ServiceCategoryDetail forcedSlug="ultrasound" />} />
            <Route path="/services/operation-theatre" element={<ServiceCategoryDetail forcedSlug="operation-theatre" />} />
            <Route path="/services/inpatient-care" element={<ServiceCategoryDetail forcedSlug="inpatient-care" />} />
            <Route path="/services/opd-reception" element={<ServiceCategoryDetail forcedSlug="opd-reception" />} />
            <Route path="/services/pharmacy" element={<ServiceCategoryDetail forcedSlug="pharmacy" />} />
            <Route path="/services/vaccination" element={<ServiceCategoryDetail forcedSlug="vaccination" />} />
            <Route path="/services/other-specialities" element={<ServiceCategoryDetail forcedSlug="other-specialities" />} />

            {/* Dynamic slug route fallback */}
            <Route path="/services/:slug" element={<ServiceCategoryDetail />} />

            {/* 5 Preserved Specialised Clinical Pages */}
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
