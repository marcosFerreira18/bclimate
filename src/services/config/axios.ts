import axios from 'axios';
import { Alert } from 'react-native';

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const GEO_API_URL = 'https://api.openweathermap.org/geo/1.0/';
const API_KEY = 'bc6d69326d9ddb64af784b34c17972a6';

export function setAPI(type: 'geo' | 'weather') {
   const api = axios.create({
      baseURL: type === 'weather' ? API_URL : GEO_API_URL,
   });

   api.interceptors.response.use(
      (response) => response.data,
      (error) => {
         Alert.alert(error.message);
      },
   );
   api.interceptors.request.use((config) => {
      config.params = config.params || {};
      config.params['appid'] = API_KEY;
      return config;
   });

   return api;
}
