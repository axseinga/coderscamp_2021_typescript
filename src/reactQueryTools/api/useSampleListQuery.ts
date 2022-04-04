import { useQuery } from 'react-query';
import { getSampleListRequest } from './request/getSampleListRequest';

const useSampleListQuery = () => {
  const sampleList = useQuery(['sample-list'], () => getSampleListRequest());

  return { sampleList };
};

export { useSampleListQuery };
