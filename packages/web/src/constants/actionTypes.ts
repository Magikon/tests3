export type StatusType = 'IDLE' | 'LOADING' | 'SUCCESS' | 'FAILED';

export const StatusTypes = {
  idle: 'IDLE',
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED'
}

export const ActionTypes = {
  checkPhoneNumber: 'INITIAL/CHECK_PHONE_NUMBER',
  loginByPhoneNumber: 'INITIAL/LOGIN_BY_PHONE_NUMBER',
  verifyInvitationCode: 'INITIAL/VERIFY_INVITATION_CODE',
  verifyLogin: 'INITIAL/VERIFY_LOGIN',
  requestToLogout: 'INITIAL/REQUEST)TO_LOGOUT',
  requestUpdateProfile: 'INITIAL/REQUEST_UPDATE_PROFILE',
  requestGetProfile: 'INITIAL/REQUEST_GET_PROFILE',
  app: {
    pageChange: 'APP/PAGE_CHANGE',
    getActivities: 'APP/GET_ACTIVITIES',
    getProjectActivities: 'APP/GET_PROJECT_ACTIVITIES',
    getFile: 'APP/GET_FILE',
    selectHomeActivity: 'APP/SELECT_HOME_ACTIVITY',
    selectProjectsActivity: 'APP/SELECT_PROJECTS_ACTIVITY'
  }
}