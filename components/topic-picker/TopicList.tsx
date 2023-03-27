import { css } from '@emotion/react';
import { PostMetadata } from 'types';
import Post from './Post';
import { BreakPoints } from 'components/bannerbox-shared/theme/breakpoints';

const styles = css`
  .list {
    list-style-type: none;
    padding: 0;
    margin: 18px;

    @media (max-width: ${BreakPoints.mobile_414}) {
      margin-left: unset;
      margin-right: unset;
    }
  }
  li {
    padding: 24px 0;
    @media (max-width: ${BreakPoints.mobile_414}) {
      padding: unset;
    }
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
