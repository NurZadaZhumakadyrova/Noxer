import React from 'react';
import type { ICategory } from '../../../../../types.ts';
import noImage from "../../../../../assets/no-image.jpg";
import "./Category.css";

interface Props {
  category: ICategory;
}

const Category:React.FC<Props> = ({category}) => {
  let image = noImage;
  if (category.Category_Image.trim().length !== 0) {
    image = category.Category_Image;
  }
  return (
    <div className="category">
      <img className="category-img" src={image} alt="category"/>
      <p className="category-title">{category.Category_Name}</p>
    </div>
  );
};

export default Category;