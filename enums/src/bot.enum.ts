import { Platform } from './platform.enum';
import { Scope } from './scope.enum';

export enum BotCategory {
  CHAT = 'chat',
  COMMENT = 'comment',
  ENGAGEMENT = 'engagement',
  MONITORING = 'monitoring',
  PUBLISHING = 'publishing',
}

export const BotScope = {
  BRAND: Scope.BRAND,
  ORGANIZATION: Scope.ORGANIZATION,
  USER: Scope.USER,
} as const;

export type BotScope = (typeof BotScope)[keyof typeof BotScope];

export const BotPlatform = {
  TWITCH: Platform.TWITCH,
  TWITTER: Platform.TWITTER,
  YOUTUBE: Platform.YOUTUBE,
} as const;

export type BotPlatform = (typeof BotPlatform)[keyof typeof BotPlatform];

export enum BotStatus {
  ACTIVE = 'active',
  PAUSED = 'paused',
  INACTIVE = 'inactive',
}

export enum EngagementAction {
  LIKE = 'like',
  FOLLOW = 'follow',
  RETWEET = 'retweet',
  BOOKMARK = 'bookmark',
}

export enum MonitoringAlertType {
  EMAIL = 'email',
  WEBHOOK = 'webhook',
  IN_APP = 'in_app',
  SLACK = 'slack',
}

export enum PublishingFrequency {
  HOURLY = 'hourly',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  CUSTOM = 'custom',
}
