export type CATEGORY_TYPE = 'engineering' | 'product' | 'startup-journey';

export type PostMetadata = {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;

  thumbnail: string;

  // Extra info
  link: string;
  category: string;
};
