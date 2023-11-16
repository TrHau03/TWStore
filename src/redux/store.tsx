import {configureStore} from '@reduxjs/toolkit'
import Silces from './silces/Silces';
import Cartsilces from './silces/Cartsilces';
const store = configureStore({
    reducer:{
        SilcesReducer:Silces,
        CartReducer: Cartsilces,
    }
})
export default store;