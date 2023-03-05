import { FC } from 'react';
import { Card } from "antd";
import type { Good } from '../../types/general';
import css from "./productCard.module.css";
const { Meta } = Card;

interface ProductCardProps {
    good: Good;
}

export const ProductCard: FC<ProductCardProps> = ({ good }) =>
    <Card  className={css.productCard} /*cover={<img src="https://source.unsplash.com/featured/150x50?product" height={100}></img>}*/>
        <Meta title={good.label} description={`${good.price}$`}></Meta>
    </Card>