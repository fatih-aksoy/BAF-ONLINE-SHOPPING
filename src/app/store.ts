import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../features/productsSlice";

//! 1

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// ! 1 burada reduceri yazarken app/hooks.ts yi olustur.
