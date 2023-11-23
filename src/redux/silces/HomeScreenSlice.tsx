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
    brand: string,
    color: string,
    size: string,
    category: string,
    loading: boolean,
}
interface FilterPrice {
    minPrice: string;
    maxPrice: string;
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
    sex: string;
    brand: string;
    category: string;
    color: string;
    size: string;
}
interface Order {
    id: number;
    code: string;
    date: string;
    items: number;
    price: string;
    oderStatus: string;
}

interface InitialState {
    banner: Array<Banner>,
    recommenProduct: Array<RecomnenProduct>,
    favoriteProduct: Array<FavoriteProduct>,
    filters: Filters,
    offer: Array<Offer>,
    product: Array<Product>,
    filterPrice: FilterPrice,
    order: Array<Order>,
}

const initialState: InitialState = {
    filterPrice: {
        minPrice: '0',
        maxPrice: '5000',
    },

    filters: {
        search: '',
        brand: 'All',
        color: 'All',
        size: 'All',
        category: 'All',
        loading: false,
    },
    order: [
        {
            id: 1,
            code: 'FGHJYTN',
            date: 'August 11, 2023',
            items: 1,
            price: '299,43',
            oderStatus: 'Confirm',
        },
        {
            id: 2,
            code: 'KFGSSFSF',
            date: 'August 1, 2023',
            items: 2,
            price: '299,43',
            oderStatus: 'Prepare',
        },
        {
            id: 3,
            code: 'SFVWWQC',
            date: 'August 5, 2017',
            items: 3,
            price: '300,43',
            oderStatus: 'Shipping',
        },
        {
            id: 4,
            code: 'VEWFVWF',
            date: 'August 1, 2017',
            items: 2,
            price: '255,43',
            oderStatus: 'Success',
        },
    ],
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
        { id: 1, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FS - Nike Air Max 270 React...', price: 2000, strikeThrough: 50, saleOff: 24,sex: 'women', brand: 'Nike', category: 'Sneakers', color: 'Black', size: '44' },
        { id: 2, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FE - QUILTED MAXI CROS...', price: 3000, strikeThrough: 70, saleOff: 27 ,sex: 'women',brand: 'Nike', category: 'Sneakers', color: 'Black', size: '44'},
        { id: 3, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - adidas Air Max 350 React...', price: 2500, strikeThrough: 50, saleOff: 24,sex: 'women', brand: 'Adidas' , category: 'Sneakers', color: 'Black', size: '40'},
        { id: 4, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - adidas Air Max 350 React...', price: 4500, strikeThrough: 10, saleOff: 28 ,sex: 'women',brand: 'Adidas', category: 'Sneakers', color: 'Black', size: '41'},
        { id: 5, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 1000, strikeThrough: 50, saleOff: 24 ,sex: 'women', brand: 'Nike', category: 'Lifestyle', color: 'White', size: '40'},
        { id: 6, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 2500, strikeThrough: 50, saleOff: 30 ,sex: 'women',brand: 'Nike', category: 'Lifestyle', color: 'White', size: '42'},
        { id: 7, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 250, strikeThrough: 50, saleOff: 30 ,sex: 'man',brand: 'Nike', category: 'Lifestyle', color: 'Blue', size: '42'},
        { id: 8, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - adidas Air Max 350 React...', price: 250, strikeThrough: 50, saleOff: 30 ,sex: 'man',brand: 'Adidas', category: 'Sneakers', color: 'Blue', size: '41'},
        { id: 9, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 2500, strikeThrough: 50, saleOff: 30 ,sex: 'man',brand: 'Nike', category: 'Sports', color: 'Yellow', size:'44'},
        { id: 10, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - adidas Air Max 350 React...', price: 2500, strikeThrough: 50, saleOff: 30 ,sex: 'man',brand: 'Adidas', category: 'Sports', color: 'Yellow', size: '39'},
        { id: 11, image: 'http://dummyimage.com/72x72.png/dddddd/000000', name: 'FA - Nike Air Max 350 React...', price: 250, strikeThrough: 50, saleOff: 30 ,sex: 'man',brand: 'Nike', category: 'Sports', color: 'Yellow', size: '45'},
    ],
};

const HomeScreenSlice = createSlice({
    name: 'HomeScreenSlice',
    initialState,
    reducers: {
        searchFilterChange: (state, action) => {
            state.filters.search = action.payload;
        },
        filterBrand: (state, action) => {
            state.filters.brand = action.payload;
        } ,
        filterColor: (state, action) => {
            state.filters.color = action.payload;
        },
        filterSize: (state, action) => {
            state.filters.size = action.payload;
        },
        filterCategory: (state, action) => {
            state.filters.category = action.payload;
        },
        filterPrice: (state, action) => {
            state.filterPrice.minPrice = action.payload.minPrice;
            state.filterPrice.maxPrice = action.payload.maxPrice;
        },
    },
});



export default HomeScreenSlice;
