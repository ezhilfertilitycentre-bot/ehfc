import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
  className?: string;
  variant?: 'light' | 'dark';
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '', variant = 'light' }) => {
  const isDark = variant === 'dark';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm ${
        isDark
          ? 'bg-white/10 backdrop-blur-md border border-white/20 text-blue-100'
          : 'bg-pink-50/60 rounded-lg mb-6 text-slate-600'
      } ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link
            to="/"
            className={`flex items-center gap-1 font-medium transition-colors ${
              isDark ? 'text-pink-200 hover:text-white' : 'hover:text-[#B51B83]'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight
                className={`w-3.5 h-3.5 flex-shrink-0 ${
                  isDark ? 'text-white/40' : 'text-slate-400'
                }`}
              />
              <li>
                {isLast || !item.path ? (
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-[#1538B8]'}`}>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors ${
                      isDark ? 'text-pink-200 hover:text-white' : 'hover:text-[#B51B83]'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
