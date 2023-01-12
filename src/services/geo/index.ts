import { setAPI } from '../config/axios';
import { LocationProps } from './types';

const api = setAPI('geo');

export const getGeoReverse = async (
   lat: number,
   lon: number,
): Promise<LocationProps[]> => {
   return api
      .get('/reverse?lat=-20.176956&lon=-40.193864&limit=5&appid=bc6d69326d9ddb64af784b34c17972a6', { })
      .then((resp) => resp as unknown as LocationProps[])
      .catch((err) => {
         console.log(err);
         return [];
      });
};
