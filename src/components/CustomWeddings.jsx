import React from 'react';
import { Sparkles, Heart, Baby, Gift, Calendar, Palette, ArrowRight, CheckCircle2 } from 'lucide-react';
import { KolamDivider, GopuramArch, CornerFlourish } from './KolamPattern';

export const CustomWeddings = ({ onOpenCustomModal }) => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Mandap & Stage Décor',
      tamil: 'திருமண மேடை அலங்காரம்',
      desc: 'Grand 8–14 ft gold-carved Marapachi couple backdrops, sacred entrance gopurams, and coordinated silk ensembles for the bride and groom.',
      features: ['Custom scale & arch dimensions', 'Hand-painted temple motifs', 'Pre-assembled for worldwide shipping']
    },
    {
      icon: Baby,
      title: 'Seemantham & Baby Naming Sets',
      tamil: 'வளைகாப்பு & தொட்டில் திருவிழா',
      desc: 'Auspicious heirloom doll pairs, miniature silver-plated wood cradle sets, and soft organic cotton baby outfits blessed with traditional motifs.',
      features: ['Personalized baby name calligraphy', 'Natural child-safe sandalwood', 'Presentation wooden keepsake box']
    },
    {
      icon: Gift,
      title: 'Festival & Corporate Gifting',
      tamil: 'பண்டிகை & நிறுவனப் பரிசுகள்',
      desc: 'Distinctive brass & wood Marapachi keepsakes for Diwali, Navratri, and global executive client gifting that represent authentic Indian excellence.',
      features: ['Custom branded luxury packaging', 'Bulk overseas shipping management', 'Artisan provenance certificate included']
    },
    {
      icon: Palette,
      title: 'Engraved Keepsake Doll Pairs',
      tamil: 'தனிப்பயன் மரப்பாச்சி பொம்மைகள்',
      desc: 'Heirloom 12" to 18" wooden Raja-Rani couples hand-carved with couple’s wedding date, family gotra, or custom silk saree/dhoti color matching.',
      features: ['Matching wedding saree silk fabric', 'Date & name brass plaque', 'Generational heirloom grade']
    },
    {
      icon: Calendar,
      title: 'Full Navratri Golu Theming',
      tamil: 'நவராத்திரி கொலு மேடை வடிவமைப்பு',
      desc: 'Complete end-to-end Golu thematic step backdrops, lighting accessories, and artisanal doll collections for modern apartments and NRI residences.',
      features: ['Modular collapsible wooden steps', 'Heritage temple color schemes', 'Custom Golu centerpiece designs']
    }
  ];

  return (
    <section id="custom-weddings" className="py-20 px-4 sm:px-6 lg:px-8 bg-temple-ivory relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-temple-maroon/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-2 text-temple-gold">
            <GopuramArch className="w-8 h-8" />
          </div>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-temple-maroon mb-2">
            Bespoke Celebration Studio
          </span>
          <h2 className="font-display-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-temple-dark">
            Made for Your Moment
          </h2>
          <p className="mt-3 text-sm sm:text-base text-temple-brownMuted leading-relaxed max-w-2xl mx-auto">
            From a Marapachi-themed wedding stage to a baby’s naming ceremony outfit, corporate festival gifting to a full Golu-themed event setup — our custom studio designs and handcrafts pieces for the moments that matter most.
          </p>
          <KolamDivider />
        </div>

        {/* Featured Wedding Backdrop Hero Box */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-temple-gold/40 mb-16 bg-temple-maroon">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Image (7 cols) */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] overflow-hidden">
              <img
                src="/images/wedding_mandap_marapachi.jpg"
                alt="Luxury South Indian Royal Wedding Mandap with Carved Marapachi Bommai Stage Backdrop"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-temple-maroon/20 to-temple-maroon lg:block hidden" />
            </div>

            {/* Content (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-temple-gold/20 text-temple-gold border border-temple-gold/40 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Wedding & Reception Feature</span>
              </div>

              <h3 className="font-serif-royal text-2xl sm:text-3xl font-bold leading-snug">
                The Royal Marapachi Wedding Stage
              </h3>

              <p className="text-xs sm:text-sm text-temple-sand/90 leading-relaxed">
                Transform your marriage ceremony into a sacred, timeless visual story. Our team creates signature wooden and gold filigree Marapachi arches with fragrant jasmine styling, shipped directly to wedding venues across India, USA, UK & Singapore.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-temple-goldLight">
                  <CheckCircle2 className="w-4 h-4 text-temple-gold flex-shrink-0" />
                  <span>Customizable heights (8ft, 10ft, 12ft, 14ft)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-temple-goldLight">
                  <CheckCircle2 className="w-4 h-4 text-temple-gold flex-shrink-0" />
                  <span>Includes groom & bride matching doll keepsakes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-temple-goldLight">
                  <CheckCircle2 className="w-4 h-4 text-temple-gold flex-shrink-0" />
                  <span>On-site or modular DIY assembly support</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenCustomModal('Wedding Décor & Outfits')}
                  className="px-6 py-3.5 bg-gradient-to-r from-temple-gold via-temple-goldDark to-temple-gold text-temple-maroonDark text-xs font-bold uppercase tracking-widest rounded-full hover:shadow-gold-glow transition-all flex items-center gap-2"
                >
                  <span>Enquire for Wedding Bookings</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* 5 Bespoke Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-temple-cream/60 p-7 rounded-3xl border border-temple-gold/30 hover:border-temple-gold hover:bg-temple-cream hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-temple-maroon text-temple-gold shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-temple-maroon bg-temple-maroon/10 px-2.5 py-1 rounded-full">
                      Custom Studio
                    </span>
                  </div>

                  <h4 className="font-serif-royal text-xl font-bold text-temple-dark group-hover:text-temple-maroon transition-colors">
                    {srv.title}
                  </h4>
                  <p className="text-xs font-serif italic text-temple-maroon mb-3">
                    {srv.tamil}
                  </p>
                  <p className="text-xs text-temple-brownMuted leading-relaxed mb-4">
                    {srv.desc}
                  </p>

                  <div className="space-y-1.5 border-t border-temple-gold/20 pt-3">
                    {srv.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-temple-dark">
                        <div className="w-1.5 h-1.5 rounded-full bg-temple-gold" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-temple-gold/20">
                  <button
                    onClick={() => onOpenCustomModal(srv.title)}
                    className="text-xs font-bold text-temple-maroon hover:text-temple-maroonLight flex items-center gap-1 group/btn"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
