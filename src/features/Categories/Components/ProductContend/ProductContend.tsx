import React from 'react';
import Categories from '../Categories/Categories.tsx';
import Products from '../../../Products/Components/Products/Products.tsx';
import type { ApiResponse, } from '../../../../types.ts';
import AdSection from '../../../../Components/AdSection/AdSection.tsx';

interface Props {
  categories: ApiResponse;
}

const ProductContend:React.FC<Props> = ({categories}) => {
  return (
    <>
      <AdSection/>
      {categories &&  <Categories categories={categories.categories || []} />}
      {categories && <Products products={categories.products}/>}
    </>
  );
};

export default ProductContend;