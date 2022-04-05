import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        value: [],
    },
    reducers: {
        // payload will come as an action
        addPost: (state, action) => {
            state.value.unshift(action.payload);
        },
        addAllPost: (state , action) =>{
            state.value.push(...action.payload);
        },
    }
});

//export actions so that we can use it in component
export const {addPost , addAllPost} = postSlice.actions;

// export initial state
export const selectPost = (state) => state.post.value;

//export reducer
export default postSlice.reducer;