import { RGBAColor } from '../utils/colorUtils';

export enum BannerStyleType {
  FillStyle = 'FillStyle',
  BorderStyle = 'BorderStyle',
  RadiusStyle = 'RadiusStyle',
  MarginStyle = 'MarginStyle',
  PaddingStyle = 'PaddingStyle',
  SizeStyle = 'SizeStyle',
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
  type: BannerStyleType.FillStyle;
  enabled: boolean;
  color: RGBAColor;
  opacity: number;
};

export type BorderStyle = {
  type: BannerStyleType.BorderStyle;
  enabled: boolean;
  color: RGBAColor;
  width: number;
};

export type RadiusStyle = {
  type: BannerStyleType.RadiusStyle;
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
};

export type MarginStyle = {
  type: BannerStyleType.MarginStyle;
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type PaddingStyle = {
  type: BannerStyleType.PaddingStyle;
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type SizeStyle = {
  type: BannerStyleType.SizeStyle;
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

export enum AnchorType {
  fixed = 'fixed',
  flex = 'flex',
}

export type ContentPosition = {
  type: BannerStyleType.ContentPosition;
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
  | ContentPosition;

export type BannerStyles = {
  fillStyle?: FillStyle;
  borderStyle?: BorderStyle;
  radiusStyle?: RadiusStyle;
  marginStyle?: MarginStyle;
  paddingStyle?: PaddingStyle;
  sizeStyle: SizeStyle; // All banners should have a valid size
  contentPosition?: ContentPosition;
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

export type MandatoryBannerStyles = AlertMandatoryStyle;
