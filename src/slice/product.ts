import { IProduct } from './../interface/product';
import { getProduct,getProducts, addProduct, removeProduct, updateProduct } from './../api/product';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProduct", getProducts );
export const fetchProduct = createAsyncThunk("product/fetchProduct", async (id: number)=>{
    const product = await getProduct(id);
    return product;
});
export const addProdu = createAsyncThunk("product/addProduct", async (product: IProduct)=>{
    const prod = await addProduct(product);
    return prod;
});

const initialState: { value: IProduct[] } = {
    value: []
}
type Props = {};
const productSlice = createSlice ({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) =>{
            state.value = action.payload;
        }),
        builder.addCase(addProdu.fulfilled, (state, action: PayloadAction<IProduct>) =>{
            state.value = [...state.value,action.payload]
        })
    }

});
export default productSlice.reducer;