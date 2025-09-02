import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axios.ts';
import type { ApiResponse } from '../../types.ts';

export const getCategories = createAsyncThunk<ApiResponse, void>(
  "categories/getCategories",
  async () => {
    const response = await axiosApi<ApiResponse>("/products", {
      params: { on_main: true }
    });
    return response.data;
  }
);

export const getProductsPagination = createAsyncThunk<ApiResponse, {page: number, per_page: number}>(
  "categories/getProductsPagination",
  async ({ page, per_page }) => {
    const response = await axiosApi<ApiResponse>("/products", {
      params: { on_main: false, page, per_page },
    });
    return response.data;
  }
);
