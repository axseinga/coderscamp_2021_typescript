import { axiosClient } from '../../../../utils/axios-utils';

type FormData = {
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  repeat_password: string;
};

export const registerUserRequest = (data: FormData) =>
  axiosClient.post('/user/register', data);
