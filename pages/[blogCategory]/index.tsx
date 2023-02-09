import { useRouter } from 'next/router';
import TopicList from 'components/topic-picker/TopicList';
import { CATEGORY_TYPE } from 'types';

const Topic = () => {
  const router = useRouter();
  const { blogCategory } = router.query;
  return <TopicList category={blogCategory as CATEGORY_TYPE} />;
};

export default Topic;
