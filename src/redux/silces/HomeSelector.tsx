import { createSelector } from "@reduxjs/toolkit";

export const listBanners = (state: any) => state.HomeScreenSlice.banner;

export const listRecommendeds = (state: any) => state.HomeScreenSlice.recommenProduct;

export const listFavorites = (state: any) => state.HomeScreenSlice.favoriteProduct;
export const search = (state:any) => state.HomeScreenSlice.search;

export const todoRemainingSelectProduct = createSelector(
    listRecommendeds,
    
    search,
    (listRecommendeds, search ) => {
        console.log(listRecommendeds);
        
        return listRecommendeds.filter((todo: any) => {
            return todo.name.includes(search);
        })
    });