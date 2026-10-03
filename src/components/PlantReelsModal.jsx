import React, { useState } from 'react';
import { X, Leaf } from 'lucide-react';

export const PlantReelsModal = ({ isOpen, onClose }) => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const shortLink = 'https://www.youtube.com/shorts/kAc2hG-0pPo?feature=share';

  const reels = [
    {
      id: 1,
      title: 'Plant care reel',
      embedUrl: 'https://www.youtube-nocookie.com/embed/kAc2hG-0pPo?autoplay=1&mute=1&loop=1&playlist=kAc2hG-0pPo&controls=0&disablekb=1&fs=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3'
    },
    {
      id: 2,
      title: 'Fresh plant growth reel',
      embedUrl: 'https://www.youtube-nocookie.com/embed/kAc2hG-0pPo?autoplay=1&mute=1&loop=1&playlist=kAc2hG-0pPo&controls=0&disablekb=1&fs=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3'
    },
    {
      id: 3,
      title: 'Indoor plant loop',
      embedUrl: 'https://www.youtube-nocookie.com/embed/kAc2hG-0pPo?autoplay=1&mute=1&loop=1&playlist=kAc2hG-0pPo&controls=0&disablekb=1&fs=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3'
    }
  ];

  if (!isOpen) return null;

  const currentReel = reels[currentReelIndex];

  const handleNextReel = () => {
    setCurrentReelIndex((prev) => (prev + 1) % reels.length);
  };

  const handlePrevReel = () => {
    setCurrentReelIndex((prev) => (prev - 1 + reels.length) % reels.length);
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-[26.25rem] sm:max-w-[28.125rem] bg-[#071f1a] rounded-[30px] overflow-hidden border border-[#1d664d] shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
        <div
          className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-3"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)' }}
        >
          <div className="flex items-center gap-2 rounded-full bg-black/35 px-2.5 py-1.5 backdrop-blur-sm border border-white/10">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c1f038] text-[#071f1a] shadow-md">
              <Leaf className="h-3.5 w-3.5" />
            </div>
            <div className="leading-none text-left">
              <div className="text-[11px] font-bold tracking-wide text-white">Greenie.</div>
              <div className="text-[8px] uppercase tracking-[0.18em] text-stone-300">Botanical Houseplant</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/35 hover:bg-black/55 text-stone-100 flex items-center justify-center transition"
            aria-label="Close reels"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="relative h-[76vh] min-h-[28.75rem] max-h-[45rem] bg-black">
          <iframe
            key={currentReel.id}
            src={currentReel.embedUrl}
            title={currentReel.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={false}
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
