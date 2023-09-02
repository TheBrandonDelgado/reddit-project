import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collectPostIDs } from '../comments/commentsSlice';

// Define initial state
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// Define async thunk to fetch posts from the API
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts', 
  async () => {
    try {
      const response = await fetch('https://www.reddit.com/r/popular.json');
      const jsonData = await response.json()
      return jsonData.data.children.map(child => child.data);
    } catch (error) {
      throw error;
    }
});

// Create a slice using createSlice
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    upvotePost: (state, action) => {
      const postId = action.payload.id;
      const toggleUpvote = action.payload.upvote;
      const post = state.posts.find(post => post.id === postId);
      if (post && toggleUpvote) {
        post.upvotes++;
      } else if (post && !toggleUpvote) {
        post.upvotes--;
      }
    },
    downvotePost: (state, action) => {
      const postId = action.payload.id;
      const toggleDownvote = action.payload.downvote;
      const post = state.posts.find(post => post.id === postId);
      if (post && toggleDownvote) {
        post.downvotes++;
      } else if (post && !toggleDownvote) {
        post.downvotes--;
      }
    },
    updatePosts: (state, action) => {
        state.posts = action.payload;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
        state.loading = true;
        state.error = null;
    },
    [fetchPosts.fulfilled]: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    }
  },
});

// Export selectors
export const selectPosts = (state) => state.posts.posts;
export const isLoading = (state) => state.posts.loading;

// Export actions and reducer
export const { upvotePost, downvotePost, updatePosts } = postsSlice.actions;
export default postsSlice.reducer;
