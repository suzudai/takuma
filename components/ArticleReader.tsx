import React, { useEffect } from 'react';
import { Article } from '../types';
import { ArrowLeft, Clock, Building2, User } from 'lucide-react';


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
        <div className="min-h-screen pb-12 font-sans text-gray-800">
            {/* Navigation */}
            <nav className="border-b border-gray-200 bg-white" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)' }}>
                <div className="container-custom h-14 flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <ArrowLeft size={18} className="mr-1.5" />
                        一覧に戻る
                    </button>
                    <div className="refined-badge">
                        {article.type}
                    </div>
                </div>
            </nav>

            <main className="container-custom py-8 max-w-4xl mx-auto">
                <div className="refined-card p-8 md:p-12">
                    {/* Header */}
                    <header className="mb-8 border-b border-gray-100 pb-8">
                        <div className="flex items-center text-xs font-medium text-blue-600 mb-4">
                            <span className="refined-badge">{article.type}</span>
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold leading-relaxed mb-4 text-gray-900">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center text-xs text-gray-500 gap-4 mb-6">
                            <div className="flex items-center">
                                <Clock size={14} className="mr-1.5" />
                                {article.publishedAt}
                            </div>
                            <div className="flex items-center">
                                <Building2 size={14} className="mr-1.5" />
                                {article.companyName}
                            </div>
                            <div className="flex items-center">
                                <User size={14} className="mr-1.5" />
                                {article.author}
                            </div>
                        </div>

                        <div className="relative w-full h-[320px] md:h-[400px] bg-gray-100 rounded-lg overflow-hidden border border-gray-100">
                            <img
                                src={article.heroImage}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Body */}
                        <div className="lg:col-span-12">
                            {/* Subtitle / Lead */}
                            <div className="text-lg font-bold text-gray-700 mb-10 leading-relaxed border-l-4 border-[#0b4eca] pl-4">
                                {article.subtitle}
                            </div>

                            <div className="space-y-8 mb-12">
                                {article.blocks.map((block, index) => {
                                    if (block.type === 'heading') {
                                        return (
                                            <h2 key={index} className="text-xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
                                                {block.content}
                                            </h2>
                                        );
                                    } else if (block.type === 'quote') {
                                        return (
                                            <blockquote key={index} className="bg-gray-50 p-6 rounded border-l-4 border-gray-300 my-8">
                                                <p className="font-bold text-gray-700 italic">
                                                    "{block.content}"
                                                </p>
                                            </blockquote>
                                        );
                                    } else if (block.type === 'image') {
                                        return (
                                            <figure key={index} className="my-8">
                                                <img
                                                    src={block.src}
                                                    alt="Article visual"
                                                    className="w-full rounded border border-gray-100"
                                                />
                                                {block.caption && (
                                                    <figcaption className="text-xs text-gray-500 mt-2 text-center">
                                                        {block.caption}
                                                    </figcaption>
                                                )}
                                            </figure>
                                        );
                                    } else {
                                        return (
                                            <p key={index} className="text-base leading-relaxed text-gray-700">
                                                {block.content}
                                            </p>
                                        );
                                    }
                                })}
                            </div>

                            {/* Comments Section */}
                            <div className="bg-gray-50 rounded p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                                    コメント <span className="ml-2 text-xs font-normal text-gray-500">({article.comments.length})</span>
                                </h3>
                                <div className="space-y-4">
                                    {article.comments.length > 0 ? (
                                        article.comments.map(comment => (
                                            <div key={comment.id} className="bg-white p-4 rounded border border-gray-100 shadow-sm">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="font-bold text-sm text-gray-800">{comment.author}</div>
                                                        <div className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">{comment.role}</div>
                                                    </div>
                                                    <div className="text-xs text-pink-500 font-bold">♥ {comment.likes}</div>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {comment.content}
                                                </p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-sm text-gray-400">コメントはまだありません。</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* Closes neo-panel */}
            </main>
        </div>
    );
};