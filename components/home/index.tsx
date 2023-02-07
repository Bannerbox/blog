import { css } from '@emotion/react';
import SectionPicker from 'components/section-picker/SectionPicker';

const styles = css`
  display: block;
  height: 100%;

  .section-picker {
    margin-top: 85px;
  }
`;

const HomePage = () => {
  return (
    <div css={styles}>
      <div className="section-picker">
        <SectionPicker />
      </div>
    </div>
  );
};

export default HomePage;
