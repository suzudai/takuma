import React, { useEffect } from 'react';
import { Article } from '../types';
import { ArrowLeft, MessageSquare, Heart, Share2, Bookmark, Quote, Citrus, Leaf } from 'lucide-react';
import { AIInsight } from './AIInsight';

interface ArticleReaderProps {
  article: Article;
  onBack: () => void;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({ article, onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article.id]);

  const fullText = article.blocks.map(b => b.content).join("\n");

  return (
    <div className="bg-amber-50 min-h-screen pb-20 font-serif-jp relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-40 right-0 opacity-5 pointer-events-none">
         <Citrus size={400} />
      </div>
      <div className="absolute top-[800px] left-0 opacity-5 pointer-events-none transform -scale-x-100">
         <Leaf size={300} />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-black h-16 flex items-center justify-between px-4 transition-all">
        <button onClick={onBack} className="p-2 text-black hover:bg-neutral-100 rounded-full border-2 border-transparent hover:border-black transition-all">
          <ArrowLeft size={20} className="stroke-[3]" />
        </button>
        <span className="text-xs font-black tracking-widest text-emerald-600 uppercase hidden md:block border-2 border-emerald-600 px-3 py-1 rounded-full">
            FEATURE STORY
        </span>
        <div className="flex space-x-2">
           <button className="p-2 text-black hover:bg-neutral-100 rounded-full border-2 border-transparent hover:border-black transition-all"><Bookmark size={20} /></button>
           <button className="p-2 text-black hover:bg-neutral-100 rounded-full border-2 border-transparent hover:border-black transition-all"><Share2 size={20} /></button>
        </div>
      </nav>

      {/* Header Section */}
      <header className="pt-12 pb-16 px-6 bg-white border-b-2 border-black relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-amber-400 to-pink-500" />
         <div className="max-w-4xl mx-auto text-center relative z-10">
             <div className="inline-block bg-black text-white text-xs font-black px-3 py-1 mb-6 transform -rotate-3">
                {article.type}
             </div>
             <h1 className="text-3xl md:text-5xl font-black text-black leading-tight mb-8 font-sans-jp drop-shadow-sm">
                {article.title}
             </h1>
             
             {/* Author Chip */}
             <div className="flex items-center justify-center mb-10">
                 <div className="flex items-center bg-neutral-100 border-2 border-black rounded-full px-2 py-1 pr-6 space-x-3">
                    <img src={`https://picsum.photos/seed/${article.author}/100/100`} alt="author" className="w-10 h-10 rounded-full border border-black grayscale" />
                    <div className="text-left">
                        <div className="text-xs font-black uppercase text-neutral-500">Written by</div>
                        <div className="text-sm font-bold text-black">{article.author}</div>
                    </div>
                 </div>
             </div>

             {/* Header Image Collage */}
             <div className="relative mx-auto max-w-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                 <div className="absolute inset-0 bg-emerald-400 transform translate-x-3 translate-y-3 border-2 border-black" />
                 <div className="relative border-2 border-black bg-white p-2">
                    <img src={article.heroImage} alt={article.title} className="w-full h-auto object-cover grayscale-[20%] contrast-125" />
                 </div>
                 {/* Decorative Stickers */}
                 <div className="absolute -bottom-4 -right-4 bg-amber-400 text-black font-black text-xs px-2 py-1 border-2 border-black">
                    {article.readTime}
                 </div>
             </div>
         </div>
      </header>

      {/* Content Body */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-xl font-bold text-neutral-600 font-serif-jp leading-relaxed mb-12 text-center italic border-b-2 border-dashed border-neutral-300 pb-10">
            {article.subtitle}
        </div>

        {/* Dynamic Blocks */}
        <div className="space-y-12">
            {article.blocks.map((block, index) => {
                if (block.type === 'heading') {
                    return (
                        <div key={index} className="relative mt-16 mb-8">
                            <div className="absolute -top-6 -left-4 text-emerald-200 -z-10">
                                <span className="text-6xl font-black opacity-50">#</span>
                            </div>
                            <h2 className="text-2xl font-black text-black leading-relaxed font-sans-jp border-b-4 border-emerald-500 inline-block pr-8">
                                {block.content}
                            </h2>
                        </div>
                    );
                } else if (block.type === 'quote') {
                    return (
                        <div key={index} className="relative my-12 mx-4 md:-mx-8">
                             <Quote size={40} className="absolute -top-4 -left-4 text-amber-400 fill-amber-100 transform -scale-x-100" />
                             <blockquote className="bg-white p-8 border-2 border-black shadow-hard-sm rounded-lg relative z-10">
                                <p className="text-xl font-bold font-sans-jp text-neutral-800 leading-loose text-center">
                                    “{block.content}”
                                </p>
                            </blockquote>
                        </div>
                    );
                } else if (block.type === 'image') {
                    return (
                        <figure key={index} className="my-12 -mx-4 md:-mx-12 relative group">
                            <div className="absolute inset-0 bg-black transform translate-x-2 translate-y-2" />
                            <img src={block.src} alt="Visual" className="relative z-10 w-full h-auto object-cover border-2 border-black grayscale-[20%] group-hover:grayscale-0 transition-all" />
                            {block.caption && (
                                <figcaption className="relative z-10 bg-black text-white text-xs font-bold inline-block px-3 py-1 mt-2 transform -skew-x-12 ml-4">
                                    <span className="transform skew-x-12 inline-block">{block.caption}</span>
                                </figcaption>
                            )}
                        </figure>
                    );
                } else {
                    const isFirstText = index === 0 || (index > 0 && article.blocks[index-1].type === 'heading');
                    return (
                        <p key={index} className={`text-[17px] leading-[2.0] text-neutral-800 tracking-wide font-medium ${isFirstText ? 'first-letter:text-5xl first-letter:font-black first-letter:text-emerald-600 first-letter:mr-2 first-letter:float-left' : ''}`}>
                            {block.content}
                        </p>
                    );
                }
            })}
        </div>

        {/* AI Insight Section */}
        <AIInsight articleContent={fullText} />

      </main>

      {/* Expert Comments Section */}
      <section className="bg-white py-16 px-6 border-t-2 border-black relative">
        <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-black text-black uppercase tracking-widest mb-10 flex items-center">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full mr-3 text-xs">PC</span>
                ProPicks Comments
            </h3>
            <div className="space-y-6">
                {article.comments.map(comment => (
                    <div key={comment.id} className="flex space-x-4 bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-emerald-400 transition-colors">
                        <div className="relative">
                            <img src={comment.avatar} alt={comment.author} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-wrap items-baseline gap-2 mb-2">
                                <span className="font-bold text-sm text-black">{comment.author}</span>
                                <span className="text-[10px] font-bold text-neutral-500 bg-neutral-200 px-2 py-0.5 rounded-full uppercase">{comment.role}</span>
                            </div>
                            <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                                {comment.content}
                            </p>
                            <div className="flex items-center text-neutral-400 text-xs space-x-6 font-bold">
                                <button className="flex items-center hover:text-pink-500 transition-colors group">
                                    <Heart size={14} className="mr-1 group-hover:fill-pink-500" /> {comment.likes}
                                </button>
                                <button className="hover:text-emerald-600 transition-colors">REPLY</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur border-t-2 border-black p-3 md:p-4 z-40">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-8">
                <button className="flex flex-col items-center text-neutral-400 hover:text-pink-500 transition-colors group">
                    <Heart size={24} className="group-hover:fill-pink-500 transition-all mb-0.5 stroke-[2.5]" />
                    <span className="text-[10px] font-black uppercase">Like</span>
                </button>
                <button className="flex flex-col items-center text-neutral-400 hover:text-black transition-colors">
                    <MessageSquare size={24} className="mb-0.5 stroke-[2.5]" />
                    <span className="text-[10px] font-black uppercase">Comment</span>
                </button>
            </div>
            <button className="bg-black text-white font-black text-sm px-8 py-3 rounded-full hover:bg-emerald-600 transition-all shadow-hard-sm border-2 border-transparent hover:border-black">
                Pick this Story
            </button>
        </div>
      </div>
    </div>
  );
};