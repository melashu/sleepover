import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const createRoomThunk = createAsyncThunk('room', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/rooms');
  return response.data;
});

const initialState = {
  rooms: [],
  status: 'idel',
};
const roomSlices = createSlice({
  name: 'room',
  initialState,

  reducers: {
    removeRoom: (state, { payload }) => {
      state.rooms = state.rooms.filter((room) => room.id !== payload);
    },
  },
  extraReducers: {
    [createRoomThunk.fulfilled]: (state, { payload }) => {
      state.rooms = payload;
      state.status = 'fulfilled';
    },
    [createRoomThunk.pending]: (state) => {
      state.status = 'pending';
    },
    [createRoomThunk.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});
const getRooms = (state) => state.room.rooms;
export default roomSlices.reducer;
export const { removeRoom } = roomSlices.actions;
export { createRoomThunk, getRooms };
