import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from '../../configHost';

const getAllRims = createAsyncThunk(
    'getAllrims',
    async (color_id) => {
        try {
            let url = apiUrl + `rims/all?color_id=${color_id}`
            const response = await axios.get(url);
            return { rim: response.data.rim };
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);


const actions = { getAllRims };

export default actions;