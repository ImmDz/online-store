export interface Good {
    categoryTypeId: string;
    description: string;
    img: string;
    label: string;
    price: string;
    id: string;
}

export interface Category {
    type: string;
    label: string;
    id: string;
}

export interface PopularCategory {
    items: Good[];
    category: Category;
}