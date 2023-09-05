import {configureStore} from '@reduxjs/toolkit'
import filtersSlice from '../screens/Explore/Slice/filtersSlice'
import todosSlice from '../screens/Explore/Slice/todosSlice'
const store = configureStore({
    reducer:{
        filters: filtersSlice.reducer,
        todoList:todosSlice.reducer, 
    }
})
export default store;