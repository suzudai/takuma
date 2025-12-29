import React from 'react';
import { Article } from '../types';

interface PressReleaseListProps {
    articles: Article[];
    onArticleClick: (id: string) => void;
}

export const PressReleaseList: React.FC<PressReleaseListProps> = ({ articles, onArticleClick }) => {
    return (
        <div className="refined-card">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                    <span className="w-1 h-6 bg-blue-600 rounded-full mr-3"></span>
                    新着プレスリリース
                </h2>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline flex items-center group">
                    一覧を見る
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
            <div className="divide-y divide-gray-100">
                {articles.map((article) => (
                    <article
                        key={article.id}
                        className="p-5 hover:bg-gray-50 transition-colors cursor-pointer group flex items-start"
                        onClick={() => onArticleClick(article.id)}
                    >
                        <div className="flex-1 pr-4">
                            <div className="flex items-center text-xs text-gray-500 mb-2 space-x-3">
                                <span className="font-medium">{article.publishedAt.split(' ')[0]}</span>
                                <span className="refined-badge">{article.type}</span>
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 leading-snug mb-2 line-clamp-2">
                                {article.title}
                            </h3>
                            <p className="text-xs text-gray-600 font-medium mb-1">{article.companyName}</p>
                            <p className="text-xs text-gray-500 line-clamp-2">{article.summary}</p>
                        </div>
                        {article.imageUrl && (
                            <div className="w-24 h-16 sm:w-32 sm:h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                <img src={article.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
};
