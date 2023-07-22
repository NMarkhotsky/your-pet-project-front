/* eslint-disable react/prop-types */
import { Icon } from "../Icon/Icon";
import { Modal, ModalLayout, ModalCardWrapper, ButtonClose, ModalCard, ModalCardInfo, ModalCardImage, Image, SpanStatus, ModalCardText, Title, Table, Tbody, Tr, TdName, TdValue, Link, Text, ButtonsWrapper, Button, ButtonTextAdd, ButtonLinkContact, ButtonTextContact } from "./PetCardDetail.styled";

export const PetCardDetail = ({ pet }) => {

    return (
        <>
            <Modal>
                <ModalLayout>
                    <ModalCardWrapper>
                        <ButtonClose>
                            <Icon
                                iconName={'icon-cross'}
                                width={'24px'}
                                height={'24px'}
                                stroke={'#54ADFF'}
                                fill={'#54ADFF'}
                            />
                        </ButtonClose>
                        <ModalCard>
                            <ModalCardInfo>
                                <ModalCardImage>
                                    <Image src={pet.url} alt="pet" loading="lazy"></Image>
                                    <SpanStatus>{pet.status}</SpanStatus>
                                </ModalCardImage>
                                <ModalCardText>
                                    <Title>Cute dog looking for a home</Title>
                                    <Table>
                                        <Tbody>
                                            <Tr>
                                                <TdName>Name: </TdName>
                                                <TdValue>{pet.name}</TdValue>
                                            </Tr>
                                            <Tr>
                                                <TdName>Birthday: </TdName>
                                                <TdValue>{pet.birthday}</TdValue>
                                            </Tr>
                                            <Tr>
                                                <TdName>Breed: </TdName>
                                                <TdValue>{pet.breed}</TdValue>
                                            </Tr>
                                            <Tr>
                                                <TdName>Place: </TdName>
                                                <TdValue>{pet.place}</TdValue>
                                            </Tr>
                                            <Tr>
                                                <TdName>The sex: </TdName>
                                                <TdValue>{pet.sex}</TdValue>
                                            </Tr>
                                            <Tr>
                                                <TdName>Email: </TdName>
                                                <TdValue>
                                                    <Link href={"mailto:" + pet.email}>{pet.email}</Link>
                                                </TdValue>
                                            </Tr>
                                            <Tr>
                                                <TdName>Phone: </TdName>
                                                <TdValue>
                                                    <Link href={"tel:" + pet.phone}>{pet.phone}</Link>
                                                </TdValue>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </ModalCardText>
                            </ModalCardInfo>
                            <Text>{pet.comments}</Text>
                            <ButtonsWrapper>
                                <Button>
                                    <ButtonTextAdd>Add to</ButtonTextAdd>
                                    <Icon
                                        iconName={'icon-heart'}
                                        width={'24px'}
                                        height={'24px'}
                                        stroke={'#fff'}
                                        fill={'#fff'}
                                    />
                                </Button>
                                <ButtonLinkContact>
                                    <ButtonTextContact>Contact</ButtonTextContact>
                                </ButtonLinkContact>
                            </ButtonsWrapper>
                        </ModalCard>
                    </ModalCardWrapper>
                </ModalLayout>
            </Modal>
        </>
    )
}
