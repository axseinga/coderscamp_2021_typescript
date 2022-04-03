import { useQuery } from 'react-query';
import { getSampleListRequest } from './request/getSampleListRequest';

export const useSampleListQuery = () => {
  const sampleList = useQuery(['sample-list'], () => getSampleListRequest());

  return { sampleList };
};
