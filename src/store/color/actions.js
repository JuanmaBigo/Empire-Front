import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllColors = createAsyncThunk(
  'getAllColors',
  async ({_id}) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/colors/${_id}`);
      console.log("hola") 
      return response.data;
    } catch (error) {
      console.log(error);
    }
  });

const actions = { getAllColors };

export default actions;
