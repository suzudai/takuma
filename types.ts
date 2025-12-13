export enum ArticleType {
  FEATURE = '特集',
  HISTORY = '歴史',
  BUSINESS = 'ビジネス',
  INTERVIEW = 'インタビュー',
  DATA = 'データ'
}

export interface Comment {
  id: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
  likes: number;
}

export interface ArticleBlock {
  type: 'text' | 'image' | 'quote' | 'heading';
  content: string;
  src?: string; // for images
  caption?: string; // for images
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  type: ArticleType;
  author: string;
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  heroImage: string;
  summary: string;
  blocks: ArticleBlock[];
  comments: Comment[];
  pickCount: number;
}
