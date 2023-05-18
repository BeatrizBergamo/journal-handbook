export enum TaskStatus {
  ToDo = "ToDo",
  InProgress = "InProgress",
  Completed = "Completed",
}

// todo -> use server id when the server was integrated
export type TaskId = string | number;

export interface TaskModel {
  id: TaskId;
  title: string;
  description?: string;
  status: TaskStatus;
  // TODO
  // createAt: Date;
  // updatedAt: Date;
}
