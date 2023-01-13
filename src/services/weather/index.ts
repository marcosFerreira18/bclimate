import { setAPI } from '../config/axios';
import { WeatherDataProps } from './types';

export const getWeather = async (
   lat: number,
   lon: number,
   units: string,
): Promise<WeatherDataProps | null> => {
   const api = setAPI('weather');
   return api
      .get('/onecall', { params: { lat, lon, units, lang: 'pt_br' } })
      .then((resp) => resp as unknown as WeatherDataProps)
      .catch((err) => {
         console.log(err);
         return null;
      });
};
