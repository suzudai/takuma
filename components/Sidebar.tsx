import React from 'react';
import { Article } from '../types';

interface SidebarProps {
    rankingArticles: Article[];
    onArticleClick: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ rankingArticles, onArticleClick }) => {
    return (
        <div className="space-y-6">
            {/* Ranking Section */}
            <div className="refined-card overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-3.5 font-semibold text-sm flex items-center">
                    <span className="mr-2">🏆</span> アクセスランキング
                </div>
                <div className="divide-y divide-gray-100">
                    {rankingArticles.map((article, index) => (
                        <div
                            key={article.id}
                            className="p-4 hover:bg-gray-50 cursor-pointer group flex items-start transition-colors"
                            onClick={() => onArticleClick(article.id)}
                        >
                            <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center text-xs font-semibold rounded-md mr-3 ${index < 3 ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-500'}`}>
                                {index + 1}
                            </span>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 leading-tight mb-1 line-clamp-2">
                                    {article.title}
                                </h4>
                                <p className="text-xs text-gray-500">{article.companyName}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-3 text-center border-t border-gray-100 bg-gray-50">
                    <a href="#" className="text-xs text-blue-600 font-semibold hover:text-blue-700 hover:underline">ランキング一覧を見る →</a>
                </div>
            </div>

            {/* Keywords Section */}
            <div className="refined-card p-5">
                <h3 className="font-semibold text-sm text-gray-900 mb-3 flex items-center">
                    <span className="mr-2 text-blue-600">#</span> 注目のキーワード
                </h3>
                <div className="flex flex-wrap gap-2">
                    {['メロン', '歴史', '高級フルーツ', '農業', 'テクノロジー', '世界', '甘味', '栽培', 'ビジネス'].map(tag => (
                        <span
                            key={tag}
                            className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all cursor-pointer border border-gray-200 hover:border-blue-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Concept Section */}
            <div className="refined-card p-6 relative overflow-hidden group bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>

                <h3 className="font-semibold text-sm text-blue-100 mb-4 flex items-center relative z-10">
                    <span className="mr-2">🚀</span> Our Vision
                </h3>
                <p className="text-sm leading-relaxed text-white/95 mb-6 relative z-10">
                    <strong className="block text-base text-white mb-2">「世界にワクワクを」</strong>
                    この場に入れば、新しい発見があり、自分の生活を変える出会いがある。
                </p>
                <button className="w-full bg-white text-blue-600 text-sm font-semibold py-2.5 rounded-lg hover:bg-blue-50 transition-all relative z-10 shadow-sm">
                    掲載についてのお問い合わせ
                </button>
            </div>

            {/* Banner Area */}
            <div className="bg-gray-100 border border-gray-200 h-40 flex items-center justify-center text-gray-400 text-xs rounded-lg">
                広告エリア
            </div>
        </div>
    );
};
