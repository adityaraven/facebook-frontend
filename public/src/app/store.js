import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";


export default configureStore({
    //slices will be defined here
    reducer: {
        post: postReducer,
    },
})