import { css } from '@emotion/react';
import allPostsMetadata from 'public/all-posts-metadata.json';
import { useState } from 'react';
import { CATEGORY_TYPE, PostMetadata } from 'types';

const allPosts = allPostsMetadata as Record<CATEGORY_TYPE, Array<PostMetadata>>;

const styles = css`
  .list {
    list-style-type: none;
    padding: 0;
  }
`;

type Props = {
  category: CATEGORY_TYPE;
};

const TopicList = ({ category }: Props) => {
  const [posts] = useState(() => {
    switch (category) {
      case 'all': {
        const combined = Object.values(allPosts).flatMap((post) => post);
        return combined.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          if (dateA.getTime() < dateB.getTime()) {
            return 1;
          } else {
            return -1;
          }
        });
      }
      default:
        return allPosts[category];
    }
  });

  console.log(category, posts);

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
