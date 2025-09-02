import React from 'react';
import type { IProduct } from '../../../types.ts';
import "./Product.css";

interface Props {
  product: IProduct;
}
const Product:React.FC<Props> = ({product}) => {
  let image = '';
  let productPrise = 0;
  let oldProductPrise = 0;
  let discountPoint = 0;

  product.images.forEach((product) => {

    if (product.MainImage) {
      image = product.Image_URL;
    }
  });

  product.parameters.forEach((parameter) => {
    productPrise = parameter.price;
    if (parameter.old_price !== null) {
      oldProductPrise = parameter.old_price;
      discountPoint = (oldProductPrise - productPrise) / oldProductPrise * 100;
    }
  });

  return (
    <div className="cart">
      <img className="cart-img" src={image} alt={product.Product_Name}/>
      <div className="product-inf">
        <div className="product-content">
          <div className="product-price">
            <div className="discount">{productPrise.toLocaleString('ru-RU')} ₽</div>
            {oldProductPrise !== 0 && (
              <div className="old-price">{oldProductPrise.toLocaleString('ru-RU')} ₽</div>
            )}
            {discountPoint !== 0 && (
              <div className="product-point">{Math.round(discountPoint)}%</div>
            )}
          </div>
          <div className="description">{product.Product_Name}</div>
        </div>
        <button type="button" className="cart-button">Выбрать</button>
      </div>
    </div>
  );
};

export default Product;