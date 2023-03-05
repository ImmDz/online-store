import { FC } from 'react';
import { Good, Category } from 'types/general';
import { ProductCard } from 'components/ProductCard/ProductCard';
import css from './goodCategory.module.css';

interface GoodCategoryProps {
    className?: string;
    goods: Good[];
    category: Category;
}

export const GoodCategory: FC<GoodCategoryProps> = ({ category, goods }) => {
    return (
        <section>
            <h2 className={css.goodCategory__title}>{`${category.label}. Популярные товары`}</h2>
            <button onClick={() => console.log(category.label)}>show label</button>
            <ul className={css.goodCategory__list}>{goods.map((item) =>
                <li key={item.id}>
                    <ProductCard good={item}/>
                </li>
            )}
            </ul>
        </section>
    )
}