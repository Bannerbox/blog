export type ImageModel = {
  __type: 'ImageModel';
  id: string;
  fileName: string;

  // The type of image. e.g. jpg, png, svg
  type: string;

  widthInPixels: number;
  heightInPixels: number;
  sizeInBytes: number;
};
