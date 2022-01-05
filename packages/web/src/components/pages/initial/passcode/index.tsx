import React, { FC } from 'react';
import { Button } from 'src/components/index';
import { useTranslation } from 'react-i18next';
import { TextField } from 'src/components/index';
import { Typography } from 'src/components/index';
import { usePasscode } from './hooks/usePasscode';
import { FormControl } from 'src/components/index';
import { NextBackButtons } from '../nextBackButtons';
import { FormHelperText } from 'src/components/index';
import { StatusTypes } from 'src/constants/actionTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './passcode.css'

export const PassCode: FC = React.memo(() => {
  const { t } = useTranslation();
  const { formState, handleChange, phoneNumber, onNext, status, isLoading, onBack, onClickSendCode } = usePasscode();

  return <div className={'passcode'}>
    <Typography mt={3} variant={'h5'} component={'h2'}>
      {t('initial.passcode.title')}
    </Typography>
    <Typography mt={1} mb={2}>
      {t('initial.passcode.text', { phoneNumber })}
    </Typography>
    <FormControl sx={{ width: '100%', marginBottom: '5px' }}>
      <TextField
        id="code"
        type={'number'}
        placeholder={'Passcode'}
        value={formState.code}
        onChange={handleChange('code')}
      />
      <FormHelperText className={'error'}>
        {
          status === StatusTypes.failed
            ?
            t('messages.errors.incorrectCode')
            :
            ' '
        }
      </FormHelperText>
    </FormControl>
    <Button variant="outlined" className={'dont-receive'} onClick={() => onClickSendCode()}>
      <FontAwesomeIcon style={{ marginRight: 8 }} icon={faExclamationCircle} />
      {t('initial.passcode.didNotReceive')}
    </Button>

    <NextBackButtons onBack={() => onBack()} loading={isLoading} onNext={onNext} />
  </div>
})