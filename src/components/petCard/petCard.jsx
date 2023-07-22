/* eslint-disable react/prop-types */
// import React from "react";
import PropTypes from 'prop-types';
import { Icon } from "../Icon/Icon";
import { List, Item, Div, Image, Div1, Text, Div2, Button, List1, Item1, Span, Div3, Text1, Button1 } from "./PetCard.styled";

export const PetCard = (props) => {
    
    return (
        <List>
        {props.pets.map(pet => (
            <Item key={pet.name}>
                <Div>
                    <Image src={pet.url} alt="pet" loading="lazy"></Image>
                    <Div1>
                        <Text>{pet.status}</Text>
                        <Div2>
                            <Button aria-label="add to favorites">
                                <Icon
                                    iconName={'icon-heart'}
                                    width={'24px'}
                                    height={'24px'}
                                    stroke={'#54ADFF'}
                                    fill={'#54ADFF'}
                                />
                            </Button>
                        </Div2>
                    </Div1>
                    <List1>
                        <Item1>
                            <Icon
                                iconName={'icon-location'}
                                width={'24px'}
                                height={'24px'}
                                stroke={'#54ADFF'}
                                fill={'#54ADFF'}
                            />
                            <Span>{pet.place}</Span>
                        </Item1>
                        <Item1>
                            <Icon
                                iconName={'icon-clock'}
                                width={'24px'}
                                height={'24px'}
                                stroke={'#54ADFF'}
                                fill={'#54ADFF'}
                            />
                            <Span>{pet.birthday}</Span>
                        </Item1>
                        <Item1>
                            <Icon
                                iconName={'icon-female'}
                                width={'24px'}
                                height={'24px'}
                                stroke={'#54ADFF'}
                                fill={'#54ADFF'}
                            />
                            <Span>{pet.sex}</Span>
                        </Item1>
                    </List1>
                </Div>
                <Div3>
                    <Text1>{pet.name}</Text1>
                    <Button1>
                        <span>Learn more</span>
                        <Icon
                            iconName={'icon-pawprint'}
                            width={'24px'}
                            height={'24px'}
                            stroke={'#54ADFF'}
                            fill={'#54ADFF'}
                        />
                    </Button1>
                </Div3>
            </Item>
        ))}
        </List>
    )
}

PetCard.propTypes = {
    props: PropTypes.object
};
