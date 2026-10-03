import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { PlantCaringSection } from './components/PlantCaringSection';
import { PlantShowcaseSection } from './components/PlantShowcaseSection';
import { EvergreenSection } from './components/EvergreenSection';
import { BlogSection } from './components/BlogSection';
import { FooterSection } from './components/FooterSection';
import { PlantReelsModal } from './components/PlantReelsModal';
import { PlantCareModal } from './components/PlantCareModal';
import { PlantDetailModal } from './components/PlantDetailModal';
import { CartDrawer } from './components/CartDrawer';

function App() {
  const [careModalOpen, setCareModalOpen] = useState(false);
  const [reelsModalOpen, setReelsModalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [cartItems, setCartItems] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [checkoutNotice, setCheckoutNotice] = useState(false);

  const handleOpenPlantDetail = (plant) => {
    setSelectedPlant(plant);
  };

  const handleAddToCart = (plant) => {
    const plantObj = typeof plant === 'string' 
      ? { id: plant, name: 'Selected Plant', priceNum: 28, quantity: 1 } 
      : { ...plant, quantity: (cartItems[plant.id]?.quantity || 0) + 1 };

    setCartItems((prev) => ({
      ...prev,
      [plantObj.id]: plantObj
    }));
    setCartOpen(true);
  };

  const handleUpdateQuantity = (plantId, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(plantId);
      return;
    }
    setCartItems((prev) => ({
      ...prev,
      [plantId]: { ...prev[plantId], quantity: newQty }
    }));
  };

  const handleRemoveCartItem = (plantId) => {
    setCartItems((prev) => {
      const copy = { ...prev };
      delete copy[plantId];
      return copy;
    });
  };

  const handleCheckout = () => {
    setCheckoutNotice(true);
    setCartItems({});
    setTimeout(() => {
      setCheckoutNotice(false);
      setCartOpen(false);
    }, 4000);
  };

  const totalCartCount = Object.values(cartItems).reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen bg-[#f6f5ef] text-[#0f2e24]">
      {/* Checkout Success Alert Banner */}
      {checkoutNotice && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#c1f038] text-[#0a2c21] font-bold px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 border-2 border-[#0a3629] animate-bounce">
          <span>🌿 Order placed successfully! Thank you for supporting tree conservation.</span>
        </div>
      )}

      {/* Header Navbar */}
      <HeaderNav 
        onOpenCareModal={() => setCareModalOpen(true)}
        onOpenReelsModal={() => setReelsModalOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onSearchChange={(query) => setSearchQuery(query)}
        cartCount={totalCartCount}
      />

      {/* Main Page Content */}
      <main>
        {/* Hero Section (Image 1) */}
        <HeroSection 
          onOpenCareModal={() => setCareModalOpen(true)}
          onOpenReelsModal={() => setReelsModalOpen(true)}
          onOpenPlantDetail={handleOpenPlantDetail}
        />

        {/* Plant Caring & Serotonin Science Section (Image 2) */}
        <PlantCaringSection 
          onOpenCareModal={() => setCareModalOpen(true)}
        />

        {/* Plant Showcase & Catalog (Image 3) */}
        <PlantShowcaseSection 
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onOpenCareModal={() => setCareModalOpen(true)}
          onOpenPlantDetail={handleOpenPlantDetail}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />

        {/* Evergreen Bliss & Interactive Hotspots (Image 4 & 5) */}
        <EvergreenSection 
          onOpenCareModal={() => setCareModalOpen(true)}
          onOpenPlantDetail={handleOpenPlantDetail}
        />

        {/* Blog & Plant Guides Section */}
        <BlogSection />
      </main>

      {/* Dark Forest Barcode Footer (Image 5) */}
      <FooterSection 
        onOpenCareModal={() => setCareModalOpen(true)}
      />

      {/* Modals & Cart Drawer */}
      <PlantCareModal 
        isOpen={careModalOpen} 
        onClose={() => setCareModalOpen(false)} 
      />

      <PlantReelsModal 
        isOpen={reelsModalOpen} 
        onClose={() => setReelsModalOpen(false)} 
      />

      <PlantDetailModal
        plant={selectedPlant}
        isOpen={!!selectedPlant}
        onClose={() => setSelectedPlant(null)}
        onAddToCart={(id) => handleAddToCart(selectedPlant || id)}
        isAdded={selectedPlant && !!cartItems[selectedPlant.id]}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;
