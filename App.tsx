import React, { useState } from 'react';
import { ARTICLES, HERO_ARTICLE_ID } from './constants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PressReleaseList } from './components/PressReleaseList';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { ArticleReader } from './components/ArticleReader';
import { Article } from './types';

const App: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const heroArticle = ARTICLES.find(a => a.id === HERO_ARTICLE_ID) || ARTICLES[0];
  const listArticles = ARTICLES.filter(a => a.id !== heroArticle.id);
  const selectedArticle = ARTICLES.find(a => a.id === selectedArticleId);

  // If an article is selected, show the reader (overlay or full page)
  // For PR Times style, usually it's a separate page, but here we can toggle.
  if (selectedArticle) {
    return (
      <div className="min-h-screen font-sans">
        <Header />
        <div className="container-custom py-8">

          <ArticleReader
            article={selectedArticle}
            onBack={() => setSelectedArticleId(null)}
          />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans">
      <Header />

      <main className="container-custom py-8">
        <Hero
          article={heroArticle}
          onClick={() => setSelectedArticleId(heroArticle.id)}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content: Press Release List */}
          <div className="lg:col-span-2">
            <PressReleaseList
              articles={listArticles}
              onArticleClick={setSelectedArticleId}
            />
            <div className="mt-6 text-center">
              <button className="px-6 py-2 bg-white border border-gray-300 text-gray-600 rounded hover:bg-gray-50 text-sm font-bold transition-colors">
                Load More Releases
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar
              rankingArticles={ARTICLES}
              onArticleClick={setSelectedArticleId}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;