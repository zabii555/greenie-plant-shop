import React, { useState } from 'react';
import { TreePine, Scissors, Circle, Wind, Zap, Truck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: TreePine,
    title: 'Safe Tree Removal',
    description:
      'Full removal of dead, diseased, or hazardous trees. We use precision rigging and heavy equipment to drop trees safely without damaging your property.',
    bullets: ['Hazardous & dead trees', 'Root-to-tip removal', 'Full yard cleanup included'],
    color: 'emerald',
  },
  {
    icon: Scissors,
    title: 'Tree Trimming & Pruning',
    description:
      'Shape, thin, and elevate your trees for health, safety, and curb appeal. Our ISA-certified arborists know exactly where to cut.',
    bullets: ['Crown thinning & raising', 'Deadwood removal', 'Storm-prep pruning'],
    color: 'sky',
  },
  {
    icon: Circle,
    title: 'Stump Grinding',
    description:
      'We grind stumps below ground level so you can plant, sod, or build over the area. Fast, clean, and affordable.',
    bullets: ['Below-grade grinding', 'Mulch left or hauled away', 'Same-day availability'],
    color: 'amber',
  },
  {
    icon: Wind,
    title: 'Debris & Brush Cleanup',
    description:
      'We haul away all brush, limbs, and green waste — leaving your property spotless. Perfect after storms or heavy trimming sessions.',
    bullets: ['Limb & brush hauling', 'Whole-property cleanups', 'Chip on-site or remove'],
    color: 'stone',
  },
  {
    icon: Zap,
    title: 'Storm Damage Response',
    description:
      'Available 24 / 7 for emergency storm damage. We respond fast, secure the scene, and restore your property safely.',
    bullets: ['24/7 emergency dispatch', 'Insurance claim support', 'Fast crew mobilization'],
    color: 'red',
  },
  {
    icon: Truck,
    title: 'Crane-Assisted Removal',
    description:
      `Large or inaccessible trees require heavy crane lifts. We have the equipment and expertise to handle jobs others can't.`,
    bullets: ['100-ton crane capacity', 'Zero-access tight spaces', 'Zero property damage guarantee'],
    color: 'violet',
  },
];

const colorMap = {
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    icon: 'bg-emerald-700 text-white',
    accent: 'text-emerald-700',
    bullet: 'bg-emerald-500',
    hover: 'hover:border-emerald-400',
  },
  sky: {
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    icon: 'bg-sky-600 text-white',
    accent: 'text-sky-700',
    bullet: 'bg-sky-500',
    hover: 'hover:border-sky-400',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: 'bg-amber-500 text-white',
    accent: 'text-amber-700',
    bullet: 'bg-amber-500',
    hover: 'hover:border-amber-400',
  },
  stone: {
    bg: 'bg-stone-100',
    border: 'border-stone-300',
    icon: 'bg-stone-600 text-white',
    accent: 'text-stone-700',
    bullet: 'bg-stone-500',
    hover: 'hover:border-stone-400',
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: 'bg-red-700 text-white',
    accent: 'text-red-700',
    bullet: 'bg-red-500',
    hover: 'hover:border-red-400',
  },
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    icon: 'bg-violet-700 text-white',
    accent: 'text-violet-700',
    bullet: 'bg-violet-500',
    hover: 'hover:border-violet-400',
  },
};

export const ServicesSection = ({ onOpenQuote }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="bg-[#f6f6f0] py-14 md:py-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
            <span className="text-xs md:text-sm font-bold text-emerald-800 tracking-wide uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display uppercase leading-tight">
            PROFESSIONAL TREE SERVICES
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From routine pruning to full crane-assisted removals — we handle every tree job with certified expertise, the right equipment, and zero shortcuts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, idx) => {
            const c = colorMap[service.color];
            const Icon = service.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className={`relative flex flex-col p-6 rounded-2xl border-2 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg ${c.bg} ${c.border} ${c.hover} ${hovered === idx ? 'scale-[1.02]' : ''}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm ${c.icon}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className={`text-lg font-extrabold font-display uppercase tracking-wide mb-2 ${c.accent}`}>
                  {service.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4 grow">
                  {service.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {service.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.bullet}`}></span>
                      {b}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenQuote}
                  className={`mt-auto flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${c.accent} hover:opacity-80 transition`}
                >
                  Get A Free Quote <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
