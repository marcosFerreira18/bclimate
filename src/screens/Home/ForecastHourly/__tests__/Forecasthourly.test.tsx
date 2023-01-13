import 'jest-styled-components';
import React from 'react';

import { render } from "test-utils";

import { View } from 'react-native';

it('should render', () => {
    const tree = render(
        <View />
    );
    expect(tree);
})