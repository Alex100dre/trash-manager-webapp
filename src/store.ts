import { configureStore } from "@reduxjs/toolkit";

import trashReducer from "./store/trash/trash.slice";

export const store = configureStore({
    reducer: {
        trash: trashReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch