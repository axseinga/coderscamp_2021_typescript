import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5050',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      axiosClient.defaults.headers.common['auth-token'] =
        JSON.parse(accessToken);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (res) => res, // success response interceptor
  (err) => {
    // usually you'd look for a 401 status ¯\_(ツ)_/¯
    if (err.response?.data?.status === 304) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }

    return Promise.reject(err);
  }
);
export { axiosClient };
