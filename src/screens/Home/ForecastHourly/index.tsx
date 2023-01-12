import { format, fromUnixTime, isTomorrow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useMemo, useState } from 'react';
import { FlatList, TouchableOpacityProps, View } from 'react-native';
import { useWeather } from '../../../hooks/weather';
import { WeatherProps } from '../../../services/weather/types';
import { ButtonContainer, ButtonIndicator, ButtonText, ForecastHourlyButtonsContainer, ForecastHourlyContainer, Icon, ItemTempContainer, TextTemp, TextTime } from './styles';

const ForecastHourly: React.FC = () => {

    const today = format(new Date(), `dd EEEE`, {
        locale: ptBR,
    })
    const { weather } = useWeather()
    const [itemSelected, setItemSelected] = useState(today)

    function handleChangeItemSelected(itemId: string) {
        setItemSelected(itemId)
    }
    const days = weather?.hourly
        .map((hw) => {
            return isTomorrow(fromUnixTime(hw.dt)) ? 'amanhã' : format(fromUnixTime(hw.dt), `dd EEEE`, {
                locale: ptBR,
            })
        }).filter((item, pos, self) => {
            return self.indexOf(item) == pos;
        })

    const renderTabButtons = useMemo(() => {
        return (
            <ForecastHourlyButtonsContainer
                horizontal
                showsHorizontalScrollIndicator={false}>
                {days?.map((day, i) =>
                    <TabButton
                        key={i}
                        title={day === today ? 'hoje' : day.replace(/[0-9]/g, "").replace(' ', '')}
                        selected={itemSelected === day}
                        onPress={() => handleChangeItemSelected(day)}
                    />
                )}
            </ForecastHourlyButtonsContainer>
        )
    }, [itemSelected])

    const items = useMemo(() => {
        return weather?.hourly
            .filter(hw => {
                const dayName = isTomorrow(fromUnixTime(hw.dt)) ? 'amanhã' : format(fromUnixTime(hw.dt), `dd EEEE`, {
                    locale: ptBR,
                })
                return dayName === itemSelected
            })

    }, [itemSelected])

    const renderItem = ({ item: { temp, dt, weather } }: { item: WeatherProps }) => {
        return (
            <ItemTempContainer >
                <TextTime>
                    {format(fromUnixTime(dt), `HH'h'`, {
                        locale: ptBR,
                    })}
                </TextTime>
                <Icon source={{ uri: `https://openweathermap.org/img/wn/${weather[0].icon}.png` }} />
                <TextTemp>{temp.toFixed(0)}º</TextTemp>
            </ItemTempContainer>
        )
    }


    return (
        <ForecastHourlyContainer>
            {renderTabButtons}
            <FlatList
                style={{ marginTop: 15 }}
                data={items}
                renderItem={(item) => renderItem(item)}
                ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.dt.toString()}
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