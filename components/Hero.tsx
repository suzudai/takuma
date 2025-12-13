import React from 'react';
import { Article } from '../types';
import { Clock, ArrowRight, Zap, Star } from 'lucide-react';

interface HeroProps {
  article: Article;
  onClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ article, onClick }) => {
  return (
    <div 
      className="relative w-full overflow-hidden bg-amber-50 cursor-pointer group pt-12 pb-16 md:pt-20 md:pb-24 px-4"
      onClick={onClick}
    >
      {/* Background Decorative Patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-50 pointer-events-none" />
      
      {/* Abstract Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 relative">
           {/* Floating Icon */}
           <div className="absolute -top-10 -left-6 text-amber-400 hidden md:block">
              <Zap size={48} className="fill-amber-400 stroke-black stroke-2" />
           </div>

           <div className="inline-flex items-center space-x-2 mb-6 bg-white border-2 border-black px-3 py-1 shadow-hard-sm transform -rotate-2">
             <span className="bg-emerald-500 w-3 h-3 rounded-full"></span>
             <span className="font-bold text-sm tracking-widest uppercase">{article.type}</span>
           </div>
           
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-[0.95] mb-6 font-sans-jp tracking-tight">
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-black" style={{WebkitTextStroke: '1px black', textShadow: '4px 4px 0px rgba(16, 185, 129, 0.2)'}}>
               {article.title}
             </span>
           </h1>

           <p className="text-lg md:text-xl font-bold text-neutral-700 font-serif-jp leading-relaxed mb-8 bg-white/60 p-4 border-l-4 border-black backdrop-blur-sm">
             {article.subtitle}
           </p>

           <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2 text-sm font-bold bg-black text-white px-4 py-2 rounded-full">
                <Clock size={16} />
                <span>{article.readTime} READ</span>
              </div>
              <button className="flex items-center text-black font-black text-lg tracking-wide hover:text-emerald-600 transition-colors group-hover:translate-x-2 duration-300">
                 READ STORY <ArrowRight size={24} className="ml-2 stroke-[3]" />
              </button>
           </div>
        </div>

        {/* Image Content - Collage Style */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
           <div className="relative w-full max-w-lg aspect-[4/3]">
              {/* Image Frame */}
              <div className="absolute inset-0 bg-black transform translate-x-4 translate-y-4 rounded-xl" />
              <div className="absolute inset-0 bg-emerald-500 transform -translate-x-2 -translate-y-2 rounded-xl" />
              
              <div className="relative h-full w-full bg-white rounded-xl overflow-hidden border-4 border-black z-10">
                 <img 
                   src={article.heroImage} 
                   alt={article.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter contrast-125 saturate-100"
                 />
                 {/* Overlay Effect */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-amber-500/20 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Decorative Stickers */}
              <div className="absolute -bottom-6 -left-6 bg-white border-2 border-black p-3 shadow-hard rounded-full z-20 transform rotate-12">
                 <div className="text-2xl font-black text-black">TOP</div>
              </div>
              <div className="absolute -top-6 -right-6 text-pink-500 z-20 animate-spin-slow">
                 <Star size={60} className="fill-pink-300 stroke-black stroke-2" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};