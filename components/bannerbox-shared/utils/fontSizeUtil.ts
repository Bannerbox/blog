const DEFAULT_FONT_SIZE = { id: '14' };

const FONT_SIZES = [
  { id: '8' },
  { id: '9' },
  { id: '10' },
  { id: '11' },
  { id: '12' },
  DEFAULT_FONT_SIZE,
  { id: '18' },
  { id: '24' },
  { id: '30' },
  { id: '36' },
  { id: '48' },
  { id: '60' },
  { id: '72' },
  { id: '96' },
];

export const DEFAULT_FONT_SIZE_OPTION = { id: DEFAULT_FONT_SIZE.id, title: DEFAULT_FONT_SIZE.id };
export const FONT_SIZE_OPTIONS = FONT_SIZES.map((size) => ({ id: size.id, title: size.id }));
