import type { IQuickAction } from './quick-actions.interface';
import type { ReactNode } from 'react';

export interface QuickActionsSubmenuProps {
  label: string;
  icon: ReactNode;
  actions: IQuickAction[];
  size?: 'sm' | 'md' | 'lg';
  onActionClick: (action: IQuickAction) => void;
  className?: string;
}
