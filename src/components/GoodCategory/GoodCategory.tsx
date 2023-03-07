import { FC } from 'react';
import { Good, Category } from 'types/general';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { getPopularLoadStatus } from '../../store/index';
import css from './goodCategory.module.css';

interface GoodCategoryProps {
    className?: string;
    goods: Good[];
    category: Category | null;
    popular?: boolean;
}

export const GoodCategory: FC<GoodCategoryProps> = ({ category, goods, popular }) => {
    const loadStatus = useSelector(getPopularLoadStatus);

    return (
        <section>
            <h2 className={css.title}>{`${category?.label}${popular ? '' : '. Популярные товары'}`}</h2>
            <ul className={css.list}>{goods.map((item) =>
                <li key={item.id}>
                    <ProductCard good={item} />
                </li>
            )}
            </ul>
        </section>
    )
}