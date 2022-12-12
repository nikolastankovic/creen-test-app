import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;