export type BackgroundTaskStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed';

export type BackgroundTaskResultType = 'VIDEO' | 'IMAGE' | 'MUSIC';

export interface IBackgroundTask {
  id: string;
  type: string;
  status: BackgroundTaskStatus;
  progress: number;
  title: string;
  createdAt: string;
  completedAt: string | null;
  resultId?: string;
  resultType?: BackgroundTaskResultType;
  error?: string;
}

export interface IBackgroundTaskUpdateEvent {
  taskId: string;
  activityId?: string;
  status: BackgroundTaskStatus;
  progress?: number;
  resultId?: string;
  resultType?: BackgroundTaskResultType;
  error?: string;
  label?: string;
  timestamp?: string;
}

export interface IBackgroundTaskContextType {
  tasks: IBackgroundTask[];
  addTask: (task: IBackgroundTask) => void;
  updateTask: (taskId: string, updates: Partial<IBackgroundTask>) => void;
  removeTask: (taskId: string) => void;
  clearTasks: () => void;
  upsertTaskFromEvent: (event: IBackgroundTaskUpdateEvent) => void;
}
