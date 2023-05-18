import { TaskModel, WishlistCategoryModel } from "@domain/model";

type CategoryMock = { categories: WishlistCategoryModel[] };
type TaskMock = { tasks: TaskModel[] };

export const tasksMock: TaskMock = require("./task.mock.json");
export const categoryMock: CategoryMock = require("./category.mock.json");
