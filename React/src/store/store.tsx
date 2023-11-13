import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/userAPI/userSlice';
import langunageSlice from './components/languageAPI/languageSlice';

export function createStore(initialState = {}) {
  return configureStore({
    reducer: {
      user: userReducer,
      lang: langunageSlice,
    },
    preloadedState: initialState,
  });
}

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
