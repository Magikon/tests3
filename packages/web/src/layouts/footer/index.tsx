import moment from 'moment';
import React, { FC } from 'react';
import { Grid } from 'src/components';
import logo from 'src/images/gray-logo.svg'
import { useTranslation } from 'react-i18next';
import { SUPPORT_LINK } from 'src/constants/app';
import { HIVOT_HOME_LINK } from 'src/constants/app';
import { PRIVACY_POLICY_LINK } from 'src/constants/app';
import { TERMS_AND_CONDITIONS_LINK } from 'src/constants/app';
import './footer.css'

export const Footer: FC<any> = React.memo(() => {
  const { t } = useTranslation();
  return <footer>
    <Grid container>
      <Grid item xs={9}>
        <a rel="noreferrer" target={'_blank'} href={PRIVACY_POLICY_LINK}>
          {t('footer.privacyPolicy')} &bull;&nbsp;
        </a>
        <a rel="noreferrer" target={'_blank'} href={TERMS_AND_CONDITIONS_LINK}>
          {t('footer.terms')} &bull;&nbsp;
        </a>
        <a rel="noreferrer" target={'_blank'} href={SUPPORT_LINK}>
          {t('footer.help')} |&nbsp;
        </a>
        {t('footer.copyright')} &copy;&nbsp;
        {moment().utc().format('YYYY')} |&nbsp;
        <a rel="noreferrer" target={'_blank'} href={HIVOT_HOME_LINK}>
          {t('companyName')}
        </a>
      </Grid>
      <Grid textAlign={'right'} item xs={3}>
        <a rel="noreferrer" target={'_blank'} href={HIVOT_HOME_LINK}>
          <img alt={'logo'} src={logo} />
        </a>
      </Grid>
    </Grid>
  </footer>
})