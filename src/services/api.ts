import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.APP_URL}/api`,
});

export default api;
