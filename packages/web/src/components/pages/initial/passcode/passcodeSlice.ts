import { ILoginVerifyPayload } from '@hivot/common/src';
import { ActionTypes } from 'src/constants/actionTypes';
import { StatusTypes } from 'src/constants/actionTypes';
import { requestToVerifyLogin } from '@hivot/common/src';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  status: StatusTypes.idle,
  userData: {
    username: ''
  }
}

export const verifyLogin = createAsyncThunk(
  ActionTypes.verifyLogin,
  async (payload: ILoginVerifyPayload) => {
    return await requestToVerifyLogin(payload);
  }
);

export const passcodeSlice = createSlice({
  name: 'passcode',
  initialState,
  reducers: {
    resetPasscodeState: state => {
      state.status = StatusTypes.idle
    },
    setUserData: state => {
      state.userData = JSON.parse(localStorage.getItem('userData'));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(verifyLogin.pending, (state) => {
        state.status = StatusTypes.loading;
      })
      .addCase(verifyLogin.fulfilled, (state, action) => {
        state.status = StatusTypes.success;
        if (action?.payload?.data?.AuthenticationResult?.IdToken) {
          state.status = StatusTypes.success;
          localStorage.setItem('IdToken', action.payload.data.AuthenticationResult.IdToken);
        } else {
          state.status = StatusTypes.failed;
        }
      })
      .addCase(verifyLogin.rejected, (state, action) => {
        state.status = StatusTypes.failed;
      })
  }
});

export const { resetPasscodeState } = passcodeSlice.actions;