import {configureStore} from '@reduxjs/toolkit'
import todoSlideState from './silces/todoSlideState';
import HomeScreenSlice from './silces/HomeScreenSlice';

const store = configureStore({
    reducer:{
        HomeScreenSlice: HomeScreenSlice.reducer, 
        stateReducer: todoSlideState,
    }
})
export default store;