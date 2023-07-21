/* eslint-disable react/prop-types */
import { Icon } from "../Icon/Icon";
import { PetFullDivMain, PetFullDiv01, PetFullDiv02, PetFullButtonClose, PetFullDiv, PetFullDiv1, PetFullDiv2, PetFullImage, PetFullSpan, PetFullDiv3, PetFullH4, PetFullTable, PetFullTbody, PetFullTr, PetFullTd, PetFullTd1, PetFullA, PetFullP, PetFullDiv4, PetFullButton, PetFullSpan1, PetFullA1, PetFullSpan2 } from "./petCardFull.styled";

export const PetCardFull = (props) => {

    return (
        <>
            {props.pets.map(pet => (
                <PetFullDivMain key={pet.name}>
                    <PetFullDiv01>
                        <PetFullDiv02>
                            <PetFullButtonClose>
                                <Icon
                                    iconName={'icon-cross'}
                                    width={'24px'}
                                    height={'24px'}
                                    stroke={'#54ADFF'}
                                    fill={'#54ADFF'}
                                />
                            </PetFullButtonClose>
                            <PetFullDiv>
                                <PetFullDiv1>
                                    <PetFullDiv2>
                                        <PetFullImage src={pet.url} alt="pet" loading="lazy"></PetFullImage>
                                        <PetFullSpan>{pet.status}</PetFullSpan>
                                    </PetFullDiv2>
                                    <PetFullDiv3>
                                        <PetFullH4>Cute dog looking for a home</PetFullH4>
                                        <PetFullTable>
                                            <PetFullTbody>
                                                <PetFullTr>
                                                    <PetFullTd>Name: </PetFullTd>
                                                    <PetFullTd1>{pet.name}</PetFullTd1>
                                                </PetFullTr>
                                                <PetFullTr>
                                                    <PetFullTd>Birthday: </PetFullTd>
                                                    <PetFullTd1>{pet.birthday}</PetFullTd1>
                                                </PetFullTr>
                                                <PetFullTr>
                                                    <PetFullTd>Breed: </PetFullTd>
                                                    <PetFullTd1>{pet.breed}</PetFullTd1>
                                                </PetFullTr>
                                                <PetFullTr>
                                                    <PetFullTd>Place: </PetFullTd>
                                                    <PetFullTd1>{pet.place}</PetFullTd1>
                                                </PetFullTr>
                                                <PetFullTr>
                                                    <PetFullTd>The sex: </PetFullTd>
                                                    <PetFullTd1>{pet.sex}</PetFullTd1>
                                                </PetFullTr>
                                                <PetFullTr>
                                                    <PetFullTd>Email: </PetFullTd>
                                                    <PetFullTd1>
                                                        <PetFullA>{pet.email}</PetFullA>
                                                    </PetFullTd1>
                                                </PetFullTr>
                                                <PetFullTr>
                                                    <PetFullTd>Phone: </PetFullTd>
                                                    <PetFullTd1>
                                                        <PetFullA>{pet.phone}</PetFullA>
                                                    </PetFullTd1>
                                                </PetFullTr>
                                            </PetFullTbody>
                                        </PetFullTable>
                                    </PetFullDiv3>
                                </PetFullDiv1>
                                <PetFullP>{pet.comments}</PetFullP>
                                <PetFullDiv4>
                                    <PetFullButton>
                                        <PetFullSpan1>Add to</PetFullSpan1>
                                        <Icon
                                            iconName={'icon-heart'}
                                            width={'24px'}
                                            height={'24px'}
                                            stroke={'#fff'}
                                            fill={'#fff'}
                                        />
                                    </PetFullButton>
                                    <PetFullA1>
                                        <PetFullSpan2>Contact</PetFullSpan2>
                                    </PetFullA1>
                                </PetFullDiv4>
                            </PetFullDiv>
                        </PetFullDiv02>
                    </PetFullDiv01>
                </PetFullDivMain>
            ))}
        </>
    )
}
