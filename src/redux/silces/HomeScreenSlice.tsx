import { createSlice } from '@reduxjs/toolkit';

interface Banner {
    id: number;
    image: string;
    nameScreen: string;
}
interface RecomnenProduct {
    id: number;
    image: string;
    name: string;
    price: number;
    strikeThrough: number;
    saleOff: number;
}

interface FavoriteProduct {
    id: number;
    image: string;
    name: string;
    price: number;
    strikeThrough: number;
    saleOff: number;
}

interface InitialState {
    banner: Array<Banner>,
    recommenProduct: Array<RecomnenProduct>,
    favoriteProduct: Array<FavoriteProduct>,
}

const initialState: InitialState = {
    banner:
        [{
            id: 1,
            image: 'https://thietke6d.com/wp-content/uploads/2021/03/Mau-banner-quang-cao-dep-1.png',
            nameScreen: 'OfferScreen'
        },
        {
            id: 2,
            image: 'https://intphcm.com/data/upload/banner-thoi-trang-tuoi.jpg',
            nameScreen: 'CartScreen'
        },
        {
            id: 3,
            image: 'https://dojeannam.com/wp-content/uploads/2017/09/BANNER-KHAI-TRUONG-DOJEANNAM.jpg',
            nameScreen: 'PaymentScreen'
        },
        {
            id: 4,
            image: 'https://intphcm.com/data/upload/banner-thoi-trang.jpg',
            nameScreen: 'BankTransferScreen'
        },
        ],

    recommenProduct: [
        { id: 1, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FS - Nike Air Max 270 React...', price: 299, strikeThrough: 50, saleOff: 24 },
        { id: 2, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FE - QUILTED MAXI CROS...', price: 300, strikeThrough: 70, saleOff: 27 },
        { id: 3, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 250, strikeThrough: 50, saleOff: 24 },
        { id: 4, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 450, strikeThrough: 10, saleOff: 28 },
        { id: 5, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 100, strikeThrough: 50, saleOff: 24 },
        { id: 6, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 250, strikeThrough: 50, saleOff: 30 },
    ],

    favoriteProduct: [
        { id: 1, image: require('../../asset/image/imgProduct.png'), name: 'Nike Air Max 270 React ENG', price: 2999, strikeThrough: 50, saleOff: 24 },
        { id: 2, image: require('../../asset/image/imgProduct3.png'), name: 'Nike Air Max 270 React ENG', price: 300, strikeThrough: 70, saleOff: 27 },
        { id: 3, image: require('../../asset/image/imgProduct1.png'), name: 'Nike Air Max 270 React ENG', price: 250, strikeThrough: 50, saleOff: 24 },
        { id: 4, image: require('../../asset/image/imgProduct2.png'), name: 'Nike Air Max 270 React ENG', price: 450, strikeThrough: 10, saleOff: 28 },
        { id: 5, image: require('../../asset/image/imgProduct3.png'), name: 'Nike Air Max 270 React ENG', price: 100, strikeThrough: 50, saleOff: 24 },
        { id: 6, image: require('../../asset/image/imgProduct2.png'), name: 'Nike Air Max 270 React ENG', price: 250, strikeThrough: 50, saleOff: 30 },
    ],
};

const HomeScreenSlice = createSlice({
    name: 'HomeScreenSlice',
    initialState,
    reducers: {
        deleteFavourite: (state, action) => {
            // state.favoriteProduct.splice(state.favoriteProduct.findIndex(favoriteProduct.id === action.payload.id), 1)
            const index = state.favoriteProduct.findIndex(favoriteProduct => favoriteProduct.id === action.payload);
            if (index !== -1) {
                state.favoriteProduct.splice(index, 1);
            }
        },
    },
});

export const {
    deleteFavourite,
} = HomeScreenSlice.actions;

export default HomeScreenSlice.reducer;
