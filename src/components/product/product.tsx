import React, { useEffect } from "react";
import './product.scss'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { fetchProducts } from "../../slice/product";
import { Card } from 'antd';
type Props = {};

const Product = (props: Props) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.value);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    const { Meta } = Card;
    return (
        <div>
            <h1>List product</h1>
            <div className="list-product">
                {products.map((product) => {
                    console.log(product)
                    return <>
                    <Link className="product-container" to={`/product`}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={product.avatar} />}
                        >
                            <Meta title={product.name} />
                            <div className="price" >
                                <p>{product.price_new}$</p>
                            </div>
                            <a href="">Add to cart</a>
                        </Card>
                    </Link>
                    </>
                })}
            </div>
        </div>
    );
};

export default Product;