import React, { useState } from 'react';
import { Search, ChevronDown, Leaf, Menu, X, ShoppingBag } from 'lucide-react';

export const HeaderNav = ({ 
  onOpenCareModal, 
  onOpenReelsModal,
  onOpenCart,
  onSelectCategory,
  onSearchChange,
  cartCount = 0 
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (onSearchChange) onSearchChange(e.target.value);
  };

  const handleCategoryClick = (cat) => {
    if (onSelectCategory) onSelectCategory(cat);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    const element = document.getElementById('plant-catalog');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a3629]/95 backdrop-blur-md border-b border-[#144d3b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-1.5 group">
          <span className="text-3xl font-bold font-serif-title tracking-tight text-white group-hover:text-[#c1f038] transition">
            Greenie<span className="text-[#c1f038] inline-block animate-pulse">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
          
          {/* Plants Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              onClick={() => handleCategoryClick('All')}
              className="flex items-center gap-1 text-white/90 hover:text-[#c1f038] transition py-2"
            >
              <span>Plants</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#c1f038]' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-[#07241c] border border-[#175c46] rounded-xl shadow-2xl p-3 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                <button 
                  onClick={() => handleCategoryClick('Indoor Houseplants')} 
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-stone-200 hover:bg-[#0f4737] hover:text-[#c1f038] transition text-left"
                >
                  <Leaf className="w-4 h-4 text-[#c1f038]" /> Indoor Houseplants
                </button>
                <button 
                  onClick={() => handleCategoryClick('Succulents & Cacti')} 
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-stone-200 hover:bg-[#0f4737] hover:text-[#c1f038] transition text-left"
                >
                  <Leaf className="w-4 h-4 text-[#c1f038]" /> Succulents &amp; Cacti
                </button>
                <button 
                  onClick={() => handleCategoryClick('Air Purifying Trees')} 
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-stone-200 hover:bg-[#0f4737] hover:text-[#c1f038] transition text-left"
                >
                  <Leaf className="w-4 h-4 text-[#c1f038]" /> Air Purifying Trees
                </button>
                <button 
                  onClick={() => handleCategoryClick('Tropical Monsteras')} 
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-stone-200 hover:bg-[#0f4737] hover:text-[#c1f038] transition text-left"
                >
                  <Leaf className="w-4 h-4 text-[#c1f038]" /> Tropical Monsteras
                </button>
              </div>
            )}
          </div>

          <button 
            onClick={() => handleCategoryClick('All')} 
            className="text-white/90 hover:text-[#c1f038] transition"
          >
            Shop
          </button>

          <button 
            onClick={onOpenReelsModal} 
            className="text-white/90 hover:text-[#c1f038] transition"
          >
            Videos
          </button>

          <button 
            onClick={() => handleCategoryClick('Sale')} 
            className="text-white/90 hover:text-[#c1f038] transition flex items-center gap-1"
          >
            <span>Sale</span>
            <span className="bg-[#ff5e1e] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase">Hot</span>
          </button>

          <a href="#blog" className="text-white/90 hover:text-[#c1f038] transition">Blog</a>
        </nav>

        {/* Right Section: Search & Cart & Contact CTA */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search plants, care..."
              className="w-44 xl:w-56 pl-4 pr-9 py-2 bg-[#07291f] border border-[#16503f] rounded-full text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#c1f038] transition"
            />
            <Search className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 bg-[#07291f] border border-[#16503f] hover:border-[#c1f038] rounded-full text-stone-200 hover:text-[#c1f038] transition"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ff5e1e] text-white font-bold text-[10px] flex items-center justify-center border-2 border-[#0a3629]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Contact Lime Button */}
          <button
            onClick={onOpenCareModal}
            className="px-6 py-2 bg-[#c1f038] hover:bg-[#d0f55c] active:scale-95 text-[#0a2c21] font-semibold text-sm rounded-full shadow-md transition duration-200 transform"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenCart}
            className="relative p-2 bg-[#07291f] rounded-full text-stone-200"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#ff5e1e] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCareModal}
            className="px-3.5 py-1.5 bg-[#c1f038] text-[#0a2c21] font-semibold text-xs rounded-full"
          >
            Contact
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07241c] border-b border-[#144d3b] px-6 py-4 space-y-3 animate-in slide-in-from-top-4">
          <div className="relative mb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search plants..."
              className="w-full pl-4 pr-9 py-2 bg-[#0a3629] border border-[#16503f] rounded-full text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#c1f038]"
            />
            <Search className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
          <button onClick={() => handleCategoryClick('All')} className="block w-full text-left py-2 text-sm text-stone-200 hover:text-[#c1f038]">Shop All Plants</button>
          <button onClick={() => handleCategoryClick('Indoor Houseplants')} className="block w-full text-left py-2 text-sm text-stone-200 hover:text-[#c1f038]">Indoor Houseplants</button>
          <button onClick={() => handleCategoryClick('Succulents & Cacti')} className="block w-full text-left py-2 text-sm text-stone-200 hover:text-[#c1f038]">Succulents &amp; Cacti</button>
          <button onClick={onOpenReelsModal} className="block w-full text-left py-2 text-sm text-stone-200 hover:text-[#c1f038]">Videos &amp; Reels</button>
          <button onClick={() => handleCategoryClick('Sale')} className="block w-full text-left py-2 text-sm text-stone-200 hover:text-[#c1f038]">Sale Specials</button>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-stone-200 hover:text-[#c1f038]">Greenie Blog</a>
        </div>
      )}
    </header>
  );
};
