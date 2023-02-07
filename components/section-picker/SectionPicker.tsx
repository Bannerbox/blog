import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { BreakPoints } from 'components/bannerbox-shared/theme/breakpoints';
import { sectionContainerStyles } from 'components/bannerbox-site-shared/section-container';
import { DarkGrey } from 'components/bannerbox-shared/theme/colors';
import Tab from './Tab';

const styles = css`
  display: flex;
  justify-content: center;
  .section-container {
    border-bottom: 2px solid ${DarkGrey.lightest};
    display: flex;
    align-items: center;
    @media (max-width: ${BreakPoints.mobile_414}) {
      display: block;
    }
  }

  .tab:not(last-child) {
    margin-right: 75px;
  }
`;

type TabInfo = {
  title: string;
  category: string;
};

const tabInfo: Array<TabInfo> = [
  { title: 'View All', category: '' },
  { title: 'Product', category: 'product' },
  { title: 'Engineering', category: 'engineering' },
  { title: 'Startup Journey', category: 'startup-journey' },
];

const CATEGORIES = tabInfo.map((info) => info.category);

const SectionPicker = () => {
  const router = useRouter();

  const onTabClickHandler = (index: number) => {
    router.push(`/${tabInfo[index].category}`, undefined, { shallow: true });
  };

  const { blogCategory } = router.query;
  const selectedIndex = Math.max(CATEGORIES.indexOf((blogCategory as string | undefined) ?? ''), 0);

  return (
    <div css={[styles, sectionContainerStyles]}>
      <div className="section-container">
        {tabInfo.map((info, index) => {
          const { title } = info;
          return (
            <div key={index} className="tab">
              <Tab title={title} index={index} selectedIndex={selectedIndex} onClickHandler={onTabClickHandler} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionPicker;
