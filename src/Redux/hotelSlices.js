import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getHotelThank = createAsyncThunk('hotel', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/hotels/all');
  return response.data;
});

const createHotelThunk = createAsyncThunk('hotel', async (hotel) => {
  const data = new FormData();
  data.append('name', hotel.name);
  data.append('country', hotel.country);
  data.append('city', hotel.city);
  data.append('phone', hotel.phone);
  data.append('user_id', 1);
  data.append('detail', hotel.detail);
  data.append('image', hotel.image);
  const response = await axios.post('http://127.0.0.1:3000/api/v1/hotels',
    data);
  return response.data.message;
});

const initialState = {
  hotels: [], unReservedHotels: [], loadingStatus: 'idel', message: {},
};

const hotelSlices = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    removeHotel: (state, { payload }) => {
      state.hotels = state.hotels.filter((hotel) => hotel.id !== payload);
    },
  },
  extraReducers: {
    [getHotelThank.fulfilled]: (state, { payload }) => {
      state.loadingStatus = 'success';
      state.hotels = payload;
    },
    [getHotelThank.pending]: (state) => {
      state.loadingStatus = 'pending';
    },
    [getHotelThank.rejected]: (state) => {
      state.loadingStatus = 'rejected';
      alert('no');
    },
    // [createUnreservedHotelThunk.fulfilled]: (state, { payload }) => {
    //   state.unReservedHotels = payload;
    // },
  },
});

const getHotel = (state) => state.hotel.hotels;
const getUnReservedHotel = (state) => state.hotel.unReservedHotels;
export {
  getHotelThank, getUnReservedHotel, getHotel, createHotelThunk,
}; // createUnreservedHotelThunk
export const { removeHotel } = hotelSlices.actions;
export default hotelSlices.reducer;
