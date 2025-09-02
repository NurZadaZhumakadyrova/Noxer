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

export interface IProductParameter {
  Parameter_ID: number;
  chosen: boolean;
  disabled: boolean;
  extra_field_color: string | null;
  extra_field_image: string | null;
  name: string;
  old_price: number | null;
  parameter_string: string;
  price: number;
  sort_order: number;
}

export interface IProduct {
  Created_At: string;
  OnMain: boolean;
  Product_ID: number;
  Product_Name: string;
  Updated_At: string | null;
  categories: ICategory[];
  colors: IColor[];
  images: IProductImg[];
  marks: IProductMark;
  parameters: IProductParameter[];
}

export interface ApiResponse {
  categories: ICategory[];
  pagination: IPagination;
  product_marks: IProductMark[];
  products: IProduct[];
  status: string;
}

