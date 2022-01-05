import React from 'react';
import { FC } from 'react';
import logo from 'src/images/gray-logo.svg';

export const People: FC = React.memo(() => {
  return <div>
    <div style={{ textAlign: 'center', padding: 100, color: '#F47C2B' }}>
      <h1>Welcome to the Hivot People Page</h1>
      <img style={{ marginBottom: '-2px' }} alt={'logo'} src={logo} />
    </div>
  </div>
});