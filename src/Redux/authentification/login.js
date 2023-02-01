/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line no-param-reassign
// import axios from 'axios';

const initialState = {
  msg: '',
  user: '',
  token: '',
  error: '',
  Loading: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: {
    /** ********Log in ******************* */
    [loginUser.pending]: (state) => {
      state.Loading = true;
    },
    [loginUser.fulfilled]: (state, {
      payload: {
        error, msg, user, token,
      },
    }) => {
      state.Loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.user = user;
        state.token = token;
        state.error = '';
        localStorage.setItem('msg', msg);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
      }
    },
    [loginUser.rejected]: (state, action) => {
      state.Loading = true;
    },
  },
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
