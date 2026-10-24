import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BabyHeartSymbol } from './BabyHeartSymbol';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  className?: string;
  showText?: boolean;
}

// Fallback order: /ezhil-logo.svg → /ezhil-logo.png → built-in monogram
const LOGO_SOURCES = ['/ezhil-logo.svg', '/ezhil-logo.png'];

export const Logo: React.FC<LogoProps> = ({ variant, className = '', showText = true }) => {
  const [srcIndex, setSrcIndex] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  const handleError = () => {
    if (srcIndex + 1 < LOGO_SOURCES.length) {
      setSrcIndex(srcIndex + 1);
    } else {
      setAllFailed(true);
    }
  };

  const isFooter = variant === 'footer';

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 sm:gap-4 group focus:outline-none focus:ring-2 focus:ring-[#B51B83] rounded-xl p-1 ${isFooter ? 'w-full justify-between' : ''} ${className}`}
      aria-label="Ezhil Hospital & Fertility Centre — Home"
    >
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        {/* ── Official Hospital Logo Badge ── */}
        <div className={`relative flex-shrink-0 ${isFooter ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-12 h-12 sm:w-14 sm:h-14'} rounded-full overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 bg-[#B51B83] p-[3px] ring-2 ring-[#B51B83]/30`}>
          {!allFailed ? (
            <img
              key={srcIndex}
              src={LOGO_SOURCES[srcIndex]}
              alt="Ezhil Hospital & Fertility Centre Logo"
              className="w-full h-full object-contain rounded-full"
              onError={handleError}
            />
          ) : (
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="#FFFFFF" />
              <text
                x="50" y="58"
                textAnchor="middle"
                fontSize="38" fontWeight="bold"
                fill="#1538B8" fontFamily="Arial, sans-serif"
              >E</text>
            </svg>
          )}
        </div>

        {/* ── Premium Hospital Name & Doctor Branding ── */}
        {showText && (
          <div className="flex flex-col justify-center min-w-0">

            {/* Hospital Name — full, bold, shimmer gradient */}
            <div
              className="text-shimmer font-black leading-tight tracking-tight select-none"
              style={{
                fontSize: isFooter ? 'clamp(15px, 2.4vw, 20px)' : 'clamp(13px, 2.2vw, 19px)',
                background: 'linear-gradient(90deg, #1538B8 0%, #2B52D0 18%, #B51B83 38%, #E040A8 55%, #B51B83 72%, #1538B8 90%, #2B52D0 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 8px rgba(181,27,131,0.18))',
              }}
              aria-label="EZHIL HOSPITAL & FERTILITY CENTRE"
            >
              EZHIL HOSPITAL &amp; FERTILITY CENTRE
            </div>

            {/* Doctor name — elegant, secondary, polished magenta */}
            <div
              className="text-doctor-gradient font-bold tracking-wide leading-snug mt-1 select-none"
              style={{
                fontSize: isFooter ? 'clamp(11px, 1.3vw, 13px)' : 'clamp(9px, 1.1vw, 11px)',
                letterSpacing: '0.03em',
              }}
            >
              Dr. Senthilvadivu &mdash; Founder &amp; Senior Consultant
            </div>

          </div>
        )}
      </div>

      {/* ── Baby-Heart Symbol — beside branding ── */}
      {showText && (
        <div className={`flex items-center gap-2 flex-shrink-0 ${isFooter ? 'flex' : 'hidden md:flex'}`}>
          {/* Subtle vertical divider */}
          <div
            className="self-stretch w-px flex-shrink-0"
            style={{
              background: 'linear-gradient(to bottom, transparent, #B51B83 25%, #1538B8 75%, transparent)',
              opacity: 0.25,
              margin: '0 2px',
            }}
          />

          {/* Symbol scales gently on hover with the logo */}
          <div
            className="flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
            title="Ezhil Hospital — caring for new life"
          >
            <BabyHeartSymbol size={isFooter ? 54 : 48} />
          </div>
        </div>
      )}
    </Link>
  );
};
