import React from 'react';
import { FC, useEffect } from 'react'
import { Route, useLocation } from 'react-router-dom';
import { RouteProps, useHistory } from 'react-router-dom';

export const AuthRoute: FC<RouteProps> = (props) => {
  const token = localStorage.getItem('IdToken');
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (token) {
      history.push('/login');
    }
  }, [history, location]);
  return <Route {...props} />;
};

export default AuthRoute;