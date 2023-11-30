import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AxiosInstance from '../../Axios/Axios';


export const fetchInitialListProductRecommend: any = createAsyncThunk('Slice/fetchInitialListProductRecommend', async (url: any) => {
  const response = await AxiosInstance().get(url);
  return response.data;
})
export const fetchInitialListProductFilter: any = createAsyncThunk('Slice/fetchInitialListProductFilter', async (url: any) => {
  const response = await AxiosInstance().get(`product/getProductByIdCategory/${url}`);
  return response.data;
})
const initialState = {
  isLogin: false,
  isLoading: false,
  LoginGoogle: false,
  LoginFaceBook: false,
  user: {
    _idUser: '',
    email: '',
    userName: '',
    cartID: [],
    avatar: '',
    gender: '',
    birthDay: '',
    address: [],
  },
  listProductRecommend: [],
  listProductFilter: [],
};


const Slice = createSlice({
  name: 'Slice',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const value = action.payload
      state.user = value;
    },
    isLogin: (state, action) => {
      console.log("login", action.payload);
      const value = action.payload;
      state.isLogin = value;
    },
    isLoading: (state, action) => {
      console.log("login", action.payload);
      const value = action.payload;
      state.isLoading = value;
    },
    LoginGoogle: (state, action) => {
      console.log("login", action.payload);
      const value = action.payload;
      state.LoginGoogle = value;
    },
    LoginFacebook: (state, action) => {
      console.log("login", action.payload);
      const value = action.payload;
      state.LoginFaceBook = value;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialListProductRecommend.fulfilled, (state, action) => {
        state.listProductRecommend = action.payload;
      }),
      builder
        .addCase(fetchInitialListProductFilter.fulfilled, (state: any, action: any) => {
          state.listProductFilter = action.payload
        })
  },
});
export const { updateUser, isLogin, isLoading, LoginFacebook, LoginGoogle } = Slice.actions
export default Slice.reducer;
