import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReduce from './users/users';

const rootReducer = combineReducers({
  user: userReduce,
  // Add your reducers here

});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
