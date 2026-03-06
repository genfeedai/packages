import type {
  BatchItemStatus,
  BatchStatus,
  ContentFormat,
  ReferenceImageCategory,
} from '@genfeedai/enums';

/**
 * Reference image attached to a brand for consistent generation
 */
export interface IBrandReferenceImage {
  url: string;
  category: ReferenceImageCategory;
  label?: string;
  isDefault?: boolean;
}

/**
 * Content mix distribution (percentages must sum to 100)
 */
export interface IContentMixConfig {
  imagePercent: number;
  videoPercent: number;
  carouselPercent: number;
  reelPercent: number;
  storyPercent: number;
}

/**
 * Request to create a batch generation job
 */
export interface IBatchGenerationRequest {
  count: number;
  brandId: string;
  platforms: string[];
  topics?: string[];
  contentMix?: IContentMixConfig;
  dateRange: {
    start: string;
    end: string;
  };
  style?: string;
  referenceImages?: string[];
}

/**
 * Single item within a batch generation job
 */
export interface IBatchItem {
  id: string;
  batchId: string;
  format: ContentFormat;
  status: BatchItemStatus;
  prompt?: string;
  caption?: string;
  mediaUrl?: string;
  postId?: string;
  platform?: string;
  scheduledDate?: string;
  error?: string;
  createdAt: string;
}

/**
 * Summary of a batch generation job with all items
 */
export interface IBatchSummary {
  id: string;
  status: BatchStatus;
  totalCount: number;
  completedCount: number;
  failedCount: number;
  pendingCount: number;
  brandId: string;
  platforms: string[];
  contentMix: IContentMixConfig;
  items: IBatchItem[];
  createdAt: string;
  completedAt?: string;
}
