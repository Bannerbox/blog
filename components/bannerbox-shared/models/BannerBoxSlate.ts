import { Node } from 'slate';

import { JustifyStyle, BlockHeaderStyleType, ListStyleType } from '../utils/styleMap';
import {
  FillStyle,
  BorderStyle,
  RadiusStyle,
  MarginStyle,
  PaddingStyle,
  SizeStyle,
  ContentPosition,
  ImageStyle,
} from './BannerStyleTypes';

export type Button = 'button';
export type Container = 'container';
export type Div = 'div';
export type Heading = 'heading';
export type Link = 'link';
export type Image = 'image';
export type List = 'list';
export type ListItem = 'list-item';

export type BlockType = Button | Container | Div | Heading | Link | Image | List | ListItem;

export type InsertPositionType = 'top' | 'right' | 'bottom' | 'left';

// Layout direction of the container. Column is similar to block style and row is similar to flex style.
export type LayoutDirection = 'row' | 'column';

export type StyleVersion = '0.0.1';

export type ButtonStyle = {
  version: StyleVersion;
  type: Button;
  displayName: string;
  url?: string;
  styles: {
    align?: JustifyStyle;
    fillStyle: FillStyle;
    borderStyle: BorderStyle;
    radiusStyle: RadiusStyle;
    marginStyle: MarginStyle;
    paddingStyle: PaddingStyle;
    sizeStyle: SizeStyle;

    // TODO: Disable for now. Get this to work in the future.
    contentPosition?: ContentPosition;
  };
};

export type ContainerStyle = {
  version: StyleVersion;
  type: Container;
  displayName: string;
  isParentContainer: boolean;
  layoutDirection: LayoutDirection;
  styles: {
    fillStyle: FillStyle;
    borderStyle: BorderStyle;
    radiusStyle: RadiusStyle;
    marginStyle: MarginStyle;
    paddingStyle: PaddingStyle;
    sizeStyle: SizeStyle;
    backgroundImageStyle: ImageStyle;
    contentPosition: ContentPosition;
  };
};

// This refers to the image component that can be added the editor.
export type ImageComponentStyle = {
  version: StyleVersion;
  type: Image;
  displayName: string;
  styles: {
    align?: JustifyStyle;
    fillStyle: FillStyle;
    borderStyle: BorderStyle;
    radiusStyle: RadiusStyle;
    marginStyle: MarginStyle;
    paddingStyle: PaddingStyle;
    sizeStyle: SizeStyle;
    imageStyle: ImageStyle;
  };
};

export type DivStyle = {
  type: Div;
  align?: JustifyStyle;
};

export type HeadingStyle = {
  type: Heading;
  value: BlockHeaderStyleType;
  align?: JustifyStyle;
};

export type LinkStyle = {
  type: Link;
  value: string; // The link URL
  align?: JustifyStyle;
};

export type ListStyle = {
  type: List;
  value: ListStyleType;
};

export type ListItemStyle = {
  type: ListItem;
  align?: JustifyStyle;
};

export type BlockStyle =
  | ButtonStyle
  | ContainerStyle
  | DivStyle
  | HeadingStyle
  | ImageComponentStyle
  | LinkStyle
  | ListStyle
  | ListItemStyle;

export type SupportsAlignStyle =
  | ButtonStyle
  | DivStyle
  | HeadingStyle
  | ImageComponentStyle
  | LinkStyle
  | ListItemStyle;

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

export type ContainerElement = {
  blockStyle: ContainerStyle;
  children: Array<CustomElement | CustomTextElement>;
};

export type ElementAttributes = {
  [key: string]: any;
};

export const supportsAlignText = (type: BlockType): boolean => {
  return ['button', 'div', 'heading', 'image', 'link', 'list-item'].includes(type);
};

export const isContainerElement = (node: Node): node is ContainerElement => {
  return isCustomElement(node) && node.blockStyle.type === 'container';
};

export const isButtonEmpty = (node: Node): boolean => {
  if (isCustomElement(node) && node.blockStyle.type === 'button' && node.children.length === 1) {
    return isEmptyDivElement(node.children[0]);
  }

  return false;
};

export const isEmptyDivElement = (node: Node): boolean => {
  if (isCustomElement(node) && node.blockStyle.type === 'div' && node.children.length === 1) {
    const textElement = node.children[0];
    if (isTextElement(textElement)) {
      return textElement.text.length === 0;
    }
  }
  return false;
};

export const isTextElement = (node: Node): node is CustomTextElement => {
  return 'text' in node;
};

export const isCustomElement = (node: Node): node is CustomElement => {
  return 'blockStyle' in node;
};
