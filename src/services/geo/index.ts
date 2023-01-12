import { setAPI } from '../config/axios';
import { LocationProps } from './types';

const api = setAPI('geo');

export const getGeoReverse = async (
   lat: number,
   lon: number,
): Promise<LocationProps[]> => {
   return api
      .get('/reverse', { params: { lat, lon } })
      .then((resp) => resp as unknown as LocationProps[])
      .catch((err) => {
         console.log(err);
         return [];
      });
};
