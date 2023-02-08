import { css, SerializedStyles } from '@emotion/react';
import { DarkGrey } from 'components/bannerbox-shared/theme/colors';

const styles = css`
  button {
    height: 44px;
    background: none;
    border: none;
    color: ${DarkGrey.lightest};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: -2px;
  }
`;

type Props = {
  title: string;
  index: number;
  selectedIndex: number;
  onClickHandler: (index: number) => void;
};

const Tab = ({ title, index, selectedIndex, onClickHandler }: Props) => {
  const onClickButtonHandler = () => {
    onClickHandler(index);
  };

  let highLightColor: SerializedStyles | undefined;

  if (index === selectedIndex) {
    highLightColor = css`
      button {
        color: ${DarkGrey.ink};
        border-bottom: 2px solid ${DarkGrey.ink};
      }
    `;
  }

  return (
    <div css={[styles, highLightColor]}>
      <button onClick={onClickButtonHandler}>{title}</button>
    </div>
  );
};

export default Tab;
