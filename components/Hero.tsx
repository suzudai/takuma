import React from 'react';
import { Article } from '../types';

interface HeroProps {
  article: Article;
  onClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ article, onClick }) => {
  return (
    <div className="mb-10">
      <div className="mb-6 pb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
            <span className="w-1 h-7 bg-blue-600 rounded-full mr-3"></span>
            主要ニュース
          </h2>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Latest
          </span>
        </div>
        <p className="text-sm text-gray-600 pl-4">
          生活を変える技術・サービスにワクワクし、新たな出会いを生み出す。
        </p>
      </div>

      <div
        className="refined-card refined-card-hover cursor-pointer overflow-hidden group"
        onClick={onClick}
      >
        <div className="aspect-w-16 aspect-h-9 md:h-[420px] w-full relative">
          <img
            src={article.heroImage || article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-8 w-full text-white">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold tracking-wide mb-3 rounded-md shadow-lg">
              PICK UP
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-3 tracking-tight group-hover:text-blue-100 transition-colors">
              {article.title}
            </h1>
            <div className="flex items-center text-xs md:text-sm text-gray-200 font-medium space-x-4">
              <span className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                {article.companyName}
              </span>
              <span>{article.publishedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};