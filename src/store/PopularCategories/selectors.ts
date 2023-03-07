import { RootStore } from "store/store";
import { State } from "store/PopularCategories/slice";

export const getPopularCategories = (store: RootStore): State["categories"] =>
  store.popularCategories.categories;

export const getPopularLoadStatus = (store: RootStore): State["load_status"] =>
  store.popularCategories.load_status;
