import TopicList from 'components/topic-picker/TopicList';
import { CATEGORY_TYPE, PostMetadata } from 'types';
import { GetStaticProps } from 'next';
import getPostMetadata from 'scripts/getPostMetadata';

type Props = {
  posts: Array<PostMetadata>;
};

const Topic = ({ posts }: Props) => {
  return <TopicList posts={posts} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogCategory = context.params?.blogCategory as CATEGORY_TYPE | undefined;
  const posts = blogCategory ? getPostMetadata()[blogCategory] : [];
  return {
    props: {
      posts,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      // { params: { blogCategory: 'engineering' } },
      { params: { blogCategory: 'product' } },
      // { params: { blogCategory: 'startup-journey' } },
    ],
    // Next will pre-render only these paths at build time other routes will 404.
    fallback: false,
  };
}

export default Topic;
