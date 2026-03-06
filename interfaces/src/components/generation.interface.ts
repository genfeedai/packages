import type { IngredientStatus } from '@genfeedai/enums';

export interface IGenerationItem {
  id: string;
  type: 'image' | 'video' | 'music' | 'avatar';
  prompt: string;
  model: string;
  startTime: Date;
  status: IngredientStatus[];
  error?: string;
  resultId?: string;
}

export interface IGenerationState {
  items: IGenerationItem[];
  activeCount: number;
  maxConcurrent: number;
}
