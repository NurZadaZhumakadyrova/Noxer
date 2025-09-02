import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks.ts';
import { categoriesFromSlice } from '../../../Categories/categorySlice.ts';
import "./ProductCart.css";
import noImage from "../../../../assets/no-image.jpg";

const ProductCart = () => {
  const products = useAppSelector(categoriesFromSlice);
  const {id} = useParams();
  let image: string | boolean = noImage;
  let discountPoint = 0;

  const product = products?.products.find((p) => p.Product_ID === Number(id));

  if (product?.images) {
    image = product.images.filter((i) => i.MainImage)[0].Image_URL;
  }

  if (product && product.parameters[0].old_price) {
    discountPoint = (product?.parameters[0].old_price - product.parameters[0].price) / product.parameters[0].old_price  * 100;
  }

  return product && (
    <div className="product-cart">
      <div className="product-cart-contend">
        <img src={image} alt="product"/>
        <div>
          <p>{product.Product_Name}</p>
          <div>
            <span className="product-cart-price">{product.parameters[0].price.toLocaleString('ru-RU')} ₽</span>
            {
              product.parameters[0].old_price && (<span
                className="product-cart-old-price">{product.parameters[0].old_price.toLocaleString('ru-RU')} ₽</span>)
            }
            {
              discountPoint !== 0 && (
                <span
                  className="product-cart-discount">{Math.round(discountPoint).toLocaleString('ru-RU')} %</span>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;