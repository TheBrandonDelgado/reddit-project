import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPostComments = createAsyncThunk(
    'comments/fetchPostComments',
    async (id) => {
        try {
            const response = await fetch(`https://www.reddit.com/r/popular/comments/${id}.json`);
            const jsonData = await response.json();
            return {postID: id, comments: jsonData[1].data.children}
        } catch (error) {
            throw error;
        }
    }
)

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {},
        isLoading: false,
        error: false
    },
    reducers: {},
    extraReducers: {
        [fetchPostComments.pending]: (state, action) => {
            state.isLoading = true;
            state.error = false;
            console.log(state.comments)
        },
        [fetchPostComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = false;
            const { postID, comments } = action.payload;
            state.comments[postID] = comments;
        },
        [fetchPostComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const selectComments = (state) => state.comments.comments;

export default commentsSlice.reducer;