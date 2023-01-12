import React, { useMemo, useState } from 'react';
import { ItemUnitSymbol, ItemUnitTitle, SectionTitle, UnitsButtonContainer, UnitsContainer, UnitsItem } from './styles';

import { TickSquare } from 'iconsax-react-native';

const SelectUnit: React.FC = () => {

    const [unit, setUnit] = useState('celcius')

    function handleChangeUnit(unit: string) {
        setUnit(unit)
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
                            id === unit &&
                            <TickSquare color={'#8D8D93'} variant="Bold" size={34} style={{position: 'absolute', top:-7, right:-7}} />
                        }
                    </UnitsItem>
                )
            })}

        </UnitsButtonContainer>


    }, [unit])

    return (
        <UnitsContainer>
            <SectionTitle>
                Escala
            </SectionTitle>
            {renderUnits}
        </UnitsContainer>
    );
}

const units = [
    { id: 'celcius', name: 'Celcius', symbol: 'Cº', },
    { id: 'fahrenheit', name: 'Fahrenheit', symbol: 'Fº', },
    { id: 'kelvin', name: 'Kelvin', symbol: 'Kº', }
]

export default SelectUnit;