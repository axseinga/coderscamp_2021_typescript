import { useMutation, useQueryClient } from 'react-query';
import { loginRequest } from './request/loginRequest';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';

type LoginData = {
  email: string;
  password: string;
};

type LocationProps = {
  state: {
    from: Location;
  };
};

const useLoginQuery = () => {
  const { isUser, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation() as unknown as LocationProps;

  const from = location.state?.from?.pathname || '/';

  const queryClient = useQueryClient();

  return useMutation((formData: LoginData) => loginRequest(formData), {
    onError: (error: any) => {
      throw new error.response.data();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
      localStorage.setItem(
        'accessToken',
        JSON.stringify(data.data?.accessToken)
      );
      localStorage.setItem(
        'refreshToken',
        JSON.stringify(data.data?.refreshToken)
      );
      {
        isUser() && navigate('/UserDashboard');
      }
      {
        isAdmin() && navigate('/AdminDashboard');
      }
      navigate(from, { replace: true });
    },
  });
};

export { useLoginQuery };
