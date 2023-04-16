import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from '../../configHost';

const getAllCategories = createAsyncThunk(
  'getAllCategories',
  async () => {
    try {
      let url = `${apiUrl}categories`;
      const response = await axios.get(url);
      return { categories: response.data.response }; 
    } catch (error) {
      console.error(error);
    }
  }
);

const actions = {  getAllCategories };

export default actions;