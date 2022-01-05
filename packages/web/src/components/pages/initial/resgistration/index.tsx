import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'src/components/index';
import { FormControl } from 'src/components/index';
import { OutlinedInput } from 'src/components/index';
import { NextBackButtons } from '../nextBackButtons';
import { PRIVACY_POLICY_LINK } from 'src/constants/app';
import { useRegistration } from './hooks/useRegistartion';
import { TERMS_AND_CONDITIONS_LINK } from 'src/constants/app';
import './registration.css'

export const Registration: FC = React.memo(() => {
  const { t } = useTranslation();
  const { formState, handleChange, onNext, isLoading, onBack } = useRegistration();

  return <div className={'registration'}>
    <Typography mt={3} variant={'h5'} component={'h2'}>
      {t('initial.registration.title')}
    </Typography>
    <Typography mt={1} mb={2}>
      {t('initial.registration.text')}
    </Typography>
    <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
      <OutlinedInput
        id="first-name"
        placeholder={'First Name'}
        value={formState.given_name}
        onChange={handleChange('given_name')}
      />
    </FormControl>
    <FormControl sx={{ width: '100%' }}>
      <OutlinedInput
        id="first-name"
        placeholder={'Last Name'}
        value={formState.family_name}
        onChange={handleChange('family_name')}
      />
    </FormControl>

    <NextBackButtons onBack={onBack} loading={isLoading} onNext={onNext} />

    <Typography className={'warning-text'} mt={5}>
      {t('messages.warning.registration')}
      <a rel="noreferrer" target={'_blank'} href={TERMS_AND_CONDITIONS_LINK}>
        {t('footer.terms')}
      </a>&nbsp;{t('common.and')}&nbsp;
      <a rel="noreferrer" target={'_blank'} href={PRIVACY_POLICY_LINK}>
        {t('footer.privacyPolicy')}
      </a>.
    </Typography>
  </div>
})