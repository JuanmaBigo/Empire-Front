import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllColors = createAsyncThunk(
  'getAllcolors',
  async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/colors/`);
      console.log(response)
      /* return {
       color: response.data,
      }; */
    } catch (error) {
      console.log(error);
    }
  });


const actions = { getAllColors };

export default actions;
