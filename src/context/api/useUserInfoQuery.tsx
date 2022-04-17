import { useQuery } from 'react-query';
import { getUserInfoRequest } from './request/getUserInfoRequest';

const useUserInfoQuery = () => {
  const user = useQuery('user', () => getUserInfoRequest(), {
    retry: 1,
  });
  return { user };
};

export { useUserInfoQuery };
