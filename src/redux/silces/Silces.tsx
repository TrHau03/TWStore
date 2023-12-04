import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
    _id: '',
    _idUser: '',
    email: '',
    userName: '',
    cartItem: [],
    avatar: '',
    gender: '',
    birthDay: '',
    address: [],
    phone: '',
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
    updateGender: (state, action) => {
      const value = action.payload
      state.user.gender = value;
    },
    updatePhone: (state, action) => {
      const value = action.payload
      state.user.phone = value;
    },
    updateBirthDay: (state, action) => {
      const value = action.payload
      state.user.birthDay = value;
    },    
    updateEmail: (state, action) => {
      const value = action.payload
      state.user.email = value;
    },    
    updateName: (state, action) => {
      const value = action.payload
      state.user.userName = value;
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.user.cartItem = state.user.cartItem.filter((item: any) => item.productID._id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const quantityToUpdate: any = state.user.cartItem.find((item: any) => item.productID._id === id);
      if (quantityToUpdate) {
        quantityToUpdate.quantity = quantity;
      }
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
          state.listProductFilter = action.payload;
        })
  },
});
export const { updateUser, isLogin, isLoading, LoginFacebook, LoginGoogle, removeItem, updateQuantity, updateGender, updatePhone, updateBirthDay, updateEmail, updateName } = Slice.actions
export default Slice.reducer;
