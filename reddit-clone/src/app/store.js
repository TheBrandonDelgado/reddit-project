import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from '../features/search/searchSlice';
import postsSliceReducer from '../features/posts/postsSlice';
import commentsSliceReducer from '../features/comments/commentsSlice';
import SubredditsSlice from '../features/subreddits/SubredditsSlice';

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    posts: postsSliceReducer,
    comments: commentsSliceReducer,
    subreddits: SubredditsSlice
  },
});

export default store;
