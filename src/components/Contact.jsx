import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { KolamDivider, GopuramArch } from './KolamPattern';

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

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#C9A227', '#7A1F2B', '#0B6E4F', '#FDFBF7']
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-temple-ivory relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-2 text-temple-gold">
            <GopuramArch className="w-8 h-8" />
          </div>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-temple-maroon mb-2">
            Get in Touch
          </span>
          <h2 className="font-display-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-temple-dark">
            Let’s Create Something Rooted
          </h2>
          <p className="mt-3 text-sm sm:text-base text-temple-brownMuted leading-relaxed max-w-xl mx-auto">
            Whether planning a bespoke wedding backdrop, ordering custom heirloom doll pairs for a new baby, or inquiring for global bulk export — our studio team is here to assist.
          </p>
          <KolamDivider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Studio Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-temple-cream to-temple-sand p-8 rounded-3xl border border-temple-gold/40 shadow-royal space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-temple-maroon block mb-1">
                  Artisan Studio & Headquarters
                </span>
                <h3 className="font-serif-royal text-2xl font-bold text-temple-dark">
                  Marapachi Heritage Studio
                </h3>
              </div>

              <div className="space-y-4 text-xs text-temple-brownMuted">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-temple-maroon/10 text-temple-maroon mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-temple-dark">Heritage Studio & Workshop:</h4>
                    <p className="text-temple-brownMuted mt-0.5">
                      42, Temple Weavers Lane, R.S. Puram, Coimbatore, Tamil Nadu — 641002, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-temple-maroon/10 text-temple-maroon mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-temple-dark">Email Support:</h4>
                    <p className="text-temple-brownMuted mt-0.5">namaste@marapachi.com</p>
                    <p className="text-temple-brownMuted">custom@marapachi.com (Bespoke)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-temple-maroon/10 text-temple-maroon mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-temple-dark">Concierge & WhatsApp:</h4>
                    <p className="text-temple-brownMuted mt-0.5">+91 94433 88210 (India & Global)</p>
                    <p className="text-[11px] text-temple-peacock font-semibold">Available on WhatsApp for NRI Timezones</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-temple-maroon/10 text-temple-maroon mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-temple-dark">Studio Hours:</h4>
                    <p className="text-temple-brownMuted mt-0.5">Monday – Saturday: 9:30 AM – 7:30 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-temple-gold/30">
                <span className="text-[11px] font-bold text-temple-dark block mb-2">Connect On Heritage Socials:</span>
                <div className="flex gap-3">
                  <a href="#hero" aria-label="Instagram" className="p-2.5 rounded-full bg-temple-ivory hover:bg-temple-maroon text-temple-maroon hover:text-white border border-temple-gold/40 transition-colors">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a href="#hero" aria-label="Facebook" className="p-2.5 rounded-full bg-temple-ivory hover:bg-temple-maroon text-temple-maroon hover:text-white border border-temple-gold/40 transition-colors">
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a href="#hero" aria-label="Message Concierge" className="p-2.5 rounded-full bg-temple-ivory hover:bg-temple-peacock text-temple-peacock hover:text-white border border-temple-gold/40 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-temple-ivory p-8 sm:p-10 rounded-3xl border-2 border-temple-gold/40 shadow-royal">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif-royal text-2xl font-bold text-temple-dark mb-2">
                    Send a Message to Our Design Studio
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-temple-dark block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Venkatraman"
                        className="w-full px-4 py-3 text-xs rounded-xl border border-temple-gold/40 bg-white text-temple-dark focus:ring-2 focus:ring-temple-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-temple-dark block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="venkat@example.com"
                        className="w-full px-4 py-3 text-xs rounded-xl border border-temple-gold/40 bg-white text-temple-dark focus:ring-2 focus:ring-temple-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-temple-dark block mb-1">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 text-xs rounded-xl border border-temple-gold/40 bg-white text-temple-dark focus:ring-2 focus:ring-temple-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-temple-dark block mb-1">Enquiry Subject *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 text-xs rounded-xl border border-temple-gold/40 bg-white text-temple-dark focus:ring-2 focus:ring-temple-gold focus:outline-none"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Custom Order">Custom Heirloom Doll Order</option>
                        <option value="Wedding Enquiry">Wedding Stage & Mandap Décor</option>
                        <option value="Export & Bulk">Global Bulk & NRI Export Orders</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-temple-dark block mb-1">Your Message or Requirements *</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you're looking for, occasion date, or delivery location..."
                      className="w-full px-4 py-3 text-xs rounded-xl border border-temple-gold/40 bg-white text-temple-dark focus:ring-2 focus:ring-temple-gold focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-temple-maroon via-temple-maroonLight to-temple-maroon hover:shadow-gold-glow text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Marapachi</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 px-4">
                  <div className="w-16 h-16 rounded-full bg-temple-peacock/15 text-temple-peacock flex items-center justify-center mx-auto mb-4 border border-temple-peacock/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif-royal text-2xl font-bold text-temple-dark mb-2">
                    Nandri! Message Received.
                  </h3>
                  <p className="text-xs sm:text-sm text-temple-brownMuted max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, {formData.name}. Our studio team in Coimbatore will review your enquiry for <strong>{formData.subject}</strong> and reach back within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
                    }}
                    className="px-6 py-2.5 bg-temple-cream hover:bg-temple-sand border border-temple-gold/40 text-temple-dark text-xs font-bold rounded-xl"
                  >
                    Send Another Note
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
