import { createAction } from '@reduxjs/toolkit';
import { requestToLogin } from '@hivot/common/src';
import { ActionTypes } from 'src/constants/actionTypes';
import { StatusTypes } from 'src/constants/actionTypes';
import { requestCheckPhoneNumber } from '@hivot/common/src';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export enum CheckNumberStatus {
  complete = 'complete',
  incomplete = 'incomplete',
}

export const initialState = {
  phoneNumber: undefined,
  checkPhoneNumber: {
    status: StatusTypes.idle,
    userStatus: CheckNumberStatus.incomplete
  },
  login: {
    status: StatusTypes.idle,
    username: undefined,
    session: undefined
  }
}

export const checkPhoneNumberAsync = createAsyncThunk(
  ActionTypes.checkPhoneNumber,
  async (phoneNumber: string) => {
    return await requestCheckPhoneNumber(phoneNumber);
  }
);

export const loginByPhoneNumber = createAsyncThunk(
  ActionTypes.loginByPhoneNumber,
  async (phoneNumber: string) => {
    return await requestToLogin(phoneNumber);
  }
);

export const resetHomeState = createAction('INITIAL/RESET_HOME_STATE', () => ({ payload: initialState }));

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(checkPhoneNumberAsync.pending, (state) => {
        state.checkPhoneNumber.status = StatusTypes.loading;
        state.phoneNumber = undefined;
      })
      .addCase(checkPhoneNumberAsync.fulfilled, (state, action) => {
        state.checkPhoneNumber.status = StatusTypes.success;
        state.checkPhoneNumber.userStatus = action.payload.data as CheckNumberStatus;
        state.phoneNumber = action?.meta?.arg;
      })
      .addCase(checkPhoneNumberAsync.rejected, (state, action) => {
        state.checkPhoneNumber.status = StatusTypes.failed;
        // state.phoneNumber = action.payload.data.ChallengeParameters.phone_number;
      })
      .addCase(loginByPhoneNumber.pending, (state) => {
        state.login.status = StatusTypes.loading;
      })
      .addCase(loginByPhoneNumber.fulfilled, (state, action) => {
        state.login.status = StatusTypes.success;
        state.login.session = action.payload.data?.Session;
        state.login.username = state.phoneNumber;

      })
      .addCase(loginByPhoneNumber.rejected, (state, action) => {
        state.login.status = StatusTypes.failed;
      })
      .addCase(resetHomeState, (state, action) => {
        state.login = action.payload.login;
        state.phoneNumber = action.payload.phoneNumber;
        state.checkPhoneNumber = action.payload.checkPhoneNumber;
      })
  }
});