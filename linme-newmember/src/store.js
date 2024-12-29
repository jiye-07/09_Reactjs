import { configureStore } from "@reduxjs/toolkit";

import NewMemberSlice from "./slices/NewMemberSlice";

const store = configureStore({
  reducer: {
    NewMemberSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
