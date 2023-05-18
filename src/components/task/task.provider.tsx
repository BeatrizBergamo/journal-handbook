import React from "react";

import { TaskModel, TaskStatus } from "@domain/model";
import { TasksContext } from "./task.context";
import { tasksMock } from "@data/mock";

export const TaskProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [task, setTask] = React.useState<TaskModel>({} as TaskModel);
  const [tasks, setTasks] = React.useState<TaskModel[]>(tasksMock.tasks);

  const getTasks = React.useCallback(
    (status: TaskStatus | TaskStatus[]) => {
      return tasks.filter((value) =>
        Array.isArray(status) ? status.includes(value.status) : value.status === status,
      );
    },
    [tasks],
  );

  const addTask = React.useCallback(
    (newTask: TaskModel) => {
      setTasks((prev) => [...prev, newTask]);
    },
    [setTasks],
  );

  return (
    <TasksContext.Provider value={{ task, tasks, setTask, setTasks, getTasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
};
