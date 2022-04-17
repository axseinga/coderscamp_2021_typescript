import { useMutation } from 'react-query';
import { registerRequest } from './request/registerRequest';
import { useNavigate } from 'react-router-dom';

type FormData = {
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  repeat_password: string;
};

const useRegisterQuery = () => {
  const navigate = useNavigate();
  return useMutation((data: FormData) => registerRequest(data), {
    onError: (error: any) => {
      console.log(error.response.data);
    },
    onSuccess: () => {
      navigate('/login');
    },
  });
};

export { useRegisterQuery };
