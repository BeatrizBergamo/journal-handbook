import { TaskModel, WishlistCategoryModel } from "@domain/model";

export const tasksMock: { tasks: TaskModel[] } = require("./task.mock.json");
console.log(tasksMock);
export const categoryMock: {
  categories: WishlistCategoryModel[];
} = require("./category.mock.json");
