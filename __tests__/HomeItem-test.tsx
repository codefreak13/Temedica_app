import React from 'react';
import { render } from '@testing-library/react-native';
import HomeItem from '../src/view/homeScreen/HomeItem';

it('HomeItem component renders correctly', () => {
    const snap = render(
        <HomeItem  name={'Panadol'} diseases={["malaria, 'fever"]} description={'relieves headache'} released={'10/10/1995'} />
    ).toJSON();
    expect(snap).toMatchSnapshot();
});