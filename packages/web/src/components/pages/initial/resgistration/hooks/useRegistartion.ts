import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { ROUTES } from 'src/routes';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from 'src/store/store';
import { updateProfile } from '../registrationSlice';
import { RegisterFields } from '../registrationSlice';
import { StatusTypes } from 'src/constants/actionTypes';
import { resetPasscodeState } from '../../passcode/passcodeSlice';

export const useRegistration = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { registration: { status } } = useTypedSelector(state => state)
  const [formState, setFormState] = useState<RegisterFields>({
    given_name: undefined,
    family_name: undefined,
    picture: ''
  });

  const handleChange = useCallback((prop) => (event) => {
    setFormState(oldState => {
      return { ...oldState, [prop]: event?.target.value }
    })
  }, []);

  const onNext = useCallback(() => {
    dispatch(updateProfile(formState));
  }, [formState, dispatch]);

  const onBack = useCallback(() => {
    dispatch(resetPasscodeState());
    history.push(ROUTES.Passcode);
  }, [dispatch, history]);

  useEffect(() => {
    if (status === StatusTypes.success) {
      history.push(ROUTES.App.Home);
    }
  }, [status, history]);

  const isLoading = useMemo(() => status === StatusTypes.loading, [status]);

  return {
    handleChange,
    formState,
    onNext,
    status,
    isLoading,
    onBack
  }
}