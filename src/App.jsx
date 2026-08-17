import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { WhyUs } from './components/WhyUs';
import { Collections } from './components/Collections';
import { CustomWeddings } from './components/CustomWeddings';
import { Artisans } from './components/Artisans';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CartModal } from './components/CartModal';
import { QuickViewModal } from './components/QuickViewModal';
import { CustomOrderModal } from './components/CustomOrderModal';

export function App() {
  const [currency, setCurrency] = useState('INR');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [customInitialService, setCustomInitialService] = useState('Wedding Décor & Outfits');

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    const elem = document.getElementById('collection');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCustomModal = (serviceName = 'Wedding Décor & Outfits') => {
    setCustomInitialService(serviceName);
    setIsCustomModalOpen(true);
  };

  const handleAddToCart = (product) => {
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-temple-ivory text-temple-dark selection:bg-temple-gold selection:text-temple-maroon">
      
      {/* Sticky Navigation */}
      <Navbar 
        currency={currency}
        setCurrency={setCurrency}
        onOpenCart={() => setIsCartOpen(true)}
        onCategorySelect={handleCategorySelect}
      />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        <Hero 
          onExploreClick={() => handleCategorySelect('all')} 
        />

        <BrandStory />

        <WhyUs />

        <Collections 
          currency={currency}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onQuickView={(prod) => setQuickViewProduct(prod)}
          onAddToCart={handleAddToCart}
        />

        <CustomWeddings 
          onOpenCustomModal={handleOpenCustomModal}
        />

        <Artisans />

        <Testimonials />

        <Newsletter />

        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onCategorySelect={handleCategorySelect}
      />

      {/* Interactive Modals */}
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        currency={currency}
      />

      <QuickViewModal 
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        currency={currency}
        onAddToCart={handleAddToCart}
      />

      <CustomOrderModal 
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        initialService={customInitialService}
      />

    </div>
  );
}

export default App;
