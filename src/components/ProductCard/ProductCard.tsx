import { FC } from 'react';
import { Card } from "antd";
import type { Good } from '../../types/general';
const { Meta } = Card;

interface ProductCardProps {
    good: Good;
}

export const ProductCard: FC<ProductCardProps> = ({ good }) =>
    <Card style={{width: "150px", height: "100px", backgroundColor: "gray"}} /*cover={<img src="https://source.unsplash.com/featured/150x50?product" height={100}></img>}*/>
        <Meta title={good.label} description={`${good.price}$`}></Meta>
    </Card>