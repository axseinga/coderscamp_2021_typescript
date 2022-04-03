import axios from 'axios';

export const getSampleListRequest = () =>
  axios.get('https://jsonplaceholder.typicode.com/posts');
