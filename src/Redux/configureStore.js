import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import authSlice from './authentification/login';
import userReduce from './users/users';
import hotelReducer from './hotelSlices';
import reserveReducer from './reservationSlices';
import roomReducer from './roomSlices';
import allreservedReducer from './Admin/reserved';
import historyreservedReducer from './Admin/historyReserved';

const rootReducer = combineReducers({
  user: userReduce,
  hotel: hotelReducer,
  reserve: reserveReducer,
  room: roomReducer,
  allreserved: allreservedReducer,
  historyreserved: historyreservedReducer,
  // Add your reducers here
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
