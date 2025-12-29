import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-16 text-gray-600 text-sm">
            <div className="border-t-2 border-blue-600 w-full"></div>
            <div className="container-custom py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="font-bold mb-3 text-gray-800">Melon Timesについて</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">会社概要</a></li>
                        <li><a href="#" className="hover:underline">プレスリリース一覧</a></li>
                        <li><a href="#" className="hover:underline">ブログ</a></li>
                        <li><a href="#" className="hover:underline">採用情報</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-3 text-gray-800">サービス</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">報道関係者の方へ</a></li>
                        <li><a href="#" className="hover:underline">企業の方へ</a></li>
                        <li><a href="#" className="hover:underline">料金プラン</a></li>
                        <li><a href="#" className="hover:underline">導入事例</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-3 text-gray-800">サポート</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">ヘルプセンター</a></li>
                        <li><a href="#" className="hover:underline">お問い合わせ</a></li>
                        <li><a href="#" className="hover:underline">プライバシーポリシー</a></li>
                        <li><a href="#" className="hover:underline">利用規約</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-3 text-gray-800">メディアの方へ</h4>
                    <p className="mb-4">
                        新たな発見と、生活を変える出会いを。Melon Timesは、未来を切り拓く技術とサービスを、深く、広く届けるプラットフォームです。
                    </p>
                    <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-4 text-center">
                <p>&copy; 2024 Melon Times Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
