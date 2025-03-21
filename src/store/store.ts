import { configureStore } from "@reduxjs/toolkit";
import { artDataQuery } from "./artDataQuery/artDataQuery";
import filterReducer from "./filterSlice/filterSlice";
import picturesReducer from "./picturesSlice/picturesSlice";
import themeReducer from "./theme/theme";

export const store = configureStore({
  reducer: {
    pictures: picturesReducer,
    filter: filterReducer,
    theme: themeReducer,
    [artDataQuery.reducerPath]: artDataQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artDataQuery.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
