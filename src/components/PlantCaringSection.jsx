import React from 'react';
import { ArrowUpRight, Flower, Sparkles, Heart } from 'lucide-react';

export const PlantCaringSection = ({ onOpenCareModal }) => {
  return (
    <section className="bg-white text-[#0f2e24] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#ff5e1e] uppercase tracking-wider">Plant Caring</span>
            <p className="text-xl sm:text-2xl font-serif-title text-[#0f2e24]">
              Plants for boosting &amp; purifying
            </p>
          </div>

          {/* Main Display Typography matching Image 2 */}
          <div className="flex-1 lg:text-center">
            <h2 className="text-4xl sm:text-6xl xl:text-7xl font-serif-title uppercase tracking-tight text-[#0a3629] leading-none">
              TREE <span className="inline-block text-[#ff5e1e] animate-bounce">🌸</span> LOVE <br />
              LIFE SHINE
            </h2>
          </div>

          {/* Choose Green Pill Button */}
          <div className="shrink-0">
            <button 
              onClick={onOpenCareModal}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#0a3629] text-[#0a3629] hover:bg-[#0a3629] hover:text-white transition-all text-sm font-semibold group shadow-sm"
            >
              <span>Choose Green</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3-Column Content Layout (Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Left 3D Monstera Card */}
          <div className="md:col-span-4 bg-[#f2eee3] rounded-3xl p-6 relative card-3d flex flex-col justify-between overflow-hidden min-h-[20rem]">
            <div className="flex justify-end">
              <button 
                onClick={onOpenCareModal}
                className="w-10 h-10 rounded-full bg-[#ff5e1e] text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="my-auto flex justify-center py-4">
              <img
                src="/images/monstera.jpg"
                alt="Monstera Deliciosa Houseplant"
                className="w-44 h-44 object-contain filter drop-shadow-xl hover:scale-105 transition"
              />
            </div>

            <div className="text-center pt-2">
              <span className="text-2xl font-serif-title font-bold text-[#1a4034] tracking-widest uppercase">
                GRONIE
              </span>
            </div>
          </div>

          {/* Card 2: Gardening Benefits 01 (Middle Column) */}
          <div className="md:col-span-4 bg-[#FAF8F5] border border-stone-200 rounded-3xl p-8 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-[#ff5e1e] tracking-wider">Gardening Benefits</span>
              <span className="text-4xl font-serif-title font-bold text-[#ff5e1e]/60">01</span>
            </div>

            <div className="space-y-4 my-auto">
              <p className="text-stone-700 text-base leading-relaxed">
                A 2007 study discovered <span className="text-xl">🪷</span> that the soil bacteria <em className="text-[#0a3629] font-medium">Mycobacterium vaccae</em> increases serotonin levels, which naturally helps to improve mood and reduce daily stress &amp; anxiety.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#0a3629]">
              <Heart className="w-4 h-4 text-[#ff5e1e] fill-current" />
              <span>100% Organic Mental Wellness</span>
            </div>
          </div>

          {/* Card 3: Right Gardener Photo (Image 2 Clara Dupont) */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden shadow-xl border border-stone-200 card-3d relative min-h-[20rem]">
            <img
              src="/images/gardener_apron.jpg"
              alt="Clara Dupont - Botanist"
              className="w-full h-full object-cover object-top hover:scale-105 transition duration-700"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
            />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <p className="text-lg font-serif-title font-bold text-[#c1f038]">Clara Dupont</p>
              <p className="text-xs text-stone-200">Botanical Soil Specialist &amp; Planter</p>
            </div>
          </div>

        </div>

        {/* Bottom Headline Banner: HOUSE 🌸 PLANT */}
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h3 className="text-4xl sm:text-6xl font-serif-title font-bold text-[#0a3629] tracking-tight uppercase">
            HOUSE <span className="text-[#ff5e1e]">🌸</span> PLANT
          </h3>

          <div className="flex items-center gap-4 bg-[#f9f7f0] border border-stone-200 rounded-2xl p-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
              <span className="text-2xl">🪴</span>
            </div>
            <div>
              <p className="text-sm font-bold text-[#0a3629]">Best plants for boosting</p>
              <p className="text-xs text-stone-500">and purifying natural oxygen indoor</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
