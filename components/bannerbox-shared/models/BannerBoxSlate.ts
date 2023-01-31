import { TextJustifyStyleType, BlockHeaderStyleType, ListStyleType } from '../utils/styleMap';

type Div = 'div';
type Heading = 'heading';
type Link = 'link';
type Image = 'image';
type List = 'list';
type ListItem = 'list-item';

export type BlockType = Div | Heading | Link | Image | List | ListItem;

export type DivStyle = {
  type: Div;
  align?: TextJustifyStyleType;
};

export type HeadingStyle = {
  type: Heading;
  value: BlockHeaderStyleType;
  align?: TextJustifyStyleType;
};

export type ImageStyle = {
  type: Image;
  value: string;
  align?: TextJustifyStyleType;
};

export type LinkStyle = {
  type: Link;
  value: string;
  align?: TextJustifyStyleType;
};

export type ListStyle = {
  type: List;
  value: ListStyleType;
};

export type ListItemStyle = {
  type: ListItem;
  align?: TextJustifyStyleType;
};

export type BlockStyle = DivStyle | HeadingStyle | ImageStyle | LinkStyle | ListStyle | ListItemStyle;

export type SupportsAlignStyle = DivStyle | HeadingStyle | ImageStyle | LinkStyle | ListItemStyle;

export type CustomElement = {
  blockStyle: BlockStyle;
  children: Array<CustomElement | CustomTextElement>;
};

export type CustomTextElement = {
  /**
   * Text styles. May or may not exist.
   */
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  hexColor?: string;
  fontSize?: string;
  fontFamily?: string;

  /**
   * Determines if the text should be highlighted when the editor looses focus.
   */
  highlighted?: boolean;

  text: string;
};

export const supportsAlignText = (type: BlockType): boolean => {
  return ['div', 'heading', 'image', 'link', 'list-item'].includes(type);
};
