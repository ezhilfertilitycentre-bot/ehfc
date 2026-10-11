import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, MessageCircle, Heart } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export const CallToActionBanner: React.FC<CTABannerProps> = ({
  title = "Take the Next Step Towards Better Reproductive Health",
  subtitle = "Our dedicated team of fertility specialists and healthcare professionals is here to support you with compassionate, personalized care."
}) => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1538B8] via-[#0E2685] to-[#B51B83] text-white p-8 sm:p-12 shadow-2xl my-12">
      <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-pink-500/10 blur-2xl pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-pink-200">
          <Heart className="w-3.5 h-3.5 fill-current text-pink-400" />
          <span>Patient-Centered Care in Dharmapuri</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
          {title}
        </h2>

        <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-[#B51B83] hover:bg-[#9B146E] text-white px-7 py-3.5 rounded-xl font-extrabold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Consultation</span>
          </Link>

          <a
            href={`tel:${HOSPITAL_INFO.actionPhone}`}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3.5 rounded-xl font-extrabold text-base transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 text-pink-300" />
            <span>Call {HOSPITAL_INFO.actionPhone}</span>
          </a>

          <a
            href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(HOSPITAL_INFO.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-base transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
};
