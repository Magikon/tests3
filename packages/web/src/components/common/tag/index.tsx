import React from 'react';
import { Chip } from 'src/components';
import { ChipTypeMap } from '@mui/material/Chip/Chip';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import './tag.css'

export const Tag: OverridableComponent<ChipTypeMap> = React.memo((props) => {
  const { label } = props;
  if (label === 0 || label === '0') {
    return null;
  }
  return <Chip
    {...props}
    className={'tag'}
    variant="outlined"
    label={`#${label}`}
  />
});