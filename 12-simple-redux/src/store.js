import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from "./slices/CounterSlice";
import GradeSlice from "./slices/GradeSlice";
import TrafficAccSlice from "./slices/TrafficAccSlice";

const store = configureStore({
  reducer: {
    CounterSlice,
    GradeSlice,
    TrafficAccSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
