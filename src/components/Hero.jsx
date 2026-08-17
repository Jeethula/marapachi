import React, { useState, useRef } from 'react';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Heart, Award } from 'lucide-react';
import { KolamDivider, CornerFlourish, GopuramArch } from './KolamPattern';

export const Hero = ({ onExploreClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroCardRef = useRef(null);

  // Subtle 3D interactive tilt calculation
  const handleMouseMove = (e) => {
    if (!heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 15, y: y * -15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-temple-ivory via-temple-cream to-temple-ivory">
      
      {/* Decorative Gold Radial Light Rays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-radial-gradient from-temple-gold/20 via-temple-gold/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Animated Kolam Particles */}
      <div className="absolute top-12 left-10 text-temple-gold/30 animate-float-slow hidden md:block">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 right-12 text-temple-gold/35 animate-float-reverse hidden md:block">
        <Sparkles className="w-10 h-10" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content Column (7 cols) */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          
          {/* Heritage Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-maroon/10 border border-temple-gold/40 text-temple-maroon shadow-sm">
            <span className="w-2 h-2 rounded-full bg-temple-gold animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest">
              300-Year South Indian Craft • Reimagined
            </span>
          </div>

          {/* Main H1 Headline */}
          <div className="space-y-2">
            <h1 className="font-display-royal text-4xl sm:text-5xl lg:text-6xl font-black text-temple-dark tracking-tight leading-[1.1]">
              Where Heritage <br />
              <span className="gold-gradient-text font-serif italic font-bold">Wears You</span>
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-temple-maroon">
              "மரப்பாச்சி — தலைமுறைகள் கடந்த தமிழ் பாரம்பரியம்"
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-temple-brownMuted leading-relaxed max-w-2xl mx-auto lg:mx-0">
            From the sacred Golu steps of Tamil Nadu to your everyday wardrobe — handcrafted Marapachi Bommai heritage, revived for men, women, kids, and royal wedding celebrations across India and the global diaspora.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#collection"
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-temple-maroon via-temple-maroonLight to-temple-maroon hover:shadow-gold-glow text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-3 group"
            >
              <span>Explore the Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#story"
              className="w-full sm:w-auto px-7 py-4 bg-temple-cream hover:bg-temple-sand text-temple-dark border border-temple-gold/50 hover:border-temple-gold text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-2"
            >
              <span>Our Story & Craft</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 border-t border-temple-gold/25 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
            <div className="flex items-start gap-2.5">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-temple-gold flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xs font-bold text-temple-dark">Artisan-Made</h2>
                <p className="text-[11px] text-temple-brownMuted">Hand-carved in Tamil Nadu</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-temple-peacock flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xs font-bold text-temple-dark">100% Organic</h2>
                <p className="text-[11px] text-temple-brownMuted">Safe wood & pure silk</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-temple-maroon flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xs font-bold text-temple-dark">Global Ship</h2>
                <p className="text-[11px] text-temple-brownMuted">To NRI homes worldwide</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right 3D Visual Anchor (5 cols) */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          
          {/* Ornate Framing Container with Mouse Tilt */}
          <div
            ref={heroCardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-temple-gold via-temple-goldDark to-temple-gold shadow-2xl group cursor-pointer"
          >
            {/* Corner Filigrees */}
            <CornerFlourish position="top-left" className="absolute top-2 left-2 z-20" />
            <CornerFlourish position="top-right" className="absolute top-2 right-2 z-20" />
            <CornerFlourish position="bottom-left" className="absolute bottom-2 left-2 z-20" />
            <CornerFlourish position="bottom-right" className="absolute bottom-2 right-2 z-20" />

            {/* Inner Frame */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-temple-maroon border-2 border-temple-gold/50 shadow-inner flex flex-col justify-end">
              
              {/* High Resolution Render of Traditional Marapachi Bommai Doll Pair */}
              <img
                src="/images/hero_marapachi_dolls.jpg"
                alt="Traditional South Indian Marapachi Bommai Heirloom Wooden Dolls in 24k Gold Crowns"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />

              {/* Shimmering Gold Light Sweep Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-temple-charcoal/90 via-transparent to-temple-gold/15 pointer-events-none" />

              {/* Floating Badge on Card */}
              <div className="relative z-10 p-5 backdrop-blur-sm bg-temple-charcoal/60 rounded-b-2xl border-t border-temple-gold/30">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-temple-gold">
                      The Heirloom Pair
                    </span>
                    <h2 className="font-serif-royal text-xl font-bold text-white leading-none mt-0.5">
                      Raja & Rani Bommai
                    </h2>
                  </div>
                  <div className="p-2 rounded-full bg-temple-gold/20 text-temple-gold border border-temple-gold/40">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-[11px] text-temple-sand/80 mt-1.5 line-clamp-1">
                  Carved from seasoned rosewood & adorned with traditional temple crowns.
                </p>
              </div>

            </div>

            {/* Live Interactive Tilt Label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-temple-ivory px-4 py-1 rounded-full border border-temple-gold/40 shadow-md text-[10px] font-bold text-temple-maroon flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-temple-peacock animate-ping" />
              <span>Interactive 3D Craft View</span>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Kolam Divider Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <KolamDivider className="my-0" />
      </div>

    </section>
  );
};
