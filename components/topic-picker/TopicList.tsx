import { css } from '@emotion/react';
import { PostMetadata } from 'types';
import { LightGrey, DarkGrey } from 'components/bannerbox-shared/theme/colors';
import Link from 'next/link';

const styles = css`
  color: ${DarkGrey.ink};

  .list {
    list-style-type: none;
    padding: 0;
    margin: 18px;
  }
  li {
    padding: 24px 0;
  }
  .image-container {
    height: 100px;
    width: 184px;
    background-color: ${LightGrey.sky};
    margin-right: 34px;
  }
  .cell-container {
    display: flex;
    border: 1px solid green;
  }
  .link {
    font-size: 20px;
  }
  .link a {
    color: ${DarkGrey.ink};
  }
  .description {
    font-size: 20px;
  }
  .content-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
  }
  .footer {
    display: flex;
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
              <div className="cell-container">
                <div className="image-container">
                  <img />
                </div>
                <div className="content-container">
                  <div className="body">
                    <div className="link">
                      <Link href={post.link}>{post.title}</Link>
                    </div>
                    <div className="description">{post.description}</div>
                  </div>
                  <div className="footer">
                    <div>{post.date}</div>
                    <div>{post.category}</div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicList;
