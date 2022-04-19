import { useQuery } from 'react-query';
import { getUserInfoRequest } from './request/getUserInfoRequest';

const useUserInfoQuery = () => {
  const user = useQuery('user', () => getUserInfoRequest(), {
    staleTime: Infinity,
    retry: 0,
  });
  return { user };
};

export { useUserInfoQuery };
