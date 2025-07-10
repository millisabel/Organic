export type ParagraphBlock = {
  type: 'paragraph';
  text: string;
};

export type HeadingBlock = {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
};

export type ListBlock = {
  type: 'list';
  ordered: boolean;
  items: string[];
};

export type QuoteBlock = {
  type: 'quote';
  text: string;
};

export type NewsContentBlock = ParagraphBlock | HeadingBlock | ListBlock | QuoteBlock;

export interface News {
  id: number;
  date: string;
  author: string;
  title: string;
  description: string;
  imageUrl: string;
  intro: string;
  content: NewsContentBlock[];
}
