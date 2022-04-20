import { useQuery } from 'react-query';
import { getUserInfoRequest } from './request/getUserInfoRequest';

export const useUserInfoQuery = () => {
  const userInfo = useQuery('userInfo', () => getUserInfoRequest());
  return { userInfo };
};
