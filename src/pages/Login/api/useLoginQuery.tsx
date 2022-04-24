import { useMutation, useQueryClient } from 'react-query';
import { loginRequest } from './request/loginRequest';
import { useNavigate, useLocation } from 'react-router-dom';

type LoginData = {
  email: string;
  password: string;
};

type LocationProps = {
  state: {
    from: Location;
  };
};

export const useLoginQuery = () => {
  const navigate = useNavigate();
  const location = useLocation() as LocationProps;

  const from = location.state?.from?.pathname || '/';

  const queryClient = useQueryClient();

  const loginUser = useMutation(
    (formData: LoginData) => loginRequest(formData),
    {
      onError: (error: any) => {
        console.log(error.response.data);
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries('userInfo');
        localStorage.setItem(
          'accessToken',
          JSON.stringify(data.data?.accessToken)
        );
        localStorage.setItem(
          'refreshToken',
          JSON.stringify(data.data?.refreshToken)
        );
        navigate(from, { replace: true });
      },
    }
  );
  return loginUser;
};
