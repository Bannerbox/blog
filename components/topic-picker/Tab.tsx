import { css, SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { DarkGrey } from 'components/bannerbox-shared/theme/colors';

const styles = css`
  a {
    display: block;
    height: 34px;
    background: none;
    border: none;
    color: ${DarkGrey.lightest};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: -2px;
    text-decoration: none;
  }
`;

type Props = {
  title: string;
  category: string;
};

const Tab = ({ title, category }: Props) => {
  const router = useRouter();
  const { blogCategory } = router.query;

  let highLightColor: SerializedStyles | undefined;

  // const viewAll = category.length === 0 && blogCategory === undefined;
  // if (blogCategory === category || viewAll) {
  //   highLightColor = css`
  //     a {
  //       color: ${DarkGrey.ink};
  //       border-bottom: 2px solid ${DarkGrey.ink};
  //     }
  //   `;
  // }

  return (
    <div css={[styles, highLightColor]}>
      <Link href={`/${category}`}>{title}</Link>
    </div>
  );
};

export default Tab;
