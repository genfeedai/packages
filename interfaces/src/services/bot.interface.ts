import type {
  AlertFrequency,
  BotCategory,
  BotPlatform,
  BotScope,
  BotStatus,
  ContentSourceType,
  EngagementAction,
  MonitoringAlertType,
  PublishingFrequency,
} from '@genfeedai/enums';

export interface IBotTarget {
  platform: BotPlatform;
  channelId: string;
  channelLabel?: string;
  channelUrl?: string;
  isEnabled: boolean;
}

export interface IBotResponseTemplate {
  trigger: string;
  response: string;
}

export interface IBotSettings {
  messagesPerMinute: number;
  responseDelaySeconds: number;
  triggers: string[];
  responses: IBotResponseTemplate[];
}

export interface IEngagementBotSettings {
  actions: EngagementAction[];
  targetKeywords: string[];
  targetHashtags: string[];
  targetAccounts: string[];
  excludeAccounts: string[];
  actionsPerHour: number;
  actionsPerDay: number;
  minFollowers?: number;
  maxFollowers?: number;
  onlyVerified?: boolean;
  delayBetweenActions: number;
}

export interface IMonitoringBotSettings {
  keywords: string[];
  hashtags: string[];
  mentionAccounts: string[];
  excludeKeywords: string[];
  alertTypes: MonitoringAlertType[];
  alertEmail?: string;
  alertWebhookUrl?: string;
  alertSlackWebhookUrl?: string;
  alertFrequency: AlertFrequency;
  minEngagement?: number;
  onlyVerified?: boolean;
}

export interface IPublishingBotSettings {
  frequency: PublishingFrequency;
  customCronExpression?: string;
  timezone: string;
  contentSourceType: ContentSourceType;
  contentQueueId?: string;
  templateId?: string;
  aiPrompt?: string;
  maxPostsPerDay: number;
  scheduledTimes?: string[]; // HH:mm format
  daysOfWeek?: number[]; // 0-6 (Sunday-Saturday)
  autoHashtags?: string[];
  appendSignature?: string;
}

export interface IBot {
  id: string;
  createdAt: string;
  updatedAt: string;
  label: string;
  description?: string;
  category: BotCategory;
  status: BotStatus;
  scope: BotScope;
  organization?: string;
  brand?: string;
  user?: string;
  platforms: BotPlatform[];
  targets: IBotTarget[];
  settings: IBotSettings;
  engagementSettings?: IEngagementBotSettings;
  monitoringSettings?: IMonitoringBotSettings;
  publishingSettings?: IPublishingBotSettings;
  messagesCount: number;
  engagementsCount: number;
  alertsTriggered?: number;
  postsPublished?: number;
  lastActivityAt?: string;
}
