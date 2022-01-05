import React, { FC } from 'react';
import { useCallback } from 'react';
import { Grid } from 'src/components/index';
import { Button } from 'src/components/index';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import './nextBackButtons.css';

interface INextBackButtons {
  onBack?: () => void;
  onNext: () => void;
  loading?: boolean;
}

export const NextBackButtons: FC<INextBackButtons> = React.memo((props) => {
  const { onBack, onNext, loading } = props;
  const { t } = useTranslation();
  const history = useHistory();

  const clickToBack = useCallback(() => {
    onBack ? onBack() : history.goBack();
  }, [onBack, history]);

  const clickToNext = useCallback(() => {
    onNext();
  }, [onNext]);

  return <Grid className={'next-back-buttons'} container>
    <Grid item xs={6} className={'back'}>
      <Button onClick={clickToBack} disabled={loading}>
        <FontAwesomeIcon icon={faArrowLeft} />
        {t('initial.buttons.back')}
        {
          loading
          &&
          <FontAwesomeIcon spin={true} icon={faCircleNotch} />
        }
      </Button>
    </Grid>
    <Grid item xs={6} className={'next'}>
      <Button onClick={clickToNext} disabled={loading}>
        {
          loading
          &&
          <FontAwesomeIcon spin={true} icon={faCircleNotch} />
        }
        {t('initial.buttons.next')}
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </Grid>
  </Grid>
})