export type WeatherDataProps = {
   lat: number;
   lon: number;
   timezone: string;
   timezone_offset: number;
   current: WeatherProps;
   hourly: WeatherProps[];
   daily: WeatherProps[];
};

export type WeatherProps = {
   dt: number;
   sunrise: number;
   sunset: number;
   temp: number;
   feels_like: number;
   pressure: number;
   humidity: number;
   dew_point: number;
   uvi: number;
   clouds: number;
   visibility: number;
   wind_speed: number;
   wind_deg: number;
   weather: [
      {
         id: number;
         main: string;
         description: string;
         icon: string;
      },
   ];
   pop?: number;
};
