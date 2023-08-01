/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import {
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
  ButtonAddFavorite,
  ButtonTextAdd,
  ButtonLinkContact,
} from './NoticeCardDetail.styled';
import { updateNotice, getNoticeById } from '../../services/NoticesApi';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { errorMessage } from '../../utils/messages';
import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';
import { t } from 'i18next';

export const NoticeCardDetail = ({ item, toggleModal }) => {
  const [card, setCard] = useState({});
  const { user } = useAuth();

  let formattedBirthday;

  const handleCardById = async id => {
    const response = await getNoticeById(id);
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

  const handleAddInFavorite = async () => {
    if (user.name === null && user.email === null) {
      errorMessage('Sorry, but you are not authorized. Try it!');
    }
    const response = await updateNotice(item.id);

    setCard(response.data.notice);
  };

  if (card.birthday) {
    const birthday = card.birthday;

    formattedBirthday = birthday.split('-').reverse().join('.');
  }

  return (
    <ModalApproveAction onClose={toggleModal}>
      <ModalCard>
        <ModalCardInfo>
          <ModalCardImage>
            <Image src={card.photoURL} alt="pet" loading="lazy"></Image>
            <SpanStatus>{card.noticeType}</SpanStatus>
          </ModalCardImage>
          <ModalCardText>
            <Title>{card.title}</Title>
            <Table>
              <Tbody>
                <Tr>
                  <TdName>{t('other_name')}: </TdName>
                  <TdValue>{card.name}</TdValue>
                </Tr>
                <Tr>
                  <TdName>{t('other_birthday')}: </TdName>
                  <TdValue>{formattedBirthday}</TdValue>
                </Tr>
                <Tr>
                  <TdName>{t('other_type')}: </TdName>
                  <TdValue>{card.petType}</TdValue>
                </Tr>
                <Tr>
                  <TdName>{t('other_place')}: </TdName>
                  <TdValue>{card.location}</TdValue>
                </Tr>
                <Tr>
                  <TdName>{t('notices_cardInfoDetails_theSex')}: </TdName>
                  <TdValue>{item.sex}</TdValue>
                </Tr>
                <Tr>
                  <TdName>{t('other_mail')}: </TdName>
                  <TdValue>
                    <Link href={`mailto:${card.ownerEmail}`}>
                      {card.ownerEmail}
                    </Link>
                  </TdValue>
                </Tr>
                <Tr>
                  <TdName>{t('other_phone')}: </TdName>
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
          <Comments>{t('other_comments')}:</Comments> {card.comments}
        </Text>
        <ButtonsWrapper>
          <ButtonAddFavorite
            style={{
              color: !card.isFavorite ? '#FEF9F9' : '#54ADFF',
              backgroundColor: card.isFavorite ? '#FEF9F9' : '#54ADFF',
              borderColor: card.isFavorite && '#54ADFF',
            }}
          >
            <ButtonTextAdd onClick={handleAddInFavorite}>
              {t('notices_cardInfoDetails_addToBtn')}
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
          </ButtonAddFavorite>
          {card.ownerPhone === undefined ? (
            <ButtonLinkContact href={`mailto:${card.ownerEmail}`}>
              {t('other_contact')}
            </ButtonLinkContact>
          ) : (
            <ButtonLinkContact href={`tel:${card.ownerPhone}`}>
              {t('other_contact')}
            </ButtonLinkContact>
          )}
        </ButtonsWrapper>
      </ModalCard>
    </ModalApproveAction>
  );
};

NoticeCardDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  toggleModal: PropTypes.func,
};
