import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

export type StyleMap = {
  [styleName: string]: React.CSSProperties;
};

export enum InlineStyleType {
  CODE = 'CODE',
  BOLD = 'BOLD',
  ITALIC = 'ITALIC',
  UNDERLINE = 'UNDERLINE',
  SELECTION_TEXT_COLOR = 'SELECTION_TEXT_COLOR',
}

export enum FontFamilyInlineStyleType {
  ARIAL = 'arial',
  ARIAL_BLACK = 'arial-black',
  COMIC_SANS_MS = 'comic-sans-ms',
  COURIER_NEW = 'courier-new',
  GEORGIA = 'georgia',
  IMPACT = 'impact',
  LUCIDA_CONSOLE = 'lucida-console',
  LUCIDA_SANS_UNICODE = 'lucida-sans-unicode',
  PALATINO = 'palatino',
  TAHOMA = 'tahoma',
  TIMES_NEW_ROMAN = 'times-new-roman',
  TREBUCHET_MS = 'trebuchet_ms',
  VERDANA = 'verdana',
}

export enum BlockHeaderStyleType {
  NORMAL = 'bb-normal',
  TITLE = 'bb-title',
  SUBTITLE = 'bb-subtitle',
  HEADING_1 = 'bb-heading-1',
  HEADING_2 = 'bb-heading-2',
  HEADING_3 = 'bb-heading-3',
}

export enum JustifyStyle {
  LEFT = 'bb-left-justify',
  CENTER = 'bb-center-justify',
  RIGHT = 'bb-right-justify',
  FULL = 'bb-full-justify',
}

export enum ListStyleType {
  UNORDERED_LIST = 'unordered-list',
}

export const getTextAlignStyle = (align: JustifyStyle): SerializedStyles | undefined => {
  switch (align) {
    case JustifyStyle.LEFT:
      return css`
        text-align: left;
      `;
    case JustifyStyle.CENTER:
      return css`
        text-align: center;
      `;
    case JustifyStyle.RIGHT:
      return css`
        text-align: right;
      `;
    case JustifyStyle.FULL:
      return css`
        text-align: justify;
      `;
    default:
      return undefined;
  }
};

export const getHeaderStyles = (header: BlockHeaderStyleType): SerializedStyles | undefined => {
  switch (header) {
    case BlockHeaderStyleType.NORMAL:
      return css`
        font-size: 14px;
        display: block;
      `;
    case BlockHeaderStyleType.TITLE:
      return css`
        font-size: 34px;
        font-weight: 400;
        line-height: 1.2em;
        display: block;
      `;
    case BlockHeaderStyleType.SUBTITLE:
      return css`
        font-size: 20px;
        color: #666666;
        line-height: 1.2em;
        display: block;
      `;
    case BlockHeaderStyleType.HEADING_1:
      return css`
        font-size: 26px;
        line-height: 1.2em;
        display: block;
      `;
    case BlockHeaderStyleType.HEADING_2:
      return css`
        font-size: 21px;
        line-height: 1.2em;
        display: block;
      `;
    case BlockHeaderStyleType.HEADING_3:
      return css`
        font-size: 18px;
        color: #434343;
        line-height: 1.2em;
        display: block;
      `;
    default:
      return undefined;
  }
};

export const fontFamilyInlineStylesMap: StyleMap = {
  [FontFamilyInlineStyleType.ARIAL]: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  [FontFamilyInlineStyleType.ARIAL_BLACK]: {
    fontFamily: '"Arial Black", Gadget, sans-serif',
  },
  [FontFamilyInlineStyleType.COMIC_SANS_MS]: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  },
  [FontFamilyInlineStyleType.COURIER_NEW]: {
    fontFamily: '"Courier New", Courier, monospace',
  },
  [FontFamilyInlineStyleType.GEORGIA]: {
    fontFamily: 'Georgia, serif',
  },
  [FontFamilyInlineStyleType.IMPACT]: {
    fontFamily: 'Impact, Charcoal, sans-serif',
  },
  [FontFamilyInlineStyleType.LUCIDA_CONSOLE]: {
    fontFamily: '"Lucida Console", Monaco, monospace',
  },
  [FontFamilyInlineStyleType.LUCIDA_SANS_UNICODE]: {
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  },
  [FontFamilyInlineStyleType.PALATINO]: {
    fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  },
  [FontFamilyInlineStyleType.TAHOMA]: {
    fontFamily: 'Tahoma, Geneva, sans-serif',
  },
  [FontFamilyInlineStyleType.TIMES_NEW_ROMAN]: {
    fontFamily: '"Times New Roman", Times, serif',
  },
  [FontFamilyInlineStyleType.TREBUCHET_MS]: {
    fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
  },
  [FontFamilyInlineStyleType.VERDANA]: {
    fontFamily: 'Verdana, Geneva, sans-serif',
  },
};
