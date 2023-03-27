import fs from 'fs';
import path from 'path';
import Markdoc from '@markdoc/markdoc';
import yaml from 'js-yaml';
import { CATEGORY_TYPE, PostMetadata } from 'types';

const getCategoryMetadata = (category: CATEGORY_TYPE): Array<PostMetadata> => {
  // Read the directory
  let files = [];
  try {
    const dirPath = path.join('./pages', category);
    files = fs.readdirSync(dirPath);
  } catch {
    return [];
  }

  // Read the file content individually
  const postMetadata: Array<PostMetadata> = files.map((fileName) => {
    const filePath = path.join('./pages', category, fileName);
    const file = fs.readFileSync(filePath, 'utf-8');

    // Parse the data
    const ast = Markdoc.parse(file);
    const frontmatter = ast.attributes.frontmatter;
    const data = yaml.load(frontmatter) as PostMetadata;

    const fileNameWithoutPath = fileName.split('.')[0];

    // Massage the data
    data.link = path.join(category, fileNameWithoutPath);
    data.category = category;
    data.date = data.date.toString();
    data.thumbnail = path.join('/blog/posts', fileNameWithoutPath, 'thumbnail.png');
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
  // @ts-ignore // Disable for now until there are more blog posts.
  const allMetadata: Record<CATEGORY_TYPE, Array<PostMetadata>> = {
    engineering: getCategoryMetadata('engineering'),
    product: getCategoryMetadata('product'),
    'startup-journey': getCategoryMetadata('startup-journey'),
  };
  return allMetadata;
};

export default getPostMetadata;
