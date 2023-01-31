import { css } from '@emotion/react';
import { BreakPoints } from '../bannerbox-shared/theme/breakpoints';

export const sectionContainerStyles = css`
  .section-container {
    width: 1024px;
    margin-left: 40px;
    margin-right: 40px;
    @media (max-width: ${BreakPoints.tablet}) {
      width: 100%;
      margin-left: 32px;
      margin-right: 32px;
    }
    @media (max-width: ${BreakPoints.mobile_414}) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`;
