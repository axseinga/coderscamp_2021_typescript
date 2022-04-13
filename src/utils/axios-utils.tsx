import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5050',
  headers: {
    'Content-Type': 'application/json',
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

export { axiosClient };
