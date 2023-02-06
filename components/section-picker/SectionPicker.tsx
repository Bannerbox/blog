import { useState } from 'react';
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
};

const tabInfo: Array<TabInfo> = [
  { title: 'View All' },
  { title: 'Product' },
  { title: 'Engineering' },
  { title: 'Startup Journey' },
];

const SectionPicker = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onTabClickHandler = (index: number) => {
    setSelectedIndex(index);
  };

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
