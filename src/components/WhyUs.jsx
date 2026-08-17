import React from 'react';
import { Palette, Crown, Users2, Plane, Sparkles, Gem, ShieldCheck } from 'lucide-react';
import { KolamDivider, GopuramArch } from './KolamPattern';

export const WhyUs = () => {
  const differentiators = [
    {
      icon: Palette,
      number: '01',
      title: 'Authentic Design Language',
      desc: 'Every motif traces back to real Marapachi doll facial carvings, temple crown geometry, and Kanchipuram zari borders — never a generic cookie-cutter ethnic print.',
      accent: 'border-temple-gold'
    },
    {
      icon: Crown,
      number: '02',
      title: 'Made for Your Big Days',
      desc: 'Weddings, Seemantham (baby showers), housewarmings, and Golu setups — customized and handcrafted to become cherished family heirlooms.',
      accent: 'border-temple-maroon'
    },
    {
      icon: Users2,
      number: '03',
      title: 'One Home, Every Generation',
      desc: 'Men’s festive kurtas, women’s silk tunics, kids’ organic playwear, and tactile wooden toys — allowing grandparents and toddlers to wear the same heritage.',
      accent: 'border-temple-peacock'
    },
    {
      icon: Plane,
      number: '04',
      title: 'India to the World',
      desc: 'Proudly carved and woven in Tamil Nadu, with direct express doorstep shipping to NRI families across USA, UK, Canada, UAE, Singapore & beyond.',
      accent: 'border-temple-gold'
    },
    {
      icon: Gem,
      number: '05',
      title: 'Artisan-Powered Economy',
      desc: 'Direct, fair-wage partnerships with multigenerational doll-carver families in Tamil Nadu, transforming endangered craft into sustainable livelihood.',
      accent: 'border-temple-maroon'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-temple-ivory relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-2 text-temple-gold">
            <GopuramArch className="w-8 h-8" />
          </div>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-temple-maroon mb-2">
            The Marapachi Standard
          </span>
          <h2 className="font-display-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-temple-dark">
            Not Ethnic-Print. <br className="hidden sm:inline" />
            <span className="gold-gradient-text font-serif italic">Marapachi.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-temple-brownMuted max-w-xl mx-auto">
            Why connoisseurs of South Indian art, festive families, and diaspora homes choose our genuine heritage revival over mass-produced fashion.
          </p>
          <KolamDivider />
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative bg-gradient-to-b from-temple-cream/90 to-temple-ivory p-8 rounded-3xl border-2 border-temple-gold/30 shadow-md hover:shadow-2xl hover:border-temple-gold hover:-translate-y-1.5 transition-all duration-300 group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-6 font-display-royal text-3xl font-black text-temple-gold/25 group-hover:text-temple-gold/40 transition-colors">
                  {item.number}
                </span>

                <div className="p-3.5 w-fit rounded-2xl bg-gradient-to-br from-temple-maroon to-temple-maroonDark text-temple-gold shadow-md mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif-royal text-xl sm:text-2xl font-bold text-temple-dark mb-3 leading-tight group-hover:text-temple-maroon transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-temple-brownMuted leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-temple-gold/20 flex items-center gap-1.5 text-[11px] font-bold text-temple-goldDark">
                  <Sparkles className="w-3.5 h-3.5 text-temple-gold" />
                  <span>Sacred Heritage Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
