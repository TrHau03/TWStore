import { configureStore } from '@reduxjs/toolkit'
import Slides from './silces/Silces';
import CartSlices from './silces/CartSlices';
import HomeScreenSlice from './silces/HomeScreenSlice';
const store = configureStore({
    reducer: {
        SlicesReducer: Slides,
        CartReducer: CartSlices,
        HomeScreenSlice: HomeScreenSlice.reducer,
    }
})
export default store;