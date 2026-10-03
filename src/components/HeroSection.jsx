import React from 'react';
import { Play, Droplets, ArrowUpRight, Sparkles } from 'lucide-react';
import { assetUrl } from '../utils/asset';

export const HeroSection = ({ onOpenCareModal, onOpenReelsModal, onOpenPlantDetail }) => {
  const handleSunflowerClick = () => {
    if (onOpenPlantDetail) {
      onOpenPlantDetail({
        id: 'sunflower-3d',
        name: 'Golden Sunflower 3D',
        size: 'Medium / Outdoor',
        price: '$24.00',
        image: assetUrl('/images/monstera.jpg'),
        tag: 'Indoor & Outdoor ☀️',
        description: 'Vibrant golden sunflower plant that brings natural warmth, happiness, and serotonin into home living spaces.'
      });
    }
  };
  return (
    <section className="relative bg-[#0a3629] text-white pt-8 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Dynamic Background Sparkles & Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c1f038]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#ff5e1e]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Gardener Image (Image 1 reference) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#144d3b] card-3d">
              <img
                src={assetUrl('/images/hero_woman.jpg')}
                alt="Sophia Vance - Plant Specialist watering trees"
                className="w-full h-96 sm:h-[31.25rem] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,54,41,0.8), transparent)' }}
              />
              
              {/* Badge on Gardener Image */}
              <div className="absolute bottom-6 left-6 bg-[#07241c]/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#1b6b53] flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#c1f038] animate-ping" />
                <div>
                  <p className="text-xs font-semibold text-stone-200">Sophia Vance</p>
                  <p className="text-[10px] text-[#c1f038]">Head Arborist &amp; Planter</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading & CTAs & Floating Cards */}
          <div className="lg:col-span-7 relative z-10 flex flex-col justify-center space-y-8">
            
            {/* Big Serif Heading */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e4837] border border-[#1b6b53] text-[#c1f038] text-xs font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tree &amp; Plant Care Specialists</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-serif-title font-normal tracking-tight text-[#fdfcf7] leading-[1.05]">
                BLOOMING <br />
                <span className="text-[#c1f038] inline-block hover:translate-x-1 transition-transform">WITH LOVE</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-stone-300 text-base sm:text-lg max-w-xl leading-relaxed">
              Planting a tree or even a small houseplant is an investment in a greener, calmer tomorrow. Explore our curated greenery collection and expert care guidance.
            </p>

            {/* CTA Controls Row */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              
              {/* Orange CTA Button: | Taking Care */}
              <button
                onClick={onOpenCareModal}
                className="group flex items-center gap-3 px-7 py-3.5 bg-[#ff5e1e] hover:bg-[#e04d13] active:scale-95 text-white font-semibold rounded-full shadow-xl shadow-[#ff5e1e]/25 transition duration-200"
              >
                <Droplets className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="border-l border-white/30 pl-3">Taking Care</span>
              </button>

              {/* Circle Play Button: Show Plant Reels */}
              <button
                onClick={onOpenReelsModal}
                className="flex items-center gap-3 group text-stone-200 hover:text-white transition"
              >
                <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-[#c1f038] group-hover:bg-[#c1f038] group-hover:text-[#0a2c21] transition-all shadow-md">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <span className="text-sm font-medium group-hover:text-[#c1f038] transition">Show Plant Reels</span>
              </button>

            </div>

            {/* Floating 3D Sunflower Card at Bottom Right (Image 1 reference) */}
            <div className="pt-6 sm:pt-4 flex justify-end">
              <div 
                onClick={handleSunflowerClick}
                className="w-48 bg-[#0e4837] border border-[#1b6b53] rounded-2xl p-3.5 shadow-2xl card-3d relative cursor-pointer hover:border-[#c1f038] transition"
                title="Click to view Sunflower details"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#c1f038] underline decoration-[#c1f038]/40">Sunflower</span>
                  <span className="text-[10px] bg-[#07241c] text-stone-300 px-2 py-0.5 rounded-full">Indoor ☀️</span>
                </div>
                
                <div className="relative h-28 bg-[#06241b] rounded-xl flex items-center justify-center overflow-hidden">
                  <svg className="w-20 h-20 text-[#ffd028] animate-float" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="16" fill="#5c3a21" />
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                      <ellipse key={deg} cx="50" cy="22" rx="6" ry="14" transform={`rotate(${deg} 50 50)`} fill="#ffc825" />
                    ))}
                    <path d="M50 66 Q 50 90 48 95" stroke="#4ade80" strokeWidth="4" fill="none" />
                    <path d="M48 80 Q 35 75 40 85" fill="#4ade80" />
                  </svg>
                </div>
                <p className="text-[10px] text-stone-300 mt-2 text-center">Brightens living spaces naturally</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
