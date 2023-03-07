import { FC } from 'react';
import { Card } from "antd";
import type { Good } from '../../types/general';
import { useSelector } from 'react-redux'
import css from "./productCard.module.css";
import { getGoodsLoadStatus } from '../../store/index';
const { Meta } = Card;

interface ProductCardProps {
    good: Good;
}

export const ProductCard: FC<ProductCardProps> = ({ good }) => {
    const loadStatus = useSelector(getGoodsLoadStatus);

    return (
        <Card loading={loadStatus === "LOADING"} className={css.productCard} /*cover={<img src="https://source.unsplash.com/featured/150x50?product" height={100}></img>}*/>
            <Meta title={good.label} description={`${good.price}$`}></Meta>
        </Card>
    )
}