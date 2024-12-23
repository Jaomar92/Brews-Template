export interface Article {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  author: string;
  categories?: string[];
}

export interface RSSFeedResponse {
  items: Article[];
}
