import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addresses: [
    {
      id: 1,
      username: 'Minh dep trai',
      address: 'Nha cua le duc minh deo cho may dia chi nha con, doi muoi nam nua bo may cho may dia chi con Hau',
      phone: '0372711935',
    },
    {
      id: 2,
      username: 'Hoang bao ve',
      address: 'Nha cua le duc minh deo cho may dia chi nha con',
      phone: '0372711935',
    },
    {
      id: 3,
      username: 'Hau loz',
      address: 'Nha cua le duc minh deo cho may dia chi nha con',
      phone: '0372711935',
    },
    {
      id: 4,
      username: 'Long lon',
      address: 'Nha cua le duc minh deo cho may dia chi nha con',
      phone: '0372711935',
    },
  ],
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    updateAddress: (state, action) => {
      const { id, updatedData } = action.payload;
      const addressToUpdate = state.addresses.find((address) => address.id === id);
      if (addressToUpdate) {
        Object.assign(addressToUpdate, updatedData);
      }
    },
    deleteAddress: (state, action) => {
      const id = action.payload;
      state.addresses = state.addresses.filter((address) => address.id !== id);
    },
  },
});

export const { addAddress, updateAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
