import { createSlice } from '@reduxjs/toolkit';
import AuthReducer from './AuthReducer';

const AuthInitialState = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
  isAuthenticated: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: AuthInitialState,
  reducers: AuthReducer,
});

export const { login } = AuthSlice.actions;
export default AuthSlice.reducer;

export const isAuthenticated = (state) => state.AuthReducer.isAuthenticated;
export const getUserDetails = (state) => {
  return { userName: state.AuthReducer.userName, email: state.AuthReducer.email };
};
