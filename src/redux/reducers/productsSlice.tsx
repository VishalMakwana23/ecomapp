import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    products: [],
    error: ''
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        getProductsSuccess: (state, action) => {
            state.products = action.payload
            state.isLoading = false
        },
        getProductsFailed: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        deleteProduct: (state, action) => {
            state.products.splice(action.payload, 1);
        },
        addProduct: (state, action) => {
            console.log("😅😅👉 ~ action:", action.payload)
            state.products.push(action.payload)

        }
    }
})

export const {
    setLoading,
    getProductsSuccess,
    getProductsFailed,
    deleteProduct,
    addProduct
} = productsSlice.actions

export default productsSlice.reducer

