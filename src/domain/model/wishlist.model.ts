export type CategoryId = string | number;

export interface WishlistCategoryModel {
  id: CategoryId;
  title: string;
  description?: string;
}
