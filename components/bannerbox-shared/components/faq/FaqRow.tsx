import { css } from '@emotion/react';
import { FAQ } from 'components/pricing/faq-data';
import { useRef, useState } from 'react';
import SvgChevronDown from 'components/editor-app/editor/assets/SvgChevronDown';

type Props = {
  faqData: FAQ;
};

const styles = css`
  font-size: 16px;
  border-top: 1px solid;

  .question {
    font-weight: 500;
    font-size: 18px;
  }
  .question-container {
    display: flex;
    justify-content: space-between;
    margin: 22px 0;
  }
  .answer {
    overflow: hidden;
    transition: max-height 0.3s, margin-bottom 0.3s;
  }
`;

const FaqRow = ({ faqData }: Props) => {
  const [shouldShowAnswer, setShouldShowAnswer] = useState(false);
  const answerRef = useRef<HTMLDivElement | null>(null);

  const onClickHandler = () => {
    setShouldShowAnswer(!shouldShowAnswer);
  };

  let answerStyles = css`
    max-height: 0;
    margin-bottom: 0;
  `;

  let questionStyles = css``;

  if (shouldShowAnswer) {
    const answerHeight = answerRef.current?.offsetHeight;
    answerStyles = css`
      max-height: ${answerHeight}px;
      margin-bottom: 22px;
      transition: max-height 0.3, margin-bottom 0.3s;
    `;

    questionStyles = css`
      font-weight: bold;
    `;
  }

  const chevronStyles = css`
    transform: rotate(${shouldShowAnswer ? '180deg' : '0deg'});
    transition: transform 0.3s ease;
  `;

  return (
    <section css={styles} className="faq-row" role="listitem" onClick={onClickHandler}>
      <div className="question-container">
        <div className="question" css={questionStyles}>
          {faqData.question}
        </div>
        <span className="icon-wrapper" css={chevronStyles}>
          <SvgChevronDown styles={{}} />
        </span>
      </div>
      <div className="answer" css={answerStyles}>
        <div ref={answerRef}>{faqData.answer}</div>
      </div>
    </section>
  );
};

export default FaqRow;
