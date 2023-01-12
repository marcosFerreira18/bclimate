import Geolocation from '@react-native-community/geolocation';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getGeoReverse } from "../services/geo";
import { LocationProps } from "../services/geo/types";
import { getWeather } from "../services/weather";
import { WeatherDataProps } from "../services/weather/types";
import { useSettings } from './settings';

type WeatherContextType = {
    weather: WeatherDataProps | null,
    location: LocationProps | null,
    loading: boolean;
    loadWeather: () => void
    loadLocation: (lat: number, lon: number) => void
}

export const WeatherContext = createContext({} as WeatherContextType)

export const useWeather = (): WeatherContextType => {
    const context = useContext(WeatherContext)
    if (!context) {
        throw new Error(
            'useWeather must be used within an WeatherContext'
        )
    }
    return context
}

interface Props {
    children: React.ReactNode;
}

export const WeatherProvider: React.FC<Props> = ({ children }) => {
    const { unitsType } = useSettings()

    const [weather, setWeather] = useState<WeatherDataProps | null>(null)
    const [location, setLocation] = useState<LocationProps | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            console.log({ latitude, longitude })
            loadLocation(37.785834, -122.406417)
        });
    }, [])

    useEffect(() => {
        loadWeather()
    }, [location, unitsType])

    const loadWeather = useCallback(() => {
        setWeather(null)
        setLoading(true)
        if (location) {
            const { lat, lon } = location
            getWeather(lat, lon, unitsType)
                .then(weather => setWeather(weather))
                .finally(() => setLoading(false))
        }
    }, [location, unitsType])

    const loadLocation = (lat: number, lon: number) => {
        setLoading(true)
        getGeoReverse(lat, lon)
            .then((data) => {
                setLocation(data[0])
            })
    }

    return (
        <WeatherContext.Provider
            value={{ weather, location, loading, loadLocation, loadWeather }}>
            {children}
        </WeatherContext.Provider>
    )
}