// export interface Good {
//     categoryTypeId: string;
//     description: string;
//     img: string;
//     label: string;
//     price: string;
// }

class Api {
    getCategories() {
        return fetch('/api/categories').then(res => res.json().then((data) => data.categories));
    };
    getGoods() {
        return fetch('/api/goods?categoryTypeIds=5').then(r => r.json()).then(data => data.items)      
    };
    getPopularCategories() {
        return fetch('/api/popular_categories').then(r => r.json());
    }
}

export const api = new Api();