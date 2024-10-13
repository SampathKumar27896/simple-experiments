import { current } from '@reduxjs/toolkit';
const AppInitialState = {
  isLoading: false,
  isMessageOpen: false,
  message: '',
};
const AppReducer = {
  updateIsLoading: (state, action) => {
    state.isLoading = action.payload.isLoading;
  },
  updateIsMessageOpen: (state, action) => {
   state.isMessageOpen = action.payload.isMessageOpen;
   console.log(current(state));
  },
  updateMessage: (state, action) => {
    state.message = action.payload.message;
  },
};

export default AppReducer;
