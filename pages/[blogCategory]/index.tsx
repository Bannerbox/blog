import { useRouter } from 'next/router';
import TopicList from 'components/topic-picker/TopicList';
import { CATEGORY_TYPE } from 'types';
import { GetStaticProps } from 'next';

type Props = {
  category: CATEGORY_TYPE;
};

const Topic = ({ category }: Props) => {
  const router = useRouter();
  const { blogCategory } = router.query;
  return <TopicList category={blogCategory as CATEGORY_TYPE} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogCategory = context.params?.blogCategory;
  return {
    props: {
      category: blogCategory,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { blogCategory: 'engineering' } },
      { params: { blogCategory: 'product' } },
      { params: { blogCategory: 'startup-journey' } },
    ],
    fallback: false,
  };
}

export default Topic;
