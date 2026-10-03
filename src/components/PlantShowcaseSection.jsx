import React, { useState } from 'react';
import { ArrowUpRight, Heart, ShoppingBag, Check, Sparkles, Filter } from 'lucide-react';
import { assetUrl } from '../utils/asset';

export const PlantShowcaseSection = ({ 
  onOpenCareModal, 
  onOpenPlantDetail, 
  searchQuery = '',
  selectedCategory = 'All',
  onSelectCategory,
  onAddToCart,
  cartItems = {} 
}) => {
  const [favoriteItems, setFavoriteItems] = useState({});

  const categories = [
    'All',
    'Indoor Houseplants',
    'Succulents & Cacti',
    'Air Purifying Trees',
    'Tropical Monsteras',
    'Sale'
  ];

  const plantProducts = [
    {
      id: 'asplenium',
      name: 'Asplenium',
      category: 'Indoor Houseplants',
      size: 'Partial',
      price: '$28.00',
      priceNum: 28,
      image: assetUrl('/images/asplenium.jpg'),
      bg: 'bg-[#d6ead6]',
      imgBg: 'bg-[#b8dab8]',
      accent: '#2d6a4f',
      textColor: 'text-[#1a3d2b]',
      borderColor: 'border-[#74c69d]',
      tagBg: 'bg-[#2d6a4f] text-white',
      tag: 'Best Seller'
    },
    {
      id: 'succulent',
      name: 'Succulent',
      category: 'Succulents & Cacti',
      size: 'Semi',
      price: '$18.00',
      priceNum: 18,
      image: assetUrl('/images/succulent.jpg'),
      bg: 'bg-[#2c1810]',
      imgBg: 'bg-[#c1440e]/20',
      accent: '#ff7b3a',
      textColor: 'text-[#fde8d8]',
      borderColor: 'border-[#c1440e]/50',
      tagBg: 'bg-[#ff5e1e] text-white',
      tag: 'Easy Care'
    },
    {
      id: 'monstera',
      name: 'Monstera',
      category: 'Tropical Monsteras',
      size: 'Small',
      price: '$34.00',
      priceNum: 34,
      image: assetUrl('/images/monstera.jpg'),
      bg: 'bg-[#0a3629]',
      imgBg: 'bg-[#c1f038]/15',
      accent: '#c1f038',
      textColor: 'text-[#c1f038]',
      borderColor: 'border-[#c1f038]/30',
      tagBg: 'bg-[#c1f038] text-[#0a3629]',
      tag: 'Air Purifier'
    },
    {
      id: 'aloe-vera',
      name: 'Aloe Vera',
      category: 'Succulents & Cacti',
      size: 'Medium',
      price: '$22.00',
      priceNum: 22,
      image: assetUrl('/images/aloe.jpg'),
      bg: 'bg-[#e0f5f0]',
      imgBg: 'bg-[#a8dacc]',
      accent: '#0e7c6a',
      textColor: 'text-[#074a3f]',
      borderColor: 'border-[#74c6b5]',
      tagBg: 'bg-[#0e7c6a] text-white',
      tag: 'Medicinal'
    },
    {
      id: 'ficus-lyrata',
      name: 'Fiddle Leaf Fig',
      category: 'Air Purifying Trees',
      size: 'Large',
      price: '$45.00',
      priceNum: 45,
      image: assetUrl('/images/fiddle_leaf.jpg'),
      bg: 'bg-[#fdf3c0]',
      imgBg: 'bg-[#f9e269]/40',
      accent: '#b45309',
      textColor: 'text-[#78350f]',
      borderColor: 'border-[#fbbf24]',
      tagBg: 'bg-[#ff5e1e] text-white',
      tag: 'Sale'
    },
    {
      id: 'jade-plant',
      name: 'Organic Jade Plant',
      category: 'Succulents & Cacti',
      size: 'Small',
      price: '$16.00',
      priceNum: 16,
      image: assetUrl('/images/jade.jpg'),
      bg: 'bg-[#ede9f8]',
      imgBg: 'bg-[#c4b5fd]/30',
      accent: '#7c3aed',
      textColor: 'text-[#3b0764]',
      borderColor: 'border-[#a78bfa]',
      tagBg: 'bg-[#ff5e1e] text-white',
      tag: 'Sale'
    }
  ];

  const filteredPlants = plantProducts.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          plant.size.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'All') return matchesSearch;
    if (selectedCategory === 'Sale') return matchesSearch && (plant.tag === 'Sale' || plant.priceNum < 20);
    return matchesSearch && plant.category === selectedCategory;
  });

  const toggleFavorite = (id) => {
    setFavoriteItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="plant-catalog" className="bg-[#f6f5ef] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header & Category Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-stone-300 pb-6">
          <div>
            <span className="text-xs font-bold text-[#ff5e1e] uppercase tracking-wider">Curated Greenery</span>
            <h2 className="text-4xl sm:text-5xl font-serif-title font-bold text-[#0a3629] uppercase">
              PLANT SHOP &amp; CATALOG
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory && onSelectCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-[#0a3629] text-[#c1f038] shadow-md' : 'bg-white text-stone-600 border border-stone-200 hover:border-[#0a3629]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Plant Product Cards Grid */}
        {filteredPlants.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center text-stone-500 space-y-3">
            <p className="font-serif-title text-xl text-[#0a3629]">No plants found in "{selectedCategory}"</p>
            <p className="text-xs">Try selecting 'All' or searching for another houseplant.</p>
            <button
              onClick={() => onSelectCategory && onSelectCategory('All')}
              className="px-6 py-2 bg-[#0a3629] text-[#c1f038] font-bold text-xs rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlants.map((plant) => (
              <div
                key={plant.id}
                onClick={() => onOpenPlantDetail && onOpenPlantDetail(plant)}
                className={`${plant.bg} rounded-3xl p-5 border ${plant.borderColor} card-3d flex flex-col justify-between group shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1`}
              >
                {/* Top Tag & Heart */}
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${plant.tagBg}`}>
                    {plant.tag}
                  </span>
                  <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(plant.id); }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      favoriteItems[plant.id]
                        ? 'bg-[#ff5e1e] text-white scale-110'
                        : 'bg-white/20 backdrop-blur-sm text-white/70 hover:text-[#ff5e1e] hover:bg-white/40'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favoriteItems[plant.id] ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Plant Image with unique bg circle */}
                <div className="my-5 flex justify-center items-center relative">
                  <div className={`${plant.imgBg} w-40 h-40 rounded-full flex items-center justify-center`}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-36 h-36 object-contain filter drop-shadow-xl group-hover:scale-110 transition duration-500"
                    />
                  </div>
                </div>

                {/* Plant Details Footer */}
                <div className={`pt-4 border-t ${plant.borderColor} space-y-3`}>
                  <div className={`flex justify-between items-baseline text-xs uppercase tracking-wider font-semibold opacity-60 ${plant.textColor}`}>
                    <span>PLANT</span>
                    <span>SIZE</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <h4 className={`text-2xl font-serif-title font-bold ${plant.textColor}`}>
                      {plant.name}
                    </h4>
                    <span className={`text-xl font-serif-title font-semibold opacity-80 ${plant.textColor}`}>
                      {plant.size}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-sm font-bold text-[#ff5e1e]">{plant.price}</span>
                    <button 
                      type="button"
                      onClick={(e) => { e.stopPropagation(); onAddToCart && onAddToCart(plant); }}
                      style={{ backgroundColor: cartItems[plant.id] ? '#ff5e1e' : plant.accent }}
                      className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full transition-all text-white hover:opacity-90 hover:scale-105`}
                    >
                      {cartItems[plant.id] ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                      <span>{cartItems[plant.id] ? 'Added' : 'Order'}</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Lower Section: ROOTED IN PURE BLISS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          
          {/* Left Text Column */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-serif-title font-bold text-[#0a3629] leading-tight uppercase">
              ROOTED IN <br />
              PURE BLISS
            </h2>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              These succulents and tropical indoor species are ideal for use in your indoor home conditions, providing pure botanical serenity.
            </p>

            <button
              onClick={onOpenCareModal}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#0a3629] text-[#0a3629] hover:bg-[#0a3629] hover:text-white transition font-semibold text-sm group"
            >
              <span>Learn Care</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Center Graphic: 3D Monstera on Yellow Circle */}
          <div className="lg:col-span-5 flex justify-center relative my-8 lg:my-0">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-[#fde047] rounded-full flex items-center justify-center shadow-inner animate-pulse-glow">
              <img
                src={assetUrl('/images/monstera.jpg')}
                alt="Monstera in coral pot"
                className="w-64 sm:w-72 h-64 sm:h-72 object-contain filter drop-shadow-2xl z-10 hover:scale-105 transition duration-500"
              />

              <button
                onClick={onOpenCareModal}
                className="absolute -bottom-4 left-4 w-20 h-20 rounded-full bg-[#ff5e1e] text-white flex flex-col items-center justify-center text-xs font-bold text-center leading-tight shadow-xl hover:scale-110 transition z-20 border-2 border-white"
              >
                <span>Grow</span>
                <span>Now</span>
              </button>

              <div className="absolute top-8 right-2 w-10 h-10 rounded-full bg-[#0a3629] text-[#c1f038] flex items-center justify-center shadow-lg z-20 animate-bounce">
                <Heart className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>

          {/* Right Column: Circle Badge "About Plants" */}
          <div className="lg:col-span-3 flex justify-center">
            <div 
              onClick={onOpenCareModal}
              className="w-64 h-64 rounded-full border-2 border-stone-300 bg-white p-6 flex flex-col items-center justify-center text-center space-y-3 shadow-lg card-3d cursor-pointer hover:border-[#ff5e1e] transition"
            >
              <span className="text-xs font-bold text-[#ff5e1e] uppercase tracking-wider">About Plants</span>
              
              <h3 className="text-xl font-serif-title font-bold text-[#0a3629] uppercase leading-tight">
                FRESH ROOTS <br /> PURE JOY
              </h3>

              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-[#ff5e1e]">
                <span className="text-xl">🌺</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
