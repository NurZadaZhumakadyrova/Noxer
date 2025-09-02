import axios from "axios";

const axiosApi = axios.create({
  baseURL: import.meta.env.PROD
    ? "https://noxer-test.ru/webapp/api"
    : "/api/webapp/api",
});

export default axiosApi;