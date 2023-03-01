import { css } from '@emotion/react';
import { PostMetadata } from 'types';
import Post from './Post';

const styles = css`
  .list {
    list-style-type: none;
    padding: 0;
    margin: 18px;
  }
  li {
    padding: 24px 0;
  }
`;

type Props = {
  posts: Array<PostMetadata>;
};

const TopicList = ({ posts }: Props) => {
  return (
    <div css={styles}>
      <ul className="list">
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicList;
