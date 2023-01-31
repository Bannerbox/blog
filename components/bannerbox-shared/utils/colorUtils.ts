export interface RGBAColor {
  r: number;
  g: number;
  b: number;
  a?: number;
}

export const hexToRGBAColor = (hexColorString: string): RGBAColor => {
  var hexColor = parseInt(hexColorString.replace(/^#/, ''), 16);
  return {
    r: (hexColor >> 16) & 0xff,
    g: (hexColor >> 8) & 0xff,
    b: hexColor & 0xff,
    a: 1,
  };
};

export const rgbaColorToHex = (color: RGBAColor): string => {
  const colorString = '#' + ((1 << 24) + (color.r << 16) + (color.g << 8) + color.b).toString(16).slice(1);
  return colorString.toUpperCase();
};

export const getBlackOrWhiteBasedOnColor = (color: RGBAColor): RGBAColor => {
  //stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
  if (color.r * 0.299 + color.g * 0.587 + color.b * 0.114 > 186) {
    return {
      r: 0,
      g: 0,
      b: 0,
    };
  } else {
    return {
      r: 1,
      g: 1,
      b: 1,
    };
  }
};
