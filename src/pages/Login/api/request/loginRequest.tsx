import { axiosClient } from '../../../../utils/axios-utils';

type LoginData = {
  email: string;
  password: string;
};

const loginRequest = (formData: LoginData) =>
  axiosClient.post('/user/login', formData);

export { loginRequest };
