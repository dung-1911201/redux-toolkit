import { IProduct } from "../interface/product";
import instance from "./instance";

export const getProducts = async (): Promise<IProduct[]> => {
    return await instance.get("/product");
};
export const getProduct = async (id: number): Promise<IProduct> => {
    return await instance.get(`/product /${id}`);
};
export const addProduct = async (product: IProduct): Promise<IProduct> => {
    return await instance.post("/product", product);
};
export const removeProduct = async (id: number) => {
    return await instance.delete(`/product/${id}`);
};
export const updateProduct = async (product: IProduct) => {
    return await instance.put(`/product/${product.id}`, product);
};
