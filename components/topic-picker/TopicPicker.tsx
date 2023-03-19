import { css } from '@emotion/react';
import { DarkGrey } from 'components/bannerbox-shared/theme/colors';
import Tab from './Tab';

const styles = css`
  display: flex;
  border-bottom: 2px solid ${DarkGrey.lightest};

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

const TopicPicker = () => {
  return (
    <div css={[styles]}>
      {tabInfo.map((info, index) => {
        const { title } = info;
        return (
          <div key={index} className="tab">
            <Tab category={info.category} title={title} />
          </div>
        );
      })}
    </div>
  );
};

export default TopicPicker;
