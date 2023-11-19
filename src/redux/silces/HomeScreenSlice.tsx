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
interface Filters {
    search: string,
    status: string,
    loading: boolean,
}

interface Offer {
    id: number;
    image: any;
    title: string;
    content: string;
    date: string;
    time: string;
}
interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
    strikeThrough: number;
    saleOff: number;
    brand: string;
    category: string;
}

interface InitialState {
    banner: Array<Banner>,
    recommenProduct: Array<RecomnenProduct>,
    favoriteProduct: Array<FavoriteProduct>,
    filters: Filters,
    offer: Array<Offer>,
    product: Array<Product>,
}

const initialState: InitialState = {
    filters: {
        search: '',
        status: 'All',
        loading: false,
    },

    offer: [
        {
            id: 1,
            image: require('../../asset/image/Offer.png'),
            title: 'The Best Title',
            content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
            date: '21/07/2002',
            time: '9:00 PM',
        },
        {
            id: 2,
            image: require('../../asset/image/Offer.png'),
            title: 'SUMMER OFFER 98% Cashback',
            content:
                'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
            date: '21/07/2002',
            time: '9:00 PM',
        },
        {
            id: 3,
            image: require('../../asset/image/Offer.png'),
            title: 'Special Offer 25% OFF',
            content:
                'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
            date: '21/07/2002',
            time: '9:00 PM',
        },
        {
            id: 4,
            image: require('../../asset/image/Offer.png'),
            title: 'SUMMER OFFER 98% Cashback',
            content:
                'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
            date: '21/07/2002',
            time: '9:00 PM',
        },
    ],

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
    product: [
        { id: 1, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FS - Nike Air Max 270 React...', price: 299, strikeThrough: 50, saleOff: 24, brand: 'Nike', category: 'Shoes' },
        { id: 2, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FE - QUILTED MAXI CROS...', price: 300, strikeThrough: 70, saleOff: 27 ,brand: 'Nike', category: 'Shoes'},
        { id: 3, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - adidas Air Max 350 React...', price: 250, strikeThrough: 50, saleOff: 24, brand: 'Adidas' , category: 'Shoes'},
        { id: 4, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - adidas Air Max 350 React...', price: 450, strikeThrough: 10, saleOff: 28 ,brand: 'Adidas', category: 'Shoes'},
        { id: 5, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 100, strikeThrough: 50, saleOff: 24 , brand: 'Nike', category: 'Shoes'},
        { id: 6, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 250, strikeThrough: 50, saleOff: 30 ,brand: 'Nike', category: 'Shoes'},
        { id: 7, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 250, strikeThrough: 50, saleOff: 30 ,brand: 'Nike', category: 'Shoes'},
        { id: 8, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - adidas Air Max 350 React...', price: 250, strikeThrough: 50, saleOff: 30 ,brand: 'Adidas', category: 'Shoes'},
        { id: 9, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 250, strikeThrough: 50, saleOff: 30 ,brand: 'Nike', category: 'Shoes'},
        { id: 10, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - adidas Air Max 350 React...', price: 250, strikeThrough: 50, saleOff: 30 ,brand: 'Adidas', category: 'Shoes'},
        { id: 11, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 250, strikeThrough: 50, saleOff: 30 ,brand: 'Nike', category: 'Shoes'},
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

        searchFilterChange: (state, action) => {
            state.filters.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            console.log( 'Minhhhhh: ' +action.payload);
            state.filters.status = action.payload;
        } 
    },
});



export default HomeScreenSlice;
