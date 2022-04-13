import { useMutation } from 'react-query';
import { loginRequest } from './request/loginRequest';
import { useNavigate } from 'react-router-dom';

type LoginData = {
  email: string;
  password: string;
};

const useLoginQuery = () => {
  const navigate = useNavigate();
  return useMutation((data: LoginData) => loginRequest(data), {
    onError: (error: any) => {
      console.log(error.response.data);
    },
    onSuccess: () => {
      navigate('/userInfo');
    },
  });
};

export { useLoginQuery };
