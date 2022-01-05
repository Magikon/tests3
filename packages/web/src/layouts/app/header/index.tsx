import React, { FC } from 'react';
import { ROUTES } from 'src/routes';
import { Tab } from 'src/components';
import { Grid } from 'src/components';
import { Tabs } from 'src/components';
import { Menu } from 'src/components';
import { Paper } from 'src/components';
import { Link } from 'react-router-dom';
import { Avatar } from 'src/components';
import { MenuItem } from 'src/components';
import { InputBase } from 'src/components';
import { IconButton } from 'src/components';
import logo from 'src/images/gray-logo.svg';
import { Typography } from 'src/components';
import { ListItemIcon } from 'src/components';
import { useTranslation } from 'react-i18next';
import { appPages } from 'src/constants/appPages';
import { useTypedSelector } from 'src/store/store';
import { useAppHeader } from './hooks/useAppHeader';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

const ITEM_HEIGHT = 48;

export const AppHeader: FC = React.memo(() => {
  const { profile: { userData }, app: { activePage } } = useTypedSelector(state => state);
  const { t } = useTranslation();
  const {
    open,
    anchorEl,
    handleClose,
    handleClick,
    onPageChange,
    clickToLogout
  } = useAppHeader();

  return <header className={'app-header'}>
    <Grid container>
      <Grid className={'logo-part'} item xs={3}>
        <Link to={ROUTES.App.Home}>
          <img alt={'logo'} src={logo} />
        </Link>
      </Grid>
      <Grid item className={'tabs-part'} xs={5}>
        <Tabs
          value={activePage}
          centered={true}
          onChange={onPageChange}
        >
          <Tab
            wrapped
            value={appPages.home}
            label={<span className={'tab-label'}>
              <FontAwesomeIcon icon={faHome} />&nbsp;{t('app.header.home')}
            </span>}
          />
          <Tab value={appPages.projects}
               label={<span className={'tab-label'}>
                 <FontAwesomeIcon icon={faListAlt} />&nbsp;{t('app.header.projects')}
               </span>}
          />
          <Tab value={appPages.people}
               label={<span className={'tab-label'}>
                 <FontAwesomeIcon icon={faUsers} />&nbsp;{t('app.header.people')}
               </span>}
          />
        </Tabs>
      </Grid>
      <Grid item xs={2}>
        <Paper
          className={'search-bar'}
          component="form"
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search something ..."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <FontAwesomeIcon icon={faSearch} />
          </IconButton>
        </Paper>
      </Grid>
      <Grid className={'menu-part'} item xs={2}>
        <Grid className={'user-menu'} container>
          <Grid item xs={2}>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls="long-menu"
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faEllipsisV} />
            </IconButton>
          </Grid>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button'
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch'
              }
            }}
          >
            <MenuItem onClick={clickToLogout}>
              <ListItemIcon>
                <FontAwesomeIcon fontSize="small" icon={faSignOutAlt} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
          <Grid className={'name'} item xs mr={2}>
            <Typography>{userData.name}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Avatar
              alt={'User Avatar'}
              className={'avatar'}
              src={userData.picture}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </header>
})