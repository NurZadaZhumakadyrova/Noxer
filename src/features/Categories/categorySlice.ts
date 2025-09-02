import { createSlice } from '@reduxjs/toolkit';
import { getCategories, getProductsPagination } from './categoryThunk.ts';
import type { RootState } from '../../app/store.ts';
import type { ApiResponse, IProduct } from '../../types.ts';

interface CategoryInitialState {
  categories: ApiResponse | null;
  filteredProducts: IProduct[];
  loadings: boolean;
  paginationLoading: boolean;
  error: boolean;
}

const initialState:CategoryInitialState = {
  categories: null,
  filteredProducts: [],
  loadings: false,
  paginationLoading: false,
  error: false,
};

export const categoriesFromSlice = (state: RootState) => state.categories.categories;
export const categoriesLoadingFromSlice = (state: RootState) => state.categories.loadings;
export const searchProductsFromSlice = (state: RootState) => state.categories.filteredProducts;

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loadings = true;
        state.error = false;
      })
      .addCase(getCategories.fulfilled, (state, {payload: categories}) => {
        state.loadings = false;
        state.categories = categories;
        state.error = false;
      })
      .addCase(getCategories.rejected, (state) => {
        state.loadings = false;
        state.error = true;
      })
      .addCase(getProductsPagination.pending, (state) => {
        state.paginationLoading = true;
        state.error = false;
      })
      .addCase(getProductsPagination.fulfilled, (state, {payload: products}) => {
        state.paginationLoading = false;
        if (state.categories) {
          state.categories.products = [
            ...state.categories.products,
            ...products.products,
          ];
        }
        state.error = false;
      })
      .addCase(getProductsPagination.rejected, (state) => {
        state.paginationLoading = false;
        state.error = true;
      });
  }
});

export const categoriesReducer = categorySlice.reducer;
export const { setFilteredProducts } = categorySlice.actions;