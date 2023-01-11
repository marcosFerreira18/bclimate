import React, { useMemo } from 'react';
import { ItemMoreInfoIcon, ItemMoreInfoTitle, ItemMoreInfoValue, MoreInfoContainer, MoreInfoItemContainer } from './styles';

const MoreInfo: React.FC = () => {

    const renderInfo = useMemo(() => {
        return infos.map((info, i) => {
            return (
                <MoreInfoItemContainer key={i}>
                    <ItemMoreInfoIcon>
                        {info.icon}
                    </ItemMoreInfoIcon>
                    <ItemMoreInfoValue>
                        {`${13} ${info.natation}`}
                    </ItemMoreInfoValue>
                    <ItemMoreInfoTitle>
                        {info.title}
                    </ItemMoreInfoTitle>
                </MoreInfoItemContainer>
            )
        })
    }, [infos])


    return (
        <MoreInfoContainer
            blurType="dark"
            blurAmount={1}
            reducedTransparencyFallbackColor="black">
            {renderInfo}
        </MoreInfoContainer>
    )
        ;
}


const infos = [
    {
        name: 'wind',
        title: "Ventos",
        natation: 'm/s',
        icon: '💨'
    },
    {
        name: "humidity",
        title: "Humidade",
        natation: '%',
        icon: '💦'
    },
    {
        name: "rain",
        title: "Chuva",
        natation: '%',
        icon: '☔️'
    }]
export default MoreInfo;