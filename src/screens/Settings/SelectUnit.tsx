import React, { useMemo } from 'react';
import { ItemUnitSymbol, ItemUnitTitle, SectionTitle, UnitsButtonContainer, UnitsContainer, UnitsItem } from './styles';

import { TickSquare } from 'iconsax-react-native';
import { useSettings } from '../../hooks/settings';

const SelectUnit: React.FC = () => {

    const {unitsType, changeUnitsType} = useSettings()

    function handleChangeUnit(unit: string) {
        changeUnitsType(unit)
    }

    const renderUnits = useMemo(() => {
        return <UnitsButtonContainer>
            {units.map(({ id, name, symbol }) => {
                return (
                    <UnitsItem
                        key={id}
                        onPress={() => handleChangeUnit(id)}
                    >
                        <ItemUnitSymbol>
                            {symbol}
                        </ItemUnitSymbol>
                        <ItemUnitTitle>
                            {name}
                        </ItemUnitTitle>
                        {
                            id === unitsType &&
                            <TickSquare color={'#8D8D93'} variant="Bold" size={34} style={{position: 'absolute', top:-7, right:-7}} />
                        }
                    </UnitsItem>
                )
            })}

        </UnitsButtonContainer>


    }, [unitsType])

    return (
        <UnitsContainer>
            <SectionTitle>
                Escala {unitsType}
            </SectionTitle>
            {renderUnits}
        </UnitsContainer>
    );
}

const units = [
    { id: 'metric', name: 'Celcius', symbol: 'Cº', },
    { id: 'imperial', name: 'Fahrenheit', symbol: 'Fº', },
    { id: 'standard', name: 'Kelvin', symbol: 'Kº', }
]

export default SelectUnit;