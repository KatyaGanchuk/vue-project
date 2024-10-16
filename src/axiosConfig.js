import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
