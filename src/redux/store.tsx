import {configureStore} from '@reduxjs/toolkit'
import todoSlideState from './silces/todoSlideState';
import HomeScreenSlice from './silces/HomeScreenSlice';

const store = configureStore({
    reducer:{
        homeScreenSlice: HomeScreenSlice,
        stateReducer: todoSlideState,
    }
})
export default store;