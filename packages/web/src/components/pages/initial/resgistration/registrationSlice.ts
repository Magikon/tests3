import { ActionTypes } from 'src/constants/actionTypes';
import { StatusTypes } from 'src/constants/actionTypes';
import { requestUpdateProfile } from '@hivot/common/src';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type RegisterFields = {
  given_name: string;
  family_name: string;
  picture: string;
}

export const initialState = {
  status: StatusTypes.idle
}

export const updateProfile = createAsyncThunk(
  ActionTypes.requestUpdateProfile,
  async (data: RegisterFields) => {
    return await requestUpdateProfile(data);
  }
);

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.status = StatusTypes.loading;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = StatusTypes.success;
        console.log('response: ', action);
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = StatusTypes.failed;
      })
  }
});