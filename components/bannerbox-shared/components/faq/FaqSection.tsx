import { css } from '@emotion/react';
import FaqRow from './FaqRow';
import { FAQ } from 'components/pricing/faq-data';
import { BreakPoints } from 'components/bannerbox-shared/theme/breakpoints';

type Props = {
  title: string;
  faqs: FAQ[];
};

const styles = css`
  .heading {
    font-size: 42px;
    font-weight: inherit;
    margin-top: 155px;
    margin-bottom: 32px;
    text-align: left;
    @media (max-width: ${BreakPoints.mobile_414}) {
      font-size: 28px;
    }
  }
`;

const FaqSection = ({ title, faqs }: Props) => {
  return (
    <div css={styles}>
      <section>
        <h2 className="heading">{title}</h2>
      </section>
      <section role="list">
        {faqs.map((faqData, index) => {
          return <FaqRow key={index} faqData={faqData} />;
        })}
      </section>
    </div>
  );
};

export default FaqSection;
