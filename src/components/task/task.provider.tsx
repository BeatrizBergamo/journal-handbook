import React from "react";

import { TaskId, TaskModel, TaskStatus } from "@domain/model";
import { TasksContext } from "./task.context";
import { tasksMock } from "@data/mock";

export const TaskProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [task, setTask] = React.useState<TaskModel>();
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
    (newTask: Omit<TaskModel, "id">) => {
      setTasks((prev) => [...prev, { ...newTask, id: prev.length + 1 }]);
    },
    [setTasks],
  );

  const updateTask = React.useCallback(
    (id: TaskId, data: Partial<TaskModel>) => {
      if (id === task?.id) {
        setTask({ ...task, ...data });
      }

      setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, ...data } : task)));
    },
    [setTasks, setTask, task],
  );

  return (
    <TasksContext.Provider
      value={{ task, tasks, setTask, setTasks, getTasks, addTask, updateTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
