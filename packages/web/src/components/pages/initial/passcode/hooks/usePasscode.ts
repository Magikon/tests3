import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ROUTES } from 'src/routes';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from 'src/store/store';
import { StatusTypes } from 'src/constants/actionTypes';
import { verifyLogin, resetPasscodeState } from '../passcodeSlice';
import { resetHomeState } from 'src/components/pages/initial/home/homeSlice';
import { CheckNumberStatus } from 'src/components/pages/initial/home/homeSlice';
import { loginByPhoneNumber } from 'src/components/pages/initial/home/homeSlice';

type PassCodeFields = {
  code: string;
}

export const usePasscode = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    home: { phoneNumber, checkPhoneNumber, login },
    passcode: { status }
  } = useTypedSelector(state => state);
  const [formState, setFormState] = useState<PassCodeFields>({ code: '' });

  const userAlreadyExist = useMemo(() => (
    checkPhoneNumber.userStatus === CheckNumberStatus.complete
  ), [checkPhoneNumber.userStatus]);

  useEffect(() => {
    if (status === StatusTypes.success) {
      history.push(userAlreadyExist ? ROUTES.App.Home : ROUTES.Register);
    }
  }, [history, userAlreadyExist, status]);

  const handleChange = useCallback((prop) => (event) => {
    if (event?.target.value.length < 7) {
      setFormState(oldState => {
        return { ...oldState, [prop]: event?.target.value }
      })
    }
  }, []);

  const onNext = useCallback(() => {
    dispatch(verifyLogin({
      otp: formState.code,
      session: login.session,
      username: login.username
    }));
  }, [formState.code, login.session, login.username, dispatch]);

  const onBack = useCallback(() => {
    dispatch(resetHomeState());
    dispatch(resetPasscodeState());
  }, [dispatch]);

  const onClickSendCode = useCallback(() => {
    const _phoneNumber = phoneNumber.replace(/[&\/\\#,\-()$~%.'":*?<>{} ]/g, '');  // eslint-disable-line
    dispatch(loginByPhoneNumber(_phoneNumber));
  }, [dispatch, phoneNumber]);

  const isLoading = useMemo(() => status === StatusTypes.loading, [status]);

  return {
    handleChange,
    setFormState,
    formState,
    userAlreadyExist,
    phoneNumber,
    onBack,
    onNext,
    status,
    onClickSendCode,
    isLoading
  }
}