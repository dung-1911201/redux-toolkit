import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { fetchProducts } from "../../slice/product";
import { Card } from "antd";
import Product from "../product/product";

type Props = {};

const ProductList = (props: Props) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.value);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    const { Meta } = Card;
    return (
        <div>
            <h1>List product</h1>
            <div className="product-list-wrapper">
                <div className="list-product">
                    {products.map((product) => {
                        return <Product key={product.id} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
