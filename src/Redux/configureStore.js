import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReduce from './users/users';
import hotelReducer from './hotelSlices';
import reserveReducer from './reservationSlices';
import roomReducer from './roomSlices';

const rootReducer = combineReducers({
  user: userReduce,
  hotel: hotelReducer,
  reserve: reserveReducer,
  room: roomReducer,
  // Add your reducers here
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
