import fs from 'fs';
import path from 'path';
import Markdoc from '@markdoc/markdoc';
import yaml from 'js-yaml';

const dirPath = path.join('./pages', 'engineering');
const files = fs.readdirSync(dirPath);

type PostMetadata = {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
};

const postMetadata: Array<PostMetadata> = files.map((fileName) => {
  const filePath = path.join('./pages', 'engineering', fileName);
  const file = fs.readFileSync(filePath, 'utf-8');
  const ast = Markdoc.parse(file);

  const frontmatter = ast.attributes.frontmatter;
  const data = yaml.load(frontmatter) as PostMetadata;
  return data;
});

console.log(postMetadata, '---> metadata');

export {};
