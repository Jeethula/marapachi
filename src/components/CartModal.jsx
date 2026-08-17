import React, { useState } from 'react';
import { X, ShoppingBag, Sparkles, CheckCircle2, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CartModal = ({ isOpen, onClose, currency, items = [] }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleNotify = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#C9A227', '#7A1F2B', '#0B6E4F', '#F3E5AB']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-temple-dark/70 backdrop-blur-md transition-all animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-temple-ivory border-2 border-temple-gold/40 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Banner */}
        <div className="bg-gradient-to-r from-temple-maroon via-temple-maroonLight to-temple-maroon p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-temple-gold/20 text-temple-goldLight">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-royal text-xl font-bold tracking-wide">Marapachi Cart</h3>
              <p className="text-xs text-temple-goldLight/90">Festive Festive Drop • Worldwide Shipping</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close Cart"
            className="p-1.5 rounded-full hover:bg-white/10 text-temple-ivory transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="text-center py-4 px-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-temple-gold/15 text-temple-gold mb-4 border border-temple-gold/30">
              <Sparkles className="w-8 h-8 animate-pulse-subtle" />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-temple-maroon bg-temple-maroon/10 rounded-full mb-3">
              Official Launch — Navratri Edition
            </span>
            <h4 className="font-serif-royal text-2xl font-bold text-temple-dark mb-2">
              Online Checkout Arriving Very Soon!
            </h4>
            <p className="text-sm text-temple-brownMuted leading-relaxed max-w-md mx-auto mb-6">
              Our hand-carved dolls and limited-edition apparel pieces are being pre-prepared in our Tamil Nadu artisan studios. Pre-orders & direct orders can be placed via our concierge.
            </p>

            {/* Diaspora & India Shipping Assurance */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-left">
              <div className="p-3 bg-temple-cream rounded-xl border border-temple-gold/20 flex items-start gap-2.5">
                <Globe2 className="w-5 h-5 text-temple-peacock flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-temple-dark">Worldwide Export</h5>
                  <p className="text-[11px] text-temple-brownMuted">Direct DHL to US, UK, Canada, Gulf & SG</p>
                </div>
              </div>
              <div className="p-3 bg-temple-cream rounded-xl border border-temple-gold/20 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-temple-maroon flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-temple-dark">Artisan Certified</h5>
                  <p className="text-[11px] text-temple-brownMuted">Authentic craft hallmark from Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Launch VIP Notification Box */}
            <div className="bg-gradient-to-br from-temple-cream to-temple-sand p-4 rounded-xl border border-temple-gold/40">
              {!subscribed ? (
                <form onSubmit={handleNotify} className="space-y-3">
                  <p className="text-xs font-semibold text-temple-dark">
                    Get VIP 1-Hour Early Access & ₹500 ($10) Launch Credit:
                  </p>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="flex-1 px-3.5 py-2.5 text-xs rounded-lg border border-temple-gold/40 bg-white text-temple-dark focus:outline-none focus:ring-2 focus:ring-temple-gold"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-temple-maroon hover:bg-temple-maroonDark text-white text-xs font-semibold rounded-lg transition-all shadow-md hover:shadow-gold-glow flex items-center gap-1.5"
                    >
                      <span>Join VIP</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-2 text-temple-peacock py-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-xs font-bold">You are on the VIP Heritage Launch List!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-temple-cream/80 px-6 py-4 border-t border-temple-gold/20 flex items-center justify-between">
          <a
            href="#custom-weddings"
            onClick={onClose}
            className="text-xs font-semibold text-temple-maroon hover:underline"
          >
            Need Custom Wedding Orders Now?
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-temple-brownMuted hover:text-temple-dark transition-colors"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};
