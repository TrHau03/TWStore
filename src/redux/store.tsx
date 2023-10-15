import {configureStore} from '@reduxjs/toolkit'
import ProfileSilces from './silces/ProfileSilces';

const store = configureStore({
    reducer:{
        profileReducer: ProfileSilces,
    }
})
export default store;