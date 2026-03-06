export enum AgentRunFrequency {
  EVERY_6_HOURS = 'every_6_hours',
  TWICE_DAILY = 'twice_daily',
  DAILY = 'daily',
}

export enum AgentRunStatus {
  COMPLETED = 'completed',
  FAILED = 'failed',
  BUDGET_EXHAUSTED = 'budget_exhausted',
}

export enum AgentType {
  GENERAL = 'general',
  X_CONTENT = 'x_content',
  IMAGE_CREATOR = 'image_creator',
  VIDEO_CREATOR = 'video_creator',
  AI_AVATAR = 'ai_avatar',
  ARTICLE_WRITER = 'article_writer',
}

export enum AgentAutonomyMode {
  SUPERVISED = 'supervised',
  AUTO_PUBLISH = 'auto_publish',
}
