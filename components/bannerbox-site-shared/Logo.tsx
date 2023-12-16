import Link from 'next/link';
import { css } from '@emotion/react';

const styles = css`
  font-size: 34px;
  font-weight: bold;
  a {
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none;
  }
`;

const Logo = () => {
  return (
    <div css={styles}>
      <span className="link">
        <Link href="/">Bannerbox</Link>
      </span>
    </div>
  );
};

export default Logo;
