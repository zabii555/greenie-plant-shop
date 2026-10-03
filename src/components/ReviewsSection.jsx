import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Mike Hartwell',
    location: 'Brandon, FL',
    rating: 5,
    date: 'August 2026',
    text: "Florida's Tree Surgeons removed a massive oak that was leaning over my roof after Hurricane season. They were out the next morning, had the tree down by noon, and my yard was spotless by 2 PM. Absolute professionals.",
    service: 'Storm Damage Response',
  },
  {
    name: 'Sandra & Tom Rivera',
    location: 'Riverview, FL',
    rating: 5,
    date: 'July 2026',
    text: "We got 4 quotes. These guys were competitive in price and the ONLY ones who came out to look at the tree in person before quoting. That alone told us everything. Great work, zero mess left behind.",
    service: 'Safe Tree Removal',
  },
  {
    name: 'David Kellogg',
    location: 'Fishhawk Ranch, FL',
    rating: 5,
    date: 'June 2026',
    text: "Used them for full crown trimming on three large laurel oaks. They knew exactly how much to trim without stressing the trees. Honest, clean, and fast. Already scheduled them for next spring.",
    service: 'Tree Trimming & Pruning',
  },
  {
    name: 'Jennifer Okafor',
    location: 'Apollo Beach, FL',
    rating: 5,
    date: 'May 2026',
    text: "Had a stump in my backyard for 3 years. Florida's Tree Surgeons ground it below grade in under an hour. Area is level and ready for sod. Wish I'd called them sooner!",
    service: 'Stump Grinding',
  },
  {
    name: 'Robert Castillo',
    location: 'Tampa, FL',
    rating: 5,
    date: 'April 2026',
    text: "Two huge pines next to my house needed to come down. They used a crane and it was like watching a surgical operation. The crew was experienced, careful, and the whole job was cleaner than I expected.",
    service: 'Crane-Assisted Removal',
  },
  {
    name: 'Alicia Nguyen',
    location: 'Valrico, FL',
    rating: 5,
    date: 'March 2026',
    text: "Called at 7 AM after a storm knocked branches onto my fence. By 10 AM they were on-site. Fast response, fair price, professional team. Saved my fence from getting worse. 10/10.",
    service: 'Storm Damage Response',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

export const ReviewsSection = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="reviews" className="bg-[#f6f6f0] py-14 md:py-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
            <span className="text-xs md:text-sm font-bold text-emerald-800 tracking-wide uppercase">
              What Our Customers Say
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-display uppercase leading-tight">
            REAL REVIEWS FROM REAL NEIGHBORS
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <Stars count={5} />
            <span className="text-stone-600 text-sm font-semibold">
              4.9 / 5 · 200+ Google Reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, idx) => {
            const isLong = review.text.length > 200;
            const isExpanded = expanded === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <Quote className="w-7 h-7 text-emerald-200 mb-3" />
                <p className="text-stone-700 text-sm leading-relaxed grow">
                  {isLong && !isExpanded
                    ? review.text.slice(0, 200) + '…'
                    : review.text}
                  {isLong && (
                    <button
                      onClick={() => setExpanded(isExpanded ? null : idx)}
                      className="ml-1 text-emerald-700 font-semibold text-xs hover:underline"
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </p>
                <div className="mt-4 pt-4 border-t border-stone-100 flex items-start justify-between gap-2">
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{review.name}</p>
                    <p className="text-xs text-stone-400">{review.location} · {review.date}</p>
                    <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                      {review.service}
                    </span>
                  </div>
                  <Stars count={review.rating} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Google CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-stone-300 hover:border-emerald-500 text-stone-700 hover:text-emerald-700 font-semibold text-sm rounded-lg shadow-sm transition"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read All Reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
};
