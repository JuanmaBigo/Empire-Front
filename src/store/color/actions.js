import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllColors = createAsyncThunk(
  'getAllColors',
  async (_id) => {
    if (!_id) {
        throw new Error('El ID del coche no es válido');
      }
    try {
      const response = await axios.get(`http://localhost:8080/api/colors?car_id=${_id}`);
  console.log('Respuesta de la API:', response.data);
      return { colors:response.data.color };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);


const actions = { getAllColors};

export default actions;