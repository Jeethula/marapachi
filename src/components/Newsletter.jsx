import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GopuramArch } from './KolamPattern';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#C9A227', '#7A1F2B', '#0B6E4F', '#FDFBF7']
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-temple-ivory via-temple-cream to-temple-ivory relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-temple-maroon via-temple-crimson to-temple-maroonDark p-8 sm:p-12 rounded-3xl border-2 border-temple-gold/40 shadow-2xl text-center text-white relative overflow-hidden">
          
          {/* Subtle Ambient Light */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-temple-gold/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-temple-gold/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-temple-gold/20 text-temple-gold mb-2 border border-temple-gold/30">
              <Sparkles className="w-6 h-6 animate-pulse-subtle" />
            </div>

            <span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-temple-gold">
              Heritage Community
            </span>

            <h2 className="font-display-royal text-3xl sm:text-4xl font-bold tracking-wide">
              Join the Marapachi Family
            </h2>

            <p className="text-xs sm:text-sm text-temple-sand/90 leading-relaxed">
              Receive secret festival drop announcements, priority custom wedding slots, and rich visual stories preserving 300 years of South Indian lore.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="pt-4 max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-temple-brownMuted" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="w-full pl-10 pr-4 py-3.5 rounded-full text-xs bg-temple-ivory text-temple-dark border border-temple-gold/50 focus:outline-none focus:ring-2 focus:ring-temple-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-3.5 bg-gradient-to-r from-temple-gold via-temple-goldDark to-temple-gold hover:shadow-gold-glow text-temple-maroonDark text-xs font-bold uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span>Unlock 10% Off</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-temple-sand/60 mt-2">
                  Use code <span className="font-bold text-temple-gold">KOLAM10</span> on launch • Zero spam, unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="pt-4 bg-temple-charcoal/40 p-4 rounded-2xl border border-temple-gold/40 animate-fadeIn">
                <div className="flex items-center justify-center gap-2 text-temple-gold mb-1">
                  <CheckCircle2 className="w-5 h-5 text-temple-gold" />
                  <span className="font-serif-royal text-lg font-bold">Welcome to the Family!</span>
                </div>
                <p className="text-xs text-temple-sand">
                  Check your inbox for your welcome story and code <strong>KOLAM10</strong>.
                </p>
              </div>
            )}

          </div>

        </div>
      </div>

    </section>
  );
};
