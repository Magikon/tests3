import { createAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { StatusTypes } from 'src/constants/actionTypes';
import { ActionTypes } from 'src/constants/actionTypes';
import { IActivities } from '@hivot/common/typings/activities.types';
import { requestActivities } from '@hivot/common/src/api/activities';

export const initialState = {
  status: StatusTypes.idle,
  selectedActivity: null,
  activities: []
}

export const getActivities = createAsyncThunk(
  ActionTypes.app.getActivities,
  async () => {
    return await requestActivities();
  }
);

export const selectHomeActivity = createAction(ActionTypes.app.selectHomeActivity, (activity: IActivities) => (
  { payload: activity }
))

export const appHomeSlice = createSlice({
  name: 'appHome',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActivities.pending, (state, action) => {
        state.status = StatusTypes.loading
      })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.status = StatusTypes.success;
        state.activities = action.payload.data;
      })
      .addCase(getActivities.rejected, (state, action) => {
        state.status = StatusTypes.failed
      })
      .addCase(selectHomeActivity, (state, action) => {
        state.selectedActivity = action.payload;
      })
  }
});