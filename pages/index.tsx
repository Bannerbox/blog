import { GetStaticProps } from 'next';
import TopicList from 'components/topic-picker/TopicList';
import getPostMetadata from 'scripts/getPostMetadata';
import { PostMetadata } from 'types';

type Props = {
  posts: Array<PostMetadata>;
};

const AllTopics = ({ posts }: Props) => {
  return <TopicList posts={posts} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getPostMetadata();

  const combined = Object.values(posts).flatMap((post) => post);
  const sortedPosts = combined.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA.getTime() < dateB.getTime()) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

export default AllTopics;
