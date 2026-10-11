import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
}

// Fallback order: /ezhil-logo.svg → /ezhil-logo.png → built-in monogram
const LOGO_SOURCES = ['/ezhil-logo.svg', '/ezhil-logo.png'];

export const Logo: React.FC<LogoProps> = ({ showText = true }) => {
  const [srcIndex, setSrcIndex] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  const handleError = () => {
    if (srcIndex + 1 < LOGO_SOURCES.length) {
      setSrcIndex(srcIndex + 1);
    } else {
      setAllFailed(true);
    }
  };

  return (
    <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#B51B83] rounded-lg p-1">
      {/* Logo Badge Container */}
      <div className="relative flex-shrink-0 w-12 h-12 rounded-full overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 bg-[#B51B83] p-1 flex items-center justify-center">
        {!allFailed ? (
          <img
            key={srcIndex}
            src={LOGO_SOURCES[srcIndex]}
            alt="Ezhil Hospital & Fertility Centre Logo"
            className="w-full h-full object-contain rounded-full"
            onError={handleError}
          />
        ) : (
          /* Built-in SVG Monogram Fallback */
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="48" fill="#FFFFFF" />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="38"
              fontWeight="bold"
              fill="#1538B8"
              fontFamily="Arial, sans-serif"
            >
              E
            </text>
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-tight text-[#1538B8]">
            EZHIL
          </span>
          <span className="text-xs font-semibold tracking-wide text-[#B51B83] uppercase">
            Hospital &amp; Fertility Centre
          </span>
        </div>
      )}
    </Link>
  );
};
