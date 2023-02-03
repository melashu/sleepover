import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const unReserveRoomThunk = createAsyncThunk('unreserve', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/rooms');
  const room = response.data.filter((room) => !room.reserve);
  return room;
});

const reservedRoomThunk = createAsyncThunk('reserve', async () => {
  const response = await axios.get("http://127.0.0.1:3000/api/v1/reservations");
  return response.data;
});

const initialState = {
  reserves: [],
  unreserves: [],
  loadingStatus: 'idel',
};

const reserveSlices = createSlice({
  name: 'reserve',
  initialState,
  extraReducers: {
    [unReserveRoomThunk.fulfilled]: (state, { payload }) => {
      state.unreserves = payload;
    },
    [unReserveRoomThunk.pending]: (state) => {
      state.loadingStatus = 'pending';
    },
    [unReserveRoomThunk.rejected]: (state) => {
      state.loadingStatus = 'reject';
    },
    [reservedRoomThunk.fulfilled]: (state, { payload }) => {
      state.reserves = payload;
    },
  },
});

const getReservedRoom = (state) => state.reserve.reserves;
const getUnreservedRoom = (state) => state.reserve.unreserves;
const getLoadingStatus = (state) => state.reserve.loadingStatus;
export {
  unReserveRoomThunk,
  reservedRoomThunk,
  getReservedRoom,
  getLoadingStatus,
  getUnreservedRoom,
};
export default reserveSlices.reducer;
