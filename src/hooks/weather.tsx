import Geolocation from '@react-native-community/geolocation';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
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

const requestLocationPermission = async () => {
    try {
        if (Platform.OS === 'ios')
            return true
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Geolocation Permission',
                message: 'Can we access your location?',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        console.log('granted', granted);
        if (granted === 'granted') {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
};

export const WeatherProvider: React.FC<Props> = ({ children }) => {
    const { unitsType } = useSettings()

    const [weather, setWeather] = useState<WeatherDataProps | null>(null)
    const [location, setLocation] = useState<LocationProps | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            loadLocation(latitude, longitude)
        });
        requestLocationPermission().then(perm => {
            console.log(perm)
            if (perm)
                Geolocation.getCurrentPosition(
                    (location) => {
                        console.log('location ', location);

                    },
                    (error) => {
                        console.log('request location error', error);
                    },
                    Platform.OS === 'android' ? {} : { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 }
                );
            // Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            //     loadLocation(latitude, longitude)
            // });
            else
                Alert.alert('Precisamos da sua permissão para usarmos sua localização.')
        })

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