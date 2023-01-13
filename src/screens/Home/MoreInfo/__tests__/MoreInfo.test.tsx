import 'jest-styled-components'
import React from 'react'

import { render } from "test-utils"
import { Item } from '../MoreInfo'

it('should render', () => {
    const tree = render(
        <Item
            icon="💨"
            value="10"
            title="ventos"
        />
    );
    expect(tree);
})