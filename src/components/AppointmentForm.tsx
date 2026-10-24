import React, { useState } from 'react';
import { Send, PhoneCall, CheckCircle, AlertCircle, Calendar, User, Phone, Mail, Stethoscope, Clock } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface FormProps {
  compact?: boolean;
  className?: string;
}

export const AppointmentForm: React.FC<FormProps> = ({ compact = false, className = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    department: 'Fertility Consultation',
    notes: ''
  });

  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    'Fertility Consultation & Evaluation',
    'IUI & Ovulation Induction',
    'IVF & ICSI Treatments',
    'Female Diagnostic Tests (HSG / Ultrasound / Hormones)',
    'Endometriosis Care',
    'Cosmetic Gynaecology',
    'Male Sexual Health & Medicine',
    '24/7 Maternity & Surgical Care'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setError('Please enter a valid phone number.');
      return;
    }

    // Construct readable WhatsApp message
    const message = `Hello Ezhil Hospital & Fertility Centre, I would like to submit an appointment enquiry:

*Name:* ${formData.fullName.trim()}
*Phone:* ${formData.phone.trim()}
${formData.email ? `*Email:* ${formData.email.trim()}` : ''}
${formData.preferredDate ? `*Preferred Date:* ${formData.preferredDate}` : ''}
*Service/Department:* ${formData.department}
${formData.notes ? `*Additional Notes:* ${formData.notes.trim()}` : ''}

Please confirm availability and next steps. Thank you!`;

    const whatsappUrl = `https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;

    setSubmitted(true);

    // Open WhatsApp in new window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 ${className}`}>
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-[#B51B83] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>Patient Direct Enquiry</span>
        </div>
        <h3 className="text-2xl font-extrabold text-[#1538B8]">
          Book a Consultation
        </h3>
        <p className="text-slate-600 text-sm mt-1">
          Fill in your details below to send an appointment enquiry via WhatsApp to our Dharmapuri hospital desk.
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm flex items-center gap-2 rounded">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {submitted && (
        <div className="mb-4 p-3 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-800 text-sm flex items-center gap-2 rounded">
          <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-600" />
          <div>
            <strong>Enquiry Prepared!</strong> WhatsApp has been launched with your enquiry message. If it didn't open automatically, you can also call us directly at <strong>{HOSPITAL_INFO.actionPhone}</strong>.
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B51B83] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9442497622"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B51B83] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Email (Optional) */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="yourname@example.com"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B51B83] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Preferred Date */}
          <div>
            <label htmlFor="preferredDate" className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Preferred Date <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B51B83] focus:bg-white transition-all"
              />
            </div>
          </div>

        </div>

        {/* Department / Service */}
        <div>
          <label htmlFor="department" className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Department / Service of Interest
          </label>
          <div className="relative">
            <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B51B83] focus:bg-white transition-all"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>


        {!compact && (
          <div>
            <label htmlFor="notes" className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Brief Symptoms or Message <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={2}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us briefly about your consultation requirements..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#B51B83] focus:bg-white transition-all"
            />
          </div>
        )}

        {/* Submit Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-[#B51B83] hover:bg-[#9B146E] text-white py-3.5 px-6 rounded-xl font-extrabold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <span>Send Enquiry via WhatsApp</span>
          </button>
        </div>

        {/* Direct Call Fallback & Disclosure */}
        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2">
          <span className="flex items-center gap-1.5 text-slate-600 font-medium">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Or call reception: </span>
            <a href={`tel:${HOSPITAL_INFO.actionPhone}`} className="font-bold text-[#1538B8] hover:underline">
              {HOSPITAL_INFO.actionPhone}
            </a>
          </span>
          <span className="text-slate-400 text-center sm:text-right">
            Enquiry message prefilled. Does not guarantee instant booking.
          </span>
        </div>
      </form>
    </div>
  );
};
