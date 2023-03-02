import { FC } from 'react';
import { PopularCategory } from 'types/general';
import { ProductCard } from 'components/ProductCard/ProductCard';

interface GoodCategoryProps {
    className: string;
    popular_category: PopularCategory;
}

export const GoodCategory: FC<GoodCategoryProps> = ({ popular_category }) => {
    return (
        <section className='good_category' style={{height: "650px"}}>
            <h2 style={{backgroundColor: "green", textAlign: "center"}}>{`${popular_category.category.label}. Популярные товары`}</h2>
            <ul style={{display: "flex", flexWrap: "wrap", gap: "100px 10px", listStyle: "none", textAlign: "center", padding: "0"}}>{popular_category.items.map((item) =>
                <li key={Math.floor(Math.random() * 5000)}>
                    <ProductCard good={item}/>
                </li>
            )}
            </ul>
        </section>
    )
}