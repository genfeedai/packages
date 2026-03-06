import type { IngredientStatus } from '@genfeedai/enums';
import type { IGenerationItem } from './generation.interface';
import type { IFormat, IIngredient } from '../index';

export interface IAssetSelectionContextType {
  selectedIngredient: IIngredient | null;
  currentFormat: IFormat | null;
  isGenerating: boolean;
  generatedAssetId: string | null;
  generatedAssetIds: string[];
  generationQueue: IGenerationItem[];
  activeGenerations: IGenerationItem[];

  setSelectedAsset: (ingredient: IIngredient | null) => void;
  setIsGenerating: (generating: boolean) => void;
  setCurrentFormat: (format: IFormat | null) => void;
  setGeneratedAssetId: (id: string | null) => void;
  setGeneratedAssetIds: (ids: string[]) => void;
  addToGenerationQueue: (item: IGenerationItem) => void;
  updateGenerationStatus: (
    id: string,
    status: IngredientStatus[],
    resultId?: string,
  ) => void;
  removeFromQueue: (id: string) => void;
  clearAll: () => void;
}
