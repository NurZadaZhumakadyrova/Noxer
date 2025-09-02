import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './categoryThunk.ts';
import type { RootState } from '../../app/store.ts';
import type { ApiResponse } from '../../types.ts';

interface CategoryInitialState {
  categories: ApiResponse | null;
  loadings: boolean;
  error: boolean;
}

const initialState:CategoryInitialState = {
  categories: null,
  loadings: false,
  error: false,
};

export const categoriesFromSlice = (state: RootState) => state.categories.categories;
export const categoriesLoadingFromSlice = (state: RootState) => state.categories.loadings;

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
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
      });
  }
});

export const categoriesReducer = categorySlice.reducer;