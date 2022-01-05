import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'src/store/store';
import { getActivities } from '../appHomeSlice';

export const useAppHome = () => {
  const { appHome } = useTypedSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return { appHome };
}