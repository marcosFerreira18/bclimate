import React from 'react';
import { useWeather } from '../../hooks/weather';
import { ItemMoreInfoIcon, ItemMoreInfoTitle, ItemMoreInfoValue, MoreInfoContainer, MoreInfoItemContainer } from './styles';

const MoreInfo: React.FC = () => {
    const { weather } = useWeather()

    return (
        <MoreInfoContainer
            blurType="dark"
            blurAmount={1}
            reducedTransparencyFallbackColor="black">
            <Item icon='💨' title='ventos' value={`${weather?.current.wind_speed}m/s`} />
            <Item icon='💦' title='humidade' value={`${weather?.current.humidity}%`} />
            <Item icon='💨' title='chuva' value={`${weather?.hourly[0].pop}%`} />
        </MoreInfoContainer>
    );
}


const Item: React.FC<{ icon: string, value: string, title: string }> = ({ icon, value, title }) => {
    return (
        <MoreInfoItemContainer>
            <ItemMoreInfoIcon>
                {icon}
            </ItemMoreInfoIcon>
            <ItemMoreInfoValue>
                {value}
            </ItemMoreInfoValue>
            <ItemMoreInfoTitle>
                {title}
            </ItemMoreInfoTitle>
        </MoreInfoItemContainer>
    )
}
export default MoreInfo;