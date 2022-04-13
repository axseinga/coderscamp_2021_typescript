import { axiosClient } from '../../../../utils/axios-utils';

type LoginData = {
  email: string;
  password: string;
};

const loginRequest = (data: LoginData) =>
  axiosClient.post('/user/login', data).then((res) => res.data);

export { loginRequest };
