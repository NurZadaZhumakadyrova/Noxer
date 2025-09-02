import React from 'react';
import type { IProduct } from '../../types.ts';
import Product from './Product/Product.tsx';
import "./Products.css";

interface Props {
  products: IProduct[];
}

const Products:React.FC<Props> = ({products}) => {
  return (
    <div className="products">
      {products.map((product: IProduct) => (
        <Product key={product.Product_ID} product={product} />
      ))}
    </div>
  );
};

export default Products;