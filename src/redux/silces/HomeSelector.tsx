import { createSelector } from "@reduxjs/toolkit";

export const listBanners = (state: any) => state.HomeScreenSlice.banner;

export const listRecommendeds = (state: any) => state.HomeScreenSlice.recommenProduct;
export const listOffer = (state: any) => state.HomeScreenSlice.offer;
export const listFavorites = (state: any) => state.HomeScreenSlice.favoriteProduct;
export const searchFilterChange = (state: any) => state.HomeScreenSlice.filters.search;
export const listProducts = (state: any) => state.HomeScreenSlice.product;
export const statusSelector = (state: any) => state.HomeScreenSlice.filters.status;

export const todoRemainingRecomendeds = createSelector(listRecommendeds, searchFilterChange, (recommenProduct, search) => {
    return recommenProduct.filter((todo: any) => {
        return todo.name.toLowerCase().includes(search.toLowerCase());
    })
});

export const todoRemainingProducts = createSelector(listProducts, searchFilterChange, statusSelector, (product, search, status) => {
    if (product) {
        return product.filter((todo: any) => {
            if (status === 'All') {
                return todo.name.includes(search);
            }
            return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.brand.includes(status) || todo.color.includes(status) || todo.size.includes(status);
        })
    } else {
        return [];
    }
});