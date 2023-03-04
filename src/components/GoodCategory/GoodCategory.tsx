import { FC } from 'react';
import { PopularCategory } from 'types/general';
import { ProductCard } from 'components/ProductCard/ProductCard';
import css from './goodCategory.module.css';

interface GoodCategoryProps {
    className: string;
    popular_category: PopularCategory;
}

export const GoodCategory: FC<GoodCategoryProps> = ({ popular_category }) => {
    return (
        <section>
            <h2 className={css.goodCategory__title}>{`${popular_category.category.label}. Популярные товары`}</h2>
            <ul className={css.goodCategory__list}>{popular_category.items.map((item) =>
                <li key={item.id}>
                    <ProductCard good={item}/>
                </li>
            )}
            </ul>
        </section>
    )
}