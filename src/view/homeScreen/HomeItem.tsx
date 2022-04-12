import React, { FC } from 'react';
import styled from 'styled-components/native'
import moment from 'moment'
import { colors } from './../../colors'

export const Text = styled.Text`
color: ${colors.BLACK};
`
export const View = styled.View``

const TinyText = styled(Text)`
font-size: 12px;
`
const BoldText = styled(Text)`
font-weight: bold
`
const Wrapper = styled(View)`
margin-vertical: 10px;
borderWidth: 1px;
borderColor: ${colors.GREY};
borderRadius: 3px;
padding: 10px;
`
const MainWrapper = styled(View)`
flex-direction: row;
justify-content: space-between;
width: 100%;
align-self: center
`
const ItemWrapper = styled(View)`
max-width: 80%
`
const DescriptionView = styled(View)`
background-color: ${colors.DARK_GREY};
padding: 10px;
margin-top:10px
`

 type ListItemProps = {
    name: string,
    diseases: Array<string>,
    description: string,
    released: string
}

const ListItem: FC<ListItemProps> = ({ name, diseases, description, released }) => {
    const formatDate = moment(released).format("DD/MM/YYYY")
    return (
        <Wrapper>
            <MainWrapper>
                <ItemWrapper>
                    <BoldText testID="itemName">{name}</BoldText>
                    <TinyText>
                        {diseases && diseases.join(', ')}
                    </TinyText>
                </ItemWrapper>
                <BoldText>{formatDate}</BoldText>
            </MainWrapper>
            <DescriptionView>
                <Text>{description}</Text>
            </DescriptionView>
        </Wrapper>
    )
};

export default ListItem;
