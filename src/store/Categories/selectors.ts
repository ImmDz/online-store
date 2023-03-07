import type { RootStore } from "../store";
import type { State } from "./slice";

export const getCategories = (store: RootStore): State["categories"] =>
  store.categories.categories;
export const getCategoriesLoadStatus = (
  store: RootStore
): State["load_status"] => store.categories.load_status;
