import React from 'react';
import { Hammer, Sparkles, HeartHandshake, TreePine, Award, Check } from 'lucide-react';
import { KolamDivider, GopuramArch } from './KolamPattern';

export const Artisans = () => {
  const craftSteps = [
    {
      step: '01',
      title: 'Sacred Wood Selection',
      desc: 'Sustainably sourced seasoned teak, medicinal neem, and red sandalwood that naturally resist termites for generations.'
    },
    {
      step: '02',
      title: 'Hand Chisel & Agama Proportion',
      desc: 'Sculpted by master craftsmen using age-old traditional measurements (Mana Shastra) passed through hereditary lineages.'
    },
    {
      step: '03',
      title: 'Natural Lac & Temple Pigment',
      desc: 'Finished with organic beeswax polish, turmeric, and non-toxic mineral vermilion, ensuring it is 100% child-safe.'
    },
    {
      step: '04',
      title: 'Silk & 24k Gold Draping',
      desc: 'Miniature Kanchipuram zari borders and pure silk fabrics hand-pleated to adorn each auspicious bridal couple.'
    }
  ];

  return (
    <section id="artisans" className="py-20 px-4 sm:px-6 lg:px-8 bg-temple-cream/60 relative overflow-hidden">
      
      {/* Background kolam */}
      <div className="absolute inset-0 bg-kolam-subtle opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-2 text-temple-gold">
            <GopuramArch className="w-8 h-8" />
          </div>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-temple-maroon mb-2">
            The Hands Behind the Heritage
          </span>
          <h2 className="font-display-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-temple-dark">
            Handmade With the Families Who Never Stopped
          </h2>
          <p className="mt-3 text-sm sm:text-base text-temple-brownMuted leading-relaxed max-w-2xl mx-auto">
            Honoring the multigenerational artisan clusters of Tamil Nadu whose devoted hands kept this 300-year sacred craft breathing through centuries of change.
          </p>
          <KolamDivider />
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Text & Ethics Box (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-temple-ivory p-8 rounded-3xl border border-temple-gold/30 shadow-royal space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-temple-maroon">
                Our Sourcing & Artisan Covenant
              </span>
              <h3 className="font-serif-royal text-2xl sm:text-3xl font-bold text-temple-dark">
                Preserving Dignity, Not Just Decoration
              </h3>
              
              <p className="text-sm sm:text-base text-temple-brownMuted leading-relaxed">
                In rural artisan villages near Madurai, Thanjavur, and Salem, master woodcarvers wake before dawn to hand-shape teakwood blocks into the sacred forms of Raja and Rani Bommai. For these families, Marapachi is not merchandise — it is an offering (*Kaanikkai*).
              </p>

              <p className="text-sm sm:text-base text-temple-brownMuted leading-relaxed">
                We work directly with artisan cooperatives, eliminating middlemen. <strong>Over 40% of every sale directly funds artisan family healthcare, pensions, and apprentice programs</strong> so young artisans choose to keep this sacred woodcraft thriving.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-temple-gold/20">
                <div className="flex items-center gap-2 text-xs font-bold text-temple-dark">
                  <Check className="w-4 h-4 text-temple-peacock flex-shrink-0" />
                  <span>Fair Trade Living Wages Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-temple-dark">
                  <Check className="w-4 h-4 text-temple-peacock flex-shrink-0" />
                  <span>Zero Child Labor & Safe Studios</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-temple-dark">
                  <Check className="w-4 h-4 text-temple-peacock flex-shrink-0" />
                  <span>100% Sustainable Wood Sourcing</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-temple-dark">
                  <Check className="w-4 h-4 text-temple-peacock flex-shrink-0" />
                  <span>Tamil Nadu Craft Heritage Certified</span>
                </div>
              </div>
            </div>

          </div>

          {/* Workshop Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-temple-gold/40">
              <img
                src="/images/artisan_carving_workshop.jpg"
                alt="Master Artisan Carving Marapachi Wooden Doll in Tamil Nadu studio"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-temple-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-temple-gold block mb-1">
                  Master Craftsman
                </span>
                <p className="font-serif italic text-base text-temple-sand">
                  "Every stroke of the chisel carries the prayer that this doll will bring prosperity to the home it enters."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Steps of Craftsmanship */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {craftSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-temple-ivory p-6 rounded-2xl border border-temple-gold/30 hover:border-temple-gold shadow-sm hover:shadow-md transition-all relative"
            >
              <span className="font-display-royal text-2xl font-black text-temple-gold/30 block mb-2">
                {step.step}
              </span>
              <h4 className="font-serif-royal text-lg font-bold text-temple-dark mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-temple-brownMuted leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
