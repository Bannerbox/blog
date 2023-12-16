import { BannerBehaviors } from './BehaviorTypes';
import { BannerStyles, MandatoryBannerStyles } from './BannerStyleTypes';
import { CustomElement } from './BannerBoxSlate';

export enum BannerType {
  BAR = 'BAR',
  MODAL = 'MODAL',
  SLIDER = 'SLIDER',
  ALERT = 'ALERT',
  FULL_PAGE = 'FULL_PAGE',
  CUSTOM = 'CUSTOM',
}

export enum PublishedState {
  DRAFT = 'DRAFT',
  PENDING_CHANGE = 'PENDING_CHANGE',
  PUBLISH = 'PUBLISH',
}

export type BannerCreate = {
  title: string;
  uiSettings: BannerUISettings;
};

export type BannerModel = {
  id: string;
  createdAt: string;
  updatedAt: string;

  title?: string;

  state: PublishedState;

  publishedAt?: string;
  publishedBannerDetailId?: string;

  draftBannerDetailId: string;
};

export type BannerDetail = {
  id: string;
  createdAt: string;
  updatedAt: string;

  uiSettingsId: string;

  bannerTargets: BannerTarget[];
};

export type BannerUISettings = {
  styles: BannerStyles;
  behaviors: BannerBehaviors;
  mandatoryStyles?: MandatoryBannerStyles;
  slatejsContent: Array<CustomElement>;
};

export type BannerTarget = {
  id: string;
  typeName: 'BannerTarget';
  createdAt: Date;
  updatedAt: Date;
  organizationId: string;
  matchingPagePath: string;

  bannerDetailId: string;
};

export type BannerTargetCreate = {
  id: string;
  typeName: 'BannerTargetCreate';
  matchingPagePath?: string;
};

export type BannerDetailUpdate = {
  targetUpdates?: TargetUpdates;
  uiSettings?: BannerUISettings;
};

export type TargetUpdates = {
  updateBannerTargets: BannerTarget[];
  deleteBannerTargetIds: string[];
  createBannerTargets: BannerTargetCreate[];
};

export type TemplateDefaults = {
  styles: BannerStyles;
  behaviors: BannerBehaviors;
  mandatoryStyles?: MandatoryBannerStyles;
};
