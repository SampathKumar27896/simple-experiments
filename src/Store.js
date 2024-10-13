import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/AuthSlice';
import AppReducer from './app/AppSlice';
const Store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    AppReducer: AppReducer
  },
});
export default Store;
