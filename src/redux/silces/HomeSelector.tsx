import { createSelector } from "@reduxjs/toolkit";

export const listBanners = (state: any) => state.HomeScreenSlice.banner;

export const listRecommendeds = (state: any) => state.HomeScreenSlice.recommenProduct;
export const listOffer = (state: any) => state.HomeScreenSlice.offer;
export const listFavorites = (state: any) => state.HomeScreenSlice.favoriteProduct;
export const searchFilterChange = (state: any) => state.HomeScreenSlice.filters.search;
export const listProducts = (state: any) => state.HomeScreenSlice.product;
export const filterBrand = (state: any) => state.HomeScreenSlice.filters.brand;
export const filterColor = (state: any) => state.HomeScreenSlice.filters.color;
export const filterSize = (state: any) => state.HomeScreenSlice.filters.size;
<<<<<<< HEAD
export const filterCategory = (state: any) => state.HomeScreenSlice.filters.category;
export const filterMinPrice = (state: any) => state.HomeScreenSlice.filterPrice.minPrice;
export const filterMaxPrice = (state: any) => state.HomeScreenSlice.filterPrice.maxPrice;
export const listOrder = (state: any) => state.HomeScreenSlice.order;

export const todoRemainingProducts = createSelector(listProducts, searchFilterChange, filterBrand, filterColor, filterSize, filterCategory, filterMinPrice, filterMaxPrice, (product, search, brand, color, size, category, minPrice, maxPrice) => {
    if (product) {
        return product.filter((todo: any) => {
            if (brand === 'All' && color === 'All' && size === 'All' && category === 'All') {
                return todo.name.includes(search) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (brand === 'All' && color === 'All' && category === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.size.includes(size) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (brand === 'All' && size === 'All' && category === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.color.includes(color) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (color === 'All' && size === 'All' && category === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.brand.includes(brand) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (brand === 'All' && color === 'All' && size === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.category.includes(category) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (brand === 'All' && color === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.size.includes(size) && todo.category.includes(category) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (brand === 'All' && size === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.color.includes(color) && todo.category.includes(category) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (brand === 'All' && category === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.size.includes(size) && todo.color.includes(color) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (color === 'All' && size === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.brand.includes(brand) && todo.category.includes(category) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (color === 'All' && category === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.brand.includes(brand) && todo.size.includes(size) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (size === 'All' && category === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.brand.includes(brand) && todo.category.includes(category) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (brand === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.color.includes(color) && todo.size.includes(size) && todo.category.includes(category) && Number(minPrice) < todo.price && todo.price < Number(maxPrice) && Number(minPrice) < todo.price && todo.price < Number(maxPrice)
            } else if (size === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.color.includes(color) && todo.brand.includes(brand) && todo.category.includes(category) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (color === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.size.includes(size) && todo.brand.includes(brand) && todo.category.includes(category) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            } else if (category === 'All') {
                return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.brand.includes(brand) && todo.color.includes(color) && todo.size.includes(size) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
            }
            return todo.name.toLowerCase().includes(search.toLowerCase()) && todo.brand.includes(brand) && todo.color.includes(color) && todo.size.includes(size) && todo.category.includes(category) && Number(minPrice) < todo.price && todo.price < Number(maxPrice);
=======

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
>>>>>>> parent of 01c1d3d (minh dep trai 22/11)
        })
    } else {
        return [];
    }
});