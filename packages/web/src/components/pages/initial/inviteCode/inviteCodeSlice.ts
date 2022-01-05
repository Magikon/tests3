import { ActionTypes } from 'src/constants/actionTypes';
import { StatusTypes } from 'src/constants/actionTypes';
import { requestVerifyInvitationCode } from '@hivot/common/src';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IInvitationCodeVerifyPayload } from '@hivot/common/src/api/auth';

export const initialState = {
  status: StatusTypes.idle
}

export const verifyInviteCode = createAsyncThunk(
  ActionTypes.verifyInvitationCode,
  async (payload: IInvitationCodeVerifyPayload) => {
    return await requestVerifyInvitationCode(payload);
  }
);

export const inviteCodeSlice = createSlice({
  name: 'inviteCode',
  initialState,
  reducers: {
    resetInviteCodeState: state => {
      state.status = StatusTypes.idle
    }
  },
  extraReducers: builder => {
    builder
      .addCase(verifyInviteCode.pending, (state) => {
        state.status = StatusTypes.loading;
      })
      .addCase(verifyInviteCode.fulfilled, (state, action) => {
        if (action?.payload?.data?.is_available) {
          state.status = StatusTypes.success;
        } else {
          state.status = StatusTypes.failed;
        }
      })
      .addCase(verifyInviteCode.rejected, (state) => {
        state.status = StatusTypes.failed;
      })
  }
});

export const { resetInviteCodeState } = inviteCodeSlice.actions;