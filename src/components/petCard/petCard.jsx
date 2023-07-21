/* eslint-disable react/prop-types */
// import React from "react";
import PropTypes from 'prop-types';
import { Icon } from "../Icon/Icon";
import { PetInfo, PetDiv, PetImg, PetDiv1, PetP, PetDiv2, PetButton, PetUl, PetLi1, PetSpan, PetDiv3, PetP1, PetButton1 } from "./petCard.styled";

export const PetCard = (props) => {
    
    return (
        <>
        {props.pets.map(pet => (
            <PetInfo key={pet.name}>
                <PetDiv>
                    <PetImg src={pet.url} alt="pet" loading="lazy"></PetImg>
                    <PetDiv1>
                        <PetP>{pet.status}</PetP>
                        <PetDiv2>
                            <PetButton aria-label="add to favorites">
                                <Icon
                                    iconName={'icon-heart'}
                                    width={'24px'}
                                    height={'24px'}
                                    stroke={'#54ADFF'}
                                    fill={'#54ADFF'}
                                />
                            </PetButton>
                        </PetDiv2>
                    </PetDiv1>
                    <PetUl>
                        <PetLi1>
                            <Icon
                                iconName={'icon-location'}
                                width={'24px'}
                                height={'24px'}
                                stroke={'#54ADFF'}
                                fill={'#54ADFF'}
                            />
                            <PetSpan>{pet.place}</PetSpan>
                        </PetLi1>
                        <PetLi1>
                            <Icon
                                iconName={'icon-clock'}
                                width={'24px'}
                                height={'24px'}
                                stroke={'#54ADFF'}
                                fill={'#54ADFF'}
                            />
                            <PetSpan>{pet.birthday}</PetSpan>
                        </PetLi1>
                        <PetLi1>
                            <Icon
                                iconName={'icon-female'}
                                width={'24px'}
                                height={'24px'}
                                stroke={'#54ADFF'}
                                fill={'#54ADFF'}
                            />
                            <PetSpan>{pet.sex}</PetSpan>
                        </PetLi1>
                    </PetUl>
                </PetDiv>
                <PetDiv3>
                    <PetP1>{pet.name}</PetP1>
                    <PetButton1>
                        <span>Learn more</span>
                        <Icon
                            iconName={'icon-pawprint'}
                            width={'24px'}
                            height={'24px'}
                            stroke={'#54ADFF'}
                            fill={'#54ADFF'}
                        />
                    </PetButton1>
                </PetDiv3>
            </PetInfo>
        ))}
        </>
    )
}

PetCard.propTypes = {
    props: PropTypes.object
};
