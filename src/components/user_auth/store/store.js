

import { configureStore } from '@reduxjs/toolkit';
//import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducers/user_auth_reducer';


const store = configureStore({
  reducer: {
    user: userReducer, // Replace 'user' with your actual slice name
    // Add more reducers if needed
  },
});
export default store;


