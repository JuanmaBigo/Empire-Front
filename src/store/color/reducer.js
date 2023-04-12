import { createReducer } from "@reduxjs/toolkit";
import action_AllColors from './actions.js'

const {getAllColors} = action_AllColors
const initialState = {
    colors: [],
};


const reducer = createReducer ( 
  initialState, 
  (builder) => builder
    .addCase(
      getAllColors.fulfilled,
      (state, action) => {
        let newState = {
          ...state,
          colors: action.payload.color
        }
        return newState
      }
    )
)

export default reducer
