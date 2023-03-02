import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { Layout, Menu, Image } from 'antd';
import { GoodCategory } from '../components/GoodCategory/GoodCategory';
import type { PopularCategory } from 'types/general';
import { getCategories, getPopularCategories, categoryActions, goodActions, popularActions } from '../store/index';
import css from "./styles.module.css";

const { Header, Sider, Footer, Content } = Layout;

export const MainPage: FC = () => {
    const categories = useSelector(getCategories);
    const popularCategories = useSelector(getPopularCategories);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(categoryActions.fetchData());
        // dispatch(goodActions.fetchData());
        dispatch(popularActions.fetchData());
    }, []);

    const findPopularCategory = (type: string): PopularCategory => popularCategories.find((item) => item.category?.type === type)!
    return (
        <>
            <Layout className={css["wrapper"]}>
                <Header className={css.custom_header} style={{ color: "#fff" }}>Header</Header>
                <Layout className={css["content"]} style={{ alignItems: 'flex-start', flexShrink: '1', maxWidth: "1520px", margin: "0 auto", backgroundColor: "white" }}>
                    <Sider theme={"dark"}>
                        <Menu>
                            {categories.map((category) => <Menu.Item key={category.id}>{category.label}</Menu.Item>)}
                        </Menu>
                    </Sider>
                    <Content style={{ width: "100%" }}>
                        <section className="banner" style={{ maxWidth: '100%', height: "488px" }} >
                            <Image preview={false} src="https://source.unsplash.com/featured/1320x488?store" />
                        </section>
                        {popularCategories.map((item) => <GoodCategory className={css.category} popular_category={findPopularCategory(item.category.type)} />)}
                    </Content>
                </Layout>
                <Footer style={{ flexShrink: '0', backgroundColor: "#001529", color: "#fff" }}>Footer</Footer>
            </Layout>
        </>
    )
}