import React, { FC } from 'react';
import { ROUTES } from 'src/routes';
import { useHome } from './hooks/useHome';
import { Button } from 'src/components/index';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography } from 'src/components/index';
import { HIVOT_HOME_LINK } from 'src/constants/app';
import MuiPhoneNumber from 'material-ui-phone-number';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import './index.css';

export const Home: FC = React.memo(() => {
  const history = useHistory();
  const { t } = useTranslation();
  const { isLoading, handleOnChange, handleCLick } = useHome();

  return <div className={'home'}>
    <Typography mt={3} variant={'h5'} component={'h5'}>
      {t('initial.home.title')}
    </Typography>
    <Typography mt={1}>
      {t('initial.home.text')}
    </Typography>
    <MuiPhoneNumber
      className={'phone-number'}
      disabled={isLoading}
      defaultCountry={'us'}
      onChange={(e) => handleOnChange(e)} />
    <div className={'buttons'}>
      <Button fullWidth variant="contained" disabled={isLoading} onClick={handleCLick}>
        {t('initial.home.login')}
        <FontAwesomeIcon style={{ margin: '0 10px' }} icon={faArrowRight} />
        {
          isLoading
          &&
          <FontAwesomeIcon spin={true} icon={faCircleNotch} />
        }
      </Button>
    </div>
    <Typography align={'center'} mt={3}>
      {t('initial.home.have')}
      <span className={'invite-code'} onClick={() => history.push(ROUTES.InviteCode)}>
        {t('initial.home.inviteCode')}
      </span>
    </Typography>
    <Typography align={'center'} mt={3}>
      {t('initial.home.findOut')}
      <a rel="noreferrer" className={'invite-code'} target={'_blank'} href={HIVOT_HOME_LINK}>
        {t('companyName')}.
      </a>
    </Typography>
  </div>
});