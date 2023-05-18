import React from "react";

import { TaskModel, TaskStatus } from "@domain/model";

export interface TasksContextProps {
  tasks: TaskModel[];
  task: TaskModel | null;
  setTask(task: TaskModel): void;
  setTasks(tasks: TaskModel[]): void;
  getTasks(status: TaskStatus | TaskStatus[]): TaskModel[];
}

export const TasksContext = React.createContext<TasksContextProps>({
  tasks: [],
  task: null,
  setTask: () => null,
  setTasks: () => null,
  getTasks: () => [],
});
