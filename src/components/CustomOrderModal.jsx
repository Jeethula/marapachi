import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, HeartHandshake, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CustomOrderModal = ({ isOpen, onClose, initialService = 'Wedding Décor & Outfits' }) => {
  const [service, setService] = useState(initialService);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    eventDate: '',
    budgetRange: '₹50,000 - ₹1,50,000 ($600 - $1,800)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#7A1F2B', '#0B6E4F', '#FDFBF7']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-temple-dark/80 backdrop-blur-md transition-all">
      <div 
        className="relative w-full max-w-2xl bg-temple-ivory border-2 border-temple-gold/40 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-temple-maroon via-temple-maroonLight to-temple-maroon p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-temple-gold/20 text-temple-goldLight">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif-royal text-2xl font-bold">Custom Studio Concierge</h3>
              <p className="text-xs text-temple-goldLight/90">Bespoke Weddings • Heirloom Keepsakes • Global Shipping</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close Modal"
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-temple-brownMuted leading-relaxed">
                Tell us about your upcoming occasion. Our master design studio in Tamil Nadu crafts personalized Marapachi stage backdrops, hand-dressed heirloom doll pairs with wedding date engravings, and bespoke family ensembles.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-temple-dark block mb-1">Occasion / Service Type *</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-temple-gold/40 bg-white text-temple-dark focus:ring-2 focus:ring-temple-gold"
                  >
                    <option value="Wedding Décor & Outfits">Wedding Décor & Outfits (Mandap/Stage)</option>
                    <option value="Baby Shower / Seemantham Sets">Baby Shower / Seemantham Sets</option>
                    <option value="Engraved Keepsake Doll Pairs">Personalized Heirloom Doll Pairs (Name/Date)</option>
                    <option value="Festival & Corporate Gifting">Festival & Luxury Corporate Gifting</option>
                    <option value="Full Event Theming">Full Golu & Heritage Event Theming</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-temple-dark block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Sundaram"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-temple-gold/40 bg-white text-temple-dark focus:ring-2 focus:ring-temple-gold"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-temple-dark block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ananya@example.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-temple-gold/40 bg-white text-temple-dark focus:ring-2 focus:ring-temple-gold"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-temple-dark block mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210 / +1 (555) 0192"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-temple-gold/40 bg-white text-temple-dark focus:ring-2 focus:ring-temple-gold"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-temple-dark block mb-1">Destination City & Country *</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Chennai / San Jose, USA / London, UK"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-temple-gold/40 bg-white text-temple-dark focus:ring-2 focus:ring-temple-gold"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-temple-dark block mb-1">Estimated Event Date</label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-temple-gold/40 bg-white text-temple-dark focus:ring-2 focus:ring-temple-gold"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-temple-dark block mb-1">Describe Your Vision & Specific Requirements</label>
                <textarea
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. We would love a 10-foot gold Marapachi backdrop for our wedding reception in Dallas, plus matching miniature doll gift sets for 100 guests..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-temple-gold/40 bg-white text-temple-dark focus:ring-2 focus:ring-temple-gold"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-temple-maroon via-temple-maroonLight to-temple-maroon hover:shadow-gold-glow text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Custom Enquiry</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 rounded-full bg-temple-peacock/15 text-temple-peacock flex items-center justify-center mx-auto mb-4 border border-temple-peacock/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif-royal text-2xl font-bold text-temple-dark mb-2">
                Vanakkam, {formData.name || 'Friend'}!
              </h4>
              <p className="text-sm text-temple-brownMuted leading-relaxed max-w-md mx-auto mb-6">
                Your custom studio enquiry for <strong>{service}</strong> has been received by our head artisan coordinator in Tamil Nadu. We will contact you via WhatsApp & Email within 24 business hours with initial sketches and timeline estimates.
              </p>
              <div className="p-4 bg-temple-cream rounded-2xl border border-temple-gold/30 max-w-md mx-auto mb-6 text-left">
                <p className="text-xs font-bold text-temple-dark mb-1">Direct Urgent WhatsApp Support:</p>
                <p className="text-xs text-temple-maroon font-semibold flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>+91 94433 88210 (Studio Direct)</span>
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-temple-maroon text-white text-xs font-bold rounded-xl hover:bg-temple-maroonDark transition-colors"
              >
                Close & Return to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
