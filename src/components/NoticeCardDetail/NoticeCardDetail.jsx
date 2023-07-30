/* eslint-disable react/prop-types */
import { Icon } from '../Icon/Icon';
import {
  Modal,
  ModalLayout,
  ModalCardWrapper,
  ButtonClose,
  ModalCard,
  ModalCardInfo,
  ModalCardImage,
  Image,
  SpanStatus,
  ModalCardText,
  Title,
  Table,
  Tbody,
  Tr,
  TdName,
  TdValue,
  Link,
  Text,
  Comments,
  ButtonsWrapper,
  Button,
  ButtonTextAdd,
  ButtonLinkContact,
  ButtonTextContact,
} from './NoticeCardDetail.styled';
import { updateNotice, getNoticeById } from '../../services/NoticesApi';
import { useEffect, useState } from 'react';

export const NoticeCardDetail = ({ item }) => {

  const [card, setCard] = useState({});

  let formattedBirthday;

  const handleCardById = async id => {
    const response = await getNoticeById(id);
    console.log(response.data.notice);
    setCard(response.data.notice);
  };

  useEffect(() => {
    handleCardById(item.id);
  }, [item.id]);

  useEffect(() => {
    if (Object.keys(card).length === 0) {
      return;
    }
  });

  const handleAddInFavorite = () => {
    console.log('Click');
    setCard(prevState => ({ ...prevState, isFavorite: !card.isFavorite }));

    updateNotice(item.id);
  };

  console.log('card ===>', card);

  if (card.birthday) {
    const birthday = card.birthday;

    formattedBirthday = birthday.split('-').reverse().join('.');
  }

  console.log('isFavorite ==>', card.isFavorite);

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
                  <Image src={card.photoURL} alt="pet" loading="lazy"></Image>
                  <SpanStatus>{card.noticeType}</SpanStatus>
                </ModalCardImage>
                <ModalCardText>
                  <Title>Cute dog looking for a home</Title>
                  <Table>
                    <Tbody>
                      <Tr>
                        <TdName>Name: </TdName>
                        <TdValue>{card.name}</TdValue>
                      </Tr>
                      <Tr>
                        <TdName>Birthday: </TdName>
                        <TdValue>{formattedBirthday}</TdValue>
                      </Tr>
                      <Tr>
                        <TdName>Type: </TdName>
                        <TdValue>{card.petType}</TdValue>
                      </Tr>
                      <Tr>
                        <TdName>Place: </TdName>
                        <TdValue>{card.location}</TdValue>
                      </Tr>
                      <Tr>
                        <TdName>The sex: </TdName>
                        <TdValue>{item.sex}</TdValue>
                      </Tr>
                      <Tr>
                        <TdName>Email: </TdName>
                        <TdValue>
                          <Link href={`mailto:${card.ownerEmail}`}>
                            {card.ownerEmail}
                          </Link>
                        </TdValue>
                      </Tr>
                      <Tr>
                        <TdName>Phone: </TdName>
                        <TdValue>
                          <Link href={`tel:${card.ownerPhone}`}>
                            {card.ownerPhone}
                          </Link>
                        </TdValue>
                      </Tr>
                    </Tbody>
                  </Table>
                </ModalCardText>
              </ModalCardInfo>
              <Text>
                <Comments>Comments:</Comments> {card.comments}
              </Text>
              <ButtonsWrapper>
                <Button
                  style={{
                    color: !card.isFavorite ? '#FEF9F9' : '#54ADFF',
                    backgroundColor: card.isFavorite ? '#FEF9F9' : '#54ADFF',
                    borderColor: !card.isFavorite ? 'transparent' : '#54ADFF'
                  }}
                >
                  <ButtonTextAdd onClick={handleAddInFavorite}>
                    Add to
                  </ButtonTextAdd>
                  {!card.isFavorite ? (
                    <Icon
                      iconName={'icon-heart'}
                      width={'24px'}
                      height={'24px'}
                      stroke={'#fff'}
                    />
                  ) : (
                    <Icon
                      iconName={'icon-heart-full'}
                      width={'24px'}
                      height={'24px'}
                      fill={'#54ADFF'}
                    />
                  )}
                </Button>
                <ButtonLinkContact>
                  <ButtonTextContact href={`tel:${card.ownerPhone}`}>
                    Contact
                  </ButtonTextContact>
                </ButtonLinkContact>
              </ButtonsWrapper>
            </ModalCard>
          </ModalCardWrapper>
        </ModalLayout>
      </Modal>
    </>
  );
};
