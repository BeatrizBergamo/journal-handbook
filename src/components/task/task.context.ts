import React from "react";

import { TaskId, TaskModel, TaskStatus } from "@domain/model";

export interface TasksContextProps {
  tasks: TaskModel[];
  task: TaskModel | undefined;
  setTask(task?: TaskModel): void;
  updateTask(id: TaskId, data: Partial<TaskModel>): void;
  setTasks(tasks: TaskModel[]): void;
  addTask(task: Omit<TaskModel, "id">): void;
  getTasks(status: TaskStatus | TaskStatus[]): TaskModel[];
}

export const TasksContext = React.createContext<TasksContextProps>({
  tasks: [],
  task: undefined,
  setTask: () => null,
  setTasks: () => null,
  addTask: () => null,
  getTasks: () => [],
  updateTask: () => null,
});
