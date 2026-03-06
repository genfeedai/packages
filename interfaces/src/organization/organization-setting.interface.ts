import type { IBaseEntity } from '../index';

export interface IOrganizationSetting extends IBaseEntity {
  isWhitelabelEnabled: boolean;
  isVoiceControlEnabled: boolean;

  isNotificationsDiscordEnabled: boolean;
  isNotificationsEmailEnabled: boolean;
  isWatermarkEnabled: boolean;
  isVerifyScriptEnabled: boolean;
  isVerifyIngredientEnabled: boolean;
  isVerifyVideoEnabled: boolean;
  isGenerateVideosEnabled: boolean;
  isGenerateArticlesEnabled: boolean;
  isGenerateImagesEnabled: boolean;
  isGenerateMusicEnabled: boolean;
  isAutoEvaluateEnabled: boolean;

  isWebhookEnabled: boolean;
  webhookEndpoint?: string;
  webhookSecret?: string;

  seatsLimit: number;
  brandsLimit: number;
  timezone?: string;

  enabledModels?: string[];
  subscriptionTier?: string;

  isAdvancedMode: boolean;
  agentReplyStyle?: string;

  defaultVoiceId?: string;
  defaultAvatarPhotoUrl?: string;

  isByokEnabled?: boolean;
  byokOpenrouterApiKey?: string;
  byokKeys?: Record<
    string,
    {
      provider: string;
      apiKey: string;
      apiSecret?: string;
      isEnabled: boolean;
      lastValidatedAt?: Date;
    }
  >;
}
