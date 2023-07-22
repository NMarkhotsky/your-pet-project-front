/* eslint-disable react/prop-types */
import { Icon } from "../Icon/Icon";
import { Modal, Div, Div1, ButtonClose, Div2, Div3, Div4, Image, Span, Div5, Title, Table, Tbody, Tr, Td, Td1, Link, Text, Div6, Button, Span1, Link1, Span2 } from "./PetCardDetailed.styled";

export const PetCardDetailed = (props) => {

    return (
        <>
            {props.pets.map(pet => (
                <Modal key={pet.name}>
                    <Div>
                        <Div1>
                            <ButtonClose>
                                <Icon
                                    iconName={'icon-cross'}
                                    width={'24px'}
                                    height={'24px'}
                                    stroke={'#54ADFF'}
                                    fill={'#54ADFF'}
                                />
                            </ButtonClose>
                            <Div2>
                                <Div3>
                                    <Div4>
                                        <Image src={pet.url} alt="pet" loading="lazy"></Image>
                                        <Span>{pet.status}</Span>
                                    </Div4>
                                    <Div5>
                                        <Title>Cute dog looking for a home</Title>
                                        <Table>
                                            <Tbody>
                                                <Tr>
                                                    <Td>Name: </Td>
                                                    <Td1>{pet.name}</Td1>
                                                </Tr>
                                                <Tr>
                                                    <Td>Birthday: </Td>
                                                    <Td1>{pet.birthday}</Td1>
                                                </Tr>
                                                <Tr>
                                                    <Td>Breed: </Td>
                                                    <Td1>{pet.breed}</Td1>
                                                </Tr>
                                                <Tr>
                                                    <Td>Place: </Td>
                                                    <Td1>{pet.place}</Td1>
                                                </Tr>
                                                <Tr>
                                                    <Td>The sex: </Td>
                                                    <Td1>{pet.sex}</Td1>
                                                </Tr>
                                                <Tr>
                                                    <Td>Email: </Td>
                                                    <Td1>
                                                        <Link>{pet.email}</Link>
                                                    </Td1>
                                                </Tr>
                                                <Tr>
                                                    <Td>Phone: </Td>
                                                    <Td1>
                                                        <Link>{pet.phone}</Link>
                                                    </Td1>
                                                </Tr>
                                            </Tbody>
                                        </Table>
                                    </Div5>
                                </Div3>
                                <Text>{pet.comments}</Text>
                                <Div6>
                                    <Button>
                                        <Span1>Add to</Span1>
                                        <Icon
                                            iconName={'icon-heart'}
                                            width={'24px'}
                                            height={'24px'}
                                            stroke={'#fff'}
                                            fill={'#fff'}
                                        />
                                    </Button>
                                    <Link1>
                                        <Span2>Contact</Span2>
                                    </Link1>
                                </Div6>
                            </Div2>
                        </Div1>
                    </Div>
                </Modal>
            ))}
        </>
    )
}
