export enum BannerBehaviorType {
  PlacementBehavior = 'PlacementBehavior',
  BecomeVisibleBehavior = 'BecomeVisibleBehavior',
  AnimateOnEntryBehavior = 'AnimateOnEntryBehavior',
  AnimateOnExitBehavior = 'AnimateOnExitBehavior',
  DismissableBehavior = 'DismissableBehavior',
  AlwaysShowOnPageLoadBehavior = 'AlwaysShowOnPageLoadBehavior',
  FixedOnScrollBehavior = 'FixedOnScrollBehavior',
  BlurBackgroundWhenVisible = 'BlurBackgroundWhenVisible',
}

export enum PlacementType {
  CUSTOM = 'custom',
  TOP = 'top',
  LEFT = 'left',
  BOTTOM = 'bottom',
  RIGHT = 'right',
  CENTER = 'center',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
}

export enum BecomeVisibleType {
  IMMEDIATELY = 'immediately',
  SECOND_DELAY_5 = '5-second-delay',
  SECOND_DELAY_10 = '10-second-delay',
  SECOND_DELAY_15 = '15-second-delay',
  SECOND_DELAY_20 = '20-second-delay',
  SECOND_DELAY_25 = '25-second-delay',
  SECOND_DELAY_30 = '30-second-delay',
  SECOND_DELAY_35 = '35-second-delay',
  SECOND_DELAY_40 = '40-second-delay',
  SECOND_DELAY_45 = '45-second-delay',
  SECOND_DELAY_50 = '50-second-delay',
  SECOND_DELAY_55 = '55-second-delay',
  SECOND_DELAY_60 = '60-second-delay',
  MINUTE_DELAY_2 = '2-minute-delay',
  AFTER_SCROLL = 'after-scroll',
  AFTER_SCROLL_TO_MIDDLE = 'after-scroll-to-middle',
  AFTER_SCROLL_TO_BOTTOM = 'after-scroll-to-bottom',
}

export enum AnimateOnEntryType {
  NONE = 'none',
  LEFT_TO_RIGHT = 'left-to-right',
  RIGHT_TO_LEFT = 'right-to-left',
  TOP_TO_BOTTOM = 'top-to-bottom',
  BOTTOM_TO_TOP = 'bottom-to-top',
  FADE_IN = 'fade-in',
}

export enum AnimateOnExitType {
  NONE = 'none',
  LEFT_TO_RIGHT = 'left-to-right',
  RIGHT_TO_LEFT = 'right-to-left',
  TOP_TO_BOTTOM = 'top-to-bottom',
  BOTTOM_TO_TOP = 'bottom-to-top',
  FADE_OUT = 'fade-out',
}

export type GenericPlacement = {
  type: BannerBehaviorType.PlacementBehavior;
  value: PlacementType;
};

export type HtmlTargetElement = {
  id: string;
  value: string;
};

export type CustomPlacement = {
  type: BannerBehaviorType.PlacementBehavior;
  value: PlacementType.CUSTOM;
  htmlTargetElements: HtmlTargetElement[];
};

export type PlacementBehavior = GenericPlacement | CustomPlacement;

export type BecomeVisibleBehavior = {
  type: BannerBehaviorType.BecomeVisibleBehavior;
  value: BecomeVisibleType;
};

export type AnimateOnEntryBehavior = {
  type: BannerBehaviorType.AnimateOnEntryBehavior;
  value: AnimateOnEntryType;
};

export type AnimateOnExitBehavior = {
  type: BannerBehaviorType.AnimateOnExitBehavior;
  value: AnimateOnExitType;
};

export type DismissableBehavior = {
  type: BannerBehaviorType.DismissableBehavior;
  value: boolean;
};

export type AlwaysShowOnPageLoadBehavior = {
  type: BannerBehaviorType.AlwaysShowOnPageLoadBehavior;
  value: boolean;
};

export type FixedOnScrollBehavior = {
  type: BannerBehaviorType.FixedOnScrollBehavior;
  value: boolean;
};

export type BlurBackgroundWhenVisible = {
  type: BannerBehaviorType.BlurBackgroundWhenVisible;
  value: boolean;
};

export type AllBehaviors =
  | PlacementBehavior
  | BecomeVisibleBehavior
  | AnimateOnEntryBehavior
  | AnimateOnExitBehavior
  | DismissableBehavior
  | AlwaysShowOnPageLoadBehavior
  | FixedOnScrollBehavior
  | BlurBackgroundWhenVisible;

export type BannerBehaviors = {
  placement: PlacementBehavior;
  becomeVisible: BecomeVisibleBehavior;
  animateOnEntry: AnimateOnEntryBehavior;
  animateOnExit: AnimateOnExitBehavior;
  dismissable: DismissableBehavior;
  alwaysShowOnPageLoad: AlwaysShowOnPageLoadBehavior;
  fixedOnScroll: FixedOnScrollBehavior;
  blurBackgroundWhenVisible: BlurBackgroundWhenVisible;
};
