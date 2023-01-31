import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authSlice from './authentification/login';
// import userReduce from './users/users';

const rootReducer = combineReducers({
  // user: userReduce,
  user: authSlice,
  // Add your reducers here
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
