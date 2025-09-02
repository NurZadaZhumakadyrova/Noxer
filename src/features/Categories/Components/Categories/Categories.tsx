import Category from './Category/Category.tsx';
import React, { useRef } from 'react';
import type { ICategory } from '../../../../types.ts';
import "./Categories.css";
import product from '../../../Products/Components/Products/Product/Product.tsx';

interface Props {
  categories: ICategory[];
}

const Categories:React.FC<Props> = (categories) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className="categories-wrapper">
      <button className="scroll-btn left" onClick={scrollLeft}>
        ◀
      </button>
      <div className="categories" ref={containerRef}>
        {categories.categories.map((category) => (
          <Category key={category.Category_ID + product.name} category={category}/>
        ))}
      </div>
      <button className="scroll-btn right" onClick={scrollRight}>
        ▶
      </button>
    </div>
  );
};

export default Categories;