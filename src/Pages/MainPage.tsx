import { FC, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { Layout, Image } from 'antd';
import { GoodCategory } from '../components/GoodCategory/GoodCategory';
import type { PopularCategory } from 'types/general';
import { getPopularCategories, popularActions, goodActions } from '../store/index';
import css from "./pages.module.css";

const { Content } = Layout;

export const MainPage: FC = () => {
    const popularCategories = useSelector(getPopularCategories);
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchPopularCb();
    }, []);

    const fetchPopularCb = useCallback(() => dispatch(popularActions.fetchData()), []);

    const findPopularCategory = (type: string): PopularCategory => popularCategories.find((item) => item.category?.type === type)!;
    return (
        <Content className={css.main}>
            <section className="banner" >
                <Image preview={false} src="https://source.unsplash.com/featured/1320x488?store" />
            </section>
            {popularCategories.map((item) => <GoodCategory key={item.category.id} className={css.category} category={findPopularCategory(item.category.type).category} goods={findPopularCategory(item.category.type).items} />)}
        </Content>
    )
}