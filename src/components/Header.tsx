import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, ChevronDown, Menu, X, Calendar, MapPin, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { HOSPITAL_INFO, SERVICES } from '../data/hospitalData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const serviceSubmenu = [
    { name: 'All Fertility Services', path: '/services' },
    { name: 'Causes of Infertility', path: '/causes-of-infertility' },
    { name: 'Fertility Evaluation & Tests', path: '/fertility-evaluation' },
    { name: 'Endometriosis & Infertility', path: '/endometriosis-infertility' },
    { name: 'Cosmetic Gynaecology', path: '/cosmetic-gynaecology' },
    { name: 'Male Sexual Health & Medicine', path: '/sexual-medicine' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-all duration-300">
      {/* Top Bar - Brand Colors Magenta & Royal Blue */}
      <div className="bg-gradient-to-r from-[#B51B83] via-[#8E176E] to-[#1538B8] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center flex-wrap gap-4 justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-pink-200" />
              <span>Dharmapuri, Tamil Nadu</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-pink-100">
              <Clock className="w-3.5 h-3.5" />
              <span>24/7 Maternity & Emergency Care</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${HOSPITAL_INFO.actionPhone}`}
              className="flex items-center gap-1.5 hover:text-pink-200 transition-colors font-semibold"
              title="Call Action Phone"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{HOSPITAL_INFO.actionPhone}</span>
            </a>
            <a
              href={`tel:${HOSPITAL_INFO.primaryPhone}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-pink-200 transition-colors"
            >
              <span>/ {HOSPITAL_INFO.primaryPhone}</span>
            </a>
            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(HOSPITAL_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-0.5 rounded-full font-medium transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`px-4 sm:px-6 lg:px-8 transition-all duration-200 ${isScrolled ? 'py-2 shadow-md' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${isActive('/') ? 'text-[#B51B83] bg-pink-50' : 'text-[#30323A] hover:text-[#1538B8] hover:bg-slate-50'
                }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${isActive('/about') ? 'text-[#B51B83] bg-pink-50' : 'text-[#30323A] hover:text-[#1538B8] hover:bg-slate-50'
                }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold transition-colors ${location.pathname.includes('/services') ||
                  location.pathname.includes('/causes') ||
                  location.pathname.includes('/fertility-evaluation') ||
                  location.pathname.includes('/endometriosis') ||
                  location.pathname.includes('/cosmetic') ||
                  location.pathname.includes('/sexual-medicine')
                  ? 'text-[#B51B83] bg-pink-50'
                  : 'text-[#30323A] hover:text-[#1538B8] hover:bg-slate-50'
                  }`}
              >
                <span>Services & Specialities</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Mega Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-xs font-bold text-[#B51B83] uppercase tracking-wider border-b border-slate-100">
                    Fertility & Women's Health
                  </div>
                  {serviceSubmenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors ${isActive(item.path)
                        ? 'text-[#B51B83] bg-pink-50 border-l-4 border-[#B51B83]'
                        : 'text-[#30323A] hover:text-[#1538B8] hover:bg-blue-50/50'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/causes-of-infertility"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${isActive('/causes-of-infertility') ? 'text-[#B51B83] bg-pink-50' : 'text-[#30323A] hover:text-[#1538B8] hover:bg-slate-50'
                }`}
            >
              Causes of Infertility
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${isActive('/contact') ? 'text-[#B51B83] bg-pink-50' : 'text-[#30323A] hover:text-[#1538B8] hover:bg-slate-50'
                }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.actionPhone}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border-2 border-[#1538B8] text-[#1538B8] font-bold text-sm hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#B51B83] hover:bg-[#9B146E] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#B51B83] hover:bg-pink-50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            <Link
              to="/"
              className={`px-4 py-2.5 rounded-lg text-base font-semibold ${isActive('/') ? 'text-[#B51B83] bg-pink-50' : 'text-[#30323A] hover:bg-slate-50'
                }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-4 py-2.5 rounded-lg text-base font-semibold ${isActive('/about') ? 'text-[#B51B83] bg-pink-50' : 'text-[#30323A] hover:bg-slate-50'
                }`}
            >
              About Us
            </Link>

            <div className="py-2 border-y border-slate-100 my-1">
              <div className="px-4 py-1.5 text-xs font-bold text-[#B51B83] uppercase tracking-wider">
                Services & Specialities
              </div>
              {serviceSubmenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-6 py-2 text-sm font-medium ${isActive(item.path) ? 'text-[#B51B83] font-bold' : 'text-slate-600 hover:text-[#1538B8]'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              className={`px-4 py-2.5 rounded-lg text-base font-semibold ${isActive('/contact') ? 'text-[#B51B83] bg-pink-50' : 'text-[#30323A] hover:bg-slate-50'
                }`}
            >
              Contact Us
            </Link>

            {/* Mobile CTAs */}
            <div className="pt-4 flex flex-col gap-2">
              <Link
                to="/contact"
                className="w-full text-center bg-[#B51B83] text-white py-3 rounded-lg font-bold shadow-md"
              >
                Book Appointment
              </Link>

              <a
                href={`tel:${HOSPITAL_INFO.actionPhone}`}
                className="w-full text-center border-2 border-[#1538B8] text-[#1538B8] py-2.5 rounded-lg font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {HOSPITAL_INFO.actionPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
