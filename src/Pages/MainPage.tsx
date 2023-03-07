import { FC, useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { Image, Spin, Skeleton } from 'antd';
import { GoodCategory } from '../components/GoodCategory/GoodCategory';
import type { PopularCategory } from 'types/general';
import { getPopularCategories, popularActions, getPopularLoadStatus } from '../store/index';
import css from "./pages.module.css";

export const MainPage: FC = () => {
    const popularCategories = useSelector(getPopularCategories);
    const dispatch = useAppDispatch();
    const [isVisibleImg, setIsVisibleImg] = useState<boolean>(false);
    const loadStatus = useSelector(getPopularLoadStatus);

    useEffect(() => {
        fetchPopularCb()
        setTimeout(() => setIsVisibleImg(true), 1_500);
    }, []);

    const fetchPopularCb = useCallback(() => dispatch(popularActions.fetchData()), []);
    const findPopularCategory = (type: string): PopularCategory => popularCategories.find((item) => item.category?.type === type)!;

    return (
        <>
            <section className={css.banner} >
                <Skeleton.Node active={true} >
                    {isVisibleImg && <Image preview={false} src="https://source.unsplash.com/featured/1320x488?store" />}
                </Skeleton.Node>
            </section>
            {loadStatus === "LOADING" ? <div className={css.loading}><Spin tip="Loading" size="large" /></div> : popularCategories.map((item) =>
                <GoodCategory key={item.category.id} className={css.category} category={findPopularCategory(item.category.type).category} goods={findPopularCategory(item.category.type).items} />
            )}
        </>
    )
} 