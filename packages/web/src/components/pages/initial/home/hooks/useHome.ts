import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { ROUTES } from 'src/routes';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/redux';
import { loginByPhoneNumber } from '../homeSlice';
import { useTypedSelector } from 'src/store/store';
import { checkPhoneNumberAsync } from '../homeSlice';
import { StatusTypes } from 'src/constants/actionTypes';
import { resetInviteCodeState } from '../../inviteCode/inviteCodeSlice';

export const useHome = () => {
  const history = useHistory();
  const [formPhoneNumber, setFormPhoneNumber] = useState('');
  const {
    home: { checkPhoneNumber, phoneNumber, login }
  } = useTypedSelector(state => state);
  const dispatch = useAppDispatch();
  const handleOnChange = useCallback((e: string) => {
    setFormPhoneNumber(e);
  }, []);

  const handleCLick = useCallback(() => {
    dispatch(checkPhoneNumberAsync(formPhoneNumber));
  }, [formPhoneNumber, dispatch]);

  useEffect(() => {
    if (checkPhoneNumber.status === StatusTypes.success && phoneNumber) {
      const _phoneNumber = phoneNumber.replace(/[&\/\\#,\-()$~%.'":*?<>{} ]/g, '');  // eslint-disable-line
      dispatch(loginByPhoneNumber(_phoneNumber));
    }
  }, [checkPhoneNumber, phoneNumber, dispatch]);

  useEffect(() => {
    dispatch(resetInviteCodeState());
  }, [dispatch])

  useEffect(() => {
    if (login.status === StatusTypes.success && login.username) {
      history.push(ROUTES.Passcode);
    }
  }, [login.status, login.username, history]);

  const isLoading = useMemo(() => (
    checkPhoneNumber.status === StatusTypes.loading ||
    login.status === StatusTypes.loading
  ), [checkPhoneNumber.status, login.status]);


  return {
    isLoading,
    handleCLick,
    handleOnChange
  }
}