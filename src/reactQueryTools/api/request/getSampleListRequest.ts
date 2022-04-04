import axios from 'axios';

const getSampleListRequest = () =>
  axios.get('https://jsonplaceholder.typicode.com/posts');

export { getSampleListRequest };
