import { axiosClient } from '../../../../utils/axios-utils';

const getUserInfoRequest = () => axiosClient.get('/user/userInfo');

export { getUserInfoRequest };
