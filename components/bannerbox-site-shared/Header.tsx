import Link from 'next/link';
import { css } from '@emotion/react';

import Logo from './Logo';
import { BreakPoints } from '../bannerbox-shared/theme/breakpoints';
import { commonBoxShadow } from '../bannerbox-shared/theme/box-shadow';
import { BrandColors } from '../bannerbox-shared/theme/colors';
import { sectionContainerStyles } from './section-container';

const styles = css`
  display: flex;
  justify-content: center;

  .section-container {
    display: flex;
    justify-content: space-between;
    padding-top: 48px;
    @media (max-width: ${BreakPoints.mobile_414}) {
      display: block;
    }
  }

  .signup-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${BrandColors.yellow};
    height: 48px;
    width: 132px;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .header-options {
    display: flex;
    align-items: center;
    @media (max-width: ${BreakPoints.mobile_414}) {
      margin-top: 24px;
    }
  }
  .header-options a {
    color: inherit;
    font-size: 16px;
  }
  .header-options .option {
    padding-right: 32px;
  }
  .signup-link {
    display: none;
    @media (max-width: ${BreakPoints.mobile_414}) {
      display: block;
    }
  }
  .signup-button {
    @media (max-width: ${BreakPoints.mobile_414}) {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <div css={[styles, sectionContainerStyles]} className="header">
      <div className="section-container">
        <Logo />
        <div className="header-options">
          <span className="docs-link option">
            <Link href="https://www.bannerbox.io/docs">Docs</Link>
          </span>
          <span className="pricing-link option">
            <Link href="/pricing">Pricing</Link>
          </span>
          <span className="option">
            <Link href="/signin">Sign In</Link>
          </span>
          <span className="signup-link">
            <Link href="/signup">Sign Up</Link>
          </span>
          <span css={commonBoxShadow} className="signup-button">
            <Link href="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
