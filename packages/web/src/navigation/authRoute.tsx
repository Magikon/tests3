import React, { FC } from 'react';
import { useEffect } from 'react';
import { ROUTES } from 'src/routes';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'src/store/store';
import { changePage } from 'src/layouts/app/appSlice';
import { resetHomeState } from 'src/components/pages/initial/home/homeSlice';
import { RouteProps, useHistory, Route, useLocation } from 'react-router-dom';
import { requestToGetProfile, resetProfileState } from 'src/components/common/profile/profileSlice';

export const AuthRoute: FC<RouteProps> = React.memo((props) => {
  const { profile: { userData }, app: { activePage } } = useTypedSelector(state => state);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthorized = localStorage.getItem('IdToken');

  useEffect(() => {
    if (isAuthorized) {
      const storagePage = localStorage.getItem('activePage');
      if (activePage !== storagePage) {
        dispatch(changePage(storagePage));
      }
      if (!userData.name) {
        dispatch(requestToGetProfile());
      }
    }
  }, [location, userData, isAuthorized, dispatch, activePage]);

  useEffect(() => {
    if (!userData.name && !isAuthorized) {
      dispatch(resetProfileState());
      dispatch(resetHomeState());
      history.push(ROUTES.Home);
    }
  }, [userData, history, isAuthorized, dispatch]);

  return <Route {...props} />;
});

export default AuthRoute;