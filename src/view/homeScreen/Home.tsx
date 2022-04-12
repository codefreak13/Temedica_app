import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import debounce from 'lodash.debounce';
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import dataSet from '../../data/dataset.json'
import ListItem, { Text, View } from './HomeItem';
import { colors } from '../../colors'
import logo from '../../assets/images/logo.png'

const Touchable = styled.TouchableOpacity``

const Wrapper = styled(View)`
flex:1;
margin-horizontal: 15px;
margin-top: 70px
`
const InputWrapper = styled(View)`
flex-direction: row;
align-items: center;
justify-content: space-between;
border-color: ${colors.BLACK};
border-width: 0.5px;
border-radius: 10px;
padding-horizontal: 5px
`
const Input = styled.TextInput`
padding-horizontal:10px;
font-size: 15px;
color: ${colors.BLACK};
flex:1;
min-height: 45px
`
const Logo = styled.Image`
width: 70px;
height:70px;
align-self: center;
`
const ShowText = styled(Text)`
margin-vertical: 10px
`
const EmptyText = styled(Text)`
margin-vertical: 200px;
align-self: center;
font-size: 17px
`
const ListWrapper = styled(View)`
flex:1;
`
type HomeProps = {
    id: string,
    name: string,
    diseases: Array<string>,
    description: string,
    released: string
}

const Home = () => {
    const [value, setvalue] = useState<string>('');
    const [data, setdata] = useState<HomeProps[]>([]);
    const [description, setDescription] = useState<number[]>([1]);

    const fetchData = async (searchText: string) => {
        setDescription([1])
        const matcher = new RegExp(searchText, 'ig');

        const selectedData = dataSet?.drugs?.filter((item) => {
            const { name, diseases } = item;

            return (matcher.test(name) && searchText !== '') || diseases.filter((disease) => matcher.test(disease) && searchText !== '').length
        })

        setDescription([])
        setdata(selectedData)
    };

    const debouncedSave = useCallback(
        debounce((nextValue: string) => fetchData(nextValue), 1000),
        []
    );

    const onChangeText = (text: string) => {
        setvalue(text);
        debouncedSave(text);
    };

    const clearText = () => {
        setvalue('')
        setdata([])
        setDescription([1])
    }

    return (
        <Wrapper>
            <Logo source={logo} testID="logo" />
            <ShowText testID="search">Search</ShowText>
            <InputWrapper>
                <Input
                    placeholder='You can search by drug name or by disease'
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    testID="inputText" 
                />
                {!!value && <Touchable onPress={() => { clearText() }}>
                    <Ionicons name="close" size={20} />
                </Touchable>}
            </InputWrapper>

            <ListWrapper>
                {data.length > 0 && (
                    <ShowText>Showing {data.length} result(s)</ShowText>)}
                <FlatList
                    data={data}
                    keyExtractor={(item: HomeProps) => item.id}
                    renderItem={({ item }) => <ListItem {...item} />}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<EmptyText testID="emptyText">{description.length === 0 ? 'No Matching Drugs' : 'Please Input Search Item'}</EmptyText>}
                    testID="listId"
                />
            </ListWrapper>
        </Wrapper>
    );
};

export default Home;
