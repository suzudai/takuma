import React from 'react';
import { Article } from '../types';
import { Heart, ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
  variant?: 'large' | 'standard';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick, variant = 'standard' }) => {
  const isLarge = variant === 'large';

  return (
    <div
      className={`group cursor-pointer flex flex-col relative bg-white border-2 border-black p-0 hover:-translate-y-1 hover:shadow-hard transition-all duration-300 ${isLarge ? 'md:col-span-2' : ''}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-video w-full border-b-2 border-black">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-100"
        />
        <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors" />

        {/* Tag Sticker */}
        <div className="absolute top-0 left-0">
          <span className="inline-block bg-emerald-500 text-white text-xs font-black px-3 py-1.5 border-r-2 border-b-2 border-black">
            {article.type}
          </span>
        </div>

        {/* Hover Action */}
        <div className="absolute bottom-3 right-3 bg-white border-2 border-black p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={20} className="text-black" />
        </div>
      </div>

      <div className="flex flex-col flex-grow p-5">
        <h3 className={`font-black text-black leading-snug mb-3 font-sans-jp group-hover:text-emerald-700 transition-colors ${isLarge ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          {article.title}
        </h3>

        {isLarge && (
          <p className="text-neutral-600 text-sm mb-4 line-clamp-2 font-serif-jp font-medium">
            {article.summary}
          </p>
        )}

        <div className="mt-auto pt-4 border-t-2 border-dashed border-neutral-200 flex items-center justify-between text-xs font-bold text-neutral-500">
          <div className="flex items-center space-x-1">
            <span>By {article.author}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-pink-100 px-2 py-1 rounded border border-pink-200 text-pink-600">
              <Heart size={12} className="mr-1 fill-pink-500" />
              <span>{article.pickCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};