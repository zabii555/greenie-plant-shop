import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FooterSection = ({ onOpenCareModal }) => {
  return (
    <footer className="relative bg-[#07241c] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Faint Background Watermark Typography (Image 5 reference) */}
      <div className="absolute bottom-16 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-10">
        <h1 className="text-[120px] sm:text-[180px] font-serif-title font-bold text-white uppercase whitespace-nowrap tracking-widest text-center">
          GREENIE 🌸 GREENIE
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Brand & Quote Column (Left) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-block text-4xl font-bold font-serif-title text-white">
              Greenie<span className="text-[#c1f038]">.</span>
            </a>

            <p className="text-stone-300 text-lg font-serif-title max-w-xs leading-relaxed">
              Nature's beauty brought closer to your home.
            </p>

            {/* Barcode Box Card (Image 5 Center Piece) */}
            <div className="bg-[#0b3327] border border-[#165442] rounded-2xl p-5 max-w-sm space-y-3 shadow-2xl">
              <div className="flex items-center justify-between">
                {/* SVG Barcode */}
                <div className="bg-white p-2 rounded">
                  <svg className="w-28 h-8" viewBox="0 0 100 30" fill="currentColor">
                    <rect x="0" y="0" width="3" height="30" fill="#000" />
                    <rect x="5" y="0" width="1" height="30" fill="#000" />
                    <rect x="8" y="0" width="4" height="30" fill="#000" />
                    <rect x="15" y="0" width="2" height="30" fill="#000" />
                    <rect x="20" y="0" width="5" height="30" fill="#000" />
                    <rect x="27" y="0" width="2" height="30" fill="#000" />
                    <rect x="32" y="0" width="1" height="30" fill="#000" />
                    <rect x="36" y="0" width="4" height="30" fill="#000" />
                    <rect x="43" y="0" width="3" height="30" fill="#000" />
                    <rect x="49" y="0" width="2" height="30" fill="#000" />
                    <rect x="54" y="0" width="6" height="30" fill="#000" />
                    <rect x="63" y="0" width="2" height="30" fill="#000" />
                    <rect x="68" y="0" width="1" height="30" fill="#000" />
                    <rect x="72" y="0" width="5" height="30" fill="#000" />
                    <rect x="80" y="0" width="2" height="30" fill="#000" />
                    <rect x="85" y="0" width="3" height="30" fill="#000" />
                    <rect x="91" y="0" width="4" height="30" fill="#000" />
                    <rect x="97" y="0" width="3" height="30" fill="#000" />
                  </svg>
                </div>
                <span className="text-xl font-mono font-bold text-[#c1f038]">363039</span>
              </div>

              <p className="text-xs text-stone-300">
                Plant triggers serotonin, and reduces anxiety naturally.
              </p>

              <div className="pt-2 border-t border-[#165442] flex justify-between items-center text-[11px] text-[#c1f038] font-medium">
                <span>Greenie Plant Shop</span>
                <span>Verified Eco</span>
              </div>
            </div>

          </div>

          {/* Links Columns (Right 8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#c1f038] tracking-wider">Company</h4>
              <ul className="space-y-2.5 text-xs text-stone-300">
                <li><a href="#plant-catalog" className="hover:text-white transition">Shop Plants ▾</a></li>
                <li><a href="#plant-catalog" className="hover:text-white transition">Plant Styling Ideas</a></li>
                <li><a href="#evergreen" className="hover:text-white transition">Plant Care Tips</a></li>
                <li><a href="#" onClick={onOpenCareModal} className="hover:text-white transition">Plant Styling Services</a></li>
              </ul>
            </div>

            {/* Column 2: All plant idea */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#c1f038] tracking-wider">All plant idea</h4>
              <ul className="space-y-2.5 text-xs text-stone-300">
                <li><a href="#plant-catalog" className="hover:text-white transition">Accessories</a></li>
                <li><a href="#evergreen" className="hover:text-white transition">Sustainability</a></li>
                <li><a href="#evergreen" className="hover:text-white transition">Soil &amp; Fertilizers</a></li>
                <li><a href="#evergreen" className="hover:text-white transition">Gardening Tools</a></li>
              </ul>
            </div>

            {/* Column 3: Tips share */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#c1f038] tracking-wider">Tips share</h4>
              <ul className="space-y-2.5 text-xs text-stone-300">
                <li><a href="#evergreen" className="hover:text-white transition">Agriculture</a></li>
                <li><a href="#evergreen" className="hover:text-white transition">Bio Farming</a></li>
                <li><a href="#blog" className="hover:text-white transition">Resources</a></li>
                <li><a href="#plant-catalog" className="hover:text-white transition">Indoor Plants</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Social Bar */}
        <div className="pt-8 border-t border-[#134234] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© All the rights reserved to @Ryllic Studio 25 / Greenie</p>

          {/* Social Icons matching Image 5 */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-[#1d5948] flex items-center justify-center hover:bg-[#c1f038] hover:text-[#07241c] transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-[#1d5948] flex items-center justify-center hover:bg-[#c1f038] hover:text-[#07241c] transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-[#1d5948] flex items-center justify-center hover:bg-[#c1f038] hover:text-[#07241c] transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" aria-label="X Twitter" className="w-8 h-8 rounded-full border border-[#1d5948] flex items-center justify-center hover:bg-[#c1f038] hover:text-[#07241c] transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Policy</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

