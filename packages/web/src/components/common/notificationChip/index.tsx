import React from 'react';
import { Chip } from 'src/components';
import { ChipTypeMap } from '@mui/material/Chip/Chip';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import './notificationChip.css'

export const NotificationChip: OverridableComponent<ChipTypeMap> = React.memo((props) => {
  const { label } = props;
  if (label === 0 || label === '0') {
    return null;
  }
  return <Chip
    className={'notification-chip'}
    {...props} />
});