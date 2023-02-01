import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:3000/';

const headers = {
  'Content-Type': 'application/json',
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

};

export default api;
