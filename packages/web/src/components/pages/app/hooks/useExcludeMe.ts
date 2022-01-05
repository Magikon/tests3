import { IUser } from '@hivot/common/typings/users.types';
import { useTypedSelector } from 'src/store/store';

export const useExcludeMe = (members: IUser[]) => {
  const { profile: { userData } } = useTypedSelector(state => state);

  return members.filter((m) => m.id !== userData.id);
}