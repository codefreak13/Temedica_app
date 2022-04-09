import 'react-native'
import React from 'react';
import Home from '../src/view/homeScreen/Home';
import { render } from '@testing-library/react-native';

describe('The home component renders correctly', () =>
it('and placeholder text is correct', () => {
    const { getByPlaceholderText, toJSON } = render(<Home/>);

    const placeholderText = getByPlaceholderText('You can search by drug name or by disease');

    expect(placeholderText).toBeTruthy()

    expect(toJSON()).toMatchSnapshot()
})
)