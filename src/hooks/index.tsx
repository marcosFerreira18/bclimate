import { SettingsProvider } from "./settings"
import { WeatherProvider } from "./weather"

type ProvidersProps = {
    children: React.ReactNode
}
export const HooksProvider: React.FC<ProvidersProps> = ({ children }) => (
    <SettingsProvider>
        <WeatherProvider>
            {children}
        </WeatherProvider>
    </SettingsProvider>

)