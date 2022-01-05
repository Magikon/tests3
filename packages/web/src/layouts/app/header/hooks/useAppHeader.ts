import React from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { requestToLogout } from 'src/components/common/profile/profileSlice';
import { changePage } from 'src/layouts/app/appSlice';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../../routes';

export const useAppHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = useMemo(() => !!anchorEl, [anchorEl]);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const onPageChange = useCallback((e, value) => {
    dispatch(changePage(value));
    history.push(ROUTES.App[value])
  }, [dispatch, history]);

  const clickToLogout = useCallback(() => {
    dispatch(requestToLogout(localStorage.getItem('IdToken')));
  }, [dispatch]);

  return { open, clickToLogout, handleClick, onPageChange, handleClose, anchorEl };
}