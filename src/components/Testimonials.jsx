import React from 'react';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { KolamDivider, GopuramArch } from './KolamPattern';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Dr. Radhika & Sundaram Iyer',
      location: 'London, United Kingdom',
      origin: 'Global Diaspora',
      quote: 'My 5-year-old son in London finally has a Golu doll pair of his own — and a buttery-soft T-shirt to match! Watching him point to the crown and say ‘Marapachi’ brought tears to my mother’s eyes on FaceTime.',
      item: 'Raja-Rani Heirloom Pair & Kids Playwear',
      rating: 5
    },
    {
      name: 'Priya & Karthik V.',
      location: 'Chennai, Tamil Nadu',
      origin: 'Domestic Wedding',
      quote: 'We ordered the custom 10-foot Marapachi backdrop for our wedding reception at MRC Nagar. Guests literally gasped when they entered. It made our wedding feel so deeply rooted and royal.',
      item: 'Royal Mandap Stage & Bride-Groom Dolls',
      rating: 5
    },
    {
      name: 'Meenakshi Swaminathan',
      location: 'San Jose, California',
      origin: 'Global Diaspora',
      quote: 'Living in the Bay Area, finding authentic Golu decor that doesn’t look like cheap plastic is impossible. Marapachi’s packaging, pure wood aroma, and temple gold finish are breathtaking. Shipped in 4 days!',
      item: 'Montessori Wooden Doll Set & Silk Tunic',
      rating: 5
    },
    {
      name: 'Anand Ramachandran',
      location: 'Bengaluru, Karnataka',
      origin: 'Festive Shopper',
      quote: 'Wore the Kanchipuram Crest tee for my daughter’s first Golu morning. Every single relative and friend asked where I got it. The fabric weight and gold foil print are world-class luxury.',
      item: 'Raja Marapachi Heavyweight Crest Tee',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-temple-ivory relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-2 text-temple-gold">
            <GopuramArch className="w-8 h-8" />
          </div>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-temple-maroon mb-2">
            Voices of Heritage & Pride
          </span>
          <h2 className="font-display-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-temple-dark">
            Proudly Marapachi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-temple-brownMuted leading-relaxed max-w-xl mx-auto">
            From festival mornings in Chennai to homesick celebrations in London, hear how our community carries their roots forward.
          </p>
          <KolamDivider />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-temple-cream/80 to-temple-ivory p-8 rounded-3xl border-2 border-temple-gold/30 hover:border-temple-gold shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-temple-gold/25 group-hover:text-temple-gold/40 transition-colors" />

              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-temple-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-temple-peacock bg-temple-peacock/10 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{rev.origin}</span>
                  </span>
                </div>

                <p className="font-serif italic text-base sm:text-lg text-temple-dark leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-temple-gold/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif-royal text-base font-bold text-temple-dark">
                    {rev.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-temple-brownMuted mt-0.5">
                    <MapPin className="w-3 h-3 text-temple-maroon" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-temple-goldDark block">Purchased</span>
                  <span className="text-xs font-semibold text-temple-maroon line-clamp-1">{rev.item}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
