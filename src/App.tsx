import './App.css';
import Layout from './Components/Layout/Layout.tsx';
import { useAppDispatch, useAppSelector } from './app/hooks.ts';
import { categoriesFromSlice, categoriesLoadingFromSlice } from './features/Categories/categorySlice.ts';
import { useEffect } from 'react';
import { getCategories, getProductsPagination } from './features/Categories/categoryThunk.ts';
import { Route, Routes } from 'react-router-dom';
import ProductContend from './features/Categories/Components/ProductContend/ProductContend.tsx';
import ProductSearch from './features/Products/Components/ProductSearch/ProductSearch.tsx';
import ProductCart from './features/Products/Components/ProductCart/ProductCart.tsx';
import Loading from './Components/UI/Loading/Loading.tsx';

const App = () => {
  const categories = useAppSelector(categoriesFromSlice);
  const preloader = useAppSelector(categoriesLoadingFromSlice);
  const dispatch = useAppDispatch();
  const page = 1;
  const perPage = 20;

  useEffect(() => {
    dispatch(getCategories()).unwrap();
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(getProductsPagination({ page: page + 1, per_page: perPage })).unwrap();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories, page, dispatch]);

  return (
    <>
      <div className="Container">
        <Layout>
          <Routes>
            <Route path="/" element={categories && <ProductContend categories={categories}/>}/>
            <Route path="/search" element={<ProductSearch/>}/>
            <Route path="/product/:id" element={<ProductCart/>}/>
          </Routes>
        </Layout>
      </div>
      {preloader && <Loading/>}
    </>
  );
};

export default App;
