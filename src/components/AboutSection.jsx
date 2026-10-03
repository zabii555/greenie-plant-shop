import React, { useState } from 'react';
import { Check, Send, AlertCircle } from 'lucide-react';

export const AboutSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone || !formData.serviceType) {
      setError('Please fill in your Name, Phone Number, and Service Type.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="about" className="bg-[#f6f6f0] py-12 md:py-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: About Us Content & Image (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
              <span className="text-xs md:text-sm font-bold text-emerald-800 tracking-wide uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display uppercase leading-tight">
              15 YEARS TAKING CARE OF THE FLORIDA'S TREES
            </h2>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                Florida's Tree Surgeons has been doing this work for 15 years. We're not national franchise. We live here, we know these trees, & we care about doing the job right.
              </p>
              <p>
                Every estimate is done in person — we come to you, look at your trees, and tell you exactly what's needed. No guessing, no upselling. Just honest work from people who know what they're doing.
              </p>
              <p>
                We handle everything from routine pruning to emergency storm cleanup — and we leave your yard cleaner than we found it.
              </p>
            </div>

            {/* Action Image */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <img
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"
                alt="Tree Surgeon removing large tree branches safely"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Request A Service Form Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#072217] text-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-emerald-950">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display uppercase tracking-wider text-white">
                REQUEST A SERVICE
              </h3>
              <p className="text-stone-300 text-sm mb-6 font-medium">
                We Are Ready To Serve You
              </p>

              {submitted ? (
                <div className="bg-emerald-900/80 border border-emerald-500 rounded-xl p-6 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-emerald-500 text-stone-900 rounded-full flex items-center justify-center mx-auto font-bold">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold font-display uppercase text-white">
                    Request Submitted!
                  </h4>
                  <p className="text-stone-200 text-sm">
                    Thank you, <span className="font-semibold text-emerald-300">{formData.firstName}</span>. Our expert arborist will call you shortly at <span className="font-semibold text-emerald-300">{formData.phone}</span> to schedule your free in-person estimate!
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', phone: '', serviceType: '', message: '' }); }}
                    className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-900/80 border border-red-500 text-red-100 p-3 rounded-lg text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-300 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name fields row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Your Name:<span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Last Name:<span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Contact fields row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Email:<span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Phone Number:<span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Service type dropdown */}
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Service Type:<span className="text-red-400">*</span>
                    </label>
                    <select
                      required
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    >
                      <option value="">-- Select Service --</option>
                      <option value="Tree Removal">Safe Tree Removal</option>
                      <option value="Tree Trimming">Tree Trimming & Pruning</option>
                      <option value="Stump Grinding">Stump Grinding</option>
                      <option value="Debris Cleanup">Debris & Brush Cleanup</option>
                      <option value="Storm Damage">Storm Damage Response</option>
                      <option value="Crane Removal">Crane-Assisted Removal</option>
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      How Can We Help You?
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know and we will get back to you as soon as possible."
                      className="w-full px-3 py-2.5 rounded-lg bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm placeholder:text-stone-400"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-md transition transform active:scale-98 flex items-center justify-center gap-2 text-base font-display uppercase tracking-wide"
                  >
                    <Send className="w-4 h-4" />
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
