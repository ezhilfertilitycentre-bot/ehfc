import React from 'react';
import { Link } from 'react-router-dom';
import { MetaTags } from '../components/MetaTags';
import { Home, ArrowRight, Stethoscope, Phone } from 'lucide-react';
import { Logo } from '../components/Logo';

export const NotFound: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Page Not Found (404)"
        description="The requested page could not be found. Please return to the homepage or navigate to our hospital services."
      />

      <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center py-16 px-4">
        <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 text-center shadow-xl border border-slate-200 space-y-6">
          <div className="bg-pink-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-[#B51B83] font-black text-3xl">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-[#1538B8]">
              Page Not Found
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              We couldn't find the page you were looking for. It may have been moved, renamed, or is temporarily unavailable.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto bg-[#B51B83] hover:bg-[#9B146E] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto border-2 border-[#1538B8] text-[#1538B8] hover:bg-blue-50 px-6 py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Stethoscope className="w-4 h-4" />
              <span>View Services</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-slate-100 text-xs text-slate-500">
            Need urgent assistance? Call our reception directly at{' '}
            <a href="tel:8056984522" className="font-bold text-[#1538B8] hover:underline">
              8056984522
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
