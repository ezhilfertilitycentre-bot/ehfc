import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, UserCheck, Activity, Sparkles, HeartHandshake, Dna, Microscope, ShieldCheck, Clock, Stethoscope, Smile, Shield, Building2 } from 'lucide-react';
import type { ServiceItem } from '../data/hospitalData';

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Dna: <Dna className="w-6 h-6" />,
  Microscope: <Microscope className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Smile: <Smile className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 hover:border-pink-200 transition-all duration-300 shadow-hover flex flex-col justify-between group">
      <div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-blue-50 text-[#B51B83] flex items-center justify-center mb-4 group-hover:bg-[#B51B83] group-hover:text-white transition-colors duration-300 shadow-sm">
          {iconMap[service.iconName] || <Stethoscope className="w-6 h-6" />}
        </div>
        <h3 className="text-xl font-bold text-[#1538B8] group-hover:text-[#B51B83] transition-colors mb-2">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {service.shortDesc}
        </p>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B51B83] flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to={service.path}
        className="inline-flex items-center gap-2 text-sm font-extrabold text-[#B51B83] group-hover:text-[#1538B8] transition-colors pt-3 border-t border-slate-100"
      >
        <span>Learn Details</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};
