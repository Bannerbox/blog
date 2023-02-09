export type CATEGORY_TYPE = 'all' | 'engineering' | 'product' | 'startup-journey';

export type PostMetadata = {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;

  // Extra info
  link: string;
  category: string;
};
