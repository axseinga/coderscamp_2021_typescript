import { axiosClient } from '../../../utils/axios-utils';

export const getUserInfoRequest = () => axiosClient.get('/user/userInfo');
