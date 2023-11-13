import axios from 'axios';
import { links } from '../router/components/links';

const $host = axios.create({
  baseURL: links.API_URL,
  withCredentials: true,
});

const $authHost = axios.create({
  baseURL: links.API_URL,
  withCredentials: true,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${JSON.parse(
    localStorage.getItem('tokenFile') || ''
  )}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
