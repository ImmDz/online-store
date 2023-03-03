import { Category, Good, PopularCategory } from "types/general";


class Api {
    getCategories(): Promise<Category[]> {
        return fetch('/api/categories').then(res => res.json().then((data) => data.categories));
    };
    getGoods(): Promise<Good[]> {
        return fetch('/api/goods').then(r => r.json()).then(data => data.items)  
    };
    getPopularCategories(): Promise<PopularCategory[]> {
        return fetch('/api/popular_categories').then(r => r.json());
    }
}

export const api = new Api();