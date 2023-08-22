import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    search: searchSliceReducer
  },
});

export default store
