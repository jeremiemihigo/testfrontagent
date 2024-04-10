/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { lien, config } from '../Static'

const initialState = {
  raison: [],
  readRaison: '',
  readRaisonError: '',
}
export const RaisonRead = createAsyncThunk(
  'raison/RaisonRead',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(lien + '/raison', config)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)

const user = createSlice({
  name: 'raison',
  initialState,
  reducers: {},
  extraReducers: {
    [RaisonRead.pending]: (state, action) => {
      return {
        ...state,
        readRaison: 'pending',
        readRaisonError: '',
      }
    },
    [RaisonRead.fulfilled]: (state, action) => {
      return {
        raison: action.payload,
        readRaison: 'success',
        readRaisonError: '',
      }
    },
    [RaisonRead.rejected]: (state, action) => {
      return {
        ...state,
        readRaison: 'rejected',
        readRaisonError: action.payload,
      }
    },
  },
})

export default user.reducer
