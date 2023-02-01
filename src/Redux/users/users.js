import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line
import api from '../module/api';

const initialState = {

  searchKeys: [],
  Loading: false,
  isAuthenticated: true,
  responseCode: '',
  errorMessages: { error: [] },
  signupResponseMsg: null,
  currentUser: {},

};

export const userSignUp = api.signup;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    passwordMismatch: (state) => ({
      ...state,
      errorMessages: { error: ['password mismatch'] },
    }),

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
  },
});

export const authenticated = (state) => state.user.isAuthenticated;

export const { passwordMismatch } = usersSlice.actions;

export default usersSlice.reducer;
