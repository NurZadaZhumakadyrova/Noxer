import React from 'react';
import type { IProduct } from '../../../../types.ts';
import Product from './Product/Product.tsx';
import "./Products.css";

interface Props {
  products: IProduct[];
}

const Products:React.FC<Props> = ({products}) => {
  return (
    <div className="products">
      {products.map((product: IProduct, index) => (
        <Product key={`${product.Product_ID + product.Product_Name + index}`} product={product} />
      ))}
    </div>
  );
};

export default Products;