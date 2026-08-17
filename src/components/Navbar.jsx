import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ChevronDown, Sparkles, Globe, Heart, PhoneCall, ArrowRight } from 'lucide-react';
import { MarapachiDollIcon, KolamDivider } from './KolamPattern';

export const Navbar = ({ currency, setCurrency, onOpenCart, onCategorySelect }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { 
      label: 'Collections', 
      href: '#collection',
      isDropdown: true,
      subItems: [
        { label: "Men's Heritage", cat: 'men' },
        { label: "Women's Luxe", cat: 'women' },
        { label: "Kids & Playwear", cat: 'kids' },
        { label: "Handcrafted Toys & Dolls", cat: 'toys' }
      ]
    },
    { label: 'Custom & Weddings', href: '#custom-weddings' },
    { label: 'Artisans', href: '#artisans' },
    { label: 'Pride Wall', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <aside aria-label="Announcement" className="bg-gradient-to-r from-temple-maroonDark via-temple-maroon to-temple-maroonDark text-white py-2 px-4 text-center text-[11px] sm:text-xs font-medium tracking-wide flex items-center justify-center gap-2 border-b border-temple-gold/30 relative z-50">
        <Sparkles className="w-3.5 h-3.5 text-temple-gold animate-pulse flex-shrink-0" />
        <span className="truncate">
          Navratri & Wedding Season Drop • <strong>Worldwide Express Delivery</strong> to US, UK, Gulf & India
        </span>
        <span className="hidden md:inline text-temple-gold font-bold">• Code: <strong>KOLAM10</strong></span>
      </aside>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-temple-ivory/95 backdrop-blur-md shadow-md py-3 border-b border-temple-gold/20' 
            : 'bg-temple-ivory/80 backdrop-blur-sm py-4 border-b border-temple-gold/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo with clear breathing room */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group cursor-pointer focus:outline-none flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-temple-gold via-temple-goldDark to-temple-gold p-0.5 shadow-md group-hover:shadow-gold-glow transition-all">
              <div className="w-full h-full bg-temple-maroon rounded-full flex items-center justify-center text-temple-gold">
                <MarapachiDollIcon className="w-5 h-5 fill-temple-gold" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display-royal text-xl sm:text-2xl font-black tracking-[0.18em] text-temple-maroon group-hover:text-temple-maroonLight transition-colors leading-none">
                MARAPACHI
              </span>
              <span className="text-[8.5px] uppercase tracking-[0.28em] font-extrabold text-temple-goldDark mt-1">
                Heritage Reborn
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Spacious & Clean) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div 
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setShopDropdownOpen(true)}
                  onMouseLeave={() => setShopDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-temple-dark/90 hover:text-temple-maroon transition-colors py-2"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-temple-gold transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180' : ''}`} />
                  </a>

                  {/* Dropdown Menu */}
                  {shopDropdownOpen && (
                    <div className="absolute top-full left-0 w-60 bg-temple-ivory border-2 border-temple-gold/40 rounded-2xl shadow-2xl py-3 px-1 animate-fadeIn z-50">
                      <div className="px-3 pb-2 mb-2 border-b border-temple-gold/15 text-[10px] uppercase font-bold tracking-widest text-temple-maroon">
                        Craft Collections
                      </div>
                      {link.subItems.map((item) => (
                        <a
                          key={item.label}
                          href="#collection"
                          onClick={() => {
                            onCategorySelect(item.cat);
                            setShopDropdownOpen(false);
                          }}
                          className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-temple-dark hover:bg-temple-cream hover:text-temple-maroon rounded-xl transition-all"
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="w-3 h-3 text-temple-gold opacity-0 hover:opacity-100 transition-opacity" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-temple-dark/90 hover:text-temple-maroon transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-temple-gold hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Right Actions: Currency Selector, Cart, Custom Studio CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Currency Selector (INR ₹ / USD $) */}
            <div className="flex items-center bg-temple-cream border border-temple-gold/40 rounded-full p-0.5 text-[11px] font-bold shadow-inner">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currency === 'INR'
                    ? 'bg-temple-maroon text-white shadow-sm'
                    : 'text-temple-brownMuted hover:text-temple-dark'
                }`}
                title="Switch to Indian Rupee (₹)"
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currency === 'USD'
                    ? 'bg-temple-maroon text-white shadow-sm'
                    : 'text-temple-brownMuted hover:text-temple-dark'
                }`}
                title="Switch to US Dollar ($ - Diaspora Worldwide)"
              >
                $ USD
              </button>
            </div>

            {/* Cart Icon Button */}
            <button
              onClick={onOpenCart}
              aria-label="View Shopping Cart"
              className="relative p-2.5 rounded-full bg-temple-cream hover:bg-temple-sand border border-temple-gold/40 text-temple-maroon hover:shadow-gold-glow transition-all"
            >
              <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-temple-gold text-temple-maroon font-extrabold text-[10px] rounded-full flex items-center justify-center shadow">
                0
              </span>
            </button>

            {/* Custom Studio CTA Button (Desktop) */}
            <a
              href="#custom-weddings"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-temple-maroon via-temple-maroonLight to-temple-maroon hover:shadow-gold-glow text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all"
            >
              <span>Custom Studio</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className="lg:hidden p-2 rounded-xl text-temple-maroon hover:bg-temple-cream border border-temple-gold/30 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop Blur Overlay */}
          <div 
            className="fixed inset-0 bg-temple-dark/60 backdrop-blur-sm transition-opacity animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-xs sm:max-w-sm bg-temple-ivory h-full shadow-2xl border-l-2 border-temple-gold/40 z-50 flex flex-col justify-between overflow-y-auto animate-slideLeft">
            
            {/* Drawer Header */}
            <div>
              <div className="p-5 bg-gradient-to-r from-temple-maroon via-temple-maroonLight to-temple-maroon text-white flex items-center justify-between border-b border-temple-gold/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-temple-gold/20 flex items-center justify-center text-temple-gold">
                    <MarapachiDollIcon className="w-4 h-4 fill-temple-gold" />
                  </div>
                  <div>
                    <span className="font-display-royal text-lg font-bold tracking-widest block leading-none">
                      MARAPACHI
                    </span>
                    <span className="text-[8px] uppercase tracking-widest text-temple-goldLight">
                      Heritage Reborn
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Menu"
                  className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Currency Selector inside Drawer */}
              <div className="p-4 bg-temple-cream/80 border-b border-temple-gold/20 flex items-center justify-between">
                <span className="text-xs font-bold text-temple-dark">Display Currency:</span>
                <div className="flex items-center bg-white border border-temple-gold/40 rounded-full p-0.5 text-xs font-bold shadow-sm">
                  <button
                    onClick={() => setCurrency('INR')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      currency === 'INR'
                        ? 'bg-temple-maroon text-white shadow-sm'
                        : 'text-temple-brownMuted'
                    }`}
                  >
                    ₹ INR
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      currency === 'USD'
                        ? 'bg-temple-maroon text-white shadow-sm'
                        : 'text-temple-brownMuted'
                    }`}
                  >
                    $ USD
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="p-5 space-y-1">
                <a
                  href="#hero"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-temple-dark hover:bg-temple-cream hover:text-temple-maroon transition-colors"
                >
                  Home
                </a>
                <a
                  href="#story"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-temple-dark hover:bg-temple-cream hover:text-temple-maroon transition-colors"
                >
                  Our 300-Yr Story
                </a>

                {/* Shop Categories Accordion */}
                <div className="py-2">
                  <div className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-temple-maroon">
                    Collections
                  </div>
                  <div className="space-y-1 pl-2 pt-1">
                    {[
                      { label: "Men's Heritage", cat: 'men' },
                      { label: "Women's Luxe", cat: 'women' },
                      { label: "Kids & Playwear", cat: 'kids' },
                      { label: "Handcrafted Toys & Dolls", cat: 'toys' }
                    ].map((sub) => (
                      <a
                        key={sub.label}
                        href="#collection"
                        onClick={() => {
                          onCategorySelect(sub.cat);
                          setMobileMenuOpen(false);
                        }}
                        className="flex items-center justify-between py-2 px-3 text-xs font-medium text-temple-brownMuted hover:text-temple-maroon hover:bg-temple-cream rounded-lg transition-colors"
                      >
                        <span>• {sub.label}</span>
                        <ArrowRight className="w-3 h-3 text-temple-gold" />
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href="#custom-weddings"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-temple-dark hover:bg-temple-cream hover:text-temple-maroon transition-colors"
                >
                  Custom & Weddings
                </a>
                <a
                  href="#artisans"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-temple-dark hover:bg-temple-cream hover:text-temple-maroon transition-colors"
                >
                  Artisan Lineage
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-temple-dark hover:bg-temple-cream hover:text-temple-maroon transition-colors"
                >
                  Pride Wall
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-temple-dark hover:bg-temple-cream hover:text-temple-maroon transition-colors"
                >
                  Contact Studio
                </a>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-5 bg-temple-cream/90 border-t border-temple-gold/30 space-y-3">
              <a
                href="#custom-weddings"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 bg-gradient-to-r from-temple-maroon via-temple-maroonLight to-temple-maroon text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <span>Enquire Custom Wedding Décor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/919443388210"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 bg-white hover:bg-temple-sand text-temple-dark border border-temple-gold/40 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-temple-peacock" />
                <span>WhatsApp Studio Concierge</span>
              </a>

              <p className="text-[10px] text-center text-temple-brownMuted">
                Handcrafted in Tamil Nadu • Shipped Worldwide
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
