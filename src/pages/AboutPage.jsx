import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, MapPin, CheckCircle2, Clock, Leaf, Star } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '5,000+', label: 'Trees Removed' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
];

const team = [
  {
    name: 'Marcus Rivera',
    role: 'Lead Arborist & Owner',
    img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80',
    bio: 'ISA Certified Arborist with 18 years of field experience. Marcus founded Florida\'s Tree Surgeons to bring honest, expert tree care to Central Florida.',
  },
  {
    name: 'Derek Johnson',
    role: 'Senior Crew Supervisor',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Derek leads our removal crews with precision and safety. Specializes in crane-assisted removals and complex near-structure jobs.',
  },
  {
    name: 'Sofia Mendez',
    role: 'Certified Arborist & Estimator',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Sofia conducts all free in-person estimates and specializes in pruning, plant health, and storm-prep consultations.',
  },
];

const values = [
  { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Florida-licensed tree service company with full liability and workers\' compensation coverage.' },
  { icon: Award, title: 'ISA Certified', desc: 'Our arborists are ISA-certified — the gold standard in professional tree care.' },
  { icon: Users, title: 'Local Team', desc: 'We live here. We know Florida trees, soils, and storm patterns better than any franchise.' },
  { icon: Leaf, title: 'Eco-Conscious', desc: 'We chip and recycle green waste. Stumps become mulch. Zero unnecessary waste.' },
  { icon: Clock, title: '24/7 Emergency', desc: 'Storm doesn\'t wait. Neither do we — emergency crews are on-call around the clock.' },
  { icon: MapPin, title: 'Tampa Bay Roots', desc: 'Serving Brandon, Riverview, Valrico, Lithia, Sun City, and all of Hillsborough County.' },
];

export const AboutPage = ({ onOpenQuote }) => (
  <main>
    {/* Hero Banner */}
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80"
        alt="Arborist climbing a large tree"
        className="w-full h-72 sm:h-96 object-cover object-center"
      />
      <div
        className="absolute inset-0 flex items-end"
        style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.8), rgba(28,25,23,0.4), transparent)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
            <span className="text-xs font-bold text-emerald-300 tracking-widest uppercase">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display uppercase leading-tight">
            FLORIDA'S TREE SURGEONS
          </h1>
          <p className="text-stone-200 mt-2 text-base sm:text-lg max-w-xl">
            Locally owned. ISA certified. Serving Tampa Bay for 15+ years.
          </p>
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="bg-emerald-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">{s.value}</div>
            <div className="text-emerald-100 text-xs sm:text-sm mt-1 uppercase tracking-wider font-semibold">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Story Section */}
    <section className="bg-[#f6f6f0] py-16 md:py-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
              <span className="text-xs font-bold text-emerald-800 tracking-widest uppercase">Our Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display uppercase leading-tight">
              BUILT ON HONESTY,<br />ROOTED IN FLORIDA
            </h2>
            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                Florida's Tree Surgeons was founded in 2009 by Marcus Rivera — an ISA-certified arborist who grew up climbing trees in Hillsborough County. After years working for national franchises, Marcus saw a gap: homeowners were being overcharged, underserved, and left with messy yards.
              </p>
              <p>
                He started Florida's Tree Surgeons with one truck, a small crew, and a simple promise — honest work, fair prices, and a yard cleaner than we found it. That promise hasn't changed.
              </p>
              <p>
                Today, we operate a full fleet of bucket trucks, chippers, cranes, and stump grinders. We've served over 5,000 Tampa Bay homeowners and built a 4.9-star reputation on real reviews from real neighbors.
              </p>
            </div>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-7 py-3 rounded-lg shadow transition"
            >
              Get Your Free Estimate
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
              alt="Tree service crew with professional equipment"
              className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-emerald-700 text-white rounded-xl p-4 shadow-lg hidden sm:block">
              <Star className="w-5 h-5 mb-1 fill-white" />
              <div className="font-extrabold text-xl font-display">4.9 / 5</div>
              <div className="text-xs text-emerald-100">200+ Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Values Grid */}
    <section className="bg-white py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
            <span className="text-xs font-bold text-emerald-800 tracking-widest uppercase">What We Stand For</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display uppercase">OUR VALUES</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-stone-50 border border-stone-200 rounded-2xl p-6 flex gap-4 items-start hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wide font-display mb-1">{v.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="bg-[#f6f6f0] py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
            <span className="text-xs font-bold text-emerald-800 tracking-widest uppercase">The People Behind the Trucks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display uppercase">MEET OUR TEAM</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden border border-stone-200 hover:shadow-xl transition">
              <img src={member.img} alt={member.name} className="w-full h-56 object-cover object-top" />
              <div className="p-5">
                <h3 className="font-extrabold text-stone-900 text-lg font-display uppercase tracking-wide">{member.name}</h3>
                <p className="text-emerald-700 text-xs font-bold uppercase tracking-widest mb-3">{member.role}</p>
                <p className="text-stone-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-[#072217] py-14">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display uppercase">Ready to Work With Tampa Bay's Best?</h2>
        <p className="text-stone-300 text-sm sm:text-base">Free in-person estimate. No obligation. Our arborist comes to you.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenQuote}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3.5 rounded-lg shadow-lg transition"
          >
            Get A Free Estimate
          </button>
          <a
            href="tel:8135551212"
            className="bg-white hover:bg-stone-100 text-stone-900 font-bold px-8 py-3.5 rounded-lg shadow transition"
          >
            Call (813) 555-1212
          </a>
        </div>
      </div>
    </section>
  </main>
);
