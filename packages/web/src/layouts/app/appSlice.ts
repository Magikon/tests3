import { createAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { appPages } from 'src/constants/appPages';
import { ActionTypes } from 'src/constants/actionTypes';

export const initialState = {
  activePage: appPages.home
}

export const changePage = createAction(ActionTypes.app.pageChange, (page: string) => (
  { payload: page }
))

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changePage, (state, action) => {
        localStorage.setItem('activePage', action.payload);
        state.activePage = action.payload;
      })
  }
});