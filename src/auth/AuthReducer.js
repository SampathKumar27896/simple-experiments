import { current } from '@reduxjs/toolkit';
const AuthReducer = {
  login: (state, action) => {
  
    if (action.payload.userName === 'admin' && action.payload.password === 'admin') {
      state.userName = action.payload.userName;
      state.password = action.payload.password;
      state.isAuthenticated = true;
    }
    console.log(current(state), action);
   
  },
};

export default AuthReducer;
