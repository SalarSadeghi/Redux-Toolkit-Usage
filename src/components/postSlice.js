import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchPost = createAsyncThunk("fetch/post", 
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data
    }
)

const initialState = {
    postList: [],
    fetchingPost: false,
    errorMessage:null
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: {
        [fetchPost.fulfilled]: (state, action) => {
            state.postList = action.payload
            state.fetchingPost = false
        },
        [fetchPost.pending] : (state) => {
            state.fetchingPost = true
        },
        [fetchPost.rejected] : (state) => {
            state.errorMessage = "oooops"
        }
    }
})

export default postSlice.reducer
export {fetchPost}