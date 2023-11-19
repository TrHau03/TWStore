import { configureStore } from '@reduxjs/toolkit'
import Slides from './silces/Silces';
import CartSlices from './silces/CartSlices';
const store = configureStore({
    reducer: {
        SlicesReducer: Slides,
        CartReducer: CartSlices,
    }
})
export default store;