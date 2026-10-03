import React from 'react';
import { X, Droplets, Sun, Wind, ShoppingBag, Heart, Check, Sparkles } from 'lucide-react';

export const PlantDetailModal = ({ plant, isOpen, onClose, onAddToCart, isAdded }) => {
  if (!isOpen || !plant) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#07241c] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#1b6b53] card-3d">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[#0a3629] border-b border-[#144d3b]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#c1f038]" />
            <span className="font-serif-title font-bold text-sm text-[#c1f038] uppercase">Plant Quick View</span>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#07241c] hover:bg-[#145240] text-stone-300 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-44 h-44 bg-[#0a3629] border border-[#185c48] rounded-2xl p-4 flex items-center justify-center shrink-0">
              <img
                src={plant.image || '/images/monstera.jpg'}
                alt={plant.name}
                className="max-h-full object-contain filter drop-shadow-xl animate-float"
              />
            </div>

            <div className="space-y-3 flex-1 text-center sm:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#c1f038] text-[#0a2c21] px-2.5 py-0.5 rounded-full">
                {plant.tag || 'Popular Pick'}
              </span>

              <h3 className="text-3xl font-serif-title font-bold text-white">
                {plant.name}
              </h3>

              <p className="text-stone-300 text-xs leading-relaxed">
                {plant.description || 'Premium nursery-grown indoor houseplant carefully cultivated for maximum serotonin release and air purification.'}
              </p>

              <div className="text-2xl font-serif-title font-bold text-[#c1f038]">
                {plant.price || '$28.00'}
              </div>
            </div>
          </div>

          {/* Plant Care Hotspot Icons inside Modal */}
          <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#144d3b] text-center">
            <div className="bg-[#0a3629] border border-[#185c48] p-3 rounded-2xl space-y-1">
              <Droplets className="w-5 h-5 text-[#c1f038] mx-auto" />
              <p className="text-[10px] font-bold text-stone-300 uppercase">Watering</p>
              <p className="text-[11px] text-stone-400">2x / week</p>
            </div>

            <div className="bg-[#0a3629] border border-[#185c48] p-3 rounded-2xl space-y-1">
              <Sun className="w-5 h-5 text-[#ffd028] mx-auto" />
              <p className="text-[10px] font-bold text-stone-300 uppercase">Sunlight</p>
              <p className="text-[11px] text-stone-400">Indirect Sun</p>
            </div>

            <div className="bg-[#0a3629] border border-[#185c48] p-3 rounded-2xl space-y-1">
              <Wind className="w-5 h-5 text-sky-400 mx-auto" />
              <p className="text-[10px] font-bold text-stone-300 uppercase">Humidity</p>
              <p className="text-[11px] text-stone-400">50-60%</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => onAddToCart && onAddToCart(plant.id || 'plant')}
              className="flex-1 py-3 bg-[#ff5e1e] hover:bg-[#e04d13] text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-2 uppercase tracking-wider shadow-lg"
            >
              {isAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
              <span>{isAdded ? 'In Cart' : 'Add to Cart'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
