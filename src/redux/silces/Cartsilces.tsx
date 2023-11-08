import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CartItem {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: number;
  
}

const initialState: CartItem[] = [
  {
    id: 1,
    name: "Mediterranean Brome",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
    price: '1999',
    quantity: 10,
  },
  {
    id: 2,
    name: "Mediterranean Brome",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
    price: '1999',
    quantity: 5,
  },
  {
    id: 3,
    name: "Mediterranean Brome",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
    price: '1999',
    quantity: 5,
  },
  {
    id: 4,
    name: "Mediterranean Brome",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
    price: '1999',
    quantity: 5,
  },
  {
    id: 5,
    name: "Mediterranean Brome",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
    price: '1999',
    quantity: 5,
  },
];


const calculateTotalQuantity = (items: CartItem[]) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

const updatedInitialState = initialState.map(item => ({
  ...item,
  totalQuantity: calculateTotalQuantity(initialState),
}));


const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state = state.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const quantityToUpdate = state.find((item) => item.id === id);
      if (quantityToUpdate) {
        quantityToUpdate.quantity = quantity;
      }
      
    },

  },

});

export const { removeItem ,addItem ,updateQuantity} = cartSlice.actions;

export default cartSlice.reducer;
