import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Calendar, User, Clock, ArrowLeft, Search, Eye, Share2, Bookmark } from "lucide-react";
import { BLOG_ARTICLES, BlogArticle } from "../types";

export default function NewsCenter() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Immigration", "Personal Injury"];

  const filteredArticles = BLOG_ARTICLES.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || art.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const selectedArticle = BLOG_ARTICLES.find(art => art.id === selectedArticleId);

  return (
    <section id="insights" className="py-24 bg-white border-b border-[#AF9462]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!selectedArticleId ? (
            /* ================= ARTICLE DIRECTORY VIEW ================= */
            <motion.div
              key="directory"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              {/* Directory Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#AF9462]/10 pb-8">
                <div className="max-w-xl space-y-3">
                  <p className="text-[#AF9462] text-xs font-mono font-semibold tracking-widest uppercase">
                    Legal Knowledge & Strategy Center
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
                    Insights from senior counsel.
                  </h2>
                  <p className="text-[#111111]/60 text-xs sm:text-sm">
                    Educating first, advocating second. We keep you appraised of crucial federal immigration overhauls, personal injury laws, and corporate court precedents.
                  </p>
                </div>

                {/* Categories & Search Panel */}
                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111111]/40" />
                    <input 
                      type="text" 
                      placeholder="Search insights..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2.5 rounded-xl border border-[#AF9462]/20 bg-[#FDFCFB] text-xs text-[#111111] focus:outline-none focus:border-[#AF9462] w-full sm:w-64 transition-all"
                    />
                  </div>

                  {/* Category Filter Pills */}
                  <div className="flex gap-1 bg-[#FDFCFB] p-1 rounded-xl border border-[#AF9462]/10">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-mono uppercase tracking-wider font-medium transition-all ${
                          activeCategory === cat
                            ? "bg-[#111111] text-[#AF9462]"
                            : "text-[#111111]/60 hover:text-[#AF9462]"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Articles Grid */}
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article) => (
                    <div 
                      key={article.id}
                      onClick={() => {
                        setSelectedArticleId(article.id);
                        window.scrollTo({ top: 300, behavior: "smooth" });
                      }}
                      className="bg-[#FDFCFB] border border-[#AF9462]/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#AF9462] transition-all duration-300 flex flex-col justify-between cursor-pointer group h-full"
                      id={`article-card-${article.id}`}
                    >
                      <div>
                        {/* Image banner */}
                        <div className="aspect-[16/10] overflow-hidden bg-[#111111] relative">
                          <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#111111] text-[9px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-[#AF9462]/20">
                            {article.category}
                          </span>
                        </div>

                        {/* Text */}
                        <div className="p-6 space-y-4">
                          <div className="flex items-center gap-4 text-[10px] font-mono text-[#111111]/50">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                          </div>

                          <h3 className="font-serif text-lg font-bold text-[#111111] line-clamp-2 leading-snug group-hover:text-[#AF9462] transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-xs text-[#111111]/65 leading-relaxed line-clamp-3">
                            {article.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="px-6 pb-6 pt-4 border-t border-[#AF9462]/10 flex items-center justify-between text-xs text-[#AF9462] font-bold group-hover:text-[#111111] transition-colors">
                        <span className="flex items-center gap-1 font-mono uppercase tracking-wider text-[10px]">
                          Read Complete Article 
                        </span>
                        <span>→</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-[#FDFCFB] rounded-3xl border border-dashed border-[#AF9462]/30 space-y-3">
                  <BookOpen className="w-10 h-10 text-[#AF9462] mx-auto opacity-60 animate-bounce" />
                  <h4 className="font-serif text-lg font-bold text-[#111111]">No matching legal articles found</h4>
                  <p className="text-xs text-[#111111]/60">Try updating your keywords or choosing a different category tab.</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                    className="mt-2 text-xs font-mono uppercase text-[#AF9462] font-bold border-b border-[#AF9462] pb-0.5"
                  >
                    Reset Explorer filters
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            /* ================= ARTICLE DETAILED SERIF VIEW ================= */
            <motion.div
              key="article-detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              {/* Floating Read Progress Bar simulated */}
              <div className="h-1.5 w-full bg-[#AF9462]/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#AF9462] w-[65%] rounded-full animate-pulse" />
              </div>

              {/* Back to library */}
              <button
                onClick={() => setSelectedArticleId(null)}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#AF9462] hover:text-[#111111] font-bold transition-colors group py-2"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to insights library
              </button>

              {/* Header */}
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#AF9462] uppercase tracking-widest bg-[#AF9462]/10 px-3 py-1 rounded-full">
                  {selectedArticle?.category}
                </span>
                
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
                  {selectedArticle?.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-xs text-[#111111]/50 border-y border-[#AF9462]/10 py-4 font-mono">
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#AF9462]" /> Author: <strong>{selectedArticle?.author}</strong></span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Published: {selectedArticle?.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Reading Time: {selectedArticle?.readTime}</span>
                </div>
              </div>

              {/* Image banner */}
              <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-[#111111]">
                <img 
                  src={selectedArticle?.image} 
                  alt={selectedArticle?.title} 
                  className="w-full h-full object-cover opacity-85 grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Immersive Editorial Article Content */}
              <div className="prose prose-stone max-w-none space-y-6">
                <p className="font-serif text-lg sm:text-xl leading-relaxed text-[#111111]/90 italic border-l-2 border-[#AF9462] pl-6 py-1">
                  "{selectedArticle?.excerpt}"
                </p>
                
                <p className="text-base leading-relaxed text-[#111111]/80 font-normal">
                  {selectedArticle?.content}
                </p>

                <p className="text-base leading-relaxed text-[#111111]/80 font-normal">
                  Our attorneys advise scheduling a complete review of your unique file data before drawing definitive strategic conclusions, as rules can alter based on federal department mandates.
                </p>

                {/* Graphic highlight block */}
                <div className="bg-[#FDFCFB] p-6 rounded-2xl border border-[#AF9462]/20 space-y-3 my-8">
                  <h4 className="font-serif font-bold text-sm text-[#111111]">Need advice about your specific legal circumstances?</h4>
                  <p className="text-xs text-[#111111]/70 leading-relaxed">
                    Our team provides robust counsel and complete physical presence during complex litigation processes. Do not wait for standard processing dates to expire.
                  </p>
                </div>
              </div>

              {/* Actions footer */}
              <div className="flex items-center justify-between border-t border-[#AF9462]/10 pt-6">
                <div className="flex gap-2">
                  {selectedArticle?.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono bg-[#FDFCFB] text-[#AF9462] border border-[#AF9462]/15 px-2.5 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="p-2 border border-[#AF9462]/15 rounded-full hover:bg-[#AF9462]/10 text-[#AF9462] transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 border border-[#AF9462]/15 rounded-full hover:bg-[#AF9462]/10 text-[#AF9462] transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
