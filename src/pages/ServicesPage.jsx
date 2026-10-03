import React, { useState } from 'react';
import { TreePine, Scissors, Circle, Wind, Zap, Truck, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

const services = [
  {
    slug: 'tree-removal',
    icon: TreePine,
    title: 'Safe Tree Removal',
    tagline: 'Dead, diseased, or dangerous — we remove it safely.',
    description: 'Full removal of dead, diseased, or hazardous trees. We use precision rigging and heavy equipment to drop trees safely without damaging your property, structures, fences, or landscaping.',
    img: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Hazardous & dead tree removal',
      'Root-to-tip complete removal',
      'Full yard cleanup included',
      'Works around structures & pools',
      'Same-day emergency available',
    ],
    color: 'emerald',
  },
  {
    slug: 'tree-trimming',
    icon: Scissors,
    title: 'Tree Trimming & Pruning',
    tagline: 'Shape, elevate & protect your trees all year long.',
    description: 'Shape, thin, and elevate your trees for health, safety, and curb appeal. Our ISA-certified arborists know exactly where to cut — protecting tree health while improving your property\'s appearance.',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Crown thinning & raising',
      'Deadwood removal',
      'Storm-prep pruning',
      'Vista & view pruning',
      'Young tree structural training',
    ],
    color: 'sky',
  },
  {
    slug: 'stump-grinding',
    icon: Circle,
    title: 'Stump Grinding',
    tagline: 'Eliminate stumps fast — sod, plant, or build over them.',
    description: 'We grind stumps below ground level so you can plant, sod, or build over the area. Fast, clean, and affordable — no stump is too big or too awkward for our equipment.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Below-grade grinding',
      'Mulch left on-site or hauled away',
      'Same-day availability',
      'Any size stump',
      'Root flare removal available',
    ],
    color: 'amber',
  },
  {
    slug: 'debris-cleanup',
    icon: Wind,
    title: 'Debris & Brush Cleanup',
    tagline: 'We haul it all — leave your yard spotless.',
    description: 'We haul away all brush, limbs, and green waste — leaving your property spotless. Perfect after storms, heavy trimming sessions, or land-clearing projects.',
    img: 'https://images.unsplash.com/photo-1562183241-b937e9102f4f?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Limb & brush hauling',
      'Whole-property cleanups',
      'Chip on-site or remove',
      'Post-storm debris removal',
      'Land clearing & lot cleanups',
    ],
    color: 'stone',
  },
  {
    slug: 'storm-damage',
    icon: Zap,
    title: 'Storm Damage Response',
    tagline: '24/7 emergency crews — we respond when it matters most.',
    description: 'Available 24/7 for emergency storm damage. We respond fast, secure the scene, remove hazardous limbs, and restore your property safely. We also assist with insurance documentation.',
    img: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      '24/7 emergency dispatch',
      'Insurance claim support & documentation',
      'Fast crew mobilization',
      'Fallen tree removal',
      'Roof & structure clearance',
    ],
    color: 'red',
  },
  {
    slug: 'crane-removal',
    icon: Truck,
    title: 'Crane-Assisted Removal',
    tagline: 'The jobs no one else can do — we handle them.',
    description: `Large or inaccessible trees require heavy crane lifts. We have the equipment and expertise to handle jobs others can't — tight spaces, zero-access yards, trees near power lines and buildings.`,
    img: 'https://images.unsplash.com/photo-1517925035435-7976539b920d?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      '100-ton crane capacity',
      'Zero-access & tight-space jobs',
      'Near power lines & structures',
      'Zero property damage guarantee',
      'Full coordination with utilities',
    ],
    color: 'violet',
  },
];

const colorMap = {
  emerald: { badge: 'bg-emerald-100 text-emerald-800', bullet: 'bg-emerald-500', btn: 'bg-emerald-700 hover:bg-emerald-800', border: 'border-emerald-200', icon: 'bg-emerald-700 text-white' },
  sky: { badge: 'bg-sky-100 text-sky-800', bullet: 'bg-sky-500', btn: 'bg-sky-700 hover:bg-sky-800', border: 'border-sky-200', icon: 'bg-sky-600 text-white' },
  amber: { badge: 'bg-amber-100 text-amber-800', bullet: 'bg-amber-500', btn: 'bg-amber-600 hover:bg-amber-700', border: 'border-amber-200', icon: 'bg-amber-500 text-white' },
  stone: { badge: 'bg-stone-200 text-stone-800', bullet: 'bg-stone-500', btn: 'bg-stone-700 hover:bg-stone-800', border: 'border-stone-300', icon: 'bg-stone-600 text-white' },
  red: { badge: 'bg-red-100 text-red-800', bullet: 'bg-red-500', btn: 'bg-red-700 hover:bg-red-800', border: 'border-red-200', icon: 'bg-red-700 text-white' },
  violet: { badge: 'bg-violet-100 text-violet-800', bullet: 'bg-violet-500', btn: 'bg-violet-700 hover:bg-violet-800', border: 'border-violet-200', icon: 'bg-violet-700 text-white' },
};

export const ServicesPage = ({ onOpenQuote }) => {
  const [active, setActive] = useState(null);

  return (
    <main>
      {/* Page Hero */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80"
          alt="Tree service professionals at work"
          className="w-full h-64 sm:h-80 object-cover object-center"
        />
        <div
          className="absolute inset-0 flex items-end"
          style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.8), rgba(28,25,23,0.3), transparent)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
              <span className="text-xs font-bold text-emerald-300 tracking-widest uppercase">What We Do</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display uppercase leading-tight">
              PROFESSIONAL TREE SERVICES
            </h1>
            <p className="text-stone-200 mt-2 text-sm sm:text-base max-w-xl">
              Certified arborists · Right equipment · Zero shortcuts · Free estimates
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-[#f6f6f0] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, idx) => {
            const c = colorMap[svc.color];
            const Icon = svc.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={svc.slug}
                id={svc.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Image */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}>
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-xl"
                  />
                  <div className={`absolute -bottom-3 -right-3 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg ${c.icon}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-4`}>
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${c.badge}`}>
                    {svc.tagline}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display uppercase leading-tight">
                    {svc.title}
                  </h2>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">{svc.description}</p>
                  <ul className="space-y-2">
                    {svc.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-stone-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={onOpenQuote}
                      className={`flex items-center justify-center gap-2 px-6 py-3 text-white font-bold rounded-lg shadow transition text-sm ${c.btn}`}
                    >
                      Get A Free Quote <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="tel:8135551212"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-stone-900 font-bold rounded-lg border border-stone-300 hover:bg-stone-50 transition text-sm"
                    >
                      <Phone className="w-4 h-4" /> (813) 555-1212
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#072217] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-3xl font-extrabold text-white font-display uppercase">Not Sure Which Service You Need?</h2>
          <p className="text-stone-300 text-sm">We come to you, assess your trees in person, and recommend exactly what's needed — for free.</p>
          <button
            onClick={onOpenQuote}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3.5 rounded-lg shadow-lg transition"
          >
            Schedule My Free Estimate
          </button>
        </div>
      </section>
    </main>
  );
};
