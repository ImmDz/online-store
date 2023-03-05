import { FC, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from '../hooks/useAppDispatch';
import { MainPage } from "../Pages/MainPage";
import { CategoryPage } from "Pages/CategoryPage";
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from "antd";
import css from "../Pages/pages.module.css";
import { getCategories, categoryActions, goodActions } from '../store/index';
const { Header, Footer, Sider } = Layout;

export const App: FC = () => {
  const categories = useSelector(getCategories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchCategoryCb();
    fetchGoodsCb();
  }, []);

  const fetchCategoryCb = useCallback(() => dispatch(categoryActions.fetchData()), []);
  const fetchGoodsCb = useCallback(() => dispatch(goodActions.fetchData()), []);
  return (
    <Layout className={css["wrapper"]}>
      <Header className={css.custom_header}><Link to={"/"}>Header</Link></Header>
      <Layout className={css["content"]}>
        <Sider theme={"dark"}>
          <Menu>
            {categories.map((category) => <Menu.Item onClick={(e) => dispatch(goodActions.fetchData(e.key))} key={category.id}><Link to={`category/${category.id}`}></Link>{category.label}</Menu.Item>)}
          </Menu>
        </Sider>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
        </Routes>

      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

