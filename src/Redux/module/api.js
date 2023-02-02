import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:3001/';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: localStorage.getItem('token'),
};

// const
const api = {

  // Register user
  signup: createAsyncThunk(
    'users/userData',
    async (data) => {
      try {
        const response = await axios.post(
          `${baseUrl}auth/signup`,
          data,
          {
            headers,
          },
        );
        // console.log(response);
        return response.data;
      } catch (error) {
        return error;
      }
    },
  ),
  // Login user
  loginUser: createAsyncThunk(
    'loginuser', async (body) => {
      try {
        const res = await fetch(`${baseUrl}auth/login`, {
          method: 'post',
          headers,
          body: JSON.stringify(body),
        });
        return await res.json();
      } catch (error) {
        return error;
      }
    },
  ),

};

export default api;
