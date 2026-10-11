import React from 'react';
import { Activity, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { TICKER_ACHIEVEMENTS } from '../data/hospitalData';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-4 h-4 text-pink-300 flex-shrink-0" />,
  Heart: <Heart className="w-4 h-4 text-pink-300 flex-shrink-0 fill-pink-300/30" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-pink-300 flex-shrink-0" />,
  Sparkles: <Sparkles className="w-4 h-4 text-pink-300 flex-shrink-0" />,
};

export const AchievementsTicker: React.FC = () => {
  // 4 items repeated twice per half (8 items per half, 16 total) gives a continuous stream
  const set = [...TICKER_ACHIEVEMENTS, ...TICKER_ACHIEVEMENTS];
  const tickerItems = [...set, ...set];

  return (
    <div 
      className="relative z-30 w-full overflow-hidden bg-gradient-to-r from-[#B51B83] via-[#0E2685] to-[#1538B8] text-white border-y border-pink-400/20 py-2 sm:py-2.5 shadow-sm select-none"
      aria-label="Hospital Milestones and Achievements Ticker"
    >
      {/* Decorative gradient fade edges for elegant entry/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-r from-[#B51B83] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-l from-[#1538B8] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <div className="animate-ticker-track flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 flex-shrink-0 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/15"
          >
            {iconMap[item.icon] || <Sparkles className="w-3.5 h-3.5 text-pink-200" />}
            <span className="font-extrabold text-xs sm:text-sm tracking-wide text-white whitespace-nowrap capitalize">
              {item.statement}
            </span>
            <span className="hidden md:inline-block text-[11px] font-medium text-pink-200/90 whitespace-nowrap">
              • {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
