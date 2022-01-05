import React, { FC } from 'react';
import { ReactElement } from 'react';
import { AppHeader } from './header';
import { Footer } from 'src/layouts/footer';
import './appLayout.css'

interface IAppLayout {
  children: ReactElement;
}

export const AppLayout: FC<IAppLayout> = React.memo((props) => {
  const { children } = props;
  return <div>
    <AppHeader />
    <div className={'app-layout'}>
      {children}
    </div>
    <Footer />
  </div>;
})