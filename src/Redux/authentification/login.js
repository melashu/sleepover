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

export const loginUser = createAsyncThunk('loginuser', async (body) => {
  const res = await fetch('http://localhost:3001/auth/login/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

export const signUp = createAsyncThunk('signupuser', async (body) => {
  const res = await fetch('http://localhost:3001/auth/signup/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state) => {
      state.token = localStorage.getItem('token');
    },
    addUser: (state) => {
      state.user = localStorage.getItem('user');
    },
    logout: (state) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.Loading = true;
    },
    [signUp.fulfilled]: (state, { payload: { error, msg } }) => {
      state.Loading = true;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [loginUser.rejected]: (state) => {
      state.Loading = true;
    },
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
