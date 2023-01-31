export enum BreakPoints {
  mobile_320 = '320px',
  mobile_375 = '375px',
  mobile_414 = '414px',
  tablet = '768px',
  smallMonitor = '992px',
  largeMonitor = '1200px',
}

export const breakPointToValue = (breakPoint: BreakPoints): number => {
  switch (breakPoint) {
    case BreakPoints.mobile_320:
      return 320;
    case BreakPoints.mobile_375:
      return 375;
    case BreakPoints.mobile_414:
      return 414;
    case BreakPoints.tablet:
      return 768;
    case BreakPoints.smallMonitor:
      return 992;
    case BreakPoints.largeMonitor:
      return 1200;
    default:
      return 0;
  }
};
