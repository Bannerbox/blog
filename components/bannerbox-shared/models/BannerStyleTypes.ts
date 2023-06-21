import { RGBAColor } from '../utils/colorUtils';

export enum StyleType {
  FillStyle = 'FillStyle',
  BorderStyle = 'BorderStyle',
  RadiusStyle = 'RadiusStyle',
  MarginStyle = 'MarginStyle',
  PaddingStyle = 'PaddingStyle',
  SizeStyle = 'SizeStyle',
  PositionStyle = 'PositionStyle', // Refers to x,y position
  ImageStyle = 'ImageStyle',
  ContentPosition = 'ContentPosition',
}

// Banner types that have styling that's not customizable by the user.
export enum MandatoryStyleType {
  Alert = 'Alert',
}

export enum SizeUnit {
  pixels = 'pixels',
  percent = 'percent',
}

export type FillStyle = {
  type: StyleType.FillStyle;
  enabled: boolean;
  color: RGBAColor;
  opacity: number;
};

export type BorderStyle = {
  type: StyleType.BorderStyle;
  enabled: boolean;
  color: RGBAColor;
  width: number;
};

export type RadiusStyle = {
  type: StyleType.RadiusStyle;
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
};

export type MarginStyle = {
  type: StyleType.MarginStyle;
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type PaddingStyle = {
  type: StyleType.PaddingStyle;
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type SizeStyle = {
  type: StyleType.SizeStyle;
  width: {
    enabled: boolean;
    value: number;
    unit: SizeUnit;
  };
  height: {
    enabled: boolean;
    value: number;
    unit: SizeUnit;
  };
};

export type PositionStyle = {
  type: StyleType.PositionStyle;
  x: {
    value: number;
    unit: SizeUnit.pixels;
  };
  y: {
    value: number;
    unit: SizeUnit.pixels;
  };
};

export type ImageStyle = {
  type: StyleType.ImageStyle;
  position: PositionStyle;
  fit: ImageFitStyle;
  altText: string;
  size?: SizeStyle;
};

export enum AnchorType {
  fixed = 'fixed',
  flex = 'flex',
}

export type ContentPosition = {
  type: StyleType.ContentPosition;
  top: AnchorType;
  right: AnchorType;
  bottom: AnchorType;
  left: AnchorType;
};

export type AllStyles =
  | FillStyle
  | BorderStyle
  | RadiusStyle
  | MarginStyle
  | PaddingStyle
  | SizeStyle
  | PositionStyle
  | ImageStyle
  | ContentPosition;

export type BannerStyles = {
  type: 'banner';
  fillStyle: FillStyle;
  borderStyle: BorderStyle;
  radiusStyle: RadiusStyle;
  marginStyle: MarginStyle;
  paddingStyle: PaddingStyle;
  sizeStyle: SizeStyle; // All banners should have a valid size
  contentPosition: ContentPosition;
};

export type AlertMandatoryStyle = {
  type: MandatoryStyleType.Alert;
  circle: {
    radius: {
      value: number;
      unit: SizeUnit;
    };
  };
};

export enum ImageFitStyle {
  // Preserving aspect ratio, attempt to ensure the image covers both provided dimensions by cropping/clipping to fit.
  cover = 'cover',

  // Preserving aspect ratio, contain within both provided dimensions using "letterboxing" where necessary.
  contain = 'contain',

  // Ignore the aspect ratio of the input and stretch to both provided dimensions.
  fill = 'fill',

  // Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.
  inside = 'inside',

  // Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified.
  outside = 'outside',
}

export type MandatoryBannerStyles = AlertMandatoryStyle;
