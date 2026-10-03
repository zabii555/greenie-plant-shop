import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Check, AlertCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(813) 555-1212',
    href: 'tel:8135551212',
    color: 'emerald',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@floridasTreeSurgeons.com',
    href: 'mailto:info@floridasTreeSurgeons.com',
    color: 'sky',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Brandon, FL 33510',
    href: 'https://maps.google.com',
    color: 'amber',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Sat 7AM–6PM · 24/7 Emergency',
    href: null,
    color: 'stone',
  },
];

const colorMap = {
  emerald: 'bg-emerald-100 text-emerald-700',
  sky: 'bg-sky-100 text-sky-700',
  amber: 'bg-amber-100 text-amber-700',
  stone: 'bg-stone-200 text-stone-600',
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#f6f6f0] py-14 md:py-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
            <span className="text-xs md:text-sm font-bold text-emerald-800 tracking-wide uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display uppercase leading-tight">
            CONTACT US TODAY
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
            Ready for a free estimate? Have a question? We're here Monday through Saturday and available 24/7 for emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              const pill = colorMap[info.color];
              const content = (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${pill}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">{info.label}</p>
                    <p className="text-stone-800 font-semibold text-sm sm:text-base">{info.value}</p>
                  </div>
                </div>
              );
              return info.href ? (
                <a key={idx} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={idx}>{content}</div>
              );
            })}

            {/* Emergency CTA */}
            <div className="bg-red-700 text-white rounded-xl p-5 flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-red-200 uppercase tracking-wider mb-0.5">24/7 Emergency Line</p>
                <a href="tel:8135551212" className="text-white font-extrabold text-xl hover:text-red-100 transition font-display">
                  (813) 555-1212
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white border border-stone-200 rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-extrabold font-display uppercase text-stone-900 mb-1">
              Send Us A Message
            </h3>
            <p className="text-stone-500 text-sm mb-6">We'll get back to you within a few hours.</p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7 text-emerald-700" />
                </div>
                <h4 className="text-lg font-bold font-display uppercase text-stone-900">Message Sent!</h4>
                <p className="text-stone-600 text-sm">
                  Thanks, <span className="font-semibold text-emerald-700">{formData.name}</span>! We'll be in touch shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', message: '' }); }}
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-stone-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-500 mb-1">Phone <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-stone-900"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1">Message</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your tree(s)…"
                    className="w-full px-3 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-stone-900 placeholder:text-stone-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg shadow transition flex items-center justify-center gap-2 text-sm font-display uppercase tracking-wide"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
