import { useQuery } from 'react-query';
import { getUserInfoRequest } from './request/getUserInfoRequest';

const useUserInfoQuery = () => {
  const data = useQuery('user', getUserInfoRequest);
  return data;
};

export { useUserInfoQuery };
