import fs from 'fs';
import path from 'path';
import Markdoc from '@markdoc/markdoc';
import yaml from 'js-yaml';
import { CATEGORY_TYPE, PostMetadata } from 'types';

const getCategoryMetadata = (category: CATEGORY_TYPE): Array<PostMetadata> => {
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
    data.date = data.date.toString();
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

const getPostMetadata = () => {
  const allMetadata: Record<CATEGORY_TYPE, Array<PostMetadata>> = {
    engineering: getCategoryMetadata('engineering'),
    product: getCategoryMetadata('product'),
    'startup-journey': getCategoryMetadata('startup-journey'),
  };
  return allMetadata;
};

export default getPostMetadata;
