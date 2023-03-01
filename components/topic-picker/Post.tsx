import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { PostMetadata } from 'types';
import { LightGrey, DarkGrey } from 'components/bannerbox-shared/theme/colors';
import Link from 'next/link';

const CELL_HEIGHT_IN_PIXELS = 100;

const styles = css`
  color: ${DarkGrey.ink};
  display: flex;

  .image-container {
    height: ${CELL_HEIGHT_IN_PIXELS}px;
    width: 184px;
    background-color: ${LightGrey.sky};
    margin-right: 34px;
  }
  .link {
    font-size: 20px;
    margin-bottom: 8px;
  }
  .link a {
    color: ${DarkGrey.ink};
  }
  .content-container {
    display: flex;
    height: ${CELL_HEIGHT_IN_PIXELS}px;
    flex-direction: column;
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
      <div className="image-container">
        <img />
      </div>
      <div className="content-container">
        <div className="body">
          <div className="link">
            <Link href={post.link}>{post.title}</Link>
          </div>
          <div className="summary">{post.description}</div>
        </div>
        <div className="footer">
          <div className="date">{formattedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
