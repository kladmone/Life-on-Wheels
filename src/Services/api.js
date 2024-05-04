import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://6634d46a9bb0df2359a2e258.mockapi.io/campers';

export const getCampers = createAsyncThunk(
  'campers/getCampers',
  async (_, thunkAPI) => {
    try {
      const resopnse = await axios.get(URL);
      return resopnse.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.resopnse.data);
    }
  }
);
