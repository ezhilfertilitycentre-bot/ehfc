import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BabyHeartSymbol } from './BabyHeartSymbol';

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
    <Link to="/" className="inline-flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#B51B83] rounded-lg p-1">
      {/* Hospital Logo Badge */}
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

      {/* Hospital Name Text */}
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

      {/* ── Baby-Heart Symbol ──
          Displayed beside the logo text on sm+ screens.
          Hidden on xs to protect the hamburger-menu button space. */}
      {showText && (
        <>
          {/* Thin vertical divider between wordmark and symbol */}
          <div
            className="hidden sm:block self-stretch w-px mx-1 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, transparent, #B51B83 30%, #1538B8 70%, transparent)',
              opacity: 0.25,
            }}
          />
          {/* Symbol with subtle hover scale matching the logo badge */}
          <div
            className="hidden sm:flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
            title="Ezhil Hospital — caring for new life"
          >
            <BabyHeartSymbol size={44} />
          </div>
        </>
      )}
    </Link>
  );
};
