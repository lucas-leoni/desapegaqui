import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desapegaqui-api.fly.dev/api',
  /* baseURL: 'http://localhost:8080/api', */
  /* baseURL: 'http://192.168.30.19:8080/api', */
});

export default api;
