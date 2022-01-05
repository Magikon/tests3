import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'src/store/store';
import { getProjectActivities } from '../projectsSlice';

export const useProjects = () => {
  const { projects } = useTypedSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectActivities());
  }, [dispatch]);

  return { projects };
}