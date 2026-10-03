import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Do you offer free estimates?',
    a: 'Yes — always. Every estimate is done in person by one of our certified arborists. We come to your property, assess the trees, and give you an honest, written quote at no charge.',
  },
  {
    q: 'Are you licensed and insured in Florida?',
    a: `Absolutely. We are fully licensed as a Florida Tree Service company, carry general liability insurance, and maintain workers' compensation coverage. We can provide certificates of insurance upon request.`,
  },
  {
    q: 'How quickly can you respond to storm damage?',
    a: `We offer 24/7 emergency storm damage response. In most cases, we can have a crew on-site within hours. Call our emergency line and we'll dispatch immediately.`,
  },
  {
    q: 'Do you clean up after the job?',
    a: 'Yes — this is a core part of every job. We chip or haul all wood, limbs, and debris. We rake, blow, and leave the area cleaner than we found it. No extra charge.',
  },
  {
    q: 'Can you handle large trees near power lines or structures?',
    a: 'Yes. We use precision rigging, bucket trucks, and crane lifts for complex removals near structures, pools, fences, or utility lines. We coordinate with utilities when needed.',
  },
  {
    q: 'How much does tree removal cost?',
    a: 'Every job is different — size, location, and complexity all affect price. Small trees start around $300; large or crane-required removals can range $1,500–$3,500+. The only way to give you an accurate number is a free on-site estimate.',
  },
  {
    q: 'Do you assist with insurance claims for storm damage?',
    a: 'Yes. We have experience working with homeowners through the insurance process. We can document the damage, provide written reports, and work directly with adjusters when required.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the greater Tampa Bay area including Brandon, Riverview, Valrico, Lithia, Apollo Beach, Sun City Center, Ruskin, Plant City, and surrounding communities throughout Hillsborough County.',
  },
];

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section id="faq" className="bg-stone-100 py-14 md:py-20 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
            <span className="text-xs md:text-sm font-bold text-emerald-800 tracking-wide uppercase">
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display uppercase leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 shadow-sm ${isOpen ? 'border-emerald-400 shadow-md' : 'border-stone-200 hover:border-stone-300'}`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-sm sm:text-base font-display uppercase tracking-wide ${isOpen ? 'text-emerald-800' : 'text-stone-800'}`}>
                    {faq.q}
                  </span>
                  <span className={`ml-4 shrink-0 transition-transform duration-200 ${isOpen ? 'text-emerald-600' : 'text-stone-400'}`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
