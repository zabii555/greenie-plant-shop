import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';

const areas = [
  { name: 'Tampa', highlight: true },
  { name: 'Brandon' },
  { name: 'Riverview' },
  { name: 'Valrico' },
  { name: 'Lithia' },
  { name: 'Apollo Beach' },
  { name: 'Sun City Center' },
  { name: 'Ruskin' },
  { name: 'Gibsonton' },
  { name: 'Wimauma' },
  { name: 'Plant City' },
  { name: 'Seffner' },
  { name: 'Mango' },
  { name: 'Dover' },
  { name: 'Boyette' },
  { name: 'Fishhawk' },
];

export const ServiceAreasSection = ({ onOpenQuote }) => {
  return (
    <section id="service-areas" className="bg-[#072217] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
              <span className="text-xs md:text-sm font-bold text-emerald-400 tracking-wide uppercase">
                Where We Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase leading-tight mb-5">
              PROUDLY SERVING HILLSBOROUGH COUNTY & BEYOND
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              We are a local Central Florida company. Our crews are based in the Tampa Bay area and serve surrounding communities every day — no travel fees, no delays.
            </p>
            <p className="text-stone-400 text-sm mb-8">
              Don't see your city? Call us — if it's within 35 miles, we'll come to you.
            </p>
            <button
              onClick={onOpenQuote}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-lg shadow-lg transition font-display uppercase tracking-wide"
            >
              Get A Free Estimate
            </button>
          </div>

          {/* Right: Area Pills + Map Icon */}
          <div>
            <div className="bg-emerald-950/60 border border-emerald-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-bold text-sm uppercase tracking-wider">
                  Service Locations
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {areas.map((area, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition
                      ${area.highlight
                        ? 'bg-emerald-600 text-white border border-emerald-500 shadow'
                        : 'bg-emerald-950/80 text-stone-300 border border-emerald-800/60 hover:border-emerald-600 hover:text-white'
                      }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${area.highlight ? 'text-emerald-200' : 'text-emerald-500'}`} />
                    {area.name}
                  </div>
                ))}
              </div>
              <p className="text-stone-500 text-xs mt-4 text-center">
                + Many more surrounding communities
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
