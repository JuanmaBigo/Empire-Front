import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from '../../configHost';

const getAllCars = createAsyncThunk(
  'getAll',
  async () => {
    try {
      let url = `${apiUrl}cars`;
      const response = await axios.get(url);
      return {
        cars: response.data.car,
      };
    } catch (error) {
      console.log(error);
    }
  });

  const getOne = createAsyncThunk('getOne', async ({_id})=>{
    try{
      let url = `${apiUrl}cars/${_id}`;
      const response = await axios.get(url)
      return{
        cars: response.data.response,
        
      }
    }catch(error){
      console.log(error)
    }
  });


const actions = { getAllCars,getOne};

export default actions;
