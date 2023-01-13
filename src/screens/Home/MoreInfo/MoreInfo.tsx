import React from 'react';
import { ItemMoreInfoIcon, ItemMoreInfoTitle, ItemMoreInfoValue, MoreInfoContainer, MoreInfoItemContainer } from '../styles';

type MoreInfoProps = {
    wind_speed: number,
    humidity: number
    pop: number
}

const MoreInfo: React.FC<MoreInfoProps> = ({ wind_speed, humidity, pop }) => {

    return (<>
        <MoreInfoContainer
            blurType="dark"
            blurAmount={1}
            reducedTransparencyFallbackColor="black">
            <Item icon='💨' title='ventos' value={`${wind_speed}m/s`} />
            <Item icon='💦' title='humidade' value={`${humidity}%`} />
            <Item icon='💨' title='chuva' value={`${pop}%`} />
        </MoreInfoContainer>

    </>
    );
}


export const Item: React.FC<{ icon: string, value: string, title: string }> = ({ icon, value, title }) => {
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