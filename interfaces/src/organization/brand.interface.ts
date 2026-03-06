import { AssetScope } from '@genfeedai/enums';
import type {
  IAsset,
  IBaseEntity,
  ICredential,
  ILink,
  IOrganization,
  IUser,
} from '../index';

export interface IBrand extends IBaseEntity {
  user: IUser;
  organization: IOrganization;
  credentials: ICredential[];
  links: ILink[];

  label: string;
  description: string;
  text?: string;
  handle: string;

  logo?: IAsset;
  banner?: IAsset;
  references?: IAsset[];

  logoUrl?: string;
  bannerUrl?: string;
  primaryReferenceUrl?: string;

  fontFamily: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;

  voice?: string;
  music?: string;

  defaultVideoModel?: string;
  defaultImageModel?: string;
  defaultImageToVideoModel?: string;
  defaultMusicModel?: string;

  views?: number;
  totalCredentials?: number;

  youtubeHandle?: string;
  youtubeUrl?: string;

  tiktokHandle?: string;
  tiktokUrl?: string;

  instagramHandle?: string;
  instagramUrl?: string;

  twitterHandle?: string;
  twitterUrl?: string;

  linkedinHandle?: string;
  linkedinUrl?: string;

  twitterDeepLink?: string;
  tiktokDeepLink?: string;
  instagramDeepLink?: string;
  youtubeDeepLink?: string;
  linkedinDeepLink?: string;

  isVerified: boolean;
  isDefault: boolean;
  scope: AssetScope;
  isActive: boolean;
  isSelected: boolean;
  isHighlighted?: boolean;

  agentConfig?: IBrandAgentConfig;
}

export interface IBrandAgentVoice {
  tone?: string;
  style?: string;
  audience?: string[];
  values?: string[];
}

export interface IBrandAgentStrategy {
  contentTypes?: string[];
  platforms?: string[];
  frequency?: string;
  goals?: string[];
}

export interface IBrandAgentAutoPublish {
  /** Backend stores as `enabled` — aliased here to match project boolean convention */
  isEnabled?: boolean;
  enabled?: boolean;
  confidenceThreshold?: number;
}

export interface IBrandAgentConfig {
  defaultModel?: string;
  defaultVoiceId?: string;
  defaultAvatarPhotoUrl?: string;
  persona?: string;
  enabledSkills?: string[];
  voice?: IBrandAgentVoice;
  strategy?: IBrandAgentStrategy;
  autoPublish?: IBrandAgentAutoPublish;
}
