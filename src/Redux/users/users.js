import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line
import api from '../module/api';

const initialState = {

  Loading: false,
  isAuthenticated: false,
  responseCode: '',
  errorMessages: { error: [] },
  signupResponseMsg: null,
  token: '',
  error: '',
  user: '',
  msg: '',
};

export const userSignUp = api.signup;
export const { loginUser } = api;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    passwordMismatch: (state) => ({
      ...state,
      errorMessages: { error: ['password mismatch'] },
    }),

    addToken: (state) => {
      state.token = localStorage.getItem('token');
    },

    addUser: (state) => {
      state.user = localStorage.getItem('user');
    },

    logout: (state) => {
      state.token = null;
      localStorage.clear();
      // window.location.reload();
    },

  },
  extraReducers: (builder) => {
    builder.addCase(userSignUp.fulfilled, (state, { payload }) => {
      if ('id' in payload) {
        return {
          ...state,
          errorMessages: { error: [] },
          signupResponseMsg: 'Created',
        };
      }
      return {
        ...state,
        errorMessages: payload.response.data,
        signupResponseMsg: null,
      };
    });

    builder.addCase(userSignUp.rejected, (state) => ({
      ...state,
      errorMessages: { error: ['server error'] },
      signupResponseMsg: null,
    }));

    builder.addCase(loginUser.pending, (state) => ({
      ...state,
      Loading: true,
    }));

    builder.addCase(loginUser.fulfilled, (state,
      { payload }) => {
      if (payload.error === 'unauthorized') {
        return {
          ...state,
          error: payload.error,
          Loading: false,
          msg: '',
          isAuthenticated: false,
          user: {},
          token: '',
        };
      }
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        msg: 'Created',
        Loading: false,
        user: payload.user,
        error: '',
        token: payload.token,
        isAuthenticated: true,
      };
    });

    builder.addCase(loginUser.rejected, (state) => ({
      ...state,
      Loading: true,
    }));
  },

});

export const authenticated = (state) => state.user.isAuthenticated;

export const {
  passwordMismatch, getData, addToken, addUser, logout,
} = usersSlice.actions;

export default usersSlice.reducer;
