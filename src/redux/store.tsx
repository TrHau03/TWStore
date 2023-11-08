import {configureStore} from '@reduxjs/toolkit'
import ProfileSilces from './silces/ProfileSilces';
import App_AppdressSilces from './silces/App_AppdressSilces';
import Appdresssilces from './silces/Appdresssilces';
import OrderSilces from './silces/OrderSilces';
import Cartsilces from './silces/Cartsilces';

const store = configureStore({
    reducer:{
        profileReducer: ProfileSilces,
        app_appdressReducer: App_AppdressSilces,
        appdressReducer:Appdresssilces,
        OrderReducer: OrderSilces,
        cartReducer:Cartsilces,

    }
})
export default store;