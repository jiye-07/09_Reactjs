import { configureStore } from '@reduxjs/toolkit';

import TitanicSlice from './slices/TitanicSlice';

const store = configureStore({
    reducer: {
        TitanicSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;