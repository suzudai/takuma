import React, { useState } from 'react';
import { ARTICLES, HERO_ARTICLE_ID } from './constants';
import { Hero } from './components/Hero';
import { ArticleCard } from './components/ArticleCard';
import { ArticleReader } from './components/ArticleReader';
import { Drawer } from './components/Drawer';
import { Modal } from './components/Modal';
import { ArticleType } from './types';
import { Search, Menu, User, Sparkles, X, ChevronRight, Hash } from 'lucide-react';

const App: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // UI State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  // Filter & Search State
  const [activeCategory, setActiveCategory] = useState<ArticleType | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Data Logic
  const heroArticle = ARTICLES.find(a => a.id === HERO_ARTICLE_ID) || ARTICLES[0];

  const filteredArticles = ARTICLES.filter(a => {
    if (a.id === HERO_ARTICLE_ID && activeCategory === 'ALL' && !searchQuery) return false;

    const matchesCategory = activeCategory === 'ALL' || a.type === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.summary.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const listArticles = filteredArticles;

  const selectedArticle = ARTICLES.find(a => a.id === selectedArticleId);

  // Simple animation placeholder
  const fadeIn = "animate-[fadeIn_0.5s_ease-out]";

  const resetFilters = () => {
    setActiveCategory('ALL');
    setSearchQuery('');
    setSelectedArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedArticle) {
    return (
      <ArticleReader
        article={selectedArticle}
        onBack={() => setSelectedArticleId(null)}
      />
    );
  }

  return (
    <div className={`min-h-screen bg-grid-pattern flex flex-col ${fadeIn}`}>
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-sm border-b-2 border-black transition-all duration-300 h-16">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center text-black">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="mr-4 p-2 hover:bg-emerald-100 rounded-2xl border-2 border-transparent hover:border-black transition-all"
            >
              <Menu size={24} />
            </button>
            <div
              onClick={resetFilters}
              className="font-black text-2xl tracking-tighter flex items-center italic cursor-pointer group"
            >
              MELON<span className="text-emerald-600 group-hover:text-amber-500 transition-colors">PICKS</span>
              <span className="ml-1 text-xs not-italic bg-black text-white px-1.5 py-0.5 transform -rotate-6">BETA</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 hover:bg-emerald-100 rounded-full border-2 border-transparent hover:border-black transition-all ${searchQuery ? 'bg-amber-100 border-black' : ''}`}
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsUserOpen(true)}
              className="p-2 hover:bg-emerald-100 rounded-full border-2 border-transparent hover:border-black transition-all"
            >
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Drawers & Modals */}
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-neutral-400 text-sm mb-3 uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2">
              {['ALL', ...Object.values(ArticleType)].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      setActiveCategory(cat as any);
                      setIsMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left font-black text-xl italic hover:text-emerald-500 transition-colors flex items-center justify-between group ${activeCategory === cat ? 'text-emerald-600' : 'text-black'}`}
                  >
                    <span>{cat === 'ALL' ? 'ALL STORIES' : cat}</span>
                    <ChevronRight size={20} className={`transform transition-transform ${activeCategory === cat ? 'translate-x-2' : 'group-hover:translate-x-2 opacity-0 group-hover:opacity-100'}`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t-2 border-dashed border-neutral-300">
            <h3 className="font-bold text-neutral-400 text-sm mb-3 uppercase tracking-wider">About</h3>
            <p className="text-sm font-medium leading-relaxed">
              MelonPicks is an interactive exploration of the world's most fascinating fruit history and culture. Made with ❤️ by bold designers.
            </p>
          </div>
        </div>
      </Drawer>

      <Modal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} title="SEARCH STORIES">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search by keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-neutral-100 border-2 border-transparent focus:border-black focus:bg-white transition-all outline-none font-bold text-lg"
            autoFocus
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {['History', 'Business', 'Sweet', 'Farming'].map(tag => (
            <button
              key={tag}
              onClick={() => setSearchQuery(tag)}
              className="px-3 py-1 bg-white border border-neutral-300 rounded-full text-xs font-bold hover:border-black transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="bg-black text-white px-6 py-2 font-black italic hover:bg-emerald-600 transition-colors shadow-hard-sm"
          >
            SHOW RESULTS
          </button>
        </div>
      </Modal>

      <Modal isOpen={isUserOpen} onClose={() => setIsUserOpen(false)} title="MY PROFILE">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-neutral-200 rounded-full mb-4 border-4 border-black overflow-hidden relative">
            <User size={48} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-400" />
          </div>
          <h2 className="text-2xl font-black italic">GUEST USER</h2>
          <p className="text-neutral-500 font-bold">New Member</p>
        </div>
        <div className="space-y-3">
          <button className="w-full py-3 border-2 border-black font-bold hover:bg-neutral-100 transition-colors flex items-center justify-center space-x-2">
            <Sparkles size={18} />
            <span>My Saved Picks (0)</span>
          </button>
          <button className="w-full py-3 bg-black text-white font-black italic hover:bg-emerald-600 transition-colors shadow-hard-sm">
            SIGN IN / REGISTER
          </button>
        </div>
      </Modal>

      <main className="flex-grow pt-16">
        {activeCategory === 'ALL' && !searchQuery && (
          <Hero
            article={heroArticle}
            onClick={() => setSelectedArticleId(heroArticle.id)}
          />
        )}

        <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <div className="absolute -top-6 -left-8 text-amber-400 animate-bounce">
                <Sparkles size={32} />
              </div>
              <h2 className="text-3xl font-black text-black italic bg-white px-6 py-2 border-2 border-black shadow-hard transform -rotate-1 uppercase">
                {searchQuery ? `Search: "${searchQuery}"` : (activeCategory === 'ALL' ? 'LATEST STORIES' : `${activeCategory} STORIES`)}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {listArticles.length > 0 ? (
              listArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onClick={() => setSelectedArticleId(article.id)}
                  variant={index === 0 && !searchQuery && activeCategory === 'ALL' ? 'large' : 'standard'}
                />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-2xl font-bold text-neutral-400">No stories found.</p>
                <button onClick={resetFilters} className="mt-4 text-emerald-600 font-black underline">Clear Filters</button>
              </div>
            )}
          </div>
        </div>

        {activeCategory === 'ALL' && !searchQuery && (
          <div className="bg-emerald-900 text-white py-20 px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
              <svg width="400" height="400" viewBox="0 0 200 200">
                <path fill="currentColor" d="M45,-76.3C58.3,-69.3,69.1,-58.3,77.3,-46.1C85.5,-33.9,91.1,-20.5,90.4,-7.3C89.7,5.9,82.7,18.9,73.4,29.8C64.1,40.7,52.5,49.5,40.7,56.1C28.9,62.7,16.9,67.1,4.4,68.5C-8.1,69.9,-21.1,68.3,-33.4,62.4C-45.7,56.5,-57.3,46.3,-65.7,34.2C-74.1,22.1,-79.3,8.1,-78.3,-5.4C-77.3,-18.9,-70.1,-31.9,-60.2,-41.8C-50.3,-51.7,-37.7,-58.5,-25.1,-66.1C-12.5,-73.7,-0.0,-82.1,13.9,-81.2C27.9,-80.3,45,-76.3,45,-76.3Z" transform="translate(100 100)" />
              </svg>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="font-black text-3xl mb-10 border-b-4 border-emerald-500 pb-4 inline-block italic">
                DAILY RANKING <span className="not-italic">🏆</span>
              </h2>
              <div className="space-y-4">
                {ARTICLES.map((article, i) => (
                  <div key={article.id} onClick={() => setSelectedArticleId(article.id)} className="flex items-center space-x-6 cursor-pointer group bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all border border-transparent hover:border-emerald-400">
                    <span className="text-5xl font-black text-emerald-500 italic font-mono group-hover:text-emerald-300 transition-colors drop-shadow-md">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl leading-tight group-hover:text-emerald-200 transition-colors font-sans-jp">{article.title}</h4>
                    </div>
                    <div className="w-24 h-16 bg-neutral-800 rounded-2xl overflow-hidden border-2 border-emerald-800 group-hover:border-emerald-400 transition-colors">
                      <img src={article.imageUrl} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-black text-white py-12 px-4 text-center border-t-8 border-emerald-500">
        <div className="font-black text-2xl tracking-tighter italic mb-4">
          MELON<span className="text-emerald-500">PICKS</span>
        </div>
        <p className="text-neutral-500 text-xs">&copy; 2024 MelonPicks Media. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;