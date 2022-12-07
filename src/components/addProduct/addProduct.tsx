import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../interface/product";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import React, { useEffect } from "react";
import { addProdu, fetchProducts } from "../../slice/product";
import { addProduct } from "../../api/product";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {};

const ProductAdd = (props: Props) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.value);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<IProduct> = (data) => {
        //dispatch tới thằng state ở slice ko gọi trc tiếp api thì nó sẽ rerender lại đc ko cần f5
        dispatch(addProdu(data));
        return navigate("/products");
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" type="text" {...register("name")} />
                <input
                    placeholder="Price"
                    type="text"
                    {...register("price_new")}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ProductAdd;
