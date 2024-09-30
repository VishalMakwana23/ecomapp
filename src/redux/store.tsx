import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './reducers/productsSlice';

export default store = configureStore({
    reducer: {
        products: productsSlice
    },
});