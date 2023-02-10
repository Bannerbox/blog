import { css } from '@emotion/react';
import { PostMetadata } from 'types';

const styles = css`
  .list {
    list-style-type: none;
    padding: 0;
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
              <div>
                <div>{post.title}</div>
                <div>{post.description}</div>
                <div>{post.image}</div>
                <div>{post.date}</div>
                <div>{post.category}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicList;
