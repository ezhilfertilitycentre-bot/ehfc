import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-pink-50/60 rounded-lg mb-6 text-xs sm:text-sm">
      <ol className="flex items-center flex-wrap gap-1.5 text-slate-600">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-[#B51B83] transition-colors font-medium">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <li>
                {isLast || !item.path ? (
                  <span className="font-bold text-[#1538B8]">{item.label}</span>
                ) : (
                  <Link to={item.path} className="hover:text-[#B51B83] transition-colors font-medium">
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
