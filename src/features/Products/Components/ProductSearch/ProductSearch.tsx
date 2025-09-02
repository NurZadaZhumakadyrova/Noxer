import { categoriesFromSlice, searchProductsFromSlice } from '../../../Categories/categorySlice.ts';
import { useAppSelector } from '../../../../app/hooks.ts';
import "./ProductSearch.css";
import { NavLink } from 'react-router-dom';

const ProductSearch = () => {
  const products = useAppSelector(searchProductsFromSlice);
  const categories = useAppSelector(categoriesFromSlice);

  const topSelling = categories?.products.map((product) => {
    const important = product.importance_num[0];
    if (important.importance > 0) {
      return product;
    }
  });

  return (
    <>
      {products.length > 0 ?
        <ul className="list">
          {products.map((product) => (
            <li key={product.Product_ID}>
              <NavLink className="nav-link" to={`/product/${product.Product_ID}`}>{product.Product_Name}</NavLink>
            </li>
          ))}
        </ul> :
        <div>
          <div className="look-fore">Часто ищут</div>
          <ul className="list">
            {topSelling && topSelling.map((product) => (
              <li key={product?.Product_ID}>
                <NavLink className="nav-link" to={`/product/${product?.Product_ID}`}>{product?.Product_Name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  );
};

export default ProductSearch;