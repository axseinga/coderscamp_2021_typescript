import { useMutation } from 'react-query';
import { registerUserRequest } from './request/registerUserRequest';
import { useNavigate } from 'react-router-dom';

type FormData = {
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  repeat_password: string;
};

export const useRegisterQuery = () => {
  const navigate = useNavigate();
  const registerUser = useMutation(
    (data: FormData) => registerUserRequest(data),
    {
      onError: (error: any) => {
        console.log(error.response.data);
      },
      onSuccess: () => {
        navigate('/login');
      },
    }
  );
  return registerUser;
};
