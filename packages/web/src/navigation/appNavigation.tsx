import React, { FC } from 'react';
import { ROUTES } from 'src/routes';
import AuthRoute from './authRoute';
import { Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { AppLayout } from 'src/layouts/app';
import { history } from 'src/helpers/history';
import { RouteComponentProps } from 'react-router-dom';
import { AppHome } from 'src/components/pages/app/home';
import { People } from 'src/components/pages/app/people';
import { Projects } from 'src/components/pages/app/projects';

export interface OwnProps extends RouteComponentProps {
}

export const AppNavigation: FC<OwnProps> = () => {
  return (
    <AppLayout>
      <Router history={history}>
        <Switch>
          <AuthRoute exact path={ROUTES.App.Home} component={AppHome} />
          <AuthRoute exact path={ROUTES.App.People} component={People} />
          <AuthRoute exact path={ROUTES.App.Projects} component={Projects} />
        </Switch>
      </Router>
    </AppLayout>
  );
};