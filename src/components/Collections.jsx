import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Eye, ShoppingBag, Star, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { KolamDivider, GopuramArch } from './KolamPattern';

export const Collections = ({ 
  currency, 
  activeCategory, 
  setActiveCategory, 
  onQuickView, 
  onAddToCart 
}) => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categoryHeadlines = {
    all: 'Complete Handcrafted Heritage Catalog',
    men: 'Where Traditional Dignity Meets Modern Street-Luxe',
    women: 'Royal Rani Silks & Everyday Festive Silhouettes',
    kids: 'Little ones, big legacy — playwear and toys that keep them close to home.',
    toys: 'Authentic 300-Year Heirlooms & Montessori Natural Wood Dolls'
  };

  return (
    <section id="collection" className="py-20 px-4 sm:px-6 lg:px-8 bg-temple-cream/40 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-2 text-temple-gold">
            <GopuramArch className="w-8 h-8" />
          </div>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-temple-maroon mb-2">
            Limited Production Festive Drops
          </span>
          <h2 className="font-display-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-temple-dark">
            The Collection
          </h2>
          <p className="mt-3 text-sm sm:text-base text-temple-maroon font-serif italic max-w-xl mx-auto">
            {categoryHeadlines[activeCategory] || categoryHeadlines.all}
          </p>
          <KolamDivider />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-temple-maroon via-temple-maroonLight to-temple-maroon text-white shadow-gold-glow scale-105'
                    : 'bg-temple-ivory text-temple-dark hover:bg-temple-cream border border-temple-gold/40'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-temple-sand text-temple-brownMuted'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const displayPrice = currency === 'INR' 
              ? `₹${product.priceINR.toLocaleString('en-IN')}` 
              : `$${product.priceUSD}`;

            const isWishlisted = !!wishlist[product.id];

            return (
              <div
                key={product.id}
                onClick={() => onQuickView(product)}
                className="group relative bg-temple-ivory rounded-3xl border border-temple-gold/30 hover:border-temple-gold shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-temple-cream">
                  <img
                    src={product.image}
                    alt={`${product.name} - Traditional Marapachi Bommai inspired craft`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-temple-maroon to-temple-maroonLight text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    aria-label="Wishlist Item"
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-temple-maroon shadow-sm transition-all hover:scale-110"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-temple-maroon text-temple-maroon' : 'text-temple-dark'}`} />
                  </button>

                  {/* Quick View Hover Button */}
                  <div className="absolute inset-0 bg-temple-dark/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="px-4 py-2 bg-temple-ivory text-temple-dark text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:bg-white flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform"
                    >
                      <Eye className="w-4 h-4 text-temple-gold" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Ratings */}
                    <div className="flex items-center gap-1 text-temple-gold mb-1.5">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-[11px] font-bold text-temple-dark">{product.rating}</span>
                      <span className="text-[10px] text-temple-brownMuted">({product.reviewsCount})</span>
                    </div>

                    <h3 className="font-serif-royal text-lg font-bold text-temple-dark group-hover:text-temple-maroon transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[11px] font-serif italic text-temple-maroon mb-2">
                      {product.tamilTitle}
                    </p>
                    <p className="text-xs text-temple-brownMuted line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-temple-gold/20 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-temple-brownMuted block">Price</span>
                      <span className="font-serif-royal text-lg font-bold text-temple-maroon">
                        {displayPrice}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      aria-label="Pre-Order or Add to Bag"
                      className="p-2.5 rounded-xl bg-temple-cream hover:bg-temple-maroon text-temple-maroon hover:text-white border border-temple-gold/40 transition-colors shadow-sm"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Diaspora Gifting Banner */}
        <div className="mt-16 bg-gradient-to-r from-temple-maroonDark via-temple-maroon to-temple-maroonDark rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-temple-gold/40">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 bg-temple-gold/20 text-temple-gold text-[10px] font-extrabold uppercase tracking-widest rounded-full">
              Global Festive Gifting Concierge
            </span>
            <h3 className="font-serif-royal text-2xl sm:text-3xl font-bold">
              Sending Golu Dolls or Outfits Abroad?
            </h3>
            <p className="text-xs sm:text-sm text-temple-sand/90 max-w-xl">
              We package each heirloom in silk presentation boxes with customs clearance, temple vermilion, and personalized gift notes to 24+ countries.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3.5 bg-gradient-to-r from-temple-gold via-temple-goldDark to-temple-gold hover:shadow-gold-glow text-temple-maroonDark text-xs font-bold uppercase tracking-widest rounded-full transition-all whitespace-nowrap flex items-center gap-2"
          >
            <span>Book Gifting Concierge</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
