import { createContext, useContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

type SettingsContextType = {
    unitsType: string,
    changeUnitsType: (unitsType: string) => void
}

export const SettingsContext = createContext({} as SettingsContextType)


export const useSettings = (): SettingsContextType => {
    const context = useContext(SettingsContext)
    if (!context) {
        throw new Error(
            'useSettings must be used within an SettingsContext'
        )
    }
    return context
}

interface Props {
    children: React.ReactNode;
}

export const SettingsProvider: React.FC<Props> = ({ children }) => {
    const [unitsType, setUnitsType] = useState<string>('')

    useEffect(() => {
        getUnitsType()
    }, [])

    const getUnitsType = async () => {
        try {
            const _unitsType = await AsyncStorage.getItem("unitsType");
            setUnitsType((_unitsType && JSON.parse(_unitsType)) || 'standard')
        } catch (error) {
            console.log(error);
        }
    };

    const changeUnitsType = async (unitsType: string) => {
        setUnitsType(unitsType)
        try {
            await AsyncStorage.setItem("unitsType", JSON.stringify(unitsType));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SettingsContext.Provider
            value={{ changeUnitsType, unitsType }}>
            {children}
        </SettingsContext.Provider>
    )
}