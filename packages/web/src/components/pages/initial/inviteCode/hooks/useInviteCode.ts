import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { ROUTES } from 'src/routes';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from 'src/store/store';
import { verifyInviteCode } from '../inviteCodeSlice';
import { StatusTypes } from 'src/constants/actionTypes';

type InviteFields = {
  code: string;
}

export const useInviteCode = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    inviteCode: { status }
  } = useTypedSelector(state => state);
  const [formState, setFormState] = useState<InviteFields>({ code: '' });

  useEffect(() => {
    if (status === StatusTypes.success) {
      history.push(ROUTES.Home);
    }
  }, [history, status]);

  const handleChange = useCallback((prop) => (event) => {
    if (event?.target.value.length < 7) {
      setFormState(oldState => {
        return { ...oldState, [prop]: event?.target.value }
      })
    }
  }, []);

  const onNext = useCallback(() => {
    dispatch(verifyInviteCode(formState));
  }, [formState, dispatch]);


  const isLoading = useMemo(() => status === StatusTypes.loading, [status]);

  return {
    handleChange,
    setFormState,
    formState,
    onNext,
    status,
    isLoading
  }
}