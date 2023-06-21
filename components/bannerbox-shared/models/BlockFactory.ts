import { StyleType, SizeUnit, ImageFitStyle } from './BannerStyleTypes';
import { ButtonStyle, ImageComponentStyle, ContainerStyle, LayoutDirection } from './BannerBoxSlate';
import {
  BorderStyle,
  FillStyle,
  RadiusStyle,
  MarginStyle,
  PaddingStyle,
  ContentPosition,
  AnchorType,
} from './BannerStyleTypes';

const BORDER_STYLE: BorderStyle = {
  type: StyleType.BorderStyle,
  enabled: false,
  color: {
    r: 0,
    g: 0,
    b: 0,
  },
  width: 1,
};

const CONTENT_POSITION: ContentPosition = {
  type: StyleType.ContentPosition,
  top: AnchorType.flex,
  right: AnchorType.flex,
  bottom: AnchorType.flex,
  left: AnchorType.flex,
};

const FILL_STYLE: FillStyle = {
  type: StyleType.FillStyle,
  enabled: true,
  color: {
    r: 255,
    g: 255,
    b: 255,
  },
  opacity: 100,
};

const MARGIN_STYLE: MarginStyle = {
  type: StyleType.MarginStyle,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const PADDING_STYLE: PaddingStyle = {
  type: StyleType.PaddingStyle,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const RADIUS_STYLE: RadiusStyle = {
  type: StyleType.RadiusStyle,
  topLeft: 0,
  topRight: 0,
  bottomLeft: 0,
  bottomRight: 0,
};

export const createButtonBlockStyle = (): ButtonStyle => {
  const widthValue = 80;
  const heightValue = 20;
  const radiusValue = heightValue * 0.5;

  const style: ButtonStyle = {
    type: 'button',
    displayName: 'Button',
    url: undefined,
    styles: {
      align: undefined,
      fillStyle: FILL_STYLE,
      borderStyle: {
        type: StyleType.BorderStyle,
        enabled: true,
        color: {
          r: 0,
          g: 0,
          b: 0,
        },
        width: 1,
      },
      radiusStyle: {
        type: StyleType.RadiusStyle,
        topLeft: radiusValue,
        topRight: radiusValue,
        bottomLeft: radiusValue,
        bottomRight: radiusValue,
      },
      marginStyle: MARGIN_STYLE,
      paddingStyle: {
        type: StyleType.PaddingStyle,
        top: 4,
        right: 8,
        bottom: 4,
        left: 8,
      },
      contentPosition: undefined,
      sizeStyle: {
        type: StyleType.SizeStyle,
        width: {
          enabled: false,
          value: widthValue,
          unit: SizeUnit.pixels,
        },
        height: {
          enabled: false,
          value: heightValue,
          unit: SizeUnit.pixels,
        },
      },
    },
  };
  return style;
};

export const createImageBlockStyle = (): ImageComponentStyle => {
  const style: ImageComponentStyle = {
    type: 'image',
    displayName: 'Image',
    imageDetails: undefined,
    styles: {
      align: undefined,
      fillStyle: FILL_STYLE,
      borderStyle: BORDER_STYLE,
      radiusStyle: RADIUS_STYLE,
      marginStyle: MARGIN_STYLE,
      paddingStyle: PADDING_STYLE,
      sizeStyle: {
        type: StyleType.SizeStyle,
        width: {
          enabled: true,
          value: 100,
          unit: SizeUnit.percent,
        },
        height: {
          enabled: true,
          value: 100,
          unit: SizeUnit.percent,
        },
      },
      imageStyle: {
        type: StyleType.ImageStyle,
        position: {
          type: StyleType.PositionStyle,
          x: {
            value: 0,
            unit: SizeUnit.pixels,
          },
          y: {
            value: 0,
            unit: SizeUnit.pixels,
          },
        },
        fit: ImageFitStyle.contain,
        altText: '',
        size: undefined,
      },
    },
  };
  return style;
};

export const createContainerBlockStyle = (props: {
  layoutDirection: LayoutDirection;
  isParentContainer: boolean;
}): ContainerStyle => {
  const { layoutDirection, isParentContainer } = props;

  const style: ContainerStyle = {
    type: 'container',
    displayName: 'Container',
    isParentContainer,
    layoutDirection,
    styles: {
      fillStyle: FILL_STYLE,
      borderStyle: BORDER_STYLE,
      radiusStyle: RADIUS_STYLE,
      marginStyle: MARGIN_STYLE,
      paddingStyle: PADDING_STYLE,
      sizeStyle: {
        type: StyleType.SizeStyle,
        width: {
          enabled: true,
          value: 100,
          unit: SizeUnit.percent,
        },
        height: {
          enabled: true,
          value: 100,
          unit: SizeUnit.percent,
        },
      },
      contentPosition: CONTENT_POSITION,
    },
  };
  return style;
};
