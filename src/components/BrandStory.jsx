import React from 'react';
import { Heart, Sparkles, BookOpen, Clock, Users, Globe } from 'lucide-react';
import { KolamDivider, GopuramArch } from './KolamPattern';

export const BrandStory = () => {
  const storyCards = [
    {
      icon: Users,
      highlight: "Artisan Lineage",
      quote: "Designed alongside 4th-generation Marapachi doll-making families in Tamil Nadu, sustaining rural livelihoods.",
      stat: "100+ Craftsmen"
    },
    {
      icon: Globe,
      highlight: "Diaspora Connected",
      quote: "Loved by Indian families across London, the Bay Area, Singapore, Dubai, and Chennai who cherish their roots.",
      stat: "24+ Countries"
    },
    {
      icon: Clock,
      highlight: "300-Year Heritage",
      quote: "Every garment and toy carries the same auspicious motifs grandmother arranged on Navratri Golu steps.",
      stat: "1700s Tradition"
    }
  ];

  return (
    <section id="story" className="py-20 px-4 sm:px-6 lg:px-8 bg-temple-cream/60 relative overflow-hidden">
      
      {/* Background Subtle Kolam Dots */}
      <div className="absolute inset-0 bg-kolam-subtle pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-3 text-temple-gold">
            <GopuramArch className="w-10 h-10" />
          </div>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-temple-maroon mb-2">
            The Living Tradition
          </span>
          <h2 className="font-display-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-temple-dark tracking-tight">
            A Craft That Raised Generations — <br className="hidden sm:inline" />
            <span className="font-serif italic text-temple-maroon">Now Yours to Wear</span>
          </h2>
          <KolamDivider />
        </div>

        {/* Narrative & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-temple-gold/30 group">
              <img
                src="/images/artisan_carving_workshop.jpg"
                alt="Artisan hands carving a traditional Marapachi Bommai doll from sandalwood in Tamil Nadu"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-temple-charcoal/85 via-temple-charcoal/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-temple-gold block mb-1">
                  Living Archive
                </span>
                <p className="font-serif italic text-base sm:text-lg leading-snug text-temple-sand">
                  "The scent of carved teakwood and natural vermilion — where each doll is infused with devotion."
                </p>
              </div>
            </div>

            {/* Floating Stamp */}
            <div className="absolute -top-6 -right-6 bg-temple-maroon text-temple-gold border-2 border-temple-gold p-4 rounded-full shadow-xl w-24 h-24 flex flex-col items-center justify-center text-center rotate-12 hidden sm:flex">
              <span className="text-[9px] font-black uppercase tracking-tighter">Est.</span>
              <span className="font-serif-royal text-lg font-bold leading-none">1720</span>
              <span className="text-[8px] uppercase tracking-widest">Heritage</span>
            </div>
          </div>

          {/* Deep Emotional Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-temple-dark">
            <div className="p-6 bg-temple-ivory rounded-3xl border border-temple-gold/30 shadow-royal space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-temple-brownMuted">
                For over <strong>300 years</strong>, <em>Marapachi Bommai</em> dolls have sat proudly at the pinnacle of Golu steps every Navratri — carved by hand from sacred wood, painted in temple colors, and lovingly gifted as wedding and childbirth blessings for prosperity and enduring love.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-temple-brownMuted">
                Somewhere between fast fashion, busy metropolitan lives, and moving across oceans, that sacred craft started fading from daily life into antique showcases.
              </p>

              <blockquote className="p-4 bg-temple-cream/80 border-l-4 border-temple-maroon rounded-r-xl font-serif italic text-base sm:text-lg text-temple-maroon">
                "We started Marapachi to bring it back — not preserved behind dusty museum glass, but worn proudly on your shoulder, held in your child’s hands, and standing at the center of your wedding stage."
              </blockquote>

              <p className="text-sm text-temple-brownMuted leading-relaxed">
                Every piece we craft carries the same hand-painted spirit as the heirloom doll your grandmother wrapped in silk and kept safe for fifty years — modernized for contemporary living.
              </p>
            </div>
          </div>

        </div>

        {/* 3 Pull-Quote Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {storyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-temple-ivory p-6 rounded-2xl border border-temple-gold/30 shadow-md hover:shadow-gold-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-temple-maroon/10 text-temple-maroon">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif-royal text-sm font-bold text-temple-goldDark">
                      {card.stat}
                    </span>
                  </div>
                  <h3 className="font-serif-royal text-lg font-bold text-temple-dark mb-2">
                    {card.highlight}
                  </h3>
                  <p className="text-xs text-temple-brownMuted leading-relaxed">
                    "{card.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-temple-gold/15 flex items-center gap-1.5 text-[11px] font-bold text-temple-peacock">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Heirloom Certified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
