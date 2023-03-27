import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { PostMetadata } from 'types';
import { LightGrey, DarkGrey } from 'components/bannerbox-shared/theme/colors';
import Link from 'next/link';

const CELL_HEIGHT_IN_PIXELS = 100;

const styles = css`
  color: ${DarkGrey.ink};
  padding: 12px;

  :hover {
    background-color: ${LightGrey.lighter};
  }

  a {
    display: flex;
    text-decoration: unset;
    color: unset;
  }
  .image-container {
    height: ${CELL_HEIGHT_IN_PIXELS}px;
    width: 184px;
    background-color: ${LightGrey.sky};
    margin-right: 34px;
  }
  .title {
    font-size: 20px;
    margin-bottom: 8px;
    margin-top: 0;
  }
  .summary {
    font-size: 16px;
  }
  .content-container {
    display: flex;
    height: ${CELL_HEIGHT_IN_PIXELS}px;
    flex-direction: column;
    max-width: 600px;
  }
  .body {
    height: 100%;
  }
  .footer {
    display: flex;
    align-content: center;
  }
`;

type Props = {
  post: PostMetadata;
};

const Post = ({ post }: Props) => {
  const [formattedDate, setFormattedDate] = useState<string | undefined>();

  useEffect(() => {
    setFormattedDate(new Date(post.date).toLocaleDateString());
  }, []);

  return (
    <div className="post" css={styles}>
      <Link href={post.link}>
        <div className="image-container">
          <img src={post.thumbnail} width="184px" height="100px" />
        </div>
        <div className="content-container">
          <div className="body">
            <h2 className="title">{post.title}</h2>
            <div className="summary">{post.description}</div>
          </div>
          <div className="footer">
            <div className="date">{formattedDate}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
