import { SerializedStyles, css } from '@emotion/react';
import { ContentPosition, AnchorType, ImageStyle } from '../models/BannerStyleTypes';
import getAssetHostUri from '../utils/getAssetHostUri';

export const getContentPositionStyles = (contentPosition: ContentPosition): SerializedStyles[] => {
  const styles: SerializedStyles[] = [
    css`
      display: flex;
    `,
  ];

  let alignItemsStyle;
  if (contentPosition?.top === AnchorType.fixed && contentPosition?.bottom === AnchorType.fixed) {
    alignItemsStyle = css`
      align-items: center;
    `;
  } else if (contentPosition?.top === AnchorType.fixed) {
    alignItemsStyle = css`
      align-items: flex-start;
    `;
  } else if (contentPosition?.bottom === AnchorType.fixed) {
    alignItemsStyle = css`
      align-items: flex-end;
    `;
  } else {
    alignItemsStyle = css`
      align-items: center;
    `;
  }

  let justifyContentStyle;
  if (contentPosition?.left === AnchorType.fixed && contentPosition?.right === AnchorType.fixed) {
    justifyContentStyle = css`
      justify-content: space-evenly;
    `;
  } else if (contentPosition?.left === AnchorType.fixed) {
    justifyContentStyle = css`
      justify-content: flex-start;
    `;
  } else if (contentPosition?.right === AnchorType.fixed) {
    justifyContentStyle = css`
      justify-content: flex-end;
    `;
  } else {
    justifyContentStyle = css`
      justify-content: center;
    `;
  }

  styles.push(alignItemsStyle);
  styles.push(justifyContentStyle);
  return styles;
};

type BackgroundImageStyles = {
  containerSize: {
    width: number;
    height: number;
  };
  backgroundImageStyle: ImageStyle;
};

export const getBackgroundImageStyles = ({
  containerSize,
  backgroundImageStyle,
}: BackgroundImageStyles): SerializedStyles | undefined => {
  const { imageDetails, position } = backgroundImageStyle;
  if (!imageDetails) {
    return undefined;
  }

  let backgroundStyles: SerializedStyles | undefined;
  const imageSrc = [getAssetHostUri(), 'images', imageDetails.id, `original.${imageDetails.type}`].join('/');

  const containerWidth = containerSize.width;
  const containerHeight = containerSize.height;

  let imageWidth = containerWidth;
  let imageHeight = containerHeight;

  const scaleX = containerWidth / imageDetails.widthInPixels;
  const scaleY = containerHeight / imageDetails.heightInPixels;

  let xPositionInPixels = position.x.value;
  let yPositionInPixels = position.y.value;

  switch (backgroundImageStyle.fit) {
    // Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.
    case 'inside': {
      const scale = Math.min(scaleX, scaleY);
      imageWidth = imageDetails.widthInPixels * scale;
      imageHeight = imageDetails.heightInPixels * scale;

      const xOffset = (containerWidth - imageWidth) / 2;
      const yOffset = (containerHeight - imageHeight) / 2;

      xPositionInPixels = xPositionInPixels + xOffset;
      yPositionInPixels = yPositionInPixels + yOffset;

      backgroundStyles = css`
        background-image: url(${imageSrc});
        background-size: ${imageWidth}px ${imageHeight}px;
        background-position: ${xPositionInPixels}px ${yPositionInPixels}px;
        background-repeat: no-repeat;
      `;
      break;
    }
    // Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified.
    case 'outside': {
      const scale = Math.max(scaleX, scaleY);
      imageWidth = imageDetails.widthInPixels * scale;
      imageHeight = imageDetails.heightInPixels * scale;

      const yOffset = (containerHeight - imageHeight) / 2;
      const xOffset = (containerWidth - imageWidth) / 2;

      xPositionInPixels = xPositionInPixels + xOffset;
      yPositionInPixels = yPositionInPixels + yOffset;

      backgroundStyles = css`
        background-image: url(${imageSrc});
        background-size: ${imageWidth}px ${imageHeight}px;
        background-position: ${xPositionInPixels}px ${yPositionInPixels}px;
        background-repeat: no-repeat;
      `;
      break;
    }
    case 'fill': {
      backgroundStyles = css`
        background-image: url(${imageSrc});
        background-size: ${imageWidth}px ${imageHeight}px;
        background-position: ${xPositionInPixels}px ${yPositionInPixels}px;
        background-repeat: no-repeat;
      `;
      break;
    }
    case 'cover':
    case 'contain':
    default:
      backgroundStyles = css`
        background-image: url(${imageSrc});
        background-size: ${backgroundImageStyle.fit};
        background-position: ${xPositionInPixels}px ${yPositionInPixels}px;
        background-repeat: no-repeat;
      `;
      break;
  }
  return backgroundStyles;
};
