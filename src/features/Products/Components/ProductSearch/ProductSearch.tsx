import { categoriesFromSlice, searchProductsFromSlice } from '../../../Categories/categorySlice.ts';
import { useAppSelector } from '../../../../app/hooks.ts';
import "./ProductSearch.css";
import { NavLink } from 'react-router-dom';

const ProductSearch = () => {
  const products = useAppSelector(searchProductsFromSlice);
  const categories = useAppSelector(categoriesFromSlice);

  const topSelling = categories?.products
    .filter(product => product.importance_num[0]?.importance > 0)
    .sort((a, b) => b.importance_num[0].importance - a.importance_num[0].importance)
    .slice(0, 10);

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
            {topSelling && topSelling.map((product, index) => (
              product && (
                <li key={`${product?.Product_ID + product?.Product_Name + index}`}>
                  <NavLink className="nav-link" to={`/product/${product?.Product_ID}`}>{product?.Product_Name}</NavLink>
                </li>
              )))
            }
          </ul>
        </div>
      }
    </>
  );
};

export default ProductSearch;