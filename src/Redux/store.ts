import { configureStore } from "@reduxjs/toolkit";
import { picturesApi } from "./pictureQuery/picture";
import picturesReducer from "./picturesSlice/picturesSlice";
import themeReducer from "./theme/theme";

export const store = configureStore({
  reducer: {
    pictures: picturesReducer,
    theme: themeReducer,
    [picturesApi.reducerPath]: picturesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(picturesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
