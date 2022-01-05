import { createSlice } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { StatusTypes } from 'src/constants/actionTypes';
import { ActionTypes } from 'src/constants/actionTypes';
import { requestActivities } from '@hivot/common/src/api/activities';
import { IActivities } from '@hivot/common/typings/activities.types';

export const initialState = {
  status: StatusTypes.idle,
  selectedProjectsActivity: null,
  activities: []
}

export const getProjectActivities = createAsyncThunk(
  ActionTypes.app.getProjectActivities,
  async () => {
    return await requestActivities();
  }
);

export const selectProjectsActivity = createAction(ActionTypes.app.selectProjectsActivity, (activity: IActivities) => (
  { payload: activity }
))

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjectActivities.pending, (state, action) => {
        state.status = StatusTypes.loading
      })
      .addCase(getProjectActivities.fulfilled, (state, action) => {
        state.status = StatusTypes.success;
        state.activities = action.payload.data.filter(i => i.type === 'job' || i.breadcrumbs.find(b => b.type === 'job'));
      })
      .addCase(getProjectActivities.rejected, (state, action) => {
        state.status = StatusTypes.failed
      })
      .addCase(selectProjectsActivity, (state, action) => {
        state.selectedProjectsActivity = action.payload;
      })
  }
});