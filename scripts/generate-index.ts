import fs from 'fs';
import path from 'path';
import Markdoc from '@markdoc/markdoc';
import yaml from 'js-yaml';

type CATEGORY_FOLDER_TYPES = 'engineering' | 'product' | 'startup-journey';

type PostMetadata = {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;

  // Extra info
  link: string;
  category: string;
};

const getCategoryMetadata = (category: CATEGORY_FOLDER_TYPES): Array<PostMetadata> => {
  // Read the directory
  const dirPath = path.join('./pages', category);
  const files = fs.readdirSync(dirPath);

  // Read the file content individually
  const postMetadata: Array<PostMetadata> = files.map((fileName) => {
    const filePath = path.join('./pages', category, fileName);
    const file = fs.readFileSync(filePath, 'utf-8');

    // Parse the data
    const ast = Markdoc.parse(file);
    const frontmatter = ast.attributes.frontmatter;
    const data = yaml.load(frontmatter) as PostMetadata;

    // Massage the data
    data.link = path.join(category, fileName.split('.')[0]);
    data.category = category;
    return data;
  });

  // Newest ranked highest first
  const sortedMetadata = postMetadata.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA.getTime() < dateB.getTime()) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedMetadata;
};

const engineeringMetadata = getCategoryMetadata('engineering');
const productMetadata = getCategoryMetadata('product');
const startupJourneyMetadata = getCategoryMetadata('startup-journey');

const allMetadata: Record<CATEGORY_FOLDER_TYPES, Array<PostMetadata>> = {
  engineering: engineeringMetadata,
  product: productMetadata,
  'startup-journey': startupJourneyMetadata,
};

console.log(allMetadata);

let dataToWrite = JSON.stringify(allMetadata);
fs.writeFileSync(path.join('./public/all-posts-metadata.json'), dataToWrite);

export {};
