import React from 'react';
import { MapPin, CheckCircle2, Phone, Clock, ArrowRight } from 'lucide-react';

const areas = [
  { name: 'Tampa', img: 'https://images.unsplash.com/photo-1575986767340-5d17ae5de1ea?auto=format&fit=crop&w=600&q=80', highlight: true },
  { name: 'Brandon', img: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=600&q=80' },
  { name: 'Riverview', img: 'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=600&q=80' },
  { name: 'Valrico', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80' },
  { name: 'Lithia', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80' },
  { name: 'Apollo Beach', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
  { name: 'Sun City Center', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80' },
  { name: 'Ruskin', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80' },
  { name: 'Plant City', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
];

const allAreas = [
  'Tampa', 'Brandon', 'Riverview', 'Valrico', 'Lithia',
  'Apollo Beach', 'Sun City Center', 'Ruskin', 'Gibsonton',
  'Wimauma', 'Plant City', 'Seffner', 'Mango', 'Dover',
  'Boyette', 'Fishhawk', 'Bloomingdale', 'Lake Magdalene',
];

export const ServiceAreasPage = ({ onOpenQuote }) => (
  <main>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1575986767340-5d17ae5de1ea?auto=format&fit=crop&w=1600&q=80"
        alt="Tampa Bay Florida skyline"
        className="w-full h-64 sm:h-80 object-cover object-center"
      />
      <div
        className="absolute inset-0 flex items-end"
        style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.8), rgba(28,25,23,0.3), transparent)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
            <span className="text-xs font-bold text-emerald-300 tracking-widest uppercase">Where We Work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display uppercase leading-tight">
            SERVICE AREAS
          </h1>
          <p className="text-stone-200 mt-2 text-sm sm:text-base max-w-xl">
            Serving all of Hillsborough County and surrounding Tampa Bay communities.
          </p>
        </div>
      </div>
    </section>

    {/* Area Cards Grid */}
    <section className="bg-[#f6f6f0] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
            <span className="text-xs font-bold text-emerald-800 tracking-widest uppercase">Communities We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display uppercase">
            HILLSBOROUGH COUNTY & BEYOND
          </h2>
          <p className="mt-4 text-stone-600 text-sm max-w-2xl mx-auto">
            Our crews are based in Brandon, FL and serve the entire Tampa Bay area — no travel fees, no delays. We know these neighborhoods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer"
              onClick={onOpenQuote}
            >
              <img
                src={area.img}
                alt={`Tree service in ${area.name}, FL`}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.8), rgba(28,25,23,0.2), transparent)' }}
              ></div>
              {area.highlight && (
                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">
                  Primary Area
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-white font-extrabold text-lg font-display uppercase">{area.name}, FL</span>
                </div>
                <span className="text-emerald-300 text-xs mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                  Get Free Estimate <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Full Area List */}
    <section className="bg-[#072217] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
              <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">Full Coverage Area</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display uppercase leading-tight">
              PROUDLY SERVING<br />TAMPA BAY
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              We are a locally owned and operated company. Our crews live and work in these communities — we know the neighborhoods, the tree species, and the storm patterns of Central Florida better than any franchise.
            </p>
            <p className="text-stone-400 text-sm">
              Not seeing your city? Call us — if you're within 35 miles of Brandon, we'll come to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenQuote}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3 rounded-lg shadow transition"
              >
                Get A Free Estimate
              </button>
              <a
                href="tel:8135551212"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3 rounded-lg transition border border-white/20"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>

          <div className="bg-emerald-950/60 border border-emerald-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">All Service Locations</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {allAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-emerald-950/80 text-stone-300 border border-emerald-800/60 hover:border-emerald-600 hover:text-white transition"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                  {area}
                </div>
              ))}
            </div>
            <p className="text-stone-500 text-xs mt-4 text-center">+ Many more surrounding communities</p>
          </div>
        </div>
      </div>
    </section>

    {/* Hours & Info */}
    <section className="bg-white py-12 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
          <Clock className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
          <h3 className="font-bold text-stone-900 uppercase text-sm font-display mb-1">Business Hours</h3>
          <p className="text-stone-600 text-sm">Mon – Sat: 7AM – 6PM</p>
        </div>
        <div className="p-6 rounded-2xl bg-red-50 border border-red-200">
          <Phone className="w-8 h-8 text-red-700 mx-auto mb-3" />
          <h3 className="font-bold text-stone-900 uppercase text-sm font-display mb-1">24/7 Emergency</h3>
          <a href="tel:8135551212" className="text-red-700 font-bold text-sm hover:underline">(813) 555-1212</a>
        </div>
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
          <MapPin className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
          <h3 className="font-bold text-stone-900 uppercase text-sm font-display mb-1">Based In</h3>
          <p className="text-stone-600 text-sm">Brandon, FL 33510</p>
        </div>
      </div>
    </section>
  </main>
);
