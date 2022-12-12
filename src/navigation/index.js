import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from 'react';
import { Main } from '../pages/Main';
import { FormPage } from '../pages/FormPage';

import { useAppDispatch } from '../store/index';

import { fetchBooks } from '../store/books';

const Navigation = () => {
  
  const dataFetchedRef = useRef(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(fetchBooks({
      requestParams: {
        sortByAuthor: null,
        sortByTitle: null,
        author: null,
        }
      }
    ));
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Navigation;
