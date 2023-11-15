import { createSelector } from "@reduxjs/toolkit";

export const listBanners = (state: any) => state.HomeScreenSlice.banner;

export const listRecommendeds = (state: any) => state.HomeScreenSlice.recommenProduct;
export const listOffer = (state: any) => state.HomeScreenSlice.offer;
export const listFavorites = (state: any) => state.HomeScreenSlice.favoriteProduct;
export const searchFilterChange = (state: any) => state.HomeScreenSlice.filters.search;

export const todoRemainingRecomendeds = createSelector(listRecommendeds, searchFilterChange, (recommenProduct, search) => {
    return recommenProduct.filter((todo: any) => {
        return todo.name.toLowerCase().includes(search.toLowerCase());
    })
});