import { createSelector } from "@reduxjs/toolkit";
import colors from "../../utilities/colors";

export const listBanners = (state: any) => state.HomeScreenSlice.banner;

export const listRecommendeds = (state: any) => state.HomeScreenSlice.recommenProduct;
export const listOffer = (state: any) => state.HomeScreenSlice.offer;
export const listFavorites = (state: any) => state.HomeScreenSlice.favoriteProduct;
export const searchFilterChange = (state: any) => state.HomeScreenSlice.filters.search;
export const listProducts = (state: any) => state.HomeScreenSlice.product;
export const filterBrand = (state: any) => state.HomeScreenSlice.filters.brand;
export const filterColor = (state: any) => state.HomeScreenSlice.filters.color;
export const filterSize = (state: any) => state.HomeScreenSlice.filters.size;

export const todoRemainingProducts = createSelector(listProducts, searchFilterChange, filterBrand, filterColor, filterSize, (product, search, brand, color, size) => {
    if (product) {
        return product.filter((todo: any) => {
            if (brand === 'All' && color === 'All' && size === 'All') {
                return todo.name.includes(search);
            } else if (brand === 'All' && color === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.size.includes(size);
            }else if (brand === 'All' && size === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.color.includes(color);
            }else if (color === 'All' && size === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.brand.includes(brand);
            }else if (brand === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.color.includes(color) && todo.size.includes(size) ;
            }else if (size === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.color.includes(color) && todo.brand.includes(brand) ;
            }else if (color === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.size.includes(size) && todo.brand.includes(brand) ;
            }
            return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.brand.includes(brand) && todo.color.includes(color) && todo.size.includes(size);
        })
    } else {
        return [];
    }
});