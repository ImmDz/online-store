import type { RootStore } from "../store";
import type { State } from "./slice";

export const getGoods = (store: RootStore): State['items'] => store.goods.items
export const getTotal = (store: RootStore): State['total'] => store.goods.total