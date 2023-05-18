export enum TaskStatus {
  ToDo = "ToDo",
  InProgress = "InProgress",
  Completed = "Completed",
}

export interface TaskModel {
  title: string;
  description?: string;
  status: TaskStatus;
  // TODO
  // createAt: Date;
  // updatedAt: Date;
}
