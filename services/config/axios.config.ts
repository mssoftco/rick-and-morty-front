import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@/constants/defaults';
import { onSuccess, onError } from '@/services/config/requestHandler';

const instance = axios.create({ baseURL: BASE_URL });
instance.defaults.headers.post['Content-Type'] = 'application/json';
/* for cookie send to server but server not allow */
// instance.defaults.withCredentials = true;

const request = async ({ ...options }: AxiosRequestConfig) => {
  return instance(options).then(onSuccess).catch(onError);
};

export default request;
