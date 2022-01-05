import React from 'react';
import { useEffect } from 'react';
import { ROUTES } from 'src/routes';
import { Home } from 'src/components';
import { PassCode } from 'src/components';
import { InviteCode } from 'src/components';
import { history } from 'src/helpers/history';
import { Registration } from 'src/components';
import { InitialLayout } from 'src/layouts/initial';
import { Router, Route, Switch } from 'react-router-dom';
import { AppNavigation } from 'src/navigation/appNavigation';
import { setupFetchService } from '@hivot/common/src/helpers/fetch'
import { RedirectToApp } from 'src/components/common/redirectToApp';

setupFetchService({
  host: 'https://api.dev.hivot.io',
  tokenFnAsync: () => {
    return Promise.resolve(localStorage.getItem('IdToken'))
  }
});

export const Navigation = () => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', handleResize);
  }, []);

  if (dimensions.width < 768) {
    return <RedirectToApp />
  } else {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path={ROUTES.Home} render={(props) => <InitialLayout {...props}><Home /></InitialLayout>} />
          <Route
            exact
            path={ROUTES.Passcode}
            render={(props) => <InitialLayout {...props}><PassCode /></InitialLayout>} />
          <Route
            exact
            path={ROUTES.Register}
            render={(props) => <InitialLayout {...props}><Registration /></InitialLayout>} />
          <Route
            exact path={ROUTES.InviteCode}
            render={(props) => <InitialLayout {...props}><InviteCode /></InitialLayout>} />
          <Route
            path={ROUTES.App.Home}
            component={AppNavigation}
          />
        </Switch>
      </Router>
    );
  }
};