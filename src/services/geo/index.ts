import { setAPI } from '../config/axios';
import { LocationProps } from './types';

export const getGeoReverse = async (
   lat: number,
   lon: number,
): Promise<LocationProps[]> => {
   const api = setAPI('geo');
   return api
      .get('/reverse', { params: { lat, lon } })
      .then((resp) => resp as unknown as LocationProps[])
      .catch((err) => {
         console.log(err);
         return [];
      });
};
