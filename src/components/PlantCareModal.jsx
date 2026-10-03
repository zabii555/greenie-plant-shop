import React, { useState } from 'react';
import { X, Send, Check, Leaf, Phone, Sparkles } from 'lucide-react';

export const PlantCareModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plantType: 'Monstera / Tropical',
    careGoal: 'Soil & Serotonin Advice'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#07241c] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#1b6b53] card-3d">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-[#0a3629] border-b border-[#144d3b]">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-[#c1f038]" />
            <h3 className="font-serif-title text-xl font-bold text-white">Greenie Plant Care Consultation</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#07241c] hover:bg-[#145240] text-stone-300 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#c1f038] text-[#0a2c21] flex items-center justify-center mx-auto shadow-lg">
                <Check className="w-8 h-8 stroke-3" />
              </div>
              <h4 className="text-2xl font-serif-title font-bold text-[#c1f038]">Care Request Received!</h4>
              <p className="text-stone-300 text-sm max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-white">{formData.name}</span>! Our botanist Clara Dupont will reach out via email/phone within 1 hour with tailored care guidelines for your <span className="text-[#c1f038] font-semibold">{formData.plantType}</span>.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-[#c1f038] text-[#0a2c21] font-bold text-sm rounded-full shadow-md hover:bg-[#d0f55c]"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sophia Vance"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a3629] border border-[#185c48] text-white text-sm focus:outline-none focus:border-[#c1f038]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2831"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0a3629] border border-[#185c48] text-white text-sm focus:outline-none focus:border-[#c1f038]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0a3629] border border-[#185c48] text-white text-sm focus:outline-none focus:border-[#c1f038]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Select Plant Category</label>
                <select
                  value={formData.plantType}
                  onChange={(e) => setFormData({ ...formData, plantType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a3629] border border-[#185c48] text-white text-sm focus:outline-none focus:border-[#c1f038]"
                >
                  <option value="Monstera / Tropical">Monstera Deliciosa (Indoor)</option>
                  <option value="Succulents & Cacti">Succulents &amp; Blue Agave</option>
                  <option value="Asplenium Fern">Asplenium Fern</option>
                  <option value="Aloe Vera">Aloe Vera &amp; Medicinal</option>
                  <option value="Garden Trees">Garden Trees &amp; Saplings</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#ff5e1e] hover:bg-[#e04d13] text-white font-bold text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                <span>Submit Care Request</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
