import { requestLogout } from '@hivot/common/src';
import { requestProfile } from '@hivot/common/src';
import { ActionTypes } from 'src/constants/actionTypes';
import { StatusTypes } from 'src/constants/actionTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  userData: {
    id: null,
    name: null,
    picture: '',
    phoneNumber: null
  },
  status: StatusTypes.idle
}

export const requestToGetProfile = createAsyncThunk(
  ActionTypes.requestGetProfile,
  async () => {
    return await requestProfile();
  }
);

export const requestToLogout = createAsyncThunk(
  ActionTypes.requestToLogout,
  async (token: string) => {
    return await requestLogout(token);
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfileState: state => {
      state.status = StatusTypes.idle;
      state.userData.name = initialState.userData.name;
      state.userData.picture = initialState.userData.picture;
      state.userData.phoneNumber = initialState.userData.phoneNumber;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(requestToGetProfile.pending, (state) => {
        state.status = StatusTypes.loading;
      })
      .addCase(requestToGetProfile.fulfilled, (state, action) => {
        const { data } = action.payload;
        state.userData.id = data.id;
        state.userData.name = data.name;
        state.userData.phoneNumber = data.phone_number;
        state.userData.picture = data.picture;
        state.status = StatusTypes.success;
        localStorage.setItem('userData', JSON.stringify({
          id: data.id,
          name: data.name,
          picture: data.picture,
          phoneNumber: data.phone_number
        }))
      })
      .addCase(requestToGetProfile.rejected, (state) => {
        state.status = StatusTypes.failed;
      })
      .addCase(requestToLogout.fulfilled, (state) => {
        localStorage.removeItem('userData');
        localStorage.removeItem('IdToken');
        localStorage.removeItem('activePage');
        state.userData.name = initialState.userData.name;
        state.userData.picture = initialState.userData.picture;
        state.userData.phoneNumber = initialState.userData.phoneNumber;
        state.status = initialState.status;
      })
  }
});

export const { resetProfileState } = profileSlice.actions;