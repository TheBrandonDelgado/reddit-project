import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from '../features/search/searchSlice';
import postsSliceReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    posts: postsSliceReducer
  },
});

export default store;
