import React, { useState } from 'react';
import { ArrowUpRight, Droplets, Sun, Wind, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export const EvergreenSection = ({ onOpenCareModal, onOpenPlantDetail }) => {
  const [activeHotspot, setActiveHotspot] = useState('Watering');

  const hotspots = [
    {
      id: 'Watering',
      icon: Droplets,
      label: 'Watering',
      detail: 'Moisten soil when top 2 inches feel dry. Avoid waterlogging root base.',
      glowColor: 'ring-emerald-400'
    },
    {
      id: 'Sunlight',
      icon: Sun,
      label: 'Sunlight',
      detail: 'Requires 4-6 hours of indirect, filtered sunlight near east windows.',
      glowColor: 'ring-amber-400'
    },
    {
      id: 'Humidity',
      icon: Wind,
      label: 'Humidity',
      detail: 'Prefers 55%+ ambient humidity. Light misting twice weekly enhances leaf sheen.',
      glowColor: 'ring-sky-400'
    }
  ];

  const handleQualityPlantClick = () => {
    if (onOpenPlantDetail) {
      onOpenPlantDetail({
        id: 'succulent-organic',
        name: 'Organic Jade Succulent',
        size: 'Semi-Dry',
        price: '$18.00 (30% OFF)',
        image: '/images/succulent.jpg',
        tag: '100% Organic Nursery',
        description: 'Sustainably grown organic jade succulent in authentic terracotta clay pot with nature certification.'
      });
    }
  };

  const handleSalesClick = () => {
    if (onOpenPlantDetail) {
      onOpenPlantDetail({
        id: 'sales-bundle',
        name: 'Evergreen Bliss Sales Bundle',
        size: 'Multi-Pack',
        price: '$39.00 (Reg $65)',
        image: '/images/monstera.jpg',
        tag: 'Best Sales Special',
        description: 'Complete garden transplant bundle including organic fertilizer, monstera cutting, and care handbook.'
      });
    }
  };

  const handleHotspotPlantClick = () => {
    if (onOpenPlantDetail) {
      onOpenPlantDetail({
        id: 'monstera-hotspot',
        name: 'Tropical Monstera Deliciosa',
        size: 'Medium / 3 Foot',
        price: '$34.00',
        image: '/images/monstera.jpg',
        tag: 'Air Purifying',
        description: 'Iconic indoor houseplant with split leaves. Includes watering, sunlight, and humidity care instructions.'
      });
    }
  };

  return (
    <section id="evergreen" className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Row: EVERGREEN BLISS (Image 4 Top) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-200 pb-8">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-sm border-2 border-white">🌹</span>
              <span className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-sm border-2 border-white">🌺</span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif-title font-bold text-[#0a3629] tracking-tight uppercase text-center">
            EVERGREEN BLISS
          </h2>

          <div className="text-right flex items-center gap-2 text-xs font-semibold text-stone-500">
            <span className="text-base">🍃</span>
            <span>Little touch of green makes Life brighter</span>
          </div>
        </div>

        {/* 3 Feature Cards Grid (Image 4 middle - Highlighted by User screenshot!) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Dark Green Interactive Hotspot Card (Image 4 Left) */}
          <div className="md:col-span-4 bg-[#0a3629] text-white rounded-3xl p-6 relative card-3d flex flex-col justify-between overflow-hidden min-h-[25rem]">
            
            {/* Plant Center with Interactive Hotspot Buttons */}
            <div 
              onClick={handleHotspotPlantClick}
              className="relative h-64 flex items-center justify-center my-2 cursor-pointer group"
              title="Click to view Monstera details"
            >
              <img
                src="/images/monstera.jpg"
                alt="Plant Hotspots"
                className="h-full object-contain filter drop-shadow-2xl brightness-110 group-hover:scale-105 transition duration-500"
              />

              {/* Hotspot 1: Humidity */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setActiveHotspot('Humidity'); }}
                className={`absolute top-6 right-8 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xl cursor-pointer ${activeHotspot === 'Humidity' ? 'bg-[#c1f038] text-[#0a2c21] scale-110 ring-4 ring-[#c1f038]/40' : 'bg-white/25 text-white hover:bg-white/40'}`}
              >
                <Wind className="w-3.5 h-3.5" />
                <span>Humidity</span>
              </button>

              {/* Hotspot 2: Sunlight */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setActiveHotspot('Sunlight'); }}
                className={`absolute top-1/2 right-4 -translate-y-1/2 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xl cursor-pointer ${activeHotspot === 'Sunlight' ? 'bg-[#c1f038] text-[#0a2c21] scale-110 ring-4 ring-[#c1f038]/40' : 'bg-white/25 text-white hover:bg-white/40'}`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-900" />
                <span>Sunlight</span>
              </button>

              {/* Hotspot 3: Watering */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setActiveHotspot('Watering'); }}
                className={`absolute bottom-6 left-6 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xl cursor-pointer ${activeHotspot === 'Watering' ? 'bg-[#c1f038] text-[#0a2c21] scale-110 ring-4 ring-[#c1f038]/40' : 'bg-white/25 text-white hover:bg-white/40'}`}
              >
                <Droplets className="w-3.5 h-3.5" />
                <span>Watering</span>
              </button>
            </div>

            {/* Active Hotspot Info Box */}
            <div className="bg-[#07241c] border border-[#185c48] rounded-2xl p-4 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-bold text-[#c1f038] uppercase tracking-wider">{activeHotspot} Tip:</p>
                <button 
                  onClick={handleHotspotPlantClick}
                  className="text-[10px] text-stone-300 hover:text-[#c1f038] underline"
                >
                  View Details &gt;
                </button>
              </div>
              <p className="text-stone-200 leading-relaxed">
                {hotspots.find(h => h.id === activeHotspot)?.detail}
              </p>
            </div>

          </div>

          {/* Card 2: Cream Card QUALITY PLANT (Image 4 Middle) */}
          <div 
            onClick={handleQualityPlantClick}
            className="md:col-span-4 bg-[#f4efe4] rounded-3xl p-6 border border-stone-200 card-3d flex flex-col justify-between min-h-[25rem] cursor-pointer group hover:border-[#0a3629]/40 transition"
          >
            <h3 className="text-2xl font-serif-title font-bold text-[#0a3629] uppercase tracking-wider text-center group-hover:text-[#ff5e1e] transition">
              QUALITY PLANT
            </h3>

            <div className="my-auto flex justify-center relative py-4">
              <img
                src="/images/succulent.jpg"
                alt="Organic Jade Succulent"
                className="w-48 h-48 object-contain filter drop-shadow-xl group-hover:scale-110 transition duration-500"
              />
              
              {/* Hanging Tag Graphic */}
              <div className="absolute bottom-2 right-10 bg-white/95 border border-stone-300 rounded-lg px-3 py-1.5 text-center shadow-lg transform rotate-6 group-hover:rotate-0 transition">
                <p className="text-[9px] font-bold uppercase tracking-widest text-stone-500">NATURE</p>
                <p className="text-[10px] font-bold text-[#0a3629]">&amp; ORGANIC</p>
              </div>
            </div>

            <div className="text-center pt-2 flex items-center justify-between text-xs text-stone-600 font-semibold border-t border-stone-300/60">
              <span>100% Sustainably Grown</span>
              <span className="text-[#ff5e1e] font-bold group-hover:underline">Quick View &gt;</span>
            </div>
          </div>

          {/* Card 3: Peach Card BEST SALES TO BUY PLANTS (Image 4 Right) */}
          <div 
            onClick={handleSalesClick}
            className="md:col-span-4 bg-[#ffeade] rounded-3xl p-8 border border-orange-200/60 card-3d flex flex-col justify-between min-h-[25rem] cursor-pointer group hover:border-[#ff5e1e]/60 transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-[#ff5e1e] uppercase tracking-wider">Sales</span>
                <p className="text-stone-700 text-xs mt-2 max-w-[12.5rem] leading-relaxed">
                  Learn how to transplant garden plants and keep them happy.
                </p>
              </div>

              {/* Orange Arrow Button (User highlighted!) */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); handleSalesClick(); }}
                className="w-12 h-12 rounded-full bg-[#ff5e1e] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#e04d13] transition"
                title="Open Sales Specials"
              >
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-auto pt-6 space-y-4">
              <h3 className="text-3xl font-serif-title font-bold text-[#0a3629] uppercase leading-tight group-hover:text-[#ff5e1e] transition">
                BEST SALES TO <br /> BUY PLANTS
              </h3>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#ff5e1e]">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Up to 30% Off Seasonal Greenery</span>
              </div>
            </div>
          </div>

        </div>

        {/* Headline Banner: BRIGHTEN EVERY CORNER */}
        <div className="py-4 text-center">
          <h3 className="text-3xl sm:text-5xl font-serif-title font-bold text-[#0a3629] uppercase tracking-tight inline-flex items-center gap-3 flex-wrap justify-center">
            <span>BRIGHTEN</span>
            <span className="bg-[#f4efe4] px-4 py-1 rounded-2xl text-2xl">🪴</span>
            <span>EVERY CORNER WITH FRESH LIVING PLANTS</span>
          </h3>
        </div>

        {/* Bottom Section: Common Problems 02 & Expert Advice (Image 5 Top) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 border-t border-stone-200">
          
          {/* Left Gardener Photo (Hannah Miller) */}
          <div 
            onClick={() => onOpenCareModal && onOpenCareModal()}
            className="md:col-span-5 rounded-3xl overflow-hidden shadow-xl border border-stone-200 card-3d h-72 cursor-pointer group relative"
          >
            <img
              src="/images/gardener_pot.jpg"
              alt="Hannah Miller inspecting plant"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-bold font-serif-title text-[#c1f038]">Hannah Miller</p>
              <p className="text-[11px] text-stone-200">Senior Greenhouse Cultivator</p>
            </div>
          </div>

          {/* Right Expert Advice Content */}
          <div className="md:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#ff5e1e] uppercase tracking-wider">Common Problems</span>
              <span className="text-4xl font-serif-title font-bold text-[#ff5e1e]/50">02</span>
            </div>

            <p className="text-stone-700 text-base leading-relaxed">
              An easy-going plant is generally pest-free. Treat minor pests as soon as they appear using natural neem oil or mild organic soaps.
            </p>

            {/* Author Advice Badge matching Image 5 */}
            <div 
              onClick={() => onOpenCareModal && onOpenCareModal()}
              className="bg-[#f8f6f0] border border-stone-300/80 rounded-2xl p-4 flex items-center gap-4 max-w-lg shadow-sm hover:border-[#ff5e1e] cursor-pointer transition"
            >
              <img
                src="/images/gardener_apron.jpg"
                alt="Elena Rostova Avatar"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#ff5e1e]"
              />
              <div className="text-xs text-stone-700">
                <p className="font-bold text-[#0a3629]">
                  - By Greenie Advice - <span className="font-normal text-stone-600">controlled organic pesticides in my garden.</span>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
