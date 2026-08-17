import React, { useState } from 'react';
import { X, Star, Shield, Truck, Sparkles, Check, ShoppingBag } from 'lucide-react';
import { KolamDivider } from './KolamPattern';

export const QuickViewModal = ({ product, isOpen, onClose, currency, onAddToCart }) => {
  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || '');

  const displayPrice = currency === 'INR' 
    ? `₹${product.priceINR.toLocaleString('en-IN')}` 
    : `$${product.priceUSD}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-temple-dark/75 backdrop-blur-md transition-all">
      <div 
        className="relative w-full max-w-3xl bg-temple-ivory border-2 border-temple-gold/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          aria-label="Close Quick View"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-temple-ivory/80 md:bg-temple-cream hover:bg-white text-temple-dark shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="md:w-1/2 relative bg-temple-cream p-6 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-temple-gold/20">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-inner group">
            <img 
              src={product.image} 
              alt={`${product.name} - Traditional Marapachi Bommai inspired craft`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-gradient-to-r from-temple-maroon to-temple-maroonLight text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-6 overflow-y-auto max-h-[500px] md:max-h-[600px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1 text-temple-gold mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs font-bold text-temple-dark ml-1.5">{product.rating}</span>
              <span className="text-xs text-temple-brownMuted">({product.reviewsCount} reviews)</span>
            </div>

            <h3 className="font-serif-royal text-2xl md:text-3xl font-bold text-temple-dark leading-tight">
              {product.name}
            </h3>
            <p className="text-xs font-serif italic text-temple-maroon mt-0.5">
              {product.tamilTitle}
            </p>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-serif-royal text-2xl font-bold text-temple-maroon">
                {displayPrice}
              </span>
              <span className="text-xs text-temple-peacock font-semibold bg-temple-peacock/10 px-2 py-0.5 rounded">
                Free Shipping • Worldwide
              </span>
            </div>

            <p className="text-xs text-temple-brownMuted mt-3 leading-relaxed">
              {product.description}
            </p>

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-4">
                <label className="text-xs font-bold text-temple-dark block mb-1.5">
                  Select Size / Dimensions:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                        selectedSize === size
                          ? 'border-temple-maroon bg-temple-maroon text-white shadow-sm'
                          : 'border-temple-gold/40 bg-white text-temple-dark hover:border-temple-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-4">
                <label className="text-xs font-bold text-temple-dark block mb-1.5">
                  Color / Finish: <span className="font-normal text-temple-brownMuted">{selectedColor}</span>
                </label>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                      className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedColor === c.name ? 'border-temple-gold scale-110 shadow-md' : 'border-white/80'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    >
                      {selectedColor === c.name && (
                        <Check className="w-3.5 h-3.5 text-white drop-shadow" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            <div className="mt-5 space-y-1.5 border-t border-temple-gold/20 pt-4">
              {product.details?.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-temple-brownMuted">
                  <div className="w-1.5 h-1.5 rounded-full bg-temple-gold" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-4 border-t border-temple-gold/20 flex gap-3">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex-1 py-3 px-4 bg-gradient-to-r from-temple-maroon to-temple-maroonDark hover:from-temple-maroonDark hover:to-temple-maroon text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-gold-glow flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag / Pre-Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
