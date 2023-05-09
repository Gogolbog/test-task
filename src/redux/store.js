import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersReducer } from "./usersSlice";
import { followReducer } from "./followingSlice";

const persistConfig = {
  key: "usersLocal",
  storage,
};

const persistedFollowing = persistReducer(persistConfig, followReducer);

export const store = configureStore({
  reducer: {
    users: usersReducer,
    following: persistedFollowing,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
