import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line
import axios from 'axios';

const url = '';

const initialState = {
  searchKeys: [],
  Loading: false,
  isAuthenticated: true,
};

export const getuserData = createAsyncThunk(
  'users/userData',
  async () => {
    try {
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const usersSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: {},
});
export const isAuthenticatedAdmin = (state) => state.user.isAuthenticated;
export default usersSlice.reducer;
