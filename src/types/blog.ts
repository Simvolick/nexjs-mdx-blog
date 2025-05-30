export interface FrontMatter {
  title?: string;
  description?: string;
  date?: string;
  thumbnailUrl?: string;
  [key: string]: any;
}

export interface Post {
  frontMatter: FrontMatter;
  slug: string;
  jsonDate: string;
} 