import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async () => {
        const response = await fetch('https://www.reddit.com/subreddits.json');
        const jsonData = await response.json();
        return jsonData.data.children;
    }
);

const initialState = {
    subreddits: [],
    activeSubreddit: {},
    isLoading: false,
    error: false
};

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        changeActiveSubreddit: (state, action) => {
            state.activeSubreddit = action.payload;
        }
    },
    extraReducers: {
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.subreddits.push(action.payload);
        },
        [fetchSubreddits.pending]: (state, action) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchSubreddits.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const selectSubreddits = state => state.subreddits.subreddits;
export const selectActiveSubreddit = state => state.subreddits.activeSubreddit;
export const isLoading = state => state.subreddits.isLoading;

export const { changeActiveSubreddit } = subredditsSlice.actions;

export default subredditsSlice.reducer;