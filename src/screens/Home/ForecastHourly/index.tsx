import React, { useMemo, useState } from 'react';
import { FlatList, TouchableOpacityProps, View } from 'react-native';
import { ButtonContainer, ButtonIndicator, ButtonText, ForecastHourlyButtonsContainer, ForecastHourlyContainer, ItemTempContainer, TextTemp, TextTime } from './styles';

const ForecastHourly: React.FC = () => {

    const [itemSelected, setItemSelected] = useState('today')

    function handleChangeItemSelected(itemId: 'today' | 'tomorrow') {
        setItemSelected(itemId)
    }

    const renderTabButtons = useMemo(() => {
        return (
            <ForecastHourlyButtonsContainer>
                {tabButtons.map(({ title, id }) =>
                    <TabButton
                        key={id}
                        title={title}
                        selected={itemSelected === id}
                        onPress={() => handleChangeItemSelected(id)}
                    />
                )}
            </ForecastHourlyButtonsContainer>
        )
    }, [itemSelected])

    const renderItem = ({ item: { temp, time, rain } }: { item: TempItemsProps }) => {
        return (
            <ItemTempContainer >
                <TextTime>{time}</TextTime>
                <TextTime>{rain === '' ? "🌧️" : "☁️"}</TextTime>
                <TextTemp>{temp}</TextTemp>
            </ItemTempContainer>
        )
    }

    return (
        <ForecastHourlyContainer>
            {renderTabButtons}
            <FlatList
                style={{ marginTop: 15 }}
                data={itemSelected === 'today' ? tempValuesToday : tempValuesTomorrow}
                renderItem={(item) => renderItem(item)}
                ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.time}
            />
        </ForecastHourlyContainer>
    )
}

type TabButtonProps = TouchableOpacityProps & {
    title: string,
    selected: boolean
}
const TabButton: React.FC<TabButtonProps> = ({ title, selected, ...rest }) => {

    return (
        <ButtonContainer {...rest}>
            <ButtonText>
                {title}
            </ButtonText>
            {selected && <ButtonIndicator />}
        </ButtonContainer>
    )
}

const tabButtons: Array<{ id: 'today' | 'tomorrow', title: string }> = [
    { id: 'today', title: 'Hoje' },
    { id: 'tomorrow', title: 'Amanhã' }
]
type TempItemsProps = { time: string, temp: string, rain: string }
const tempValuesToday: TempItemsProps[] = [
    { time: '4h', temp: '15', rain: '' },
    { time: '5h', temp: '15', rain: '' },
    { time: '6h', temp: '15', rain: '' },
    { time: '7h', temp: '15', rain: '' },
    { time: '8h', temp: '15', rain: '' },
    { time: '9h', temp: '15', rain: '' },
    { time: '10h', temp: '15', rain: '' }
]

const tempValuesTomorrow: TempItemsProps[] = [
    { time: '4h', temp: '19', rain: '' },
    { time: '5h', temp: '19', rain: '' },
    { time: '6h', temp: '19', rain: '' },
    { time: '7h', temp: '19', rain: '' },
    { time: '8h', temp: '19', rain: '' },
    { time: '9h', temp: '19', rain: '' },
    { time: '10h', temp: '15', rain: '' }
]

export default ForecastHourly;