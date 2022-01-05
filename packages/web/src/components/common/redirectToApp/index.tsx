import React from 'react';
import { FC } from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import bg from 'src/images/initialSource.jpeg';
import { useTranslation } from 'react-i18next';
import { detectOS, OSTypes } from 'src/helpers/detectOS';
import { Modal, Typography, Box, Button } from 'src/components/index';

const style: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: '#33495f',
  color: '#fff',
  boxShadow: 24,
  p: 4
};

const marketURL = {
  [OSTypes.android]: 'https://play.google.com/store/apps/details?id=com.catenatechnology.hivot',
  [OSTypes.ios]: 'https://apps.apple.com/us/app/hivot/id1544019751',
  [OSTypes.linux]: 'https://hivot.com/',
  [OSTypes.windows]: 'https://hivot.com/',
  [OSTypes.other]: 'https://hivot.com/'
}

export const RedirectToApp: FC = React.memo(() => {
  const { t } = useTranslation();
  const OS = useMemo(() => detectOS(), []);

  const onDownload = useCallback(() => {
    window.location.href = marketURL[OS];
  }, [OS]);

  return <div style={{
    background: `url(${bg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh'
  }}>
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography mb={3} id="modal-modal-title" variant="h6" component="h2">
          {t('redirectToApp.title')}
        </Typography>
        <div id="modal-modal-description">
          <Button onClick={onDownload} variant="contained">
            {t('redirectToApp.download')}
          </Button>
        </div>
      </Box>
    </Modal>
  </div>

})