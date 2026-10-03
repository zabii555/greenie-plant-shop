import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  if (!isOpen) return null;

  const itemsList = Object.values(cartItems);
  const subtotal = itemsList.reduce((sum, item) => sum + (item.priceNum || 28) * (item.quantity || 1), 0);
  const freeShippingThreshold = 50;
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-30 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-out Drawer */}
      <div className="relative w-full max-w-md bg-[#07241c] text-white h-full shadow-2xl border-l border-[#1b6b53] flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 bg-[#0a3629] border-b border-[#144d3b] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#c1f038]" />
            <h3 className="font-serif-title font-bold text-lg text-white">Your Plant Cart ({itemsList.length})</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#07241c] hover:bg-[#145240] text-stone-300 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="px-5 py-3 bg-[#082d23] border-b border-[#144d3b] text-xs">
          <div className="flex justify-between items-center mb-1">
            <span className="text-stone-300">
              {subtotal >= freeShippingThreshold 
                ? '🎉 You unlocked FREE Eco Delivery!' 
                : `Add $${(freeShippingThreshold - subtotal).toFixed(2)} more for FREE Delivery`}
            </span>
            <span className="font-bold text-[#c1f038]">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-[#07241c] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#c1f038] h-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {itemsList.length === 0 ? (
            <div className="text-center py-16 space-y-3 text-stone-400">
              <ShoppingBag className="w-12 h-12 stroke-1 mx-auto text-stone-500" />
              <p className="font-serif-title text-lg text-stone-300">Your cart is currently empty</p>
              <p className="text-xs">Explore our green houseplants and bring nature home.</p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-[#c1f038] text-[#0a2c21] font-bold text-xs rounded-full"
              >
                Browse Shop
              </button>
            </div>
          ) : (
            itemsList.map((item) => (
              <div
                key={item.id}
                className="bg-[#0a3629] border border-[#185c48] rounded-2xl p-3 flex items-center gap-4"
              >
                <img
                  src={item.image || '/images/monstera.jpg'}
                  alt={item.name}
                  className="w-16 h-16 object-contain bg-[#07241c] rounded-xl p-1"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif-title font-bold text-sm text-white truncate">{item.name}</h4>
                  <p className="text-[11px] text-stone-400">Size: {item.size || 'Standard'}</p>
                  <p className="text-xs font-bold text-[#c1f038] mt-1">${(item.priceNum || 28).toFixed(2)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-[#07241c] rounded-lg p-1 border border-[#144d3b]">
                  <button
                    onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                    className="w-5 h-5 text-stone-300 hover:text-white flex items-center justify-center font-bold text-xs"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-white px-1">{item.quantity || 1}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                    className="w-5 h-5 text-stone-300 hover:text-white flex items-center justify-center font-bold text-xs"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-1.5 text-stone-400 hover:text-red-400 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {itemsList.length > 0 && (
          <div className="p-5 bg-[#0a3629] border-t border-[#144d3b] space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-stone-300">Subtotal</span>
              <span className="font-serif-title font-bold text-xl text-[#c1f038]">${subtotal.toFixed(2)}</span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-[#ff5e1e] hover:bg-[#e04d13] text-white font-bold text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Eco-Safe Packaging &amp; Live Arrival Guarantee</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
