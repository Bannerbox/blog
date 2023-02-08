import { css } from '@emotion/react';
import TopicPicker from 'components/topic-picker/TopicPicker';

const styles = css`
  .list {
    list-style-type: none;
    padding: 0;
  }
`;

type Post = {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
};

type Props = {
  topic: string;
};

const TopicList = ({ topic }: Props) => {
  // TODO: Get the proper list of items
  const post: Post = {
    title: 'Title',
    description: 'Description',
    image: 'image',
    date: 'date',
    author: 'author',
  };

  const items = [...Array(10).keys()];

  return (
    <div css={styles}>
      <ul className="list">
        {items.map((_, index) => {
          return (
            <li key={index}>
              <div>
                <div>{post.title + index}</div>
                <div>{post.description}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicList;
