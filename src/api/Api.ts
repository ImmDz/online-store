import { Category, Good, PopularCategory } from "types/general";
import axios from "axios";

class Api {
  getCategories(): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios
          .get("/api/categories")
          .then(({ data }) => {
            resolve(data.categories);
          })
          .catch((error) => {
            reject(error);
          });
      }, 1_500);
    });
  }
  getGoods(id?: string): Promise<{ items: Good[]; total: number }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios
          .get("/api/goods", {
            params: {
              categoryTypeIds: id,
            },
          })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      }, 1_500);
    });
  }
  getPopularCategories(): Promise<PopularCategory[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios
          .get("/api/popular_categories")
          .then(({ data }) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      }, 1_500);
    });
  }

  // async getCategories(): Promise<Category[]> {
  //   return axios
  //     .get("/api/categories")
  //     .then((res) => res.data)
  //     .then(({ categories }) => categories);
  // }

  // getGoods(id?: string): Promise<{ items: Good[]; total: number }> {
  //   return axios
  //     .get("/api/goods", {
  //       params: {
  //         categoryTypeIds: id,
  //       },
  //     })
  //     .then((res) => res.data);
  // }

  // getPopularCategories(): Promise<PopularCategory[]> {
  //   return axios.get("/api/popular_categories").then((res) => res.data);
  // }
}

export const api = new Api();
