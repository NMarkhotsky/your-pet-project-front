/* eslint-disable react/prop-types */
// import React from "react";
import PropTypes from 'prop-types';
import { Icon } from "../Icon/Icon";
import { List, Item, ContainerPetInfo, Image, ContainerPetStatus, TextStatus, ContainerButton, Button, ListPetInfo, ItemPetInfo, SpanPetText, ContainerButtonLearnMore, TextPetName, ButtonLearnMore } from "./PetCard.styled";

export const PetCard = (props) => {
    
    return (
        <List>
        {props.pets.map(pet => (
            <Item key={pet.name}>
                <ContainerPetInfo>
                    <Image src={pet.url} alt="pet" loading="lazy"></Image>
                    <ContainerPetStatus>
                        <TextStatus>{pet.status}</TextStatus>
                        <ContainerButton>
                            <Button aria-label="add to favorites">
                                <Icon
                                    iconName={'icon-heart'}
                                    width={'24px'}
                                    height={'24px'}
                                    stroke={'#54ADFF'}
                                    fill={'#54ADFF'}
                                />
                            </Button>
                        </ContainerButton>
                    </ContainerPetStatus>
                    <ListPetInfo>
                        <ItemPetInfo>
                            <Icon
                                iconName={'icon-location'}
                                width={'24px'}
                                height={'24px'}
                                stroke={'#54ADFF'}
                                fill={'#54ADFF'}
                            />
                            <SpanPetText>{pet.place}</SpanPetText>
                        </ItemPetInfo>
                        <ItemPetInfo>
                            <Icon
                                iconName={'icon-clock'}
                                width={'24px'}
                                height={'24px'}
                                stroke={'#54ADFF'}
                                fill={'#54ADFF'}
                            />
                            <SpanPetText>{pet.birthday}</SpanPetText>
                        </ItemPetInfo>
                        <ItemPetInfo>
                            <Icon
                                iconName={'icon-female'}
                                width={'24px'}
                                height={'24px'}
                                stroke={'#54ADFF'}
                                fill={'#54ADFF'}
                            />
                            <SpanPetText>{pet.sex}</SpanPetText>
                        </ItemPetInfo>
                    </ListPetInfo>
                </ContainerPetInfo>
                <ContainerButtonLearnMore>
                    <TextPetName>{pet.name}</TextPetName>
                    <ButtonLearnMore>
                        <span>Learn more</span>
                        <Icon
                            iconName={'icon-pawprint'}
                            width={'24px'}
                            height={'24px'}
                            stroke={'#54ADFF'}
                            fill={'#54ADFF'}
                        />
                    </ButtonLearnMore>
                </ContainerButtonLearnMore>
            </Item>
        ))}
        </List>
    )
}

PetCard.propTypes = {
    props: PropTypes.object
};
