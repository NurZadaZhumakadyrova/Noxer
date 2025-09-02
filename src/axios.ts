import axios from 'axios';

const axiosApi = axios.create({
  baseURL: "/api/webapp/api",
});

export default axiosApi;