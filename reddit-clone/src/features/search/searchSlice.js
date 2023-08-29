import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updatePosts } from '../posts/postsSlice';

export const fetchSearchResults = createAsyncThunk(
    'search/fetchResults',
    async (searchTerm) => {
        try {
            const response = await fetch(`https://www.reddit.com/r/popular.json?q=${searchTerm}`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }
)

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
        loading: false,
        error: null
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
    extraReducers: {
        [fetchSearchResults.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchSearchResults.fulfilled]: (state, action) => {
            updatePosts(action.payload)
            state.loading = false;
            state.error = null;
        },
        [fetchSearchResults.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
});

export const { setSearchTerm } = searchSlice.actions;

export const selectSearchTerm = (state) => state.search.searchTerm;
export const selectLoading = (state) => state.search.loading;
export const selectError = (state) => state.search.error;

export default searchSlice.reducer