import React, { FC } from 'react';
import { useEffect } from 'react';
import { ROUTES } from 'src/routes';
import { ReactElement } from 'react';
import { Grid } from 'src/components';
import { Footer } from 'src/layouts/footer';
import logo from 'src/images/header-logo.svg';
import { useHistory } from 'react-router-dom';
import bg from 'src/images/initialSource.jpeg';
import { useTypedSelector } from 'src/store/store';
import './initialLayout.css'

interface IAuthLayout {
  children: ReactElement;
}

const containerStyle = {
  backgroundColor: '#2c3e51',
  paddingTop: '10%'
}

const contentStyle = {
  backgroundColor: '#33495f',
  width: '100%',
  minHeight: '20vh',
  padding: '40px'
}

export const InitialLayout: FC<IAuthLayout> = React.memo((props) => {
  const { children } = props;
  const history = useHistory();
  const { home: { phoneNumber } } = useTypedSelector(state => state);

  useEffect(() => {
    if (!phoneNumber) {
      history.push(ROUTES.Home);
    }
  }, [phoneNumber, history]);
  return <>
    <Grid style={{ backgroundImage: `url(${bg})` }} className={'initial-layout'} container>
      <Grid style={containerStyle} item xs={5}>
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8} style={contentStyle}>
            <img alt={'Logo'} style={{ maxWidth: '50%' }} src={logo} />
            {children}
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Grid>
      <Grid item xs={7}>
      </Grid>
    </Grid>
    <Footer />
  </>;
})