import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { appSlice } from 'src/layouts/app/appSlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { homeSlice } from 'src/components/pages/initial/home/homeSlice';
import { appHomeSlice } from 'src/components/pages/app/home/appHomeSlice';
import { profileSlice } from 'src/components/common/profile/profileSlice';
import { projectsSlice } from 'src/components/pages/app/projects/projectsSlice';
import { passcodeSlice } from 'src/components/pages/initial/passcode/passcodeSlice';
import { inviteCodeSlice } from 'src/components/pages/initial/inviteCode/inviteCodeSlice';
import { registrationSlice } from 'src/components/pages/initial/resgistration/registrationSlice';

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    passcode: passcodeSlice.reducer,
    registration: registrationSlice.reducer,
    inviteCode: inviteCodeSlice.reducer,
    profile: profileSlice.reducer,
    app: appSlice.reducer,
    appHome: appHomeSlice.reducer,
    projects: projectsSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
