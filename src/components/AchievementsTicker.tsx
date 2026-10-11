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
  // Repeating the 4 items multiple times ensures a continuous, seamless loop without gaps
  const tickerItems = [...TICKER_ACHIEVEMENTS, ...TICKER_ACHIEVEMENTS, ...TICKER_ACHIEVEMENTS, ...TICKER_ACHIEVEMENTS];

  return (
    <div 
      className="relative z-30 w-full overflow-hidden bg-gradient-to-r from-[#B51B83] via-[#0E2685] to-[#1538B8] text-white border-y border-pink-400/20 py-2 sm:py-2.5 shadow-sm"
      aria-label="Hospital Milestones and Achievements Ticker"
    >
      {/* Decorative gradient fade edges for elegant entry/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#B51B83] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#1538B8] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <div className="animate-ticker-track flex items-center gap-6 sm:gap-10">
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 flex-shrink-0 px-3 py-0.5 rounded-full bg-white/10 hover:bg-white/15 transition-colors border border-white/10"
          >
            {iconMap[item.icon] || <Sparkles className="w-4 h-4 text-pink-300" />}
            <span className="font-black text-sm sm:text-base tracking-wide text-white whitespace-nowrap">
              {item.statement}
            </span>
            <span className="hidden md:inline-block text-xs font-semibold text-pink-200/90 whitespace-nowrap">
              • {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
