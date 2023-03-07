import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { GoodCategory } from 'components/GoodCategory/GoodCategory';
import { getGoods, getCategories, getCategoriesLoadStatus } from '../store/index';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import type { Category } from 'types/general';
import css from './pages.module.css';

export const CategoryPage: FC = () => {
    const goods = useSelector(getGoods);
    const loadStatus = useSelector(getCategoriesLoadStatus);
    const categories = useSelector(getCategories);
    const { id } = useParams();
    const [category, setCategory] = useState<Category | null>(null);

    useEffect(() => {
        categories.length > 0 && setCategory(categories?.find((item) => item.id === id)!);
    }, [id, categories])

    if (!categories) {
        return <span><p>Категория не найдена, <Link to="/">вернуться назад</Link></p></span>
    }

    return (
        <>
            {loadStatus === "LOADING" ? <div className={css.loading}><Spin tip={loadStatus} /></div> : <GoodCategory goods={goods} category={category} popular={id ? true : false} />}
        </>
    )
}