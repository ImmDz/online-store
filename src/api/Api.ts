import { Category, Good, PopularCategory } from "types/general";
import  axios  from "axios";


class Api {
    getCategories(): Promise<Category[]> {
        return axios.get('/api/categories').then(res => res.data).then(({categories}) => categories);
    };
    getGoods(): Promise<{items: Good[], total: number}> {
        return axios.get('/api/goods').then(res => res.data);
    };
    getPopularCategories(): Promise<PopularCategory[]> {
        return axios.get('/api/popular_categories').then(res => res.data);
    };
}

export const api = new Api();