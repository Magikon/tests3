import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'src/components/index';
import { FormControl } from 'src/components/index';
import { OutlinedInput } from 'src/components/index';
import { NextBackButtons } from '../nextBackButtons';
import { useInviteCode } from './hooks/useInviteCode';
import { FormHelperText } from 'src/components/index';
import { StatusTypes } from 'src/constants/actionTypes';

export const InviteCode: FC = React.memo(() => {
  const { t } = useTranslation();
  const { formState, isLoading, handleChange, onNext, status } = useInviteCode();

  return <div className={'registration'}>
    <Typography mt={3} variant={'h5'} component={'h2'}>
      {t('initial.inviteCode.title')}
    </Typography>
    <Typography mt={1} mb={2}>
      {t('initial.inviteCode.text')}
    </Typography>
    <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
      <OutlinedInput
        id="code"
        type={'number'}
        placeholder={'Invite code'}
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

    <NextBackButtons loading={isLoading} onNext={onNext} />
  </div>
})