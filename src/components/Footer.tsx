import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Mail, Clock, ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#B51B83] via-[#9B146E] to-[#7A0D56] text-white pt-14 pb-8 border-t-4 border-[#1538B8] shadow-2xl relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-pink-400/30">
          
          {/* Column 1: Hospital Overview & Logo */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block shadow-lg">
              <Logo />
            </div>
            <p className="text-pink-100 text-sm leading-relaxed font-medium">
              Providing patient-focused healthcare, advanced fertility evaluations, and personalized medical guidance to support individuals and families in Dharmapuri and surrounding areas.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(HOSPITAL_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (NO Doctors link!) */}
          <div>
            <h3 className="text-white font-extrabold text-base uppercase tracking-wider mb-4 border-l-4 border-white pl-2.5">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-pink-100 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-pink-100 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                  <span>About Us & Milestones</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-pink-100 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                  <span>All Services & Specialities</span>
                </Link>
              </li>
              <li>
                <Link to="/causes-of-infertility" className="text-pink-100 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                  <span>Causes of Infertility</span>
                </Link>
              </li>
              <li>
                <Link to="/fertility-evaluation" className="text-pink-100 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                  <span>Diagnostic Tests & Evaluation</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-pink-100 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                  <span>Book Consultation / Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Care Pages */}
          <div>
            <h3 className="text-white font-extrabold text-base uppercase tracking-wider mb-4 border-l-4 border-white pl-2.5">
              Specialized Care
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/endometriosis-infertility" className="text-pink-100 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                  <span>Endometriosis & Infertility</span>
                </Link>
              </li>
              <li>
                <Link to="/cosmetic-gynaecology" className="text-pink-100 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                  <span>Cosmetic Gynaecology</span>
                </Link>
              </li>
              <li>
                <Link to="/sexual-medicine" className="text-pink-100 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                  <span>Male Sexual Health & Medicine</span>
                </Link>
              </li>
              <li>
                <Link to="/services/fertility-ivf" className="text-pink-100 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                  <span>Fertility & IVF Services</span>
                </Link>
              </li>
              <li>
                <Link to="/services/ultrasound" className="text-pink-100 hover:text-white transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
                  <span>USG & Senthil Scans</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Information */}
          <div>
            <h3 className="text-white font-extrabold text-base uppercase tracking-wider mb-4 border-l-4 border-white pl-2.5">
              Contact Hospital
            </h3>
            <div className="space-y-3.5 text-sm text-pink-100 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span>Dharmapuri, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${HOSPITAL_INFO.actionPhone}`} className="hover:text-white font-black text-white text-base">
                    {HOSPITAL_INFO.actionPhone} <span className="text-xs font-normal text-pink-200">(Call Action)</span>
                  </a>
                  <a href={`tel:${HOSPITAL_INFO.primaryPhone}`} className="hover:text-white text-xs text-pink-200">
                    {HOSPITAL_INFO.primaryPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white flex-shrink-0" />
                <span>24-Hour Maternity & Emergency Care</span>
              </div>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer */}
        <div className="py-6 border-b border-pink-400/30 text-xs text-pink-200 text-center max-w-4xl mx-auto leading-relaxed">
          <p className="font-bold text-white mb-1">Medical Disclaimer:</p>
          The information provided on this website is for educational and guidance purposes only and should not be considered a substitute for professional medical advice, diagnosis, or treatment. We do not claim guaranteed treatment outcomes or pregnancy success. Always seek the advice of your qualified healthcare provider with any medical questions.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-pink-200 gap-4">
          <p>© {new Date().getFullYear()} Ezhil Hospital & Fertility Centre. All Rights Reserved.</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 text-pink-100 font-medium">
            <div className="flex items-center gap-1.5">
              <span>Compassionate Care in Dharmapuri since 1998</span>
              <Heart className="w-3.5 h-3.5 text-white fill-current inline" />
            </div>
            <span className="hidden sm:inline text-pink-400">|</span>
            <div>
              <span>Developed by </span>
              <a
                href="https://vtbusinesssupport.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-pink-100 hover:underline transition-colors inline-flex items-center gap-1"
              >
                VT Business Support
                <ArrowUpRight className="w-3 h-3 text-pink-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
