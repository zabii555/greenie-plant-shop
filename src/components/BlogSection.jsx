import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, BookOpen, Clock, User, X } from 'lucide-react';
import { assetUrl } from '../utils/asset';

export const BlogSection = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: '5 Indoor Plants That Instantly Boost Serotonin',
      category: 'Mental Wellness',
      readTime: '4 min read',
      author: 'Clara Dupont',
      date: 'Oct 2026',
      image: assetUrl('/images/hero_woman.jpg'),
      snippet: 'Discover how soil microbes and green leaf aesthetics increase serotonin levels and reduce stress in office & home environments.',
      content: `Research in environmental psychology confirms that indoor houseplants like Monstera, Asplenium, and Succulents significantly reduce cortisol levels. 

The soil bacterium Mycobacterium vaccae stimulates serotonin production, creating natural relaxation. Position your plants near east-facing windows for optimum photosynthesis and mood elevation.`
    },
    {
      id: 2,
      title: 'Mastering Watering Schedules for Tropical Monsteras',
      category: 'Care Guides',
      readTime: '6 min read',
      author: 'Sophia Vance',
      date: 'Oct 2026',
      image: assetUrl('/images/gardener_apron.jpg'),
      snippet: 'Avoid overwatering rot! Learn the two-inch soil test method and proper misting frequency during growing seasons.',
      content: `Monstera Deliciosa plants thrive when allowed to dry slightly between deep waterings. Always feel the top 2 inches of soil with your fingertip. 

If moist, wait 2 days. Ensure your pot has drainage holes and place a saucer underneath to prevent root waterlogging.`
    },
    {
      id: 3,
      title: 'Organic Pest Control: Simple Neem Oil Remedies',
      category: 'Eco Farming',
      readTime: '5 min read',
      author: 'Hannah Miller',
      date: 'Sep 2026',
      image: assetUrl('/images/gardener_pot.jpg'),
      snippet: 'Protect your greenery naturally without chemical pesticides. Organic spray recipes approved by Greenie botanists.',
      content: `Chemical pesticides can damage delicate plant foliage and home air quality. Mix 1 teaspoon of organic cold-pressed neem oil with 1/2 teaspoon of mild liquid soap in 1 liter of warm water. 

Spray leaves generously at dusk to repel spider mites and aphids safely.`
    }
  ];

  return (
    <section id="blog" className="bg-[#f6f5ef] py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-300 pb-6">
          <div>
            <span className="text-xs font-bold text-[#ff5e1e] uppercase tracking-wider">Greenie Journal</span>
            <h2 className="text-4xl sm:text-5xl font-serif-title font-bold text-[#0a3629] uppercase">
              ECO &amp; PLANT CARE BLOG
            </h2>
          </div>
          <p className="text-xs text-stone-500 max-w-xs text-center sm:text-right">
            Expert articles by certified arborists &amp; plant soil specialists.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all card-3d cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#0a3629] text-[#c1f038] text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    {art.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-stone-500 font-medium">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {art.author}</span>
                  </div>

                  <h3 className="text-xl font-serif-title font-bold text-[#0a3629] group-hover:text-[#ff5e1e] transition leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-stone-600 text-xs leading-relaxed line-clamp-3">
                    {art.snippet}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 flex justify-between items-center text-xs font-bold text-[#0a3629] group-hover:text-[#ff5e1e]">
                <span>Read Full Guide</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#07241c] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#1b6b53] p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-[#c1f038] uppercase tracking-wider">{activeArticle.category}</span>
                <h3 className="text-2xl font-serif-title font-bold text-white mt-1">{activeArticle.title}</h3>
                <p className="text-xs text-stone-300 mt-1">By {activeArticle.author} · {activeArticle.date}</p>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-[#0a3629] text-stone-300 hover:text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="prose prose-invert prose-sm text-stone-200 leading-relaxed whitespace-pre-line border-t border-[#144d3b] pt-4">
              {activeArticle.content}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2 bg-[#c1f038] text-[#0a2c21] font-bold text-xs rounded-full"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
