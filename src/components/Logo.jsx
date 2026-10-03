import React from 'react';

export const Logo = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-2.5 font-display select-none ${className}`}>
      {/* Tree SVG Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-emerald-800 shadow-md ring-2 ring-emerald-600/60">
        <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Trunk */}
          <rect x="28" y="44" width="8" height="13" rx="2" fill="#4a7c59"/>

          {/* Bottom canopy layer */}
          <polygon points="32,16 13,48 51,48" fill="#2d6a4f"/>

          {/* Middle canopy layer */}
          <polygon points="32,12 16,40 48,40" fill="#40916c"/>

          {/* Top canopy layer */}
          <polygon points="32,7 19,32 45,32" fill="#52b788"/>

          {/* Highlight shine */}
          <polygon points="32,7 25,24 32,21" fill="#95d5b2" opacity="0.55"/>

          {/* Small glow dots */}
          <circle cx="21" cy="37" r="2" fill="#b7e4c7" opacity="0.5"/>
          <circle cx="43" cy="37" r="2" fill="#b7e4c7" opacity="0.5"/>
          <circle cx="27" cy="27" r="1.5" fill="#d8f3dc" opacity="0.6"/>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span className="text-xl md:text-2xl font-bold tracking-tight text-emerald-900 font-display uppercase">
          Florida's
        </span>
        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-emerald-700 uppercase -mt-0.5 border-t border-emerald-700 pt-0.5">
          TREE SURGEONS
        </span>
      </div>
    </div>
  );
};
