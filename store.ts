import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './features/basketSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

// Infer the `RootState` and ` AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type
export type AppDispatch = typeof store.dispatch;
