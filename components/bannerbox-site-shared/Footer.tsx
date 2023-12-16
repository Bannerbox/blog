import { css } from '@emotion/react';
import Logo from './Logo';
import { sectionContainerStyles } from 'components/bannerbox-site-shared/section-container';
import { BreakPoints } from 'components/bannerbox-shared/theme/breakpoints';

const styles = css`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 100px;
  padding-bottom: 100px;

  .section-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${BreakPoints.mobile_414}) {
      display: block;
    }
  }

  .logo {
    margin-bottom: 16px;
  }
  .copyright {
    font-size: 14px;
    font-weight: 400;
  }
  .privacy-policy {
    margin-top: 40px;
    font-size: 16px;
  }
  a {
    text-decoration: inherit;
    color: inherit;
    font-style: normal;
  }
`;

const linkColumnStyles = css`
  display: flex;
  font-size: 16px;

  @media (max-width: ${BreakPoints.mobile_414}) {
    margin-top: 100px;
  }

  .column:not(:last-child) {
    margin-right: 100px;
  }
  .title {
    margin-bottom: 14px;
    font-weight: bold;
  }
  .column div {
    margin-bottom: 14px;
  }
`;

const Footer = () => {
  const todayDate = new Date();
  return (
    <footer css={[styles, sectionContainerStyles]}>
      <div className="section-container">
        <div className="logo-container">
          <div className="logo">
            <Logo />
          </div>
          <div className="copyright">©{todayDate.getFullYear()} Bannerbox</div>
          <div className="privacy-policy">
            <a href="/docs/privacy">Privacy Policy</a>
          </div>
        </div>
        <div css={linkColumnStyles} className="links">
          <div className="column">
            <div className="title">Connect</div>
            <div>
              <a href="/blog">Blog</a>
            </div>
            <div>
              <a href="/docs">Documentation</a>
            </div>
            <div>
              <address className="contact">
                <a href="mailto:info@bannerbox.io">Contact Us</a>
              </address>
            </div>
            <div>
              <a href="https://twitter.com/Bannerboxio" target="_blank">
                Twitter
              </a>
            </div>
          </div>
          <div className="column">
            <div className="title">Product</div>
            <div>
              <a href="/#how-it-works">How it Works</a>
            </div>
            <div>
              <a href="/#value-props">Use Cases</a>
            </div>
            <div>
              <a href="/pricing">Pricing</a>
            </div>
            <div>
              <a href="https://apps.shopify.com/bannerbox" target="_blank">
                Shopify App
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
