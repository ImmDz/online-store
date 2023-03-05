import { FC, useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { GoodCategory } from 'components/GoodCategory/GoodCategory';
import { getGoods, getCategories, goodActions, categoryActions } from '../store/index';
import css from "./pages.module.css";
import { useParams } from 'react-router';
import { Category } from 'types/general';
const { Content } = Layout;

interface CategoryPage {
    category: Category;
}

export const CategoryPage: FC = () => {
    const goods = useSelector(getGoods);
    const categories = useSelector(getCategories)
    const { id } = useParams();
    const [category, setCategory] = useState<Category>({ type: "asd", label: "ascjbadv", id: '1'});
    

    useEffect(() => {
        setCategory(categories.find((item) => item.id === id)!);
    }, [id])

    return (
        <Content className={css.main}>
            <GoodCategory goods={goods} category={category!} />
        </Content>
    )
}