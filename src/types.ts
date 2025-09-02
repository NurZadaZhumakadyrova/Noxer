export interface ICategory {
  Category_ID: number;
  Category_Image: string;
  Category_Name: string;
  sort_order: number;
}

export interface IPagination {
  current_page: number;
  has_next: number;
  has_prev: boolean;
  per_page: number;
  total_pages: number;
  total_products: number;
}

export interface IProductMark {
  Mark_ID: number;
  Mark_Name: string;
}

export interface IColor {
  Color_Code: string;
  Color_ID: number;
  Color_Name: string;
  Color_image: string;
  Product_ID: number;
  discount: number | null;
}

export interface IProductImg {
  Image_ID: number;
  Image_URL: string;
  MainImage: boolean;
  Product_ID: number;
  position: string;
  sort_order: number | null;
  title: string;
}

export interface IProduct {
  Created_At: string;
  OnMain: boolean;
  Product_ID: number;
  Product_Name: string;
  Updated_At: string;
  categories: ICategory[];
  colors: IColor[];
  extras: string[];
  images: IProductImg[];
  marks: IProductMark[];
}

export interface ApiResponse {
  categories: ICategory[];
  pagination: IPagination;
  product_marks: IProductMark[];
  products: IProduct[];
  status: string;
}

