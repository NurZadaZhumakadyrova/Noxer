import './App.css';
import Layout from './Components/Layout/Layout.tsx';
import { useAppDispatch, useAppSelector } from './app/hooks.ts';
import { categoriesFromSlice } from './features/Categories/categorySlice.ts';
import { useEffect } from 'react';
import { getCategories } from './features/Categories/categoryThunk.ts';
import Categories from './features/Categories/Components/Categories/Categories.tsx';

const App = () => {
  const categories = useAppSelector(categoriesFromSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories()).unwrap();
  }, [dispatch]);

  return (
    <div className="Container">
      <Layout/>
      {categories &&  <Categories categories={categories.categories} />}
    </div>
  );
};

export default App;
