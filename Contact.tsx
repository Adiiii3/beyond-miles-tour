import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send, Clock } from 'lucide-react';
import { getWhatsAppGeneral } from '../lib/data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const msg = encodeURIComponent(
      `Hi Beyond Miles Stories!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested In: ${formData.destination}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/918208354452?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery-2.jpg" alt="Campfire" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/40 to-earth-900" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-moss-300 tracking-[0.35em] uppercase text-xs sm:text-sm font-medium mb-4">Get in Touch</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream">Contact Us</h1>
            <p className="text-earth-200 mt-4 max-w-lg mx-auto">
              Let's plan your next mountain adventure together
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-4">Let's Talk Mountains</h2>
              <p className="text-earth-400 text-sm leading-relaxed">
                Whether you have questions about a specific trek, need help planning a custom itinerary, or just want to chat about mountains — we're here for you.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href={getWhatsAppGeneral()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 bg-green-600/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-600/30 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-cream font-medium text-sm">WhatsApp (Preferred)</p>
                  <p className="text-earth-400 text-sm">+91 82083 54452</p>
                  <p className="text-green-400 text-xs mt-1">Typically replies within 30 minutes</p>
                </div>
              </a>

              <a href="tel:+918208354452" className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-moss-700/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-moss-600/30 transition-colors">
                  <Phone className="w-5 h-5 text-moss-400" />
                </div>
                <div>
                  <p className="text-cream font-medium text-sm">Phone</p>
                  <p className="text-earth-400 text-sm">+91 82083 54452</p>
                </div>
              </a>

              <a href="mailto:hello@beyondmilesstories.com" className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-moss-700/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-moss-600/30 transition-colors">
                  <Mail className="w-5 h-5 text-moss-400" />
                </div>
                <div>
                  <p className="text-cream font-medium text-sm">Email</p>
                  <p className="text-earth-400 text-sm">hello@beyondmilesstories.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-moss-700/30 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-moss-400" />
                </div>
                <div>
                  <p className="text-cream font-medium text-sm">Base Location</p>
                  <p className="text-earth-400 text-sm">Himachal Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-moss-700/30 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-moss-400" />
                </div>
                <div>
                  <p className="text-cream font-medium text-sm">Office Hours</p>
                  <p className="text-earth-400 text-sm">Mon – Sat, 9:00 AM – 8:00 PM IST</p>
                </div>
              </div>

              <a
                href="https://instagram.com/beyondmilesstories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 bg-moss-700/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-moss-600/30 transition-colors">
                  <Instagram className="w-5 h-5 text-moss-400" />
                </div>
                <div>
                  <p className="text-cream font-medium text-sm">Instagram</p>
                  <p className="text-earth-400 text-sm">@beyondmilesstories</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-earth-800/50 border border-moss-600/30 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-moss-600/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Send className="w-8 h-8 text-moss-400" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-cream mb-3">Message Sent!</h3>
                <p className="text-earth-400 mb-6">
                  Your inquiry has been forwarded to our WhatsApp. We'll get back to you within a few hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-moss-400 hover:text-moss-300 text-sm font-medium transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-earth-800/50 border border-earth-700/40 rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <h3 className="font-serif text-xl font-semibold text-cream mb-2">Send Us a Message</h3>
                <p className="text-earth-400 text-sm mb-6">Fill in the details and we'll reach out via WhatsApp.</p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-earth-300 text-sm mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-earth-900/60 border border-earth-700/50 rounded-xl px-4 py-2.5 text-cream text-sm placeholder:text-earth-600 focus:outline-none focus:border-moss-600/60 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-earth-300 text-sm mb-1.5">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-earth-900/60 border border-earth-700/50 rounded-xl px-4 py-2.5 text-cream text-sm placeholder:text-earth-600 focus:outline-none focus:border-moss-600/60 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-earth-300 text-sm mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-earth-900/60 border border-earth-700/50 rounded-xl px-4 py-2.5 text-cream text-sm placeholder:text-earth-600 focus:outline-none focus:border-moss-600/60 transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-earth-300 text-sm mb-1.5">Interested Destination</label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-earth-900/60 border border-earth-700/50 rounded-xl px-4 py-2.5 text-cream text-sm focus:outline-none focus:border-moss-600/60 transition-colors"
                    >
                      <option value="" className="bg-earth-900">Select destination</option>
                      <option value="Manali" className="bg-earth-900">Manali</option>
                      <option value="Kedarnath" className="bg-earth-900">Kedarnath</option>
                      <option value="Kashmir" className="bg-earth-900">Kashmir</option>
                      <option value="Arunachal" className="bg-earth-900">Arunachal Pradesh</option>
                      <option value="Badrinath" className="bg-earth-900">Badrinath</option>
                      <option value="Chardham" className="bg-earth-900">Chardham Yatra</option>
                      <option value="Kuari Pass" className="bg-earth-900">Kuari Pass Trek</option>
                      <option value="Dayara Bugyal" className="bg-earth-900">Dayara Bugyal Trek</option>
                      <option value="Kedarkantha" className="bg-earth-900">Kedarkantha Trek</option>
                      <option value="Other" className="bg-earth-900">Other / Custom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-earth-300 text-sm mb-1.5">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-earth-900/60 border border-earth-700/50 rounded-xl px-4 py-2.5 text-cream text-sm placeholder:text-earth-600 focus:outline-none focus:border-moss-600/60 transition-colors resize-none"
                    placeholder="Tell us about your trip plans — dates, group size, any preferences..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-moss-600 hover:bg-moss-500 text-cream font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
