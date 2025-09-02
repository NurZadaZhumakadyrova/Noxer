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