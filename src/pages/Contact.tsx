import React from 'react';
import { Link } from 'react-router-dom';
import { MetaTags } from '../components/MetaTags';
import { Breadcrumb } from '../components/Breadcrumb';
import { AppointmentForm } from '../components/AppointmentForm';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { Phone, MessageCircle, MapPin, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Contact Us - Book Appointment & Hospital Location"
        description="Contact Ezhil Hospital & Fertility Centre in Dharmapuri. Call 8056984522 or 9442497622, message via WhatsApp, or submit an online appointment enquiry."
        canonicalPath="/contact"
      />

      <div className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />

          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-[#B51B83] px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Phone className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#1538B8] tracking-tight">
              Contact Ezhil Hospital & Fertility Centre
            </h1>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              We are here to assist you with appointments, fertility evaluations, maternity queries, and emergency care in Dharmapuri.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            
            {/* Left Column: Contact Details & Quick Actions */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 space-y-6">
                <h2 className="text-2xl font-extrabold text-[#1538B8] border-b border-pink-200 pb-3">
                  Direct Hospital Contacts
                </h2>

                {/* Primary Call Action Phone */}
                <div className="p-4 bg-pink-50/80 rounded-2xl border border-pink-200 space-y-2">
                  <div className="text-xs font-bold text-[#B51B83] uppercase tracking-wider">
                    Primary Call Action Line
                  </div>
                  <div className="text-2xl font-black text-[#1538B8]">
                    {HOSPITAL_INFO.actionPhone}
                  </div>
                  <a
                    href={`tel:${HOSPITAL_INFO.actionPhone}`}
                    className="inline-flex items-center gap-2 bg-[#B51B83] hover:bg-[#9B146E] text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Click to Call {HOSPITAL_INFO.actionPhone}</span>
                  </a>
                </div>

                {/* Additional Hospital Phone */}
                <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-200 space-y-2">
                  <div className="text-xs font-bold text-[#1538B8] uppercase tracking-wider">
                    Secondary Hospital Line
                  </div>
                  <div className="text-xl font-extrabold text-slate-900">
                    {HOSPITAL_INFO.primaryPhone}
                  </div>
                  <a
                    href={`tel:${HOSPITAL_INFO.primaryPhone}`}
                    className="inline-flex items-center gap-2 border border-[#1538B8] text-[#1538B8] hover:bg-blue-100 px-4 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {HOSPITAL_INFO.primaryPhone}</span>
                  </a>
                </div>

                {/* WhatsApp Action */}
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Instant WhatsApp Action
                  </div>
                  <a
                    href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(HOSPITAL_INFO.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat Directly on WhatsApp</span>
                  </a>
                </div>

                {/* Address & Hours */}
                <div className="space-y-4 pt-2 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B51B83] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold text-slate-900">Hospital Address</strong>
                      <span>Dharmapuri, Tamil Nadu, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#1538B8] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold text-slate-900">Operating Hours</strong>
                      <span>24 Hours Maternity & Emergency Care</span>
                      <span className="block text-xs text-slate-500 mt-0.5">Outpatient Consultations: Mon – Sat (9:00 AM – 8:00 PM)</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Appointment Form */}
            <div className="lg:col-span-7">
              <AppointmentForm className="shadow-2xl border-2 border-pink-100" />
            </div>

          </div>

          {/* Interactive Location Preview / Map Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 mb-12">
            <h2 className="text-2xl font-extrabold text-[#1538B8] mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#B51B83]" />
              <span>Location in Dharmapuri</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Ezhil Hospital & Fertility Centre is situated in Dharmapuri, serving patients across the district with state-of-the-art diagnostic imaging, maternity services, and fertility care.
            </p>

            <div className="w-full h-72 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative flex items-center justify-center">
              {/* Map Placeholder Graphic */}
              <div className="text-center space-y-3 p-6">
                <div className="w-12 h-12 rounded-full bg-[#B51B83] text-white flex items-center justify-center mx-auto shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="font-extrabold text-[#1538B8] text-lg">
                  Ezhil Hospital & Fertility Centre
                </div>
                <div className="text-xs text-slate-600">
                  Dharmapuri, Tamil Nadu, India
                </div>
                <a
                  href={HOSPITAL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1538B8] text-white px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-[#0E2685] transition-colors shadow-md"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
