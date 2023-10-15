import {configureStore} from '@reduxjs/toolkit'
import ProfileSilces from './silces/ProfileSilces';
import todoSlideState from './silces/todoSlideState';
import HomeScreenSlice from './silces/HomeScreenSlice';

const store = configureStore({
    reducer:{
        homeScreenSlice: HomeScreenSlice,
        profileReducer: ProfileSilces,
        stateReducer: todoSlideState,
    }
})
export default store;