import { createSlice } from '@reduxjs/toolkit';
import AppReducer from './AppReducer';

const AppInitialState = {
    isLoading: false,
    isMessageOpen: false,
    message: '',
  };

export const AppSlice = createSlice({
  name: 'app',
  initialState: AppInitialState,
  reducers: AppReducer,
});

export const { updateIsLoading, updateIsMessageOpen, updateMessage } = AppSlice.actions;

export default AppSlice.reducer;

export const isLoading = (state) => state.AppReducer.isLoading;
export const isMessageOpen = (state) => {
  return state.AppReducer.isMessageOpen;
};
export const selectMessage = (state) => state.AppReducer.message;
