import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from '../features/search/searchSlice';
import postsSliceReducer from '../features/posts/postsSlice';
import commentsSliceReducer from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    posts: postsSliceReducer,
    comments: commentsSliceReducer
  },
});

export default store;
