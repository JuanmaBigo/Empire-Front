import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllRims = createAsyncThunk(
  'getAllRims',
  async (color_id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/rims/all?color_id=${color_id}`);
      console.log('Respuesta de la API2:', response.data.rim);
      return { rim:response.data.rim};
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);


const actions = { getAllRims};

export default actions;