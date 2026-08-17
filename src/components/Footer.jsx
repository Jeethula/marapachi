import React from 'react';
import { Heart, Sparkles, Shield, ArrowUp, Globe } from 'lucide-react';
import { MarapachiDollIcon, KolamDivider } from './KolamPattern';

// Inline Social SVGs
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Footer = ({ onCategorySelect }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-temple-charcoal to-[#120a06] text-white pt-16 pb-8 border-t-2 border-temple-gold/40 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-temple-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-temple-gold/20">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-temple-gold via-temple-goldDark to-temple-gold p-0.5 shadow-lg">
                <div className="w-full h-full bg-temple-maroon rounded-full flex items-center justify-center text-temple-gold">
                  <MarapachiDollIcon className="w-6 h-6 fill-temple-gold" />
                </div>
              </div>
              <div>
                <span className="font-display-royal text-2xl font-bold tracking-widest text-temple-gold block leading-none">
                  MARAPACHI
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-temple-sand/70 font-semibold">
                  Where Heritage Wears You
                </span>
              </div>
            </div>

            <p className="text-xs text-temple-sand/80 leading-relaxed pr-4">
              Reviving South India’s 300-year-old Marapachi Bommai doll craft into contemporary apparel, handcrafted non-toxic wooden toys, and bespoke royal wedding stage backdrops. Handcrafted in Tamil Nadu, cherished worldwide.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-temple-maroon/50 border border-temple-gold/40 text-[11px] text-temple-gold">
              <Globe className="w-3.5 h-3.5" />
              <span>Worldwide Shipping to 24+ Countries</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-royal text-base font-bold text-temple-gold uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-temple-sand/80">
              <li><a href="#hero" className="hover:text-temple-gold transition-colors">Home</a></li>
              <li><a href="#story" className="hover:text-temple-gold transition-colors">Our 300-Yr Story</a></li>
              <li><a href="#artisans" className="hover:text-temple-gold transition-colors">Artisan Lineage</a></li>
              <li><a href="#custom-weddings" className="hover:text-temple-gold transition-colors">Custom Weddings</a></li>
              <li><a href="#testimonials" className="hover:text-temple-gold transition-colors">Pride Wall</a></li>
              <li><a href="#contact" className="hover:text-temple-gold transition-colors">Studio Contact</a></li>
            </ul>
          </div>

          {/* Collections (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-royal text-base font-bold text-temple-gold uppercase tracking-wider">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-temple-sand/80">
              <li>
                <a 
                  href="#collection" 
                  onClick={() => onCategorySelect('men')}
                  className="hover:text-temple-gold transition-colors"
                >
                  Men's Heritage Tees & Kurtas
                </a>
              </li>
              <li>
                <a 
                  href="#collection" 
                  onClick={() => onCategorySelect('women')}
                  className="hover:text-temple-gold transition-colors"
                >
                  Women's Rani Silks & Tunics
                </a>
              </li>
              <li>
                <a 
                  href="#collection" 
                  onClick={() => onCategorySelect('kids')}
                  className="hover:text-temple-gold transition-colors"
                >
                  Kids & Toddler Organic Playwear
                </a>
              </li>
              <li>
                <a 
                  href="#collection" 
                  onClick={() => onCategorySelect('toys')}
                  className="hover:text-temple-gold transition-colors"
                >
                  Hand-Carved Heirlooms & Montessori Toys
                </a>
              </li>
              <li>
                <a 
                  href="#custom-weddings" 
                  className="hover:text-temple-gold transition-colors"
                >
                  Bespoke Wedding Mandap Backdrops
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Address & Trust (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-royal text-base font-bold text-temple-gold uppercase tracking-wider">
              Studio & Workshop
            </h4>
            <p className="text-xs text-temple-sand/80 leading-relaxed">
              42, Temple Weavers Lane, R.S. Puram, Coimbatore, Tamil Nadu — 641002, India
            </p>
            <p className="text-xs text-temple-gold font-semibold">
              WhatsApp: +91 94433 88210
            </p>
            <p className="text-xs text-temple-sand/70">
              namaste@marapachi.com
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-temple-goldLight">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-temple-gold" />
                <span>100% Handcrafted</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-temple-maroonLight" />
                <span>Fair Wage Certified</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-temple-sand/60">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Marapachi Heritage. All Rights Reserved. Made in India, Loved Worldwide.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-temple-gold italic">
              "மரப்பாச்சி — வேர்களை மறக்காத புதுமை"
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to Top"
              className="p-2 rounded-full bg-temple-maroon hover:bg-temple-maroonLight text-temple-gold border border-temple-gold/40 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
