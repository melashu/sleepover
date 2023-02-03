import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import authSlice from './authentification/login';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
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
const storeConfig = {
  key: 'sleepover',
  storage,
};

const persistedReducer = persistReducer(storeConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
