import { axiosClient } from '../../../../utils/axios-utils';

type FormData = {
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  repeat_password: string;
};

const registerRequest = (data: FormData) =>
  axiosClient.post('/user/register', data);

export { registerRequest };
