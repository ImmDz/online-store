import { RootStore } from "store/store";
import { State } from "store/PopularCategories/slice";

export const getPopularCategories = (store: RootStore): State['categories'] => store.popularCategories.categories;
