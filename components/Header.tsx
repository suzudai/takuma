import React from 'react';
import { Search, Menu } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 font-sans" style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)' }}>
            {/* Top Accent Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-0.5 w-full"></div>

            {/* Top Utility Bar */}
            <div className="bg-gray-50/50 border-b border-gray-100 py-1.5 hidden md:block">
                <div className="container-custom flex justify-end space-x-6 text-xs text-gray-600 font-medium">
                    <a href="#" className="hover:text-blue-600 transition-colors">プレスリリース配信はこちら</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">企業の方へ</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">ログイン</a>
                </div>
            </div>

            {/* Main Bar */}
            <div className="container-custom h-16 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-xl font-semibold text-gray-900 tracking-tight">Melon Times</h1>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">ホーム</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">ビジネス</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">テクノロジー</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">ライフスタイル</a>
                </nav>

                {/* Right: Search & Mobile Menu */}
                <div className="flex items-center space-x-3">
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="キーワード検索..."
                            className="pl-3 pr-8 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm w-48 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors placeholder-gray-400"
                        />
                        <Search size={16} className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <button className="md:hidden p-2 text-gray-600">
                        <Menu size={22} />
                    </button>
                </div>
            </div>
        </header>
    );
};
